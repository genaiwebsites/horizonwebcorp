'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GlobeIcon, Layers, Zap, ArrowRight, ExternalLink } from '../components/Icons';
import { WebGLBackground } from '../components/WebGLBackground';
import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { BentoCard } from '../components/BentoCard';
import { PillButton } from '../components/PillButton';
import { TrailDivider } from '../components/TrailDivider';
import { Footer } from '../components/Footer';
import { TechMarquee } from '../components/TechMarquee';
import { ContactModal } from '../components/ContactModal';
import { Preloader } from '../components/Preloader';
import { DesignSystemSpecimen } from '../components/specimens/DesignSystemSpecimen';
import { WebGLSpecimen } from '../components/specimens/WebGLSpecimen';
import { PerformanceSpecimen } from '../components/specimens/PerformanceSpecimen';


const PROJECTS = [
  {
    title: "The Swiss Waffle Co.",
    description: "Layered dessert web experience crafted for Lucknow's late-night waffle brand, featuring interactive 3D WebGL waffle layers, real-time hours dial, and rich menu showcase.",
    tags: ["FoodTech", "3D WebGL", "Next.js"],
    link: "http://theswisswaffle.com/",
    isExternal: true,
    image: "/work/the-swiss-waffle-co.webp",
    blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACQAQCdASoQAAgABUB8JbACdACCOhAA8geAm5I0moxxYIPoHPm0HKjZbeWZw161v4efH2zYlD8QT7AA"
  },
  {
    title: "Jeevan Rekha",
    description: "Digital brand platform crafted for AB Udyog's premium edible oils, featuring interactive product showcases, culinary pairing guides, and verified nutritional analysis.",
    tags: ["FMCG", "Consumer Brand", "Next.js"],
    link: "https://jeevanrekhafoods.com/",
    isExternal: true,
    image: "/work/jeevan-rekha-foods.webp",
    blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoQAAgABUB8JagCdAEPgXgJ/GAA/ujyjx0CJvLRGagbMU+ZjQTGSkK+UUsIqEuqjtVBWXX/CwE3XwCK2CY3y4AA"
  },
  {
    title: "Skyscape Photography",
    description: "Fine art aerial photography portfolio capturing the Earth's hidden geometries across India, featuring telemetric flight HUD logs and elevation-curated descent.",
    tags: ["Creative", "Photography", "Next.js"],
    link: "https://www.skyscapephoto.com/",
    isExternal: true,
    image: "/work/skyscape-photography.webp",
    blurDataURL: "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAABQAgCdASoQAAgABUB8JYgCdH8AGZoUtIp10AAA/tnh1nW+cnP8gTfVYRPL7v0cwAA="
  },
  {
    title: "AB Udyog",
    description: "Corporate industrial platform for Eastern India's premier agro-refinery complex, showcasing 300 TPD continuous extraction, physical refining workflows, and bio-derivatives.",
    tags: ["Corporate", "Agro-Refinery", "Next.js"],
    link: "https://www.abudyog.in/",
    isExternal: true,
    image: "/work/ab-udyog.webp",
    blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoQAAgABUB8JYwC7ADo3+lWAP7QzdwHX9YxDXh6PkF+fo3+DomSxjTXFj32AA=="
  },
  {
    title: "Hansha Tradecom",
    description: "B2B agri-commodity trading platform aggregating rice bran, DORB, DDGS, and grain packaging directly from Bengal's mill gates with verified assay certification.",
    tags: ["AgriCommodities", "B2B Trade", "Next.js"],
    link: "https://hanshatradecom.com/",
    isExternal: true,
    image: "/work/hansha-tradecom.webp",
    blurDataURL: "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoQAAgABUB8JYwAAudcE2EgAP2piGPadg5HgQCzLuK5YwNTTsCHiJ5diF1Pw1w6XNdkAA=="
  },
  {
    title: "Synapse",
    description: "Enterprise agentic vault featuring zero-scrape grounding, multimodal reasoning across 1M+ context windows, and private tenant-isolated business memory.",
    tags: ["Enterprise AI", "Agentic Vault", "Next.js"],
    link: "https://synapse-prod.vercel.app",
    isExternal: true,
    image: "/work/synapse.webp",
    blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAACwAQCdASoQAAgAAoBCJQAAUmvJYPAAAP78aW1UmShIsOKl4ewq3i2eELGughyLN7ui6AwWmORoCrvTB3n0tRbne3R+2yTmNHAAAA=="
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setIsReady(true)} />
      <WebGLBackground />
      <Nav />
      <Hero isReady={isReady} />

      {/* --- STUDIO ARCHITECTURAL STANDARDS --- */}
      <section className="py-10 md:py-14 relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#06060c]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {[
            {
              value: "< 0.8s",
              label: "Paint SLA",
              note: "Edge SSR for instant initial load."
            },
            {
              value: "100 / 100",
              label: "Core Web Vitals",
              note: "Audited green across all viewports."
            },
            {
              value: "Handcrafted",
              label: "Zero Builders",
              note: "Bespoke code without template bloat."
            },
            {
              value: "Direct",
              label: "Senior Engineering",
              note: "Founder-led delivery from day one."
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col text-left group relative">
              {i > 0 && <div className="hidden lg:block absolute left-[-12px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-white/0 via-white/5 to-white/0" />}
              
              <div className="text-2xl md:text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/80 tracking-tight leading-none group-hover:text-white transition-colors duration-300 mb-2">
                {item.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-[0.14em] text-slate-300 group-hover:text-white transition-colors duration-300 mb-1 font-semibold">
                {item.label}
              </div>
              <div className="text-xs text-slate-400 font-sans font-light leading-relaxed">
                {item.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      <TrailDivider />

      {/* --- MODERN BENTO GRID UI (SERVICES) --- */}
      <section id="services" className="py-20 md:py-32 relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-20 text-center flex flex-col items-center max-w-3xl mx-auto px-6">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.25em] mb-4 font-semibold">
              01 / CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tight text-white leading-[1.08] mb-5">
              Core Capabilities <br className="hidden md:block"/>
              <span className="text-slate-400 font-light">Built For High Scale.</span>
            </h2>
            <p className="text-slate-300 font-sans max-w-xl mx-auto text-[17px] leading-relaxed font-light">
              Bespoke digital storefronts, design systems, and WebGL architectures engineered to elevate brand authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <BentoCard className="border border-white/10" bgClass="bg-[#07070c]/30 backdrop-blur-xl" hoverEffect>
              <div className="w-[52px] h-[52px] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-7 backdrop-blur-sm group-hover:border-white/30 group-hover:bg-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.08)] transition-all duration-500">
                <GlobeIcon className="w-6 h-6 text-slate-300 group-hover:text-white group-hover:rotate-[20deg] group-hover:scale-105 transition-all duration-500" />
              </div>
              <h3 className="text-[22px] font-syne font-bold text-white mb-4 tracking-[-0.02em] group-hover:text-slate-100 transition-colors">Bespoke UI/UX & Design Systems</h3>
              <p className="text-slate-300 text-[15px] leading-relaxed font-sans font-light mb-8">High-conversion digital storefronts and design tokens. We architect custom typography scales, accessible color palettes, and editorial bento layouts tailored to your brand.</p>
              
              <DesignSystemSpecimen />
            </BentoCard>

            <BentoCard className="border border-white/10" bgClass="bg-[#07070c]/30 backdrop-blur-xl" hoverEffect>
              <div className="w-[52px] h-[52px] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-7 backdrop-blur-sm group-hover:border-white/30 group-hover:bg-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.08)] transition-all duration-500">
                <Layers className="w-6 h-6 text-slate-300 group-hover:text-white group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-500" />
              </div>
              <h3 className="text-[22px] font-syne font-bold text-white mb-4 tracking-[-0.02em] group-hover:text-slate-100 transition-colors">Interactive 3D & WebGL</h3>
              <p className="text-slate-300 text-[15px] leading-relaxed font-sans font-light mb-8">Purposeful Three.js product visualizers, interactive layer depth, and fluid scroll physics that elevate your brand story without compromising initial page load speed.</p>
              
              <WebGLSpecimen />
            </BentoCard>

            <BentoCard className="border border-white/10" bgClass="bg-[#07070c]/30 backdrop-blur-xl" hoverEffect>
              <div className="w-[52px] h-[52px] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-7 backdrop-blur-sm group-hover:border-white/30 group-hover:bg-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.08)] transition-all duration-500">
                <Zap className="w-6 h-6 text-slate-300 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
              </div>
              <h3 className="text-[22px] font-syne font-bold text-white mb-4 tracking-[-0.02em] group-hover:text-slate-100 transition-colors">Performance Engineering</h3>
              <p className="text-slate-300 text-[15px] leading-relaxed font-sans font-light mb-8">Sub-second load times and 100/100 Core Web Vitals are built directly into our code. Full-stack Next.js App Router, edge CDN routing, and clean semantic markup.</p>
              
              <PerformanceSpecimen />
            </BentoCard>
          </div>
        </div>
      </section>

      <TrailDivider />

      {/* --- PROCESS TIMELINE --- */}
      <section id="process" className="py-20 md:py-32 relative z-10 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 md:mb-20 text-center flex flex-col items-center max-w-3xl mx-auto px-6">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.25em] mb-4 font-semibold">
              02 / METHODOLOGY
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tight text-white leading-[1.08] mb-5">
              Our Process <br className="hidden md:block" />
              <span className="text-slate-400 font-light">Is The Product.</span>
            </h2>
            <p className="text-slate-300 font-sans max-w-xl mx-auto text-[17px] leading-relaxed font-light">
              Four deliberate phases that eliminate guesswork, enforce strict engineering benchmarks, and compound quality.
            </p>
          </div>
          
          <div className="relative ml-6 md:ml-0 md:pl-16 space-y-20">
            {[
              { 
                num: "01", 
                title: "Discovery & Strategic Alignment", 
                desc: "We define your core business objectives, target audience psychology, and technical scope to map out an airtight user journey and content hierarchy before touching code.", 
                tags: ["Positioning", "Information Architecture", "User Journeys"] 
              },
              { 
                num: "02", 
                title: "Art Direction & Interactive Design", 
                desc: "We build bespoke visual systems, typography hierarchies, and code prototypes. You test and experience the real motion physics, responsive layout, and page dynamics in real time.", 
                tags: ["Bespoke UI Systems", "Typography", "Motion Physics"] 
              },
              { 
                num: "03", 
                title: "Production-Grade Engineering", 
                desc: "We engineer clean, semantic Next.js and TypeScript architectures, ensuring sub-second page loads, WCAG AA accessibility, and perfect rendering pipeline isolation.", 
                tags: ["Next.js App Router", "TypeScript", "WCAG AA Compliance"] 
              },
              { 
                num: "04", 
                title: "Launch & Performance Verification", 
                desc: "We run comprehensive Core Web Vitals audits, configure Google Search Console and analytics tracking, and deploy across global edge CDN networks for an impactful launch.", 
                tags: ["Edge CDN", "Search Console", "Zero Downtime"] 
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-10 md:pl-0 group"
              >
                {/* Outgoing timeline line segment to next step */}
                {i < 3 && (
                  <div className="absolute left-[0px] md:left-[-32px] top-[12px] bottom-[-92px] w-[1px] bg-gradient-to-b from-white/10 to-white/5 group-hover:from-white/30 group-hover:to-white/10 transition-all duration-500 z-0" />
                )}

                {/* Dot marker */}
                <div className="absolute w-6 h-6 rounded-full bg-[#030305] border border-white/20 -left-[12px] md:-left-[44px] top-0 flex items-center justify-center group-hover:border-white/50 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-500 z-10">
                  <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white group-hover:scale-125 transition-all duration-500" />
                </div>
                
                {/* Content wrapper with translate animation */}
                <div className="transform-gpu transition-all duration-500 group-hover:translate-x-2">
                  <div className="font-mono text-xs text-slate-400 tracking-[0.2em] mb-3 uppercase font-semibold group-hover:text-white transition-colors duration-300">
                    Phase {step.num}
                  </div>
                  <h3 className="text-[26px] md:text-[28px] font-syne font-bold text-white mb-3 tracking-[-0.02em] group-hover:text-slate-200 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 font-sans text-base leading-[1.7] max-w-[620px] mb-5 font-light">
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-xs text-slate-300 uppercase tracking-[0.12em] group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 transition-all duration-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrailDivider />

      {/* --- WORK SECTION (NEW PORTFOLIO) --- */}
      <section id="work" className="py-20 md:py-32 relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-20 text-center flex flex-col items-center max-w-3xl mx-auto px-6">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.25em] mb-4 font-semibold">
              03 / PORTFOLIO
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tight text-white leading-[1.08] mb-5">
              Selected Deployments <br className="hidden md:block" />
              <span className="text-slate-400 font-light">Shipped To Scale.</span>
            </h2>
            <p className="text-slate-300 font-sans max-w-xl mx-auto text-[17px] leading-relaxed font-light">
              Bespoke digital platforms, interactive web experiences, and hardened UI systems engineered for production.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <BentoCard 
                key={idx} 
                className="p-0! group flex flex-col h-[400px] md:h-[440px] w-full overflow-hidden" 
                bgClass="bg-[#07070c]" 
                hoverEffect
              >
                {/* Visual Preview Container */}
                <div className="relative h-[180px] md:h-[210px] w-full bg-slate-950 border-b border-white/5 overflow-hidden">
                  {/* Browser Header Mockup */}
                  <div className="absolute top-0 left-0 w-full h-6 bg-white/[0.03] border-b border-white/5 flex items-center px-3 gap-1.5 z-10">
                    <span className="size-1.5 rounded-full bg-rose-500/20 group-hover:bg-rose-500 group-hover:shadow-[0_0_6px_#f43f5e] transition-all duration-500" />
                    <span className="size-1.5 rounded-full bg-amber-500/20 group-hover:bg-amber-500 group-hover:shadow-[0_0_6px_#f59e0b] transition-all duration-500 delay-[75ms]" />
                    <span className="size-1.5 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500 group-hover:shadow-[0_0_6px_#10b981] transition-all duration-500 delay-[150ms]" />
                  </div>
                  
                  {/* Image Showcase */}
                  <div className="absolute inset-x-0 top-6 bottom-0 bg-[#050508] overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={`${project.title} — ${project.description}`} 
                      fill
                      sizes="(max-w-7xl) 33vw, 50vw"
                      priority={idx === 0}
                      className="object-cover object-top scale-[1.03] group-hover:scale-[1.06] transition-all duration-700 z-0 opacity-85 group-hover:opacity-100 mix-blend-normal" 
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between flex-grow relative z-20">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-xs text-slate-200 uppercase tracking-wider backdrop-blur-md font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-syne font-bold text-white mb-2 group-hover:text-slate-200 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 font-sans font-light text-sm line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    {project.isExternal ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2 text-slate-300 font-semibold text-xs hover:text-white transition-colors w-max interactive-hover"
                      >
                        View Live Site <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <a 
                        href={project.link} 
                        className="flex items-center gap-2 text-slate-300 font-semibold text-xs hover:text-white transition-colors w-max interactive-hover"
                      >
                        View Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </BentoCard>
            ))}          </div>
        </div>
      </section>

      <TrailDivider />

      <TechMarquee />

      <TrailDivider />

      {/* --- PRECISION STANDARDS SECTION (Capabilities based on installed skills) --- */}
      <section className="py-20 md:py-32 relative z-10 max-w-7xl mx-auto px-6">
        {/* Symmetric Header Stack */}
        <div className="mb-16 md:mb-20 text-center flex flex-col items-center max-w-3xl mx-auto px-6 relative w-full">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.25em] mb-4 font-semibold">
            05 / BENCHMARKS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tight text-white leading-[1.08] mb-5">
            Engineering Benchmarks <br className="hidden md:block" />
            <span className="text-slate-400 font-light">Built Into Production.</span>
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-[17px] leading-relaxed font-sans font-light">
            Advanced browser standards implemented directly into production code to combine next-gen visuals with SLA guarantees.
          </p>
        </div>

        {/* Symmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative">
          {[
            {
              spec: "01 / INTERACTIVE 3D",
              title: "Three.js & Spatial Dynamics",
              desc: "We build immersive 3D product showcases and interactive scenes using Three.js and custom shader materials. This captures visitor attention immediately and increases session engagement.",
              tag: "Three.js / WebGL",
              benefit: "Result: Deep visitor engagement & brand distinction"
            },
            {
              spec: "02 / STRUCTURE",
              title: "Hardened UI Systems",
              desc: "Our interfaces are built on HTML5 semantic primitives and fully compliant with WCAG AA accessibility standards. Your site reaches every user seamlessly and maintains zero compliance risk.",
              tag: "Semantics / WCAG AA",
              benefit: "Result: Universal access & full compliance"
            },
            {
              spec: "03 / AESTHETICS",
              title: "Bespoke Design Systems",
              desc: "Custom layouts, typography pairings, and design token architectures engineered for your unique identity. We reject templated themes to ensure your digital presence commands premium pricing.",
              tag: "Design Tokens / Typography",
              benefit: "Result: Premium market differentiation"
            },
            {
              spec: "04 / PERFORMANCE",
              title: "Frictionless Interaction Flow",
              desc: "Sub-second initial loads, instant client-side routing, and zero cumulative layout shift (CLS). Hand-engineered in Next.js to provide an effortless experience that boosts customer conversions.",
              tag: "Next.js / Edge SSR",
              benefit: "Result: Sub-second load & higher conversion"
            }
          ].map((pillar, i) => (
            <BentoCard key={i} className="min-h-[260px] bg-[#07070c] border border-white/10" hoverEffect>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider font-medium">{pillar.spec}</span>
                <span className="font-mono text-xs text-slate-300 uppercase tracking-wider font-semibold">{pillar.tag}</span>
              </div>
              <h3 className="text-xl font-syne font-bold text-white mb-3 tracking-[-0.01em] group-hover:text-slate-200 transition-colors">{pillar.title}</h3>
              <p className="text-slate-300 font-sans text-sm leading-relaxed font-light mb-8">{pillar.desc}</p>

              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-slate-300 group-hover:text-white transition-colors">
                <span className="text-slate-400 uppercase tracking-wider font-medium">OUTCOME</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="relative flex size-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full size-1.5 bg-emerald-400"></span>
                  </span>
                  {pillar.benefit}
                </span>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      <TrailDivider />

      {/* --- MODERN CTA SECTION --- */}
      <section id="contact" className="py-20 md:py-32 relative z-10 text-center px-6 scroll-mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none" />

          <span className="font-mono text-xs text-slate-400 uppercase tracking-[0.25em] mb-4 font-semibold block relative z-10">
            06 / ENGAGEMENT
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold text-white mb-6 tracking-tight leading-[1.05] relative z-10">
            Your Vision. <br className="hidden md:block" />
            <span className="text-slate-400 font-light">Our Craft.</span>
          </h2>
          <p className="text-slate-300 font-sans max-w-xl mx-auto text-[17px] leading-relaxed font-light mb-10 relative z-10">
            We take on 4 select projects per quarter. <strong className="text-white font-medium">2 spots open for Q4 2026.</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <PillButton primary onClick={() => setIsModalOpen(true)}>
              Start a Project
            </PillButton>
            <PillButton href="/blogs">
              Read Insights <ArrowRight className="w-4 h-4 ml-1" />
            </PillButton>
          </div>
        </motion.div>
      </section>

      <Footer />

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
