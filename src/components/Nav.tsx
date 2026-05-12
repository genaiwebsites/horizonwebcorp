'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from './Icons';
import Link from 'next/link';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'Work', id: 'work' },
    { name: 'Clients', id: 'clients' }
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 transform-gpu ${scrolled ? 'py-4 bg-[#030305]/95 backdrop-blur-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 interactive-hover cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className="text-2xl font-syne font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              HWC
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link key={item.name} href={`#${item.id}`} className="relative text-xs font-mono font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-[0.1em] group interactive-hover">
                {item.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-[#22d3ee] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="#clients" className="px-6 py-2.5 rounded border border-white/10 text-white font-mono font-medium text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all interactive-hover">
              Start Project
            </Link>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
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
            className="fixed inset-0 h-screen z-40 bg-[#030305]/98 backdrop-blur-3xl pt-28 px-6 flex flex-col gap-6 md:hidden overflow-y-auto pb-10"
          >
            {navLinks.map((item) => (
              <Link key={item.name} href={`#${item.id}`} onClick={() => setIsOpen(false)} className="text-2xl font-syne font-semibold text-white border-b border-white/5 pb-4">{item.name}</Link>
            ))}
            <Link href="#clients" onClick={() => setIsOpen(false)} className="mt-8 px-6 py-4 rounded bg-white text-black font-sans font-bold text-lg text-center w-full shadow-lg shadow-white/10 block">
              Start Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
