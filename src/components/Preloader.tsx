'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to allow heavy WebGL and Cobe assets to hydrate smoothly
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030305]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_50%)] animate-pulse" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <span className="font-syne font-extrabold text-5xl md:text-7xl tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-300 to-slate-500 metallic-shimmer text-3d-shadow relative">
              HWC
            </span>
          </motion.div>

          <div className="relative mt-12 w-[240px] h-[1px] overflow-hidden opacity-50">
            <div className="absolute inset-0 bg-white/10" />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-mono text-[9px] uppercase tracking-[0.4em] text-slate-500 mt-6"
          >
            Initializing WebGL
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
