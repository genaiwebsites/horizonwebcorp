'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { ArrowRight } from './Icons';
import { Starfield } from './Starfield';
import { ParticleVortex } from './ParticleVortex';
import { PillButton } from './PillButton';
import dynamic from 'next/dynamic';

const DynamicGlobe = dynamic(() => import('./Globe'), {
  ssr: false,
  loading: () => <div className="w-full aspect-square" />
});

interface HeroProps {
  isReady?: boolean;
}

export const Hero = ({ isReady = true }: HeroProps) => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();

  // Subtle parallax translation on scroll (hardware-accelerated)
  const yText = useTransform(scrollY, [0, 600], [0, 60]);
  const opacityText = useTransform(scrollY, [0, 480, 600], [1, 0.2, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    let frameId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        frameId = null;
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [mouseX, mouseY]);

  const lines = ["WE ENGINEER", "DIGITAL", "ODYSSEYS."];

  return (
    <section ref={containerRef} className="relative min-h-[100svh] lg:h-screen lg:min-h-0 lg:max-h-screen flex items-center justify-center pt-28 pb-12 lg:pt-20 lg:pb-6 overflow-hidden w-full max-w-[100vw] bg-transparent z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#020205] to-transparent z-0 pointer-events-none" />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_0%,rgba(139,92,246,0.15)_0%,rgba(6,182,212,0.06)_40%,transparent_100%)] z-0" />

        {/* Ambient starry backdrop */}
        <Starfield />

        {/* Lightweight 3D galaxy particle vortex (GPU instanced) */}
        <ParticleVortex />

        {/* Subtle, hardware-accelerated ambient cursor follower */}
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-25 pointer-events-none z-0 blur-3xl hidden md:block transform-gpu"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(147,51,234,0.25) 40%, transparent 70%)',
            x: useTransform(mouseX, v => v - 250),
            y: useTransform(mouseY, v => v - 250),
          }}
        />

        <div className="absolute inset-x-0 bottom-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0 transform-gpu" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col justify-center flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">

          <motion.div
            style={{ y: yText, opacity: opacityText }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20 transform-gpu relative"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative inline-flex items-center justify-center px-4 py-2 mb-6 lg:mb-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden group shadow-[0_0_20px_rgba(139,92,246,0.15)] transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 animate-[gradient-x_3s_linear_infinite] bg-[length:200%_auto]" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold metallic-shimmer relative z-10">
                {`//`} Experiential Engineering Lab
              </span>
            </motion.div>

            <h1 className="text-[clamp(32px,9vw,45px)] sm:text-[65px] md:text-[80px] lg:text-[80px] xl:text-[95px] leading-[0.85] font-inter font-black tracking-[-0.04em] mb-4 lg:mb-4 flex flex-col items-center lg:items-start transform-gpu">
              {lines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex overflow-visible whitespace-nowrap">
                  {line.split('').map((char, charIndex) => (
                    <motion.span
                      key={`${lineIndex}-${charIndex}`}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={isReady ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.2 + (lineIndex * 0.1) + (charIndex * 0.03)
                      }}
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 text-3d-shadow pb-1"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.30, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-slate-300/85 mb-7 lg:mb-8 max-w-lg leading-relaxed font-sans font-light text-center lg:text-left transform-gpu"
            >
              We craft premium and immersive web experiences that sit at the intersection of engineering precision and visual artistry.
              <br className="hidden sm:block" />
              <span className="text-slate-400 mt-1 block sm:inline"> From interaction to infrastructure.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.40, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-center lg:justify-start"
            >
              <PillButton primary href="#work">
                View Our Work
              </PillButton>
              <PillButton href="#process">
                How We Build <ArrowRight className="w-4 h-4 ml-1" />
              </PillButton>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 relative w-full flex items-center justify-center mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[420px] xl:max-w-[480px] aspect-square pointer-events-none z-10 transform-gpu"
            >
              <DynamicGlobe mouseX={mouseX} mouseY={mouseY} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
