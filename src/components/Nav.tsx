'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from './Icons';
import Link from 'next/link';

export const Nav = ({ light = false }: { light?: boolean } = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Process', href: '/#process' },
    { name: 'Work', href: '/#work' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 transform-gpu ${
        scrolled 
          ? light 
            ? 'py-4 bg-white/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.03)] border-b border-slate-200/50' 
            : 'py-4 bg-[#030305]/95 backdrop-blur-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 interactive-hover cursor-pointer">
            <span className={`text-2xl font-syne font-extrabold tracking-tight transition-colors duration-300 ${
              light 
                ? 'text-slate-900 drop-shadow-[0_0_15px_rgba(0,0,0,0.05)]' 
                : 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]'
            }`}>
              HWC
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`relative text-xs font-mono font-medium uppercase tracking-[0.1em] group interactive-hover focus-visible:outline-none focus-visible:ring-2 rounded px-1 transition-colors ${
                  light 
                    ? 'text-slate-600 hover:text-slate-900 focus-visible:text-slate-900 focus-visible:ring-slate-900/50' 
                    : 'text-slate-400 hover:text-white focus-visible:text-white focus-visible:ring-[#22d3ee]/50'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1.5 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                  light ? 'bg-slate-900' : 'bg-[#22d3ee]'
                }`} />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link 
              href="/#contact" 
              className={`px-6 py-2.5 rounded border font-mono font-medium text-xs uppercase tracking-widest transition-all interactive-hover focus-visible:outline-none focus-visible:ring-2 ${
                light 
                  ? 'border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 focus-visible:ring-slate-900' 
                  : 'border-white/10 text-white hover:bg-white hover:text-black focus-visible:ring-[#22d3ee]'
              }`}
            >
              Start a Project
            </Link>
          </div>

          <button 
            className={`md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 rounded transition-colors ${
              light 
                ? 'text-slate-800 focus-visible:ring-slate-800' 
                : 'text-white focus-visible:ring-[#22d3ee]'
            }`} 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
          >
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            id="mobile-nav-menu"
            className={`fixed inset-0 h-screen z-40 backdrop-blur-3xl pt-28 px-6 flex flex-col gap-6 md:hidden overflow-y-auto pb-10 ${
              light ? 'bg-white/98 text-slate-900' : 'bg-[#030305]/98 text-white'
            }`}
          >
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)} 
                className={`text-2xl font-syne font-semibold pb-4 focus-visible:outline-none focus-visible:ring-2 rounded px-1 ${
                  light 
                    ? 'text-slate-900 border-b border-slate-100 focus-visible:ring-slate-900/50' 
                    : 'text-white border-b border-white/5 focus-visible:ring-[#22d3ee]/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/#contact" 
              onClick={() => setIsOpen(false)} 
              className={`mt-8 px-6 py-4 rounded font-sans font-bold text-lg text-center w-full block focus-visible:outline-none focus-visible:ring-2 transition-all ${
                light 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/5 focus-visible:ring-slate-900' 
                  : 'bg-white text-black shadow-lg shadow-white/10 focus-visible:ring-[#22d3ee]'
              }`}
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
