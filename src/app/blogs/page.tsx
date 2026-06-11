import React from 'react';
import type { Metadata } from 'next';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import { PillButton } from '../../components/PillButton';
import { ArrowRight } from '../../components/Icons';
import { BlogsGrid } from '../../components/BlogsGrid';
import { BLOG_POSTS } from '../../data/blogs';

export const metadata: Metadata = {
  title: 'Technical Journals & Engineering Blog',
  description: 'Insights from the frontier of web development. Technical articles on WebGL/Three.js, Next.js architectures, scroll-easing physics, WCAG accessibility, and WebGPU graphics compute.',
  alternates: {
    canonical: 'https://horizonwebcorp.com/blogs',
  },
};

export default function BlogsPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#fafaff] text-slate-800 flex flex-col overflow-x-hidden">
      {/* Subtle, fluid, non-linear mesh gradients, diagonal network edges, and dot grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Beautiful multi-layered mesh gradients mixing with white glows */}
        <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(99,102,241,0.18)_0%,transparent_60%),radial-gradient(at_50%_0%,rgba(6,182,212,0.12)_0%,transparent_50%),radial-gradient(at_100%_0%,rgba(139,92,246,0.15)_0%,transparent_60%),radial-gradient(at_50%_100%,rgba(99,102,241,0.08)_0%,transparent_50%)]" />
        {/* Subtle, static diagonal network lines & dot graph (less dense mesh/graph background) */}
        <div className="absolute inset-0 bg-mesh-graph opacity-[0.85]" />
      </div>

      <Nav light />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-28 flex-grow w-full">
        {/* Symmetric Header Stack */}
        <div className="mb-20 text-center flex flex-col items-center max-w-3xl mx-auto">
          <span className="font-mono text-[10px] text-indigo-600 uppercase tracking-[0.25em] mb-4 block">
            HWC Technical Journals
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            <span className="block whitespace-nowrap">Insights from the</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#06b6d4] whitespace-nowrap">
              Frontier of Web.
            </span>
          </h1>
          <p className="text-slate-600 font-sans text-[17px] leading-relaxed font-light">
            A technical publication detailing our research, design breakthroughs, and engineering updates in WebGL, React server architectures, and elite browser rendering pipelines.
          </p>
        </div>

        {/* Dynamic Bento Cards Grid */}
        <BlogsGrid posts={BLOG_POSTS} light />

        {/* Back to Home Navigation CTA */}
        <div className="mt-16 flex justify-center">
          <PillButton href="/" light>
            Back to Home <ArrowRight className="w-4 h-4 ml-1" />
          </PillButton>
        </div>
      </div>

      <Footer light />
    </div>
  );
}
