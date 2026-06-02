'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [statusText, setStatusText] = useState("Initializing WebGL");

  useEffect(() => {
    // Dynamic text sequence matching the loading states
    const textTimer1 = setTimeout(() => setStatusText("Compiling shader pipelines"), 550);
    const textTimer2 = setTimeout(() => setStatusText("Hydrating experiential core"), 1100);
    const textTimer3 = setTimeout(() => setStatusText("Systems active"), 1500);

    // End loading cleanly after all animations resolve
    const exitTimer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      clearTimeout(textTimer1);
      clearTimeout(textTimer2);
      clearTimeout(textTimer3);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -30, 
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030305]"
        >
          {/* Subtle background radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_60%)] pointer-events-none" />

          {/* Glowing central ring decoration */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute size-[350px] border border-[#22d3ee]/30 rounded-full blur-[2px]"
          />

          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <span className="font-syne font-extrabold text-5xl md:text-7xl tracking-widest text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              HWC
            </span>
          </motion.div>

          {/* Sleek Progress Track */}
          <div className="relative mt-12 w-[240px] h-[2px] bg-white/5 rounded-full overflow-hidden border border-white/5 shadow-inner">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] rounded-full"
            />
          </div>

          <motion.p
            key={statusText}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
            className="font-mono text-[9px] uppercase tracking-[0.4em] text-slate-500 mt-6 min-h-[14px]"
          >
            {statusText}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
