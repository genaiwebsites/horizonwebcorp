import React from 'react';
import Link from 'next/link';

export const Footer = ({ light = false }: { light?: boolean } = {}) => {
  return (
    <footer className={`border-t bg-transparent relative z-10 py-8 px-6 transition-colors duration-300 ${
      light ? 'border-slate-200/80' : 'border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className={`font-mono text-[11px] uppercase tracking-[0.1em] transition-colors duration-300 ${
            light ? 'text-slate-400' : 'text-slate-500'
          }`}>© 2026 Horizon Web Corp. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <ul className={`flex flex-wrap justify-center gap-8 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors duration-300 ${
              light ? 'text-slate-400' : 'text-slate-500'
            }`}>
                <li>
                  <Link 
                    href="/privacy" 
                    className={`focus-visible:outline-none focus-visible:ring-2 rounded px-1 transition-colors interactive-hover ${
                      light 
                        ? 'hover:text-slate-900 focus-visible:text-slate-900 focus-visible:ring-slate-900/50' 
                        : 'hover:text-white focus-visible:text-white focus-visible:ring-[#22d3ee]/50'
                    }`}
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms" 
                    className={`focus-visible:outline-none focus-visible:ring-2 rounded px-1 transition-colors interactive-hover ${
                      light 
                        ? 'hover:text-slate-900 focus-visible:text-slate-900 focus-visible:ring-slate-900/50' 
                        : 'hover:text-white focus-visible:text-white focus-visible:ring-[#22d3ee]/50'
                    }`}
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`focus-visible:outline-none focus-visible:ring-2 rounded px-1 transition-colors interactive-hover ${
                      light 
                        ? 'hover:text-slate-900 focus-visible:text-slate-900 focus-visible:ring-slate-900/50' 
                        : 'hover:text-white focus-visible:text-white focus-visible:ring-[#22d3ee]/50'
                    }`}
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`focus-visible:outline-none focus-visible:ring-2 rounded px-1 transition-colors interactive-hover ${
                      light 
                        ? 'hover:text-slate-900 focus-visible:text-slate-900 focus-visible:ring-slate-900/50' 
                        : 'hover:text-white focus-visible:text-white focus-visible:ring-[#22d3ee]/50'
                    }`}
                  >
                    LinkedIn
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
