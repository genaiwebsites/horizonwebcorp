'use client';
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseSize: number;
  baseAlpha: number;
  pulseSpeed: number;
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
    const starCount = 180; // Balanced, beautifully scattered stardust across hero

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
        '255, 255, 255', // Diamond white starlight
        '248, 250, 252', // Crisp celestial white
        '226, 232, 240', // Refined cosmic silver
        '203, 213, 225', // Slate starlight
      ];

      for (let i = 0; i < starCount; i++) {
        const color = palettes[Math.floor(Math.random() * palettes.length)];
        const isBeacon = Math.random() < 0.12; // 12% subtle brighter beacon stars

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Butter-smooth, gentle cosmic drift across the viewport
          vx: (Math.random() - 0.5) * 0.14,
          vy: -Math.random() * 0.18 - 0.04,
          // Crisp, micro-fine starlight sizing (0.75px to 1.35px; beacon up to 1.7px)
          baseSize: isBeacon ? Math.random() * 0.35 + 1.35 : Math.random() * 0.45 + 0.75,
          baseAlpha: isBeacon ? Math.random() * 0.25 + 0.65 : Math.random() * 0.35 + 0.35,
          pulseSpeed: Math.random() * 0.0016 + 0.0008, // Organic, breathing pulsation
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
          // Butter-smooth drifting across the hero section
          star.x += star.vx;
          star.y += star.vy;

          // Seamless viewport wrap-around
          if (star.x < 0) star.x = canvas.width;
          if (star.x > canvas.width) star.x = 0;
          if (star.y < 0) star.y = canvas.height;
          if (star.y > canvas.height) star.y = 0;

          // Smooth sinusoidal pulsation
          const pulse = Math.sin(time * star.pulseSpeed + star.phase);
          const alpha = star.baseAlpha * (0.62 + 0.38 * pulse);
          const currentSize = star.baseSize * (0.88 + 0.22 * pulse);

          // Subtle soft micro-glow for brighter stars
          if (star.baseSize > 1.3) {
            ctx.fillStyle = `rgba(${star.color}, ${Math.max(0, Math.min(alpha * 0.22, 1))})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, currentSize * 2.2, 0, Math.PI * 2);
            ctx.fill();
          }

          // Core crisp starlight pinpoint
          ctx.fillStyle = `rgba(${star.color}, ${Math.max(0, Math.min(alpha, 1))})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, currentSize, 0, Math.PI * 2);
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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-75 z-0"
      style={{ mixBlendMode: 'screen', transform: 'translateZ(0)' }}
    />
  );
};
