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
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

      particleGeo = new THREE.BufferGeometry();
      const particleCount = 3000;
      const posArray = new Float32Array(particleCount * 3);
      const colorArray = new Float32Array(particleCount * 3);
      const randomArray = new Float32Array(particleCount);

      const colorInside = new THREE.Color(0x22d3ee);
      const colorOutside = new THREE.Color(0x8b5cf6);

      for(let i = 0; i < particleCount; i++) {
        const radius = Math.pow(Math.random(), 1.5) * 50; 
        const spinAngle = radius * 0.3; 
        const branchAngle = Math.random() * Math.PI * 2; 
        const spread = Math.max(0, (50 - radius) * 0.2);
        
        const x = Math.cos(branchAngle + spinAngle) * radius + (Math.random() - 0.5) * spread;
        const y = (Math.random() - 0.5) * spread * 0.8;
        const z = Math.sin(branchAngle + spinAngle) * radius + (Math.random() - 0.5) * spread;

        posArray[i * 3] = x;
        posArray[i * 3 + 1] = y;
        posArray[i * 3 + 2] = z;

        const mixedColor = colorInside.clone().lerp(colorOutside, radius / 50);
        colorArray[i * 3] = mixedColor.r;
        colorArray[i * 3 + 1] = mixedColor.g;
        colorArray[i * 3 + 2] = mixedColor.b;

        randomArray[i] = Math.random() * Math.PI * 2;
      }
      
      particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
      particleGeo.setAttribute('aRandom', new THREE.BufferAttribute(randomArray, 1));

      const uniforms = {
        uTime: { value: 0.0 }
      };

      const vertexShader = `
        uniform float uTime;
        attribute vec3 color;
        attribute float aRandom;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = (10.0 / -mvPosition.z);
          vColor = color;
          
          vAlpha = 0.2 + 0.5 * sin(uTime * 1.5 + aRandom * 10.0);
        }
      `;

      const fragmentShader = `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec2 pt = gl_PointCoord - vec2(0.5);
          if(dot(pt, pt) > 0.25) discard;
          gl_FragColor = vec4(vColor, vAlpha);
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

      particles.rotation.x = Math.PI / 2.5;
      particles.position.y = -5;
      scene.add(particles);

      camera.position.z = 28;
      camera.position.y = 2;

      const clockObj = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clockObj.getElapsedTime();
        uniforms.uTime.value = elapsedTime;
        
        // Continuous slow rotation
        particles.rotation.z -= 0.0015;
        
        // Subtle organic breathing pulse (scale oscillates gently)
        const pulse = 1.0 + 0.05 * Math.sin(elapsedTime * 0.8);
        particles.scale.set(pulse, pulse, pulse);
        
        renderer.render(scene, camera);
      };

      animate();
    };

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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-screen"
      style={{ transform: 'translateZ(0)' }}
    />
  );
};
