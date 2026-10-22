'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [isReadyText, setIsReadyText] = useState(false);

  useEffect(() => {
    // Lock body scroll while preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Transition status text quickly at 380ms
    const textTimer = setTimeout(() => {
      setIsReadyText(true);
    }, 380);

    // Fast, snappy 600ms exit trigger — zero lag, zero feeling stuck
    const exitTimer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = originalOverflow;
    }, 600);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {loading && (
        <motion.div
          key="preloader-curtain"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020205] select-none pointer-events-auto"
          style={{ willChange: 'opacity' }}
        >
          {/* Subtle atmospheric radial glow (neutral starlight) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

          {/* Centered Monogram & Studio Branding */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <span className="font-syne font-black text-6xl sm:text-7xl md:text-8xl tracking-[0.25em] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] pl-4">
              HWC
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-slate-400 mt-2 font-medium">
              Experiential Engineering
            </span>
          </motion.div>

          {/* Sleek Precision Progress Bar (Monochrome Silver & Platinum) */}
          <div className="relative mt-12 w-[200px] sm:w-[240px] flex flex-col items-center gap-3">
            <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-slate-400 via-white to-slate-200 rounded-full animate-preloader-fill shadow-[0_0_8px_rgba(255,255,255,0.4)] relative">
                {/* Continuous active light shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-preloader-shimmer" />
              </div>
            </div>

            {/* Active Telemetry Status with Minimalist Status Dot */}
            <div className="w-full flex items-center justify-between font-mono text-[10px] text-slate-400 font-medium tracking-wider">
              <div className="flex items-center">
                <span className="relative flex h-1.5 w-1.5 mr-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                </span>
                <span className="tracking-[0.15em]">{isReadyText ? 'SYSTEMS READY' : 'CALIBRATING'}</span>
              </div>
              <span className="text-white font-medium tracking-wider">{isReadyText ? '100%' : 'INITIALIZING'}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
