'use client';
import React, { useEffect, useRef } from 'react';

export const WebGLBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    let animationFrameId: number;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (!canvas) return;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      canvas.width = w * dpr * 0.6;
      canvas.height = h * dpr * 0.6;
      if(gl) gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener('resize', resize);

    const vs = `
      attribute vec2 pos;
      void main() { gl_Position = vec4(pos, 0.0, 1.0); }
    `;
    
    const fs = `
      precision highp float;
      uniform float time;
      uniform vec2 res;
      uniform vec2 mouse;

      float hash(vec2 p) {
        p = fract(p * vec2(234.34, 435.345));
        p += dot(p, p + 34.23);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i), hash(i + vec2(1,0)), f.x),
          mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x),
          f.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0; float a = 0.5;
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p *= 2.1; a *= 0.5;
        }
        return v;
      }

      float gridLine(float v, float period, float lineWidth, float aaWidth) {
        float f = fract(v / period) * period;
        float d = min(f, period - f);
        return 1.0 - smoothstep(lineWidth - aaWidth, lineWidth + aaWidth, d);
      }

      float star(vec2 uv, float density, float size, float t) {
        vec2 cell = floor(uv);
        vec2 local = fract(uv) - 0.5;
        float h = hash(cell);
        if (h > density) return 0.0;
        vec2 offset = vec2(hash(cell + 0.1), hash(cell + 0.2)) * 0.6 - 0.3;
        float d2 = dot(local - offset, local - offset);
        float brightness = 0.4 + 0.6 * hash(cell + 0.3);
        float twinkle = 0.7 + 0.3 * sin(t * (2.0 + 3.0 * hash(cell + 0.4)) + hash(cell + 0.5) * 6.28);
        return brightness * twinkle * exp(-d2 / (size * size));
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / res;
        vec2 m = mouse / res;
        uv.y = 1.0 - uv.y;
        
        vec3 col = vec3(0.01, 0.01, 0.02);

        float fadeY = smoothstep(0.72, 0.35, uv.y);
        if (fadeY > 0.001) {
          float horizon = 0.50;
          float depth = max(0.001, uv.y - horizon);
          float perspective = 1.0 / (depth * 14.0 + 0.3);

          float vCoord = (uv.x - 0.5) * perspective;
          float vLine = gridLine(vCoord, 0.08, 0.0015 * perspective, 0.002 * perspective);

          float hCoord = perspective;
          float hLine = gridLine(hCoord, 0.25, 0.008, 0.01);

          float g = clamp(vLine + hLine, 0.0, 1.0);
          col += vec3(0.25, 0.10, 0.70) * g * fadeY * 0.6;
        }

        float warp = fbm(uv * 2.5 + vec2(time * 0.04, time * 0.02));
        vec2 warpedUV = uv + (warp - 0.5) * 0.12;
        float terrain = fbm(warpedUV * 3.0 + time * 0.05);

        float topoField = terrain * 6.0 + uv.y * 4.0 + time * 0.04;
        float contourDist = abs(fract(topoField) - 0.5);
        float contour = 1.0 - smoothstep(0.0, 0.02, contourDist);
        float topoFade = smoothstep(0.0, 0.5, uv.y) * smoothstep(1.0, 0.5, uv.y);
        col += vec3(0.12, 0.06, 0.35) * contour * topoFade * 0.25;

        float dist = length(uv - m);
        float glow = exp(-dist * dist * 8.0);
        col += vec3(0.15, 0.05, 0.45) * glow * 0.6;

        float neb = fbm(uv * 1.8 + vec2(time * 0.03, 0.0));
        col += vec3(0.12, 0.04, 0.38) * neb * neb * 0.3;

        float aurora1 = exp(-pow(abs(uv.y - 0.38 + sin(uv.x * 4.0 + time * 0.18) * 0.05 + sin(uv.x * 1.3 - time * 0.1) * 0.03), 2.0) * 120.0);
        float aurora2 = exp(-pow(abs(uv.y - 0.44 + sin(uv.x * 2.5 - time * 0.13) * 0.04), 2.0) * 150.0);
        col += vec3(0.0,  0.55, 0.70) * aurora1 * 0.55; 
        col += vec3(0.35, 0.0,  0.80) * aurora2 * 0.40; 

        float starLayer1 = star(uv * 55.0, 0.04, 0.18, time);
        float starLayer2 = star(uv * 90.0, 0.05, 0.12, time * 1.3);
        float starMask = smoothstep(0.55, 0.15, uv.y); 
        col += vec3(0.85, 0.90, 1.0) * (starLayer1 + starLayer2 * 0.6) * starMask * 0.9;

        float vig = 1.0 - dot(uv - 0.5, (uv - 0.5) * vec2(1.2, 1.6));
        col *= clamp(vig, 0.0, 1.0);

        gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
      }
    `;

    function compileShader(type: number, src: string) {
      if(!gl) return null;
      const s = gl.createShader(type);
      if(!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    if(!prog) return;
    const vShader = compileShader(gl.VERTEX_SHADER, vs);
    const fShader = compileShader(gl.FRAGMENT_SHADER, fs);
    if(vShader) gl.attachShader(prog, vShader);
    if(fShader) gl.attachShader(prog, fShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(prog, 'pos');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'time');
    const uRes = gl.getUniformLocation(prog, 'res');
    const uMouse = gl.getUniformLocation(prog, 'mouse');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener('mousemove', onMouseMove);

    function render(t: number) {
      if(!gl || !canvas) return;
      gl.uniform1f(uTime, t * 0.001);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouseX, mouseY);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }
    render(0);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (gl) {
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.deleteBuffer(buf);
        if (prog) {
          gl.deleteProgram(prog);
        }
        if (vShader) gl.deleteShader(vShader);
        if (fShader) gl.deleteShader(fShader);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />;
};
