'use client';
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  speed: number;
  phase: number;
  color: string;
}

export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const starCount = 140; // Subtle, dispersed celestial stardust

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
    }

    function generateStars() {
      if (!canvas) return;
      stars = [];
      const palettes = [
        '255, 255, 255', // Pure diamond starlight
        '241, 245, 249', // Crisp starlight white
        '226, 232, 240', // Muted cosmic silver
        '203, 213, 225', // Slate starlight
      ];

      for (let i = 0; i < starCount; i++) {
        const color = palettes[Math.floor(Math.random() * palettes.length)];
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Ultra-fine subpixel pinpoints: 0.3px to 0.65px (delicate, crisp, no fuzzy blobs)
          size: Math.random() < 0.85 ? Math.random() * 0.2 + 0.3 : Math.random() * 0.2 + 0.45,
          baseAlpha: Math.random() * 0.16 + 0.08, // Subtle cosmic depth
          speed: Math.random() * 0.0004 + 0.0001, // Slow, peaceful celestial breathing
          phase: Math.random() * Math.PI * 2,
          color,
        });
      }
    }

    resize();
    window.addEventListener('resize', resize);

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    if (canvas) observer.observe(canvas);

    function render(time: number) {
      if (!ctx || !canvas) return;

      if (isVisible) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach((star) => {
          const alpha = star.baseAlpha * (0.5 + 0.5 * Math.sin(time * star.speed + star.phase));
          
          ctx.fillStyle = `rgba(${star.color}, ${Math.max(0, Math.min(alpha, 1))})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-45 z-0"
      style={{ mixBlendMode: 'screen', transform: 'translateZ(0)' }}
    />
  );
};
