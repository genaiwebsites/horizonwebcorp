'use client';
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  speed: number;
  phase: number;
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
    const starCount = 120; // Balanced density of stars

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
    }

    function generateStars() {
      if (!canvas) return;
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.4, // Subtle, sharp star sizes
          baseAlpha: Math.random() * 0.6 + 0.3,
          speed: Math.random() * 0.002 + 0.001, // Twinkle speed multiplier
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    resize();
    window.addEventListener('resize', resize);

    function render(time: number) {
      if (!ctx || !canvas) return;

      // Clear the canvas to allow layered elements underneath to shine through
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw all stars using a single canvas draw cycle
      stars.forEach((star) => {
        const alpha = star.baseAlpha * (0.3 + 0.7 * Math.sin(time * star.speed + star.phase));
        
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(alpha, 1))})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80 z-0"
      style={{ mixBlendMode: 'screen', transform: 'translateZ(0)' }}
    />
  );
};
