import React from 'react';

export const BentoCard = ({ children, className = "", hoverEffect = false, bgClass = "bg-[#0A0A0E]/80" }: { children: React.ReactNode, className?: string, hoverEffect?: boolean, bgClass?: string }) => (
  <div className={`relative overflow-hidden rounded-3xl border border-white/5 ${bgClass} backdrop-blur-xl shadow-2xl transition-all duration-500 interactive-hover ${hoverEffect ? 'hover:bg-[#111118]/90 hover:border-[#8b5cf6]/30 group' : ''} ${className}`}>
    {hoverEffect && (
      <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/0 via-transparent to-[#8b5cf6]/0 group-hover:from-[#06b6d4]/5 group-hover:to-[#8b5cf6]/5 transition-all duration-500 pointer-events-none transform-gpu" />
    )}
    <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-start">
      {children}
    </div>
  </div>
);
