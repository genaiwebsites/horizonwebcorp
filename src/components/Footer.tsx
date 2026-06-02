import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-transparent relative z-10 py-8 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-mono text-[11px] uppercase tracking-[0.1em]">© 2026 Horizon Web Corp. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <ul className="flex flex-wrap justify-center gap-8 text-slate-500 font-mono text-[11px] uppercase tracking-[0.1em]">
                <li><Link href="/privacy" className="hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]/50 rounded px-1 transition-colors interactive-hover">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]/50 rounded px-1 transition-colors interactive-hover">Terms</Link></li>
                <li><Link href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]/50 rounded px-1 transition-colors interactive-hover">Instagram</Link></li>
                <li><Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]/50 rounded px-1 transition-colors interactive-hover">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
