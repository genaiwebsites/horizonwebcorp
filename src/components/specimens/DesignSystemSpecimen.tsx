'use client';

import React, { useEffect, useRef } from 'react';

export const DesignSystemSpecimen = () => {
  const markerRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Bezier curve endpoints and control handles
  const p0 = { x: 16, y: 72 };
  const p1 = { x: 50, y: 12 };
  const p2 = { x: 100, y: 12 };
  const p3 = { x: 234, y: 12 };

  useEffect(() => {
    let animId: number;
    let isVisible = true;
    const start = performance.now();

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    if (containerRef.current) observer.observe(containerRef.current);

    const loop = (now: number) => {
      if (isVisible) {
        const elapsed = Math.max(0, now - start) % 2400;
        const progress = Math.max(0, Math.min(1, elapsed / 2400));
        // Deceleration easing
        const t = Math.pow(progress, 0.45);
        const u = 1 - t;
        const x = u * u * u * p0.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t * t * t * p3.x;
        const y = u * u * u * p0.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * p3.y;

        if (markerRef.current && Number.isFinite(x) && Number.isFinite(y)) {
          markerRef.current.setAttribute('cx', x.toFixed(1));
          markerRef.current.setAttribute('cy', y.toFixed(1));
        }
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="mt-auto h-[210px] w-full flex flex-col justify-between p-5 rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 transition-colors duration-500 group-hover:border-white/20 overflow-hidden"
    >
      {/* Top Meta Row */}
      <div className="flex items-center justify-between text-xs">
        <span className="font-sans font-medium text-slate-300 tracking-wide">Motion Physics</span>
        <span className="font-mono text-[11px] text-slate-400">cubic-bezier(0.16, 1, 0.3, 1)</span>
      </div>

      {/* Spacious Easing Curve */}
      <div className="relative w-full h-24 my-auto flex items-center justify-center">
        <svg viewBox="0 0 250 84" className="w-full h-full overflow-visible">
          {/* Subtle reference grid lines */}
          <line x1="16" y1="12" x2="234" y2="12" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
          <line x1="16" y1="72" x2="234" y2="72" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

          {/* Control handle lines */}
          <line x1={p0.x} y1={p0.y} x2={p1.x} y2={p1.y} stroke="rgba(255,255,255,0.12)" strokeDasharray="2 2" strokeWidth="1" />
          <line x1={p3.x} y1={p3.y} x2={p2.x} y2={p2.y} stroke="rgba(255,255,255,0.12)" strokeDasharray="2 2" strokeWidth="1" />
          <circle cx={p1.x} cy={p1.y} r="2" fill="#ffffff" opacity="0.3" />
          <circle cx={p2.x} cy={p2.y} r="2" fill="#ffffff" opacity="0.3" />

          {/* Bezier Path */}
          <path
            d={`M ${p0.x} ${p0.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`}
            fill="none"
            stroke="url(#dsGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Moving Motion Marker */}
          <circle
            ref={markerRef}
            cx={p0.x}
            cy={p0.y}
            r="3.5"
            fill="#ffffff"
          />

          <defs>
            <linearGradient id="dsGrad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Token Standards */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-sans text-slate-400">
        <span className="text-slate-300">8pt Spatial System</span>
        <span>·</span>
        <span className="text-emerald-400 font-mono">WCAG AA 7.4:1</span>
        <span>·</span>
        <span className="text-slate-300">Fluid Type</span>
      </div>
    </div>
  );
};
