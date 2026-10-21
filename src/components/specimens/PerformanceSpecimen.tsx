'use client';

import React from 'react';

export const PerformanceSpecimen = () => {
  return (
    <div className="mt-auto h-[210px] w-full flex flex-col justify-between p-5 rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 transition-colors duration-500 group-hover:border-[#10b981]/25 overflow-hidden">
      {/* Top Meta Row */}
      <div className="flex items-center justify-between text-xs">
        <span className="font-sans font-medium text-slate-300 tracking-wide">Performance Index</span>
        <span className="font-mono text-[11px] text-emerald-400 font-bold">100 / 100 Score</span>
      </div>

      {/* Spacious Center: Lighthouse Gauge + Clean Metric Columns */}
      <div className="relative w-full h-24 my-auto flex items-center justify-between px-2">
        {/* Prominent Lighthouse Circular Ring */}
        <div className="relative w-20 h-20 rounded-full flex items-center justify-center shrink-0">
          <svg viewBox="0 0 52 52" className="w-full h-full -rotate-90 overflow-visible">
            {/* Soft Vector Ring Glow */}
            <circle
              cx="26"
              cy="26"
              r="22"
              fill="none"
              stroke="#10b981"
              strokeWidth="7"
              opacity="0.18"
            />
            {/* Background Track */}
            <circle
              cx="26"
              cy="26"
              r="22"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="4"
            />
            {/* 100/100 Audited Indicator Ring */}
            <circle
              cx="26"
              cy="26"
              r="22"
              fill="none"
              stroke="#10b981"
              strokeWidth="4"
              strokeDasharray="138.2"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xl font-bold text-white font-mono leading-none tracking-tight">100</span>
            <span className="text-[9px] uppercase tracking-wider text-slate-400 font-sans mt-0.5">Audited</span>
          </div>
        </div>

        {/* Clean, perfectly aligned Core Web Vitals checklist */}
        <div className="flex flex-col justify-center space-y-1.5 pl-4 text-xs font-sans">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-slate-400 w-10">LCP</span>
            <span className="font-mono text-emerald-400 font-medium">&lt; 0.8s</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-slate-400 w-10">CLS</span>
            <span className="font-mono text-emerald-400 font-medium">0.000</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-slate-400 w-10">INP</span>
            <span className="font-mono text-emerald-400 font-medium">&lt; 35ms</span>
          </div>
        </div>
      </div>

      {/* Bottom Infrastructure Standards */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-sans text-slate-400">
        <span className="text-slate-300">Global Edge Network</span>
        <span>·</span>
        <span className="text-slate-300 font-medium">Next.js App Router</span>
        <span>·</span>
        <span className="text-emerald-400 font-mono">Zero Bloat</span>
      </div>
    </div>
  );
};
