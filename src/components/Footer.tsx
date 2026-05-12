import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-transparent relative z-10 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 pointer-events-none select-none w-full overflow-hidden flex justify-center">
          <span className="font-syne font-extrabold text-[clamp(40px,12vw,160px)] tracking-[-0.04em] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-white/10 to-white/5 block">
            HORIZON
          </span>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-mono text-[11px] uppercase tracking-[0.1em]">© 2026 Horizon Web Corp. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <ul className="flex flex-wrap justify-center gap-8 text-slate-500 font-mono text-[11px] uppercase tracking-[0.1em]">
                <li><Link href="#" className="hover:text-white transition-colors interactive-hover">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors interactive-hover">Terms</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors interactive-hover">Twitter</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors interactive-hover">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
