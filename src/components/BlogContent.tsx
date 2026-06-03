'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { ArrowRight, Calendar, Clock, ChevronLeft } from './Icons';
import { PillButton } from './PillButton';
import { BlogPost } from '../data/blogs';

interface Section {
  id: string;
  title: string;
}

interface BlogContentProps {
  post: BlogPost;
  sections: Section[];
  children: React.ReactNode;
  light?: boolean;
}

export const BlogContent: React.FC<BlogContentProps> = ({ post, sections, children, light = false }) => {
  const { scrollYProgress } = useScroll();
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -70% 0px', // Trigger when header is in the upper half of the screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [sections]);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // Offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] origin-left z-[9999]" 
        style={{ scaleX: scrollYProgress }} 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-28 flex-grow w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link 
            href="/blogs" 
            className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest transition-colors group ${
              light ? 'text-indigo-600 hover:text-slate-900' : 'text-[#22d3ee] hover:text-white'
            }`}
          >
            <ChevronLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Blogs
          </Link>
        </div>

        {/* Header Stack */}
        <header className={`mb-12 border-b pb-8 ${light ? 'border-slate-200/60' : 'border-white/5'}`}>
          <span className={`px-3 py-1 border rounded-full font-mono text-[9px] uppercase tracking-widest backdrop-blur-md inline-block mb-6 shadow-sm ${
            light ? 'bg-white/95 border-slate-200/60 text-indigo-600' : 'bg-white/5 border border-white/10 text-[#22d3ee]'
          }`}>
            {post.category}
          </span>
          <h1 className={`text-2xl sm:text-3xl md:text-4xl font-syne font-extrabold tracking-tight mb-6 leading-[1.2] max-w-4xl ${
            light ? 'text-slate-900' : 'text-white'
          }`}>
            {post.title}
          </h1>
          
          <div className={`flex flex-wrap items-center gap-6 font-mono text-[10px] uppercase tracking-wider ${
            light ? 'text-slate-500' : 'text-slate-400'
          }`}>
            <span className={light ? 'text-indigo-600 font-bold' : 'text-[#22d3ee] font-bold'}>By HWC Engineering Division</span>
            <span className="flex items-center gap-1.5">
              <Calendar className={`size-3.5 ${light ? 'text-slate-400' : 'text-slate-500'}`} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className={`size-3.5 ${light ? 'text-slate-400' : 'text-slate-500'}`} />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className={`relative h-[250px] sm:h-[350px] md:h-[450px] w-full overflow-hidden rounded-3xl border mb-14 shadow-2xl ${
          light ? 'border-slate-200/60 bg-[#f8fafc]' : 'border-white/5 bg-[#030305]'
        }`}>
          <div className={`absolute inset-0 z-10 ${
            light ? 'bg-gradient-to-t from-white/10 via-transparent to-transparent' : 'bg-gradient-to-t from-[#030305]/20 via-transparent to-transparent'
          }`} />
          <Image 
            src={post.image} 
            alt={`${post.title} featured image`} 
            width={1200} 
            height={800} 
            quality={90} 
            priority
            className="w-full h-full object-cover opacity-80" 
          />
        </div>

        {/* 12-Column Responsive Layout Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Article Content Container Card (8 Columns) */}
          <div className={`lg:col-span-8 border rounded-3xl p-6 md:p-10 relative overflow-hidden ${
            light 
              ? 'bg-white/75 backdrop-blur-xl border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)] prose-light' 
              : 'bg-[#07070c]/55 backdrop-blur-2xl border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] prose-dark'
          }`}>
            <article className="font-sans">
              {children}
            </article>
          </div>

          {/* Sticky Sidebar Column (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6 sticky top-28 hidden lg:block">
            {/* Table of Contents Card */}
            {sections.length > 0 && (
              <div className={`border rounded-3xl p-6 shadow-2xl ${
                light 
                  ? 'bg-white/75 backdrop-blur-xl border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)]' 
                  : 'bg-[#07070c]/55 backdrop-blur-2xl border-white/5'
              }`}>
                <h3 className={`font-mono text-[10px] uppercase tracking-[0.2em] mb-4 pb-2 border-b ${
                  light ? 'text-slate-400 border-slate-100' : 'text-slate-400 border-white/5'
                }`}>
                  Table of Contents
                </h3>
                <nav className={`flex flex-col gap-1 ml-1 border-l ${
                  light ? 'border-slate-100' : 'border-white/5'
                }`}>
                  {sections.map((sec) => (
                    <a 
                      key={sec.id} 
                      href={`#${sec.id}`}
                      onClick={(e) => handleTocClick(e, sec.id)}
                      className={`text-xs font-sans py-2 pl-4 -ml-[1px] border-l transition-all duration-300 ${
                        activeId === sec.id 
                          ? light
                            ? 'text-indigo-600 border-indigo-600 font-medium bg-indigo-50/5'
                            : 'text-[#22d3ee] border-[#22d3ee] font-medium bg-[#22d3ee]/5' 
                          : light
                            ? 'text-slate-500 hover:text-slate-900 border-transparent hover:border-slate-200'
                            : 'text-slate-400 hover:text-white border-transparent hover:border-white/10'
                      }`}
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Author Profile Bio Card */}
            <div className={`border rounded-3xl p-6 shadow-2xl ${
              light 
                ? 'bg-white/75 backdrop-blur-xl border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)]' 
                : 'bg-[#07070c]/55 backdrop-blur-2xl border-white/5'
            }`}>
              <h3 className={`font-mono text-[10px] uppercase tracking-[0.2em] mb-4 pb-2 border-b ${
                light ? 'text-slate-400 border-slate-100' : 'text-slate-400 border-white/5'
              }`}>
                Publication Info
              </h3>
              <div className="flex items-center gap-3.5 mb-3">
                <div className={`size-8 rounded-full flex items-center justify-center font-syne font-bold text-xs text-white ${
                  light ? 'bg-gradient-to-br from-indigo-600 to-cyan-400' : 'bg-gradient-to-br from-[#8b5cf6] to-[#22d3ee]'
                }`}>
                  HWC
                </div>
                <div>
                  <h4 className={`text-xs font-syne font-bold ${light ? 'text-slate-800' : 'text-white'}`}>HWC Research Lab</h4>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Kolkata, WB</p>
                </div>
              </div>
              <p className={`text-xs font-sans font-light leading-relaxed ${light ? 'text-slate-500' : 'text-slate-400'}`}>
                Horizon Web Corp's specialized engineering division compiling research in WebGL, React Server Component architecture, and frontend scalability performance.
              </p>
            </div>

            {/* Share Post metadata */}
            <div className={`border rounded-3xl p-6 shadow-2xl ${
              light 
                ? 'bg-white/75 backdrop-blur-xl border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)]' 
                : 'bg-[#07070c]/55 backdrop-blur-2xl border-white/5'
            }`}>
              <h3 className={`font-mono text-[10px] uppercase tracking-[0.2em] mb-4 pb-2 border-b ${
                light ? 'text-slate-400 border-slate-100' : 'text-slate-400 border-white/5'
              }`}>
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className={`px-2.5 py-1 rounded font-mono text-[9px] uppercase tracking-[0.1em] border ${
                    light 
                      ? 'bg-slate-50 border-slate-200/80 text-slate-500' 
                      : 'bg-white/5 border border-white/10 text-slate-400'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* CTA Section */}
        <div className={`p-8 md:p-10 border rounded-3xl relative overflow-hidden mb-12 shadow-2xl ${
          light 
            ? 'bg-white/75 backdrop-blur-xl border-white/60' 
            : 'bg-[#07070c]/55 backdrop-blur-2xl border-white/5'
        }`}>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none ${
            light ? 'bg-[radial-gradient(ellipse,rgba(99,102,241,0.03)_0%,transparent_70%)]' : 'bg-[radial-gradient(ellipse,rgba(34,211,238,0.04)_0%,transparent_70%)]'
          }`} />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className={`text-xl font-syne font-bold mb-2 ${light ? 'text-slate-800' : 'text-white'}`}>Have a complex technical vision?</h3>
              <p className={`text-sm font-sans font-light max-w-md ${light ? 'text-slate-500' : 'text-slate-400'}`}>Our lab takes on a limited number of high-impact engineering projects. Let's build together.</p>
            </div>
            <PillButton href="/#contact" light={light}>
              Start a Project <ArrowRight className="w-4 h-4 ml-1" />
            </PillButton>
          </div>
        </div>

        {/* Back navigation */}
        <div className="flex justify-center mt-14">
          <PillButton href="/blogs" light={light}>
            Back to Blogs <ArrowRight className="w-4 h-4 ml-1" />
          </PillButton>
        </div>
      </div>
    </>
  );
};
