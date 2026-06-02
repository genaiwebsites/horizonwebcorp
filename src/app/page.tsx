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
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ContactModal } from '../components/ContactModal';


const PROJECTS = [
  {
    title: "Terranova Adventures",
    description: "Immersive small-group travel platform with custom 3D terrain topography visualization and theme-switching map interfaces.",
    tags: ["TravelTech", "WebGL Map", "Next.js"],
    link: "https://terranova-iota.vercel.app/",
    isExternal: true,
    image: "/work/terranova.png",
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
  },
  {
    title: "Jeevan Rekha RBO",
    description: "A premium immersive web experience crafted for health-conscious consumers, showcasing pure Rice Bran Oil.",
    tags: ["Consumer", "E-Commerce", "3D Web"],
    link: "https://rbo-spa.vercel.app/",
    isExternal: true,
    image: "/work/rbo_screenshot.jpg",
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
  },
  {
    title: "Magik DORB",
    description: "A high-end, immersive digital presence for AB Udyog's premium De-Oiled Rice Bran agricultural feed product.",
    tags: ["AgriTech", "E-Commerce"],
    link: "https://dorb.vercel.app",
    isExternal: true,
    image: "/work/dorb_screenshot.jpg",
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
  },
  {
    title: "Aura Protocol",
    description: "A decentralized autonomous architecture scaling to global users securely with zero latency smart contracts.",
    tags: ["Web3", "Security", "DeFi"],
    link: "#",
    isExternal: false,
    image: "/work/aura.png",
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
  },
  {
    title: "Skyscape Photography",
    description: "Aerial photography portfolio capturing the Earth's hidden geometry across India, featuring drone flight telemetry logs.",
    tags: ["Creative", "Photography", "Next.js"],
    link: "https://skyscape.vercel.app/",
    isExternal: true,
    image: "/work/skyscape.png",
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
  },
  {
    title: "Orbis Intelligence",
    description: "Geospatial AI platform translating natural language queries into interactive satellite map environments and dashboards.",
    tags: ["Geospatial AI", "Satellite GIS", "Next.js"],
    link: "https://orbis-henna.vercel.app/",
    isExternal: true,
    image: "/work/orbis.png",
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <WebGLBackground />
      <Nav />
      <Hero />


      <TrailDivider />

      {/* --- MODERN BENTO GRID UI (SERVICES) --- */}
      <section id="services" className="py-20 md:py-32 relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tight text-white leading-[1.05] mb-5">
              Capabilities built <br className="hidden md:block"/>
              <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#22d3ee]">for Scale.</em>
            </h2>
            <p className="text-slate-300 max-w-xl text-[17px] leading-relaxed font-light">
              Each service is crafted with obsessive attention to performance, aesthetics, and the business outcomes that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <BentoCard className="bg-[#07070c] border border-white/10" hoverEffect>
              <div className="w-[52px] h-[52px] rounded border border-white/10 bg-white/5 flex items-center justify-center mb-7 group-hover:border-[#22d3ee]/40 group-hover:bg-[#22d3ee]/5 transition-all duration-500">
                <GlobeIcon className="w-6 h-6 text-white group-hover:text-[#22d3ee] group-hover:rotate-[30deg] group-hover:scale-105 transition-all duration-500" />
              </div>
              <h3 className="text-[22px] font-syne font-bold text-white mb-4 tracking-[-0.02em] group-hover:text-[#22d3ee] transition-colors">UI/UX Architecture</h3>
              <p className="text-slate-300 text-[15px] leading-relaxed font-sans font-light mb-8">Interface systems designed with motion-first principles. We engineer custom web systems in React and obsess over every transition curve.</p>
              
              {/* Micro-interaction UI mockup */}
              <div className="mt-auto h-[112px] flex flex-col justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-[10px] text-slate-400 overflow-hidden relative group-hover:border-[#22d3ee]/20 group-hover:bg-white/[0.04] transition-all duration-500">
                <div className="flex justify-between items-center mb-2">
                  <span>TRANSITION FLOW</span>
                  <span className="text-[#22d3ee]">active</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-transparent to-[#22d3ee] rounded-full"
                    animate={{ x: ['-100%', '300%'] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <div className="flex justify-between items-center mt-2 text-[9px] text-slate-500">
                  <span>ease-out-expo</span>
                  <span>300ms</span>
                </div>
              </div>
            </BentoCard>

            <BentoCard className="bg-[#07070c] border border-white/10" hoverEffect>
              <div className="w-[52px] h-[52px] rounded border border-white/10 bg-white/5 flex items-center justify-center mb-7 group-hover:border-[#8b5cf6]/40 group-hover:bg-[#8b5cf6]/5 transition-all duration-500">
                <Layers className="w-6 h-6 text-white group-hover:text-[#8b5cf6] group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-500" />
              </div>
              <h3 className="text-[22px] font-syne font-bold text-white mb-4 tracking-[-0.02em] group-hover:text-[#8b5cf6] transition-colors">WebGL & 3D Experiences</h3>
              <p className="text-slate-300 text-[15px] leading-relaxed font-sans font-light mb-8">Three.js powered immersive environments that turn your brand into an interactive world. Particle systems, shaders, and physics.</p>
              
              {/* Micro-interaction UI mockup */}
              <div className="mt-auto h-[112px] flex flex-col justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-[10px] text-slate-400 overflow-hidden relative group-hover:border-[#8b5cf6]/20 group-hover:bg-white/[0.04] transition-all duration-500">
                <div className="flex justify-between items-center mb-2">
                  <span>3D SHADER CORE</span>
                  <span className="text-[#8b5cf6]">WebGL 2.0</span>
                </div>
                <div className="h-10 w-full flex items-center justify-center gap-1.5 relative">
                  {[1, 2, 3, 4, 5, 6, 7].map((bar, idx) => (
                    <motion.div
                      key={idx}
                      className="w-1.5 bg-gradient-to-t from-[#7c3aed] to-[#8b5cf6] rounded-full"
                      animate={{ 
                        height: ["12px", idx % 2 === 0 ? "32px" : "20px", "12px"] 
                      }}
                      transition={{ 
                        duration: 1.2 + idx * 0.15, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center mt-2 text-[9px] text-slate-500">
                  <span>vertex-array-buffer</span>
                  <span>60fps</span>
                </div>
              </div>
            </BentoCard>

            <BentoCard className="bg-[#07070c] border border-white/10" hoverEffect>
              <div className="w-[52px] h-[52px] rounded border border-white/10 bg-white/5 flex items-center justify-center mb-7 group-hover:border-[#10b981]/40 group-hover:bg-[#10b981]/5 transition-all duration-500">
                <Zap className="w-6 h-6 text-white group-hover:text-[#10b981] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
              </div>
              <h3 className="text-[22px] font-syne font-bold text-white mb-4 tracking-[-0.02em] group-hover:text-[#10b981] transition-colors">Performance Engineering</h3>
              <p className="text-slate-300 text-[15px] leading-relaxed font-sans font-light mb-8">Sub-second load times and 100/100 Lighthouse scores aren't aspirational here — they're the baseline. Edge delivery and ISR.</p>
              
              {/* Micro-interaction UI mockup */}
              <div className="mt-auto h-[112px] flex flex-col justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-[10px] text-slate-400 overflow-hidden relative group-hover:border-[#10b981]/20 group-hover:bg-white/[0.04] transition-all duration-500">
                <div className="flex justify-between items-center mb-2">
                  <span>LIGHTHOUSE INDEX</span>
                  <span className="text-[#10b981] font-bold">100/100</span>
                </div>
                <div className="flex justify-between items-center h-10 w-full px-2">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-300 text-[11px]">Perf</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-300 text-[11px]">A11y</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-300 text-[11px]">SEO</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-300 text-[11px]">PWA</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 text-[9px] text-slate-500">
                  <span>TTI: 0.18s</span>
                  <span>FID: 0ms</span>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      <TrailDivider />

      {/* --- PROCESS TIMELINE --- */}
      <section id="process" className="py-20 md:py-32 relative z-10 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24 flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tight text-white leading-[1.05] mb-5">
              Our <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#22d3ee]">Process</em> <br/> Is The Product.
            </h2>
            <p className="text-slate-300 font-sans max-w-xl mx-auto text-[17px] font-light">Four deliberate phases that eliminate guesswork and compound quality at every step.</p>
          </div>
          
          <div className="relative ml-6 md:ml-0 md:pl-16 space-y-20">
            <div className="absolute left-[0px] md:left-[24px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#7c3aed] via-[#06b6d4] to-transparent" />

            {[
              { num: "01", title: "Strategic Alignment", desc: "We begin with a two-week deep dive into your business model, user psychology, and competitive landscape. The output is a strategic brief.", tags: ["User Research", "Architecture Planning"] },
              { num: "02", title: "Motion-First Prototyping", desc: "Interactive prototypes that feel like the real product. We design in context — animated interactions, real content, and device-accurate previews.", tags: ["Interaction Design", "Prototyping"] },
              { num: "03", title: "Precision Engineering", desc: "Two-week sprints. Daily standup notes. We write production code from day one — no throwaway scaffolding, no tech debt.", tags: ["Next.js", "WebGL", "CI/CD"] },
              { num: "04", title: "Zero-Downtime Deployment", desc: "We manage the launch, monitor performance post-deploy, and provide 60 days of embedded support for ongoing product evolution.", tags: ["Monitoring", "A/B Testing"] }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-10 md:pl-0"
              >
                <div className="absolute w-6 h-6 rounded-full bg-[#030305] border border-white/20 -left-[12px] md:-left-[64px] top-1 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                
                <div className="font-mono text-[11px] text-[#22d3ee] tracking-[0.2em] mb-3 uppercase">Phase {step.num}</div>
                <h3 className="text-[28px] font-syne font-bold text-white mb-4 tracking-[-0.02em]">{step.title}</h3>
                <p className="text-slate-400 font-sans text-[15px] leading-[1.7] max-w-[600px] mb-6 font-light">{step.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-[10px] text-slate-300 uppercase tracking-[0.15em]">{tag}</span>
                  ))}
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
          <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tight text-white mb-5">
              Featured <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#22d3ee]">Odysseys.</em>
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-[17px] font-light">A curated selection of our most complex engineering feats.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <BentoCard 
                key={idx} 
                className="p-0! group h-[340px] md:h-[380px] w-full" 
                bgClass="bg-black" 
                hoverEffect
              >
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/65 to-transparent z-10" />
                  <Image 
                    src={project.image} 
                    alt={`${project.title} — ${project.description}`} 
                    width={800} 
                    height={800} 
                    quality={80} 
                    priority={idx === 0}
                    placeholder="blur" 
                    blurDataURL={project.blurDataURL}
                    className="w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" 
                  />
                </div>
                <div className="relative z-20 p-6 md:p-8 flex flex-col justify-end h-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full font-mono text-[9px] text-white uppercase tracking-widest backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-syne font-bold text-white mb-2 group-hover:text-[#22d3ee] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 font-sans font-light text-sm line-clamp-2 mb-5">
                    {project.description}
                  </p>
                  
                  {project.isExternal ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 text-[#22d3ee] font-semibold text-xs hover:text-white transition-colors w-max interactive-hover"
                    >
                      View Live Site <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a 
                      href={project.link} 
                      className="flex items-center gap-2 text-[#22d3ee] font-semibold text-xs hover:text-white transition-colors w-max interactive-hover"
                    >
                      View Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
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
        <div className="mb-16 md:mb-20 text-center flex flex-col items-center relative w-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tight text-white leading-[1.05] mb-5">
            Precision <br className="hidden md:block" />
            {/* AUDIT ISSUE (P2): Gradient text tell on emphasis terms. */}
            {/* RECOMMENDATION: Ensure it is restrained and matches corporate visual system. */}
            <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#22d3ee]">Capabilities.</em>
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-[17px] leading-relaxed font-sans font-light">
            We implement advanced browser standards directly into production code. Every project is engineered to combine next-gen visuals with measurable business outcomes.
          </p>
        </div>

        {/* Symmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative">
          {[
            {
              spec: "01 / GPU SHADERS",
              title: "WebGPU & Shader Dynamics",
              desc: "We build immersive 3D product showcases and interactive worlds using GPU compute shaders and custom TSL node materials. This captures user attention immediately and drives longer engagement.",
              tag: "Three.js / WebGL",
              benefit: "Result: 3.5x higher visitor engagement"
            },
            {
              spec: "02 / STRUCTURE",
              title: "Hardened UI Systems",
              desc: "Our interfaces are built on HTML5 semantic primitives and fully compliant with WCAG AA accessibility rules. Your site reaches every user seamlessly and stays protected against compliance risks.",
              tag: "Radix / WCAG",
              benefit: "Result: Full compliance & inclusive reach"
            },
            {
              spec: "03 / AESTHETICS",
              title: "Bespoke Design Systems",
              desc: "Custom layouts and font pairings engineered to reflect your brand's unique identity. We reject templated frameworks to ensure your digital presence commands premium positioning.",
              tag: "Theme / Tokens",
              benefit: "Result: Premium brand differentiation"
            },
            {
              spec: "04 / PERFORMANCE",
              title: "Frictionless Interaction Flow",
              desc: "Lag-free navigation, instant page loads, and zero cumulative layout shift (CLS). Built on Next.js to provide an optimized flow that directly boosts user conversions.",
              tag: "Motion / GSAP",
              benefit: "Result: Sub-second load, higher conversion"
            }
          ].map((pillar, i) => (
            <BentoCard key={i} className="min-h-[260px] bg-[#07070c] border border-white/10" hoverEffect>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{pillar.spec}</span>
                <span className="font-mono text-[10px] text-[#22d3ee] uppercase tracking-widest">{pillar.tag}</span>
              </div>
              <h3 className="text-xl font-syne font-bold text-white mb-3 tracking-[-0.01em] group-hover:text-[#22d3ee] transition-colors">{pillar.title}</h3>
              <p className="text-slate-300 font-sans text-sm leading-relaxed font-light mb-8">{pillar.desc}</p>

              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-400 group-hover:text-slate-200 transition-colors">
                <span className="text-slate-500">OUTCOME</span>
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
      <section id="clients" className="py-32 relative z-10 text-center px-6 scroll-mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(6,182,212,0.15)_0%,transparent_70%)] pointer-events-none" />

          <h2 className="text-[clamp(44px,6vw,90px)] font-syne font-extrabold text-white mb-8 tracking-[-0.03em] leading-[0.95] relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Your Vision.<br/>Our Craft.
          </h2>
          <p className="text-[18px] text-slate-300 mb-14 relative z-10 font-sans font-light">
            We take on 4 new projects per quarter. <strong className="text-white font-medium">2 spots open for Q3 2026.</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <PillButton primary onClick={() => setIsModalOpen(true)}>
              Start a Project
            </PillButton>
            <PillButton href="#work">
              View Case Studies <ArrowRight className="w-4 h-4 ml-1" />
            </PillButton>
          </div>
        </motion.div>
      </section>

      <Footer />

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
