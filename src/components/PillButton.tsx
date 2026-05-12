import React from 'react';
import Link from 'next/link';

export const PillButton = ({ children, primary, href, onClick }: { children: React.ReactNode, primary?: boolean, href?: string, onClick?: () => void }) => {
  const className = `px-6 py-3 md:px-8 md:py-4 rounded-full font-sans font-semibold text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 w-full sm:w-auto interactive-hover ${
    primary 
    ? 'bg-white text-black hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] border-none' 
    : 'bg-[#0A0A0E]/80 text-white border border-white/10 hover:border-white/30 hover:bg-white/10 backdrop-blur-md'
  }`;

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
