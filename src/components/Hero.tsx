'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight } from './Icons';
import { Starfield } from './Starfield';
import { ParticleVortex } from './ParticleVortex';
import { PillButton } from './PillButton';
import dynamic from 'next/dynamic';
import { AnimatedCounter } from './AnimatedCounter';

const DynamicGlobe = dynamic(() => import('./Globe'), { ssr: false });

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef as any,
    offset: ["start start", "end start"]
  });

  // Preserved subtle parallax translation to avoid text collision on scroll
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.2, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 800 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 800 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const lines = ["WE ENGINEER", "DIGITAL", "ODYSSEYS."];

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-12 lg:pt-32 lg:pb-20 overflow-hidden w-full max-w-[100vw] bg-transparent z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-[#020205] to-transparent z-0 pointer-events-none" />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_0%,rgba(139,92,246,0.15)_0%,rgba(6,182,212,0.06)_40%,transparent_100%)] z-0" />

        <Starfield />
        <ParticleVortex />

        <motion.div
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full opacity-40 pointer-events-none z-0 transform-gpu hidden md:block"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(147,51,234,0.3) 30%, transparent 60%)',
            x: useTransform(mouseX, v => v - 400),
            y: useTransform(mouseY, v => v - 400),
            willChange: 'transform'
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative inline-flex items-center justify-center px-4 py-2 mb-6 lg:mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden group shadow-[0_0_20px_rgba(139,92,246,0.15)] transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 animate-[gradient-x_3s_linear_infinite] bg-[length:200%_auto]" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold metallic-shimmer relative z-10">
                {`//`} Experiential Engineering Lab
              </span>
            </motion.div>

            <h1 className="text-[clamp(32px,9vw,45px)] sm:text-[65px] md:text-[80px] lg:text-[90px] xl:text-[110px] leading-[0.85] font-inter font-black tracking-[-0.04em] mb-6 lg:mb-8 flex flex-col items-center lg:items-start transform-gpu">
              {lines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex overflow-visible whitespace-nowrap">
                  {line.split('').map((char, charIndex) => (
                    <motion.span
                      key={`${lineIndex}-${charIndex}`}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.2 + (lineIndex * 0.1) + (charIndex * 0.03)
                      }}
                      // AUDIT ISSUE (P2): Gradient text (bg-clip-text + bg-gradient) is an overused AI tell.
                      // RECOMMENDATION: Limit gradient text to accent terms, or use solid white/slate colors.
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 text-3d-shadow pb-1"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-sm sm:text-base lg:text-lg text-slate-300 mb-8 lg:mb-10 max-w-xl leading-relaxed font-sans font-light drop-shadow-md text-center lg:text-left transform-gpu"
            >
              We craft ultra-premium web experiences that sit at the intersection of engineering precision and visual artistry. <br />From interaction to infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
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
              className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] aspect-square pointer-events-none z-10 transform-gpu"
              style={{ perspective: 1000 }}
            >
              <DynamicGlobe mouseX={smoothX} mouseY={smoothY} />
            </motion.div>
          </div>

        </div>

        {/* --- METRICS GLASS PANEL (Integrated Placement to Avoid Scroll Overlap) --- */}
        <div className="w-full mt-10 lg:mt-14 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#06060c]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {[
              { value: 42, prefix: '', suffix: '+', label: 'Immersive Deploys', sub: 'Digital experiences shipped globally' },
              { value: 100, prefix: '', suffix: '%', label: 'Performance Score', sub: 'Lighthouse Core Web Vitals index' },
              { value: 3.5, prefix: '', suffix: 'x', label: 'Average Visitor Lift', sub: 'Audited increase in user attention', decimals: 1 },
              { value: 98, prefix: '', suffix: '%', label: 'Partner Retention', sub: 'Sustained engineering collaborations' }
            ].map((metric, i) => (
              <div key={i} className="flex flex-col text-left group relative">
                {/* Sleek vertical separator lines */}
                {i > 0 && <div className="hidden md:block absolute left-[-12px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-white/0 via-white/5 to-white/0" />}
                
                <div className="text-3xl md:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 tracking-tight leading-none group-hover:text-[#22d3ee] transition-colors duration-300 mb-2">
                  <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals || 0} />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400 group-hover:text-white transition-colors duration-500 mb-1">{metric.label}</div>
                <div className="text-[9px] text-slate-500 font-sans font-light leading-relaxed">{metric.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
