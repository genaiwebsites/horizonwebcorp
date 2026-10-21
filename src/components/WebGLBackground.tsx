'use client';
import React, { useEffect, useRef, useState } from 'react';

export type CanvasMode = 'odyssey' | 'matrix';

interface ModeOption {
  id: CanvasMode;
  num: number;
  label: string;
}

const MODES: ModeOption[] = [
  { id: 'odyssey', num: 0.0, label: 'Odyssey' },
  { id: 'matrix', num: 1.0, label: 'Matrix' },
];

interface WebGLBackgroundProps {
  showSwitcher?: boolean;
}

export const WebGLBackground = ({ showSwitcher = false }: WebGLBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeMode, setActiveMode] = useState<CanvasMode>('odyssey');
  const activeModeRef = useRef<CanvasMode>('odyssey');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('hwc_canvas_mode') as CanvasMode | null;
      if (saved && (saved === 'odyssey' || saved === 'matrix')) {
        setActiveMode(saved);
        activeModeRef.current = saved;
      }
    } catch {
      // Ignore in private mode
    }
  }, []);

  const handleModeChange = (mode: CanvasMode) => {
    setActiveMode(mode);
    activeModeRef.current = mode;
    try {
      localStorage.setItem('hwc_canvas_mode', mode);
    } catch {
      // Ignore
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    let animationFrameId: number;
    let isPaused = false;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (!canvas) return;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      canvas.width = Math.floor(w * dpr * 0.65);
      canvas.height = Math.floor(h * dpr * 0.65);
      if (gl) gl.viewport(0, 0, canvas.width, canvas.height);
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
      uniform float uMode;

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
          mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
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

      // =============================================================
      // MODE 0: ORIGINAL ODYSSEY (Synthwave Horizon, Auroras, Stars)
      // =============================================================
      vec3 renderOdyssey(vec2 uv, vec2 m, float t) {
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

        float warp = fbm(uv * 2.5 + vec2(t * 0.04, t * 0.02));
        vec2 warpedUV = uv + (warp - 0.5) * 0.12;
        float terrain = fbm(warpedUV * 3.0 + t * 0.05);

        float topoField = terrain * 6.0 + uv.y * 4.0 + t * 0.04;
        float contourDist = abs(fract(topoField) - 0.5);
        float contour = 1.0 - smoothstep(0.0, 0.02, contourDist);
        float topoFade = smoothstep(0.0, 0.5, uv.y) * smoothstep(1.0, 0.5, uv.y);
        col += vec3(0.12, 0.06, 0.35) * contour * topoFade * 0.25;

        float dist = length(uv - m);
        float glow = exp(-dist * dist * 8.0);
        col += vec3(0.15, 0.05, 0.45) * glow * 0.6;

        float neb = fbm(uv * 1.8 + vec2(t * 0.03, 0.0));
        col += vec3(0.12, 0.04, 0.38) * neb * neb * 0.3;

        float aurora1 = exp(-pow(abs(uv.y - 0.38 + sin(uv.x * 4.0 + t * 0.18) * 0.05 + sin(uv.x * 1.3 - t * 0.1) * 0.03), 2.0) * 120.0);
        float aurora2 = exp(-pow(abs(uv.y - 0.44 + sin(uv.x * 2.5 - t * 0.13) * 0.04), 2.0) * 150.0);
        col += vec3(0.0,  0.55, 0.70) * aurora1 * 0.55; 
        col += vec3(0.35, 0.0,  0.80) * aurora2 * 0.40; 

        float starLayer1 = star(uv * 55.0, 0.04, 0.18, t);
        float starLayer2 = star(uv * 90.0, 0.05, 0.12, t * 1.3);
        float starMask = smoothstep(0.55, 0.15, uv.y); 
        col += vec3(0.85, 0.90, 1.0) * (starLayer1 + starLayer2 * 0.6) * starMask * 0.9;

        return col;
      }

      // =============================================================
      // MODE 1: MATRIX (Spatial Architectural Wavefield)
      // =============================================================
      vec3 renderMatrix(vec2 uv, vec2 m, float t) {
        vec3 col = vec3(0.011, 0.013, 0.018);

        vec2 dMouse = uv - m;
        float mDist = length(dMouse);
        float ripple = exp(-mDist * 8.0) * sin(mDist * 22.0 - t * 3.5) * 0.022;
        vec2 p = uv + (dMouse / (mDist + 0.04)) * ripple;

        float waveA = sin(p.x * 5.0 + t * 0.35) * 0.10;
        float waveB = cos(p.y * 4.5 - t * 0.25) * 0.08;
        float waveC = sin((p.x * 0.8 + p.y * 1.2) * 4.0 + t * 0.45) * 0.05;
        float elev = waveA + waveB + waveC;

        float floorMask = smoothstep(0.82, 0.32, uv.y);
        float depth = max(0.06, uv.y - 0.28);
        float perspective = 1.0 / (depth * 9.0 + 0.4);

        vec2 gridCoord = vec2((p.x - 0.5) * perspective * 2.2, (p.y + elev * 0.3) * perspective * 2.8 + t * 0.06);
        vec2 fGrid = abs(fract(gridCoord - 0.5) - 0.5);
        float lineX = 1.0 - smoothstep(0.012, 0.035, fGrid.x);
        float lineY = 1.0 - smoothstep(0.012, 0.035, fGrid.y);
        float grid = clamp(lineX + lineY, 0.0, 1.0);

        float nodeDist = length(fGrid);
        float node = smoothstep(0.06, 0.01, nodeDist) * (0.6 + 0.4 * sin(t * 2.0 + floor(gridCoord.x) * 7.0));

        float isoField = (p.x * 2.5 + p.y * 1.8 + elev * 2.2) * 6.28318;
        float contour = 1.0 - smoothstep(0.0, 0.05, abs(fract(isoField / 3.14159) - 0.5) * 2.0);
        float contourMask = smoothstep(0.05, 0.5, uv.y) * smoothstep(0.95, 0.45, uv.y);

        col += vec3(0.22, 0.28, 0.38) * grid * floorMask * 0.35;
        col += vec3(0.75, 0.82, 0.95) * node * floorMask * 0.45;
        col += vec3(0.35, 0.42, 0.55) * contour * contourMask * 0.16;

        float cursorAura = exp(-mDist * mDist * 10.0) * 0.15;
        col += vec3(0.65, 0.75, 0.90) * cursorAura;

        float horizonBeam = exp(-pow(abs(uv.y - 0.42), 2.0) * 80.0) * 0.06;
        col += vec3(0.25, 0.32, 0.45) * horizonBeam;

        return col;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / res;
        vec2 m = mouse / res;
        uv.y = 1.0 - uv.y;

        vec3 col = vec3(0.01, 0.01, 0.02);

        if (uMode < 0.5) {
          col = renderOdyssey(uv, m, time);
        } else {
          col = renderMatrix(uv, m, time);
        }

        float vig = 1.0 - dot(uv - 0.5, (uv - 0.5) * vec2(1.2, 1.6));
        col *= clamp(vig, 0.0, 1.0);

        gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
      }
    `;

    function compileShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    if (!prog) return;
    const vShader = compileShader(gl.VERTEX_SHADER, vs);
    const fShader = compileShader(gl.FRAGMENT_SHADER, fs);
    if (vShader) gl.attachShader(prog, vShader);
    if (fShader) gl.attachShader(prog, fShader);
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
    const uModeLoc = gl.getUniformLocation(prog, 'uMode');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    let mouseFrame: number | null = null;
    const onMouseMove = (e: MouseEvent) => {
      if (mouseFrame) return;
      mouseFrame = requestAnimationFrame(() => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        mouseFrame = null;
      });
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onVisibility = () => {
      isPaused = document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibility);

    function render(t: number) {
      if (!isPaused && gl && canvas) {
        const modeNum = activeModeRef.current === 'matrix' ? 1.0 : 0.0;

        gl.uniform1f(uTime, t * 0.001);
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform2f(uMouse, mouseX, mouseY);
        if (uModeLoc) gl.uniform1f(uModeLoc, modeNum);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      animationFrameId = requestAnimationFrame(render);
    }
    render(0);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('visibilitychange', onVisibility);
      if (mouseFrame) cancelAnimationFrame(mouseFrame);
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

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full pointer-events-none z-0" 
      />

      {/* Switcher between Odyssey and Matrix (hidden until requested) */}
      {showSwitcher && (
        <aside 
          aria-label="Canvas Controller"
          className="fixed bottom-7 left-7 z-50 pointer-events-auto select-none"
        >
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#0A0A0E]/90 backdrop-blur-2xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.85)]">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 pl-2 pr-1 hidden sm:inline-block">
              Canvas:
            </span>
            {MODES.map((mode) => {
              const isActive = activeMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => handleModeChange(mode.id)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-white/40 ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-md shadow-white/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>
        </aside>
      )}
    </>
  );
};
