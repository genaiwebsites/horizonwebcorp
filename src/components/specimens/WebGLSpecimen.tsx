'use client';

import React, { useState, useEffect, useRef } from 'react';

export const WebGLSpecimen = () => {
  const [angle, setAngle] = useState({ x: 0.35, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    if (containerRef.current) observer.observe(containerRef.current);

    const loop = () => {
      if (isVisible) {
        setAngle(prev => ({
          x: prev.x + 0.007,
          y: prev.y + 0.011
        }));
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  // 3D Octahedron vertices
  const vertices = [
    { x: 0, y: 1.15, z: 0 },   // Top
    { x: 0, y: -1.15, z: 0 },  // Bottom
    { x: 1.15, y: 0, z: 0 },   // Right
    { x: -1.15, y: 0, z: 0 },  // Left
    { x: 0, y: 0, z: 1.15 },   // Front
    { x: 0, y: 0, z: -1.15 },  // Back
  ];

  // 12 edges
  const edges = [
    [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 2], [1, 3], [1, 4], [1, 5],
    [2, 4], [4, 3], [3, 5], [5, 2]
  ];

  const cosY = Math.cos(angle.y);
  const sinY = Math.sin(angle.y);
  const cosX = Math.cos(angle.x);
  const sinX = Math.sin(angle.x);

  const cx = 125;
  const cy = 46;
  const scale = 32;
  const distance = 3.6;

  const projected = vertices.map(v => {
    const x1 = v.x * cosY + v.z * sinY;
    const y1 = v.y;
    const z1 = -v.x * sinY + v.z * cosY;

    const x2 = x1;
    const y2 = y1 * cosX - z1 * sinX;
    const z2 = y1 * sinX + z1 * cosX;

    const fov = distance / (distance + z2);
    return {
      x: cx + x2 * scale * fov,
      y: cy - y2 * scale * fov,
      z: z2
    };
  });

  return (
    <div 
      ref={containerRef} 
      className="mt-auto h-[210px] w-full flex flex-col justify-between p-5 rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 transition-colors duration-500 group-hover:border-white/20 overflow-hidden"
    >
      {/* Top Meta Row */}
      <div className="flex items-center justify-between text-xs">
        <span className="font-sans font-medium text-slate-300 tracking-wide">3D WebGL Pipeline</span>
        <span className="font-mono text-[11px] text-slate-400">Three.js Engine</span>
      </div>

      {/* Spacious 3D Wireframe Canvas */}
      <div className="relative w-full h-24 my-auto flex items-center justify-center">
        {/* Soft background aura */}
        <div className="absolute w-28 h-28 rounded-full bg-white/[0.02] blur-xl pointer-events-none" />

        <svg viewBox="0 0 250 92" className="w-full h-full overflow-visible relative z-10">
          {/* Wireframe edges with depth shading */}
          {edges.map(([i, j], idx) => {
            const pA = projected[i];
            const pB = projected[j];
            const avgZ = (pA.z + pB.z) / 2;
            const opacity = Math.max(0.15, 0.35 + avgZ * 0.3);

            return (
              <line
                key={idx}
                x1={pA.x}
                y1={pA.y}
                x2={pB.x}
                y2={pB.y}
                stroke="rgba(255, 255, 255, 0.45)"
                strokeWidth={avgZ > 0 ? "1.5" : "0.9"}
                strokeOpacity={opacity}
                strokeDasharray={avgZ < -0.3 ? "2 2" : "none"}
              />
            );
          })}

          {/* 3D Vertex points */}
          {projected.map((p, idx) => (
            <circle
              key={idx}
              cx={Number.isFinite(p.x) ? p.x : 0}
              cy={Number.isFinite(p.y) ? p.y : 0}
              r={p.z > 0 ? 2.5 : 1.8}
              fill={p.z > 0 ? "#ffffff" : "#94a3b8"}
            />
          ))}
        </svg>
      </div>

      {/* Bottom Pipeline Standards */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-sans text-slate-400">
        <span className="text-slate-300">Scroll Physics</span>
        <span>·</span>
        <span className="text-slate-300 font-mono">Budget &lt; 1MB</span>
        <span>·</span>
        <span className="text-emerald-400 font-mono">60 FPS Isolated</span>
      </div>
    </div>
  );
};
