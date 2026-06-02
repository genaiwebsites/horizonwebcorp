'use client';

import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export const BentoCard = ({ 
  children, 
  className = "", 
  hoverEffect = false, 
  bgClass = "bg-[#0A0A0E]/85" 
}: { 
  children: React.ReactNode, 
  className?: string, 
  hoverEffect?: boolean, 
  bgClass?: string 
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isFullBleed = className.includes('p-0');

  // If it's a full-bleed card (like work showcases), we don't do the inset border, just direct spotlight
  if (isFullBleed) {
    return (
      <div
        onMouseMove={handleMouseMove}
        className={`group relative overflow-hidden rounded-3xl border border-white/5 ${bgClass} transition-all duration-500 ${className}`}
      >
        {hoverEffect && (
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  450px circle at ${mouseX}px ${mouseY}px,
                  rgba(139, 92, 246, 0.08),
                  transparent 80%
                )
              `,
            }}
          />
        )}
        {hoverEffect && (
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  200px circle at ${mouseX}px ${mouseY}px,
                  rgba(34, 211, 238, 0.15),
                  transparent 80%
                )
              `,
            }}
          />
        )}
        <div className="relative z-20 h-full flex flex-col justify-start">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative p-[1px] overflow-hidden rounded-3xl transition-all duration-500 ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Outer Glow (Border Spotlight) */}
      {hoverEffect && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                180px circle at ${mouseX}px ${mouseY}px,
                rgba(34, 211, 238, 0.25),
                transparent 80%
              )
            `,
          }}
        />
      )}

      {/* Inner Card Container */}
      <div className={`relative z-10 rounded-[23px] w-full h-full ${bgClass} p-8 md:p-10 flex flex-col justify-start overflow-hidden`}>
        {/* Subtle grid pattern background */}
        {hoverEffect && (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:14px_24px] opacity-40 group-hover:opacity-75 transition-opacity duration-500 z-0 pointer-events-none" />
        )}
        
        {/* Inner spotlight glow */}
        {hoverEffect && (
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  300px circle at ${mouseX}px ${mouseY}px,
                  rgba(139, 92, 246, 0.05),
                  transparent 80%
                )
              `,
            }}
          />
        )}
        
        <div className="relative z-10 h-full flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
};
