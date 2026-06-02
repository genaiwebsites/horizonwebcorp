'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from './Icons';
import Link from 'next/link';
import { AuditMarker } from './AuditOverlay';

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
          <Link href="/" className="flex items-center gap-3 interactive-hover cursor-pointer">
            <span className="text-2xl font-syne font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              HWC
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10 relative">
            <AuditMarker 
              id="focus-indicators" 
              severity="P2" 
              title="Missing Focus Outlines" 
              desc="Header navigation links lack visible focus outlines for keyboard navigation." 
              placement="-top-3 -right-6"
            />
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={`/#${item.id}`} 
                className="relative text-xs font-mono font-medium text-slate-400 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]/50 rounded px-1 transition-colors uppercase tracking-[0.1em] group interactive-hover"
              >
                {item.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-[#22d3ee] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link 
              href="/#clients" 
              className="px-6 py-2.5 rounded border border-white/10 text-white font-mono font-medium text-xs uppercase tracking-widest hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] transition-all interactive-hover"
            >
              Start a Project
            </Link>
          </div>

          <button 
            className="md:hidden text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] rounded" 
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
            className="fixed inset-0 h-screen z-40 bg-[#030305]/98 backdrop-blur-3xl pt-28 px-6 flex flex-col gap-6 md:hidden overflow-y-auto pb-10"
          >
            {navLinks.map((item) => (
              <Link key={item.name} href={`/#${item.id}`} onClick={() => setIsOpen(false)} className="text-2xl font-syne font-semibold text-white border-b border-white/5 pb-4">{item.name}</Link>
            ))}
            <Link href="/#clients" onClick={() => setIsOpen(false)} className="mt-8 px-6 py-4 rounded bg-white text-black font-sans font-bold text-lg text-center w-full shadow-lg shadow-white/10 block">
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
