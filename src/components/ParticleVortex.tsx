'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ParticleVortex = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, particles: THREE.Points;
    let particleGeo: THREE.BufferGeometry;
    let particleMat: THREE.ShaderMaterial;

    const initThree = () => {
      if (!canvasRef.current) return;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: false });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));

      particleGeo = new THREE.BufferGeometry();
      const particleCount = 3000;
      const posArray = new Float32Array(particleCount * 3);
      const colorArray = new Float32Array(particleCount * 3);
      const sizeArray = new Float32Array(particleCount);
      const randomArray = new Float32Array(particleCount);

      const colorCore = new THREE.Color(0x38bdf8);    // Luminous cyan
      const colorMid = new THREE.Color(0x818cf8);     // Electric indigo
      const colorOuter = new THREE.Color(0xc084fc);   // Cosmic violet
      const colorSilver = new THREE.Color(0xe2e8f0);  // Starlight silver

      const numArms = 4;
      const maxRadius = 58.0;

      for (let i = 0; i < particleCount; i++) {
        const isAmbient = Math.random() < 0.28;
        let x: number, y: number, z: number;
        let particleColor: THREE.Color;

        if (isAmbient) {
          // Broadly dispersed ambient stardust across the entire 3D hero space
          x = (Math.random() - 0.5) * 80;
          y = (Math.random() - 0.5) * 50;
          z = (Math.random() - 0.5) * 45;
          particleColor = Math.random() < 0.4 ? colorSilver : (Math.random() < 0.5 ? colorMid : colorOuter);
        } else {
          // Broad, sweeping logarithmic spiral arms traversing the entire viewport
          const r = 4.0 + Math.pow(Math.random(), 0.92) * (maxRadius - 4.0);
          const armIndex = i % numArms;
          const armAngle = (armIndex * (Math.PI * 2)) / numArms;
          const spiralAngle = r * 0.14; // Graceful, sweeping spiral curvature
          const angle = armAngle + spiralAngle;

          const spread = (r / maxRadius) * 6.5 + 1.2;
          x = Math.cos(angle) * r + (Math.random() - 0.5) * spread;
          y = (Math.random() - 0.5) * spread * 0.6;
          z = Math.sin(angle) * r + (Math.random() - 0.5) * spread;

          const normR = r / maxRadius;
          if (normR < 0.35) {
            particleColor = colorCore.clone().lerp(colorMid, normR / 0.35);
          } else {
            particleColor = colorMid.clone().lerp(colorOuter, (normR - 0.35) / 0.65);
          }
        }

        posArray[i * 3] = x;
        posArray[i * 3 + 1] = y;
        posArray[i * 3 + 2] = z;

        colorArray[i * 3] = particleColor.r;
        colorArray[i * 3 + 1] = particleColor.g;
        colorArray[i * 3 + 2] = particleColor.b;

        // Micro-fine, uniform starlight sizing (no oversized sparkles)
        sizeArray[i] = Math.random() * 0.5 + 0.8;
        randomArray[i] = Math.random() * Math.PI * 2;
      }

      particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
      particleGeo.setAttribute('aSize', new THREE.BufferAttribute(sizeArray, 1));
      particleGeo.setAttribute('aRandom', new THREE.BufferAttribute(randomArray, 1));

      const uniforms = {
        uTime: { value: 0.0 }
      };

      const vertexShader = `
        uniform float uTime;
        attribute vec3 color;
        attribute float aSize;
        attribute float aRandom;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec3 pos = position;
          pos.y += sin(uTime * 0.9 + aRandom * 3.0) * 0.3;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // Subtle, crisp starlight point sizing (2.0px to 6.0px)
          float pSize = clamp((aSize * 46.0) / -mvPosition.z, 2.0, 6.0);
          gl_PointSize = pSize * (0.88 + 0.22 * sin(uTime * 1.4 + aRandom));
          
          vColor = color;
          vAlpha = 0.42 + 0.42 * sin(uTime * 1.0 + aRandom * 3.0);
        }
      `;

      const fragmentShader = `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec2 pt = gl_PointCoord - vec2(0.5);
          float distSq = dot(pt, pt);
          if (distSq > 0.25) discard;
          
          // Smooth Gaussian celestial starlight falloff
          float glow = exp(-distSq * 9.0);
          gl_FragColor = vec4(vColor, vAlpha * glow);
        }
      `;

      particleMat = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });

      particles = new THREE.Points(particleGeo, particleMat);
      particles.frustumCulled = false;

      // Gracefully tilted galactic plane centered across the viewport
      particles.rotation.x = Math.PI / 2.8;
      particles.position.set(0, 0, 0);
      scene.add(particles);

      camera.position.set(0, 0, 32);

      const startTime = performance.now();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        if (!isVisible) return;

        const elapsedTime = (performance.now() - startTime) * 0.001;
        uniforms.uTime.value = elapsedTime;
        
        // Majestic, slow cosmological rotation
        particles.rotation.z -= 0.0008;
        
        // Subtle organic breathing pulse
        const pulse = 1.0 + 0.02 * Math.sin(elapsedTime * 0.5);
        particles.scale.set(pulse, pulse, pulse);
        
        renderer.render(scene, camera);
      };

      animate();
    };

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    if (canvasRef.current) observer.observe(canvasRef.current);

    initThree();

    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (particleGeo) particleGeo.dispose();
      if (particleMat) particleMat.dispose();
      if (renderer) renderer.dispose();
      if (scene) {
        scene.clear();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80 mix-blend-screen"
      style={{ transform: 'translateZ(0)' }}
    />
  );
};
