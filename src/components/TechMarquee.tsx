import React from 'react';

const techStack = [
  {
    name: 'Next.js 14',
    icon: (
      <svg viewBox="0 0 180 180" width="16" height="16" fill="currentColor">
        <path d="M90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0ZM72.6364 63.6364H86.2335L118.895 112.569C118.834 111.455 118.773 110.158 118.773 108.682V63.6364H130.682V124.773H118.156L84.5807 74.3411C84.7032 75.6983 84.7645 77.0556 84.7645 78.4128V124.773H72.6364V63.6364Z" />
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="16" height="16" fill="#61DAFB">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'Three.js',
    icon: (
      <svg viewBox="0 0 256 256" width="16" height="16" fill="currentColor">
        <path d="M128 0L256 73.9V256L128 182.1L0 256V73.9L128 0ZM128 147.2L42.7 196.4V98.2L128 49V147.2ZM128 168.9L213.3 218.1V119.9L128 70.7V168.9Z"/>
      </svg>
    ),
  },
  {
    name: 'Framer Motion',
    icon: (
      <svg viewBox="0 0 14 21" width="16" height="16" fill="none">
        <path d="M0 0h14v7H7zm0 7h7l7 7H0zm7 7h7v7l-7-7z" fill="#0055FF"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg viewBox="0 0 128 128" width="16" height="16">
        <path fill="#3178C6" d="M1.5 1.5h125v125H1.5z"/>
        <path fill="#FFF" d="M72.2 103.7c-4.4 2.9-9.9 4.3-16.7 4.3-5.3 0-9.9-.9-13.7-2.6v-12.7c4.1 2.3 8.3 3.4 12.8 3.4 3 0 5.4-.5 7.1-1.4 1.7-1 2.5-2.3 2.5-4 0-1.2-.4-2.2-1.3-3-.9-.8-2.6-1.7-5.1-2.6-6-2.1-10.4-4.5-13.3-7.2s-4.3-6.5-4.3-11.4c0-5.3 2-9.7 6.1-13.2 4.1-3.5 9.7-5.2 16.9-5.2 5 0 9.7.9 14 2.8l-4 11.5c-4-1.8-7.9-2.7-11.6-2.7-2.7 0-4.8.6-6.4 1.7-1.5 1.1-2.3 2.5-2.3 4.3 0 1.2.4 2.2 1.2 3 .8.8 2.6 1.7 5.5 2.8 5.8 2.1 10 4.4 12.7 7s4 6.2 4 10.9c0 5.6-2.1 10.2-6.2 13.9-4.1 3.5-9.4 5.3-16 5.3zm-39.7-3v-44H13.6V45.2h41.4v11.5H32.5v44h-12z"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg viewBox="0 0 128 128" width="16" height="16">
        <path fill="#38bdf8" d="M64 28.5c-15.6 0-25 10.4-28.1 31.3 9.4-12.5 18.8-15.6 28.1-9.4 4.5 3 7.6 7.7 12 13.5 6 7.9 13.5 17.8 31.8 17.8 15.6 0 25-10.4 28.1-31.3-9.4 12.5-18.8 15.6-28.1 9.4-4.5-3-7.6-7.7-12-13.5-6.1-7.9-13.5-17.8-31.8-17.8zm-31.8 33.3c-15.6 0-25 10.4-28.1 31.3 9.4-12.5 18.8-15.6 28.1-9.4 4.5 3 7.6 7.7 12 13.5 6 7.9 13.5 17.8 31.8 17.8 15.6 0 25-10.4 28.1-31.3-9.4 12.5-18.8 15.6-28.1 9.4-4.5-3-7.6-7.7-12-13.5C58 71 50.5 61.2 32.2 61.2z"/>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <svg viewBox="0 0 128 128" width="16" height="16">
        <path fill="#336791" d="M117 84c-3.1 14.8-17.1 19.3-17.1 19.3S116 87.7 93.3 84c-22.1-3.6-43.3-3.6-67.4-4.7C20.6 79 17.4 75 14.7 75c0 0-2.2 5.5.9 8.2.1.1 10.8 9.9 20 18.6 3.1 3 5 4.3 7 3.3.4-.2 1.4-1 2.3-2l6.2 5c-1.3 1.6-2.5 2.9-3.2 3.4-3.5 2.6-8.9.2-12.8-3.7C24.3 97.4 8.7 82.5 8.7 82.5c-4.3-4.1-3.3-10.3 3.3-12.3 8.3-2.5 14.9 3.5 14.9 3.5s2.4-1.2 2.6-1.5c.3-.4-.5-4.2-.5-4.2-1-3.9-3.9-5-6-5-3.3.1-6.1-3.1-4.7-6 1.4-3.1 5.9-4.2 9.5-2.6.2.1 4.7 2.1 4.7 2.1-1.3-3.1-.7-7.2 2.7-8.8.8-.4 1.7-.6 2.6-.7-2.3-3.8-1-8.3 2.8-10.6 3.3-2.1 7.4-1.2 10.1 1.7-.5-3.8 2.2-7.5 6-8.1 2.7-.4 5.3 1.1 6.5 3.5.7-3.6 4-6 7.8-5.6 2.5.3 4.6 2 5.6 4.3 1.5-3.2 5.3-4.9 8.6-4 2.2.6 4 2.4 4.8 4.6 2.1-2.6 5.8-3.3 8.8-1.7 2.3 1.3 3.8 3.5 4.2 6.1 2.5-1.9 6-1.7 8.3.4.1.1.2.2.3.2 2.8-1 6-.1 7.6 2.6.2.4.4.7.6 1.1 2.8-.2 5.5 1.4 6.6 4.1 1 2.4.1 5.2-1.7 6.9 2.7.9 4.7 3.4 4.9 6.2-.2.6-1.2 1-1.9 1 0 0-4.6-.2-5.7-.3v1.3c2.4.5 4.6 2.4 4.9 5v1.4l-4.7.1c.3 1.8-.7 3.6-2.5 4.6v2c.8.6 1.4 1.4 1.7 2.4h-3.9c0 1.2-.5 2.3-1.4 3.1h2v4.8h-4.3c-.4 1.3-1.3 2.5-2.7 3.1h1c1 .2 1.9 1.1 2 2.1l-6-1.3c-.2 1.3-.9 2.5-2.1 3.3l-2.4-7c-1 2.3-2.6 4.3-4.7 5.8l-1.3-7.5c-.8 2-2.1 3.8-3.7 5.2l-3.3-8.8c-.8 1.5-1.7 2.9-2.9 4.1L82.1 94l-2.5 3c-.1 0-7.3-26.6-9-33 0 0-14.7 33-15.5 35 0 0-4.7-18.4-5.3-20.8-1.5 6.1-5.3 22.3-5.3 22.3s21.1 1.7 35.8 4c11.6 1.8 32.8 4.1 32.8 4.1 8.8 1.4 10.3-4.4 3.9-8.6z"/>
      </svg>
    ),
  },
  {
    name: 'Vercel Edge',
    icon: (
      <svg viewBox="0 0 128 128" width="16" height="16" fill="currentColor">
        <path d="M64 12.3L128 123H0L64 12.3z"/>
      </svg>
    ),
  },
  {
    name: 'WebGL Shaders',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#F03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg viewBox="0 0 128 128" width="16" height="16">
        <path fill="#339933" d="M63.9 10l-45 26v51l45 26 45-26v-51l-45-26zM46.7 90.7C37 84.8 36.4 75 36.4 75H46s1 4.5 6.5 7.8c5.4 3.1 12 2.7 16-1.5 3-3.1 2-8-2.6-10.4l-14-7.4c-9.5-5-11.4-14.4-7.4-20.9 4-6.5 12.4-8 17.4-8 8.1 0 14.1 5.3 15.3 11.2H67.8c-1-3.1-4.8-5-8.5-4.4-4 .6-5.8 3.5-5.3 6.3.6 2.9 4 4.5 7.3 6.2 8.3 4.3 18.5 7.6 19.3 19 1 12.8-10.9 20.3-22 19.7-4.4-.3-8.4-2.1-11.9-4.9z"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <svg viewBox="0 0 128 128" width="16" height="16">
        <path fill="#0ACF83" d="M33 95a17 17 0 1034 0V78H50a17 17 0 00-17 17z"/>
        <path fill="#A259FF" d="M33 61a17 17 0 1034 0V44H50a17 17 0 00-17 17z"/>
        <path fill="#F24E1E" d="M33 27a17 17 0 1034 0 17 17 0 00-34 0z"/>
        <path fill="#FF7262" d="M67 27a17 17 0 1034 0 17 17 0 00-34 0z"/>
        <path fill="#1ABCFE" d="M67 61a17 17 0 1017-17H67v17z"/>
      </svg>
    ),
  },
];

export const TechMarquee = () => {
  return (
    <section className="py-24 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center justify-center gap-3 w-full">
          <div className="h-[1px] w-full max-w-[40px] bg-white/10" />
          <span className="font-mono text-[11px] text-slate-400 uppercase tracking-[0.25em]">Technology</span>
          <div className="h-[1px] w-full max-w-[40px] bg-white/10" />
        </div>
        <h2 className="text-center mt-5 text-4xl font-syne font-extrabold text-white">
          Built With The <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#22d3ee]">Best Tools</em>
        </h2>
      </div>

      <div className="flex flex-col gap-6 relative">
        {/* Gradients for fading edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030305] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030305] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] py-2">
          {[...Array(2)].map((_, i) => (
            <div key={`row1-${i}`} className="flex gap-8 px-4">
              {techStack.slice(0, 6).map((tech, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-[#0A0A0E] text-slate-300 font-mono text-[12px] uppercase tracking-[0.1em] whitespace-nowrap hover:text-white hover:border-white/50 transition-colors cursor-default interactive-hover shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                >
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div 
          className="flex w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] py-2" 
          style={{ animationDirection: 'reverse' }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={`row2-${i}`} className="flex gap-8 px-4">
              {techStack.slice(6).map((tech, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-[#0A0A0E] text-slate-300 font-mono text-[12px] uppercase tracking-[0.1em] whitespace-nowrap hover:text-white hover:border-white/50 transition-colors cursor-default interactive-hover shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                >
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
