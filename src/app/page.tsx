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
    image: "/work/rbo.png",
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
  },
  {
    title: "Magik DORB",
    description: "A high-end, immersive digital presence for AB Udyog's premium De-Oiled Rice Bran agricultural feed product.",
    tags: ["AgriTech", "E-Commerce"],
    link: "https://dorb.vercel.app",
    isExternal: true,
    image: "/work/magik.png",
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
  },
  {
    title: "AB Udyog",
    description: "Corporate presence and brand platform for AB Udyog, showcasing premium physically refined Rice Bran Oil and wellness metrics.",
    tags: ["Corporate", "Consumer", "Edible Oil"],
    link: "https://rbo-process.vercel.app/",
    isExternal: true,
    image: "/work/abudyog.png",
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

      {/* --- METRICS GLASS PANEL (Counter Section) --- */}
      <section className="py-12 md:py-16 relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#06060c]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {[
            { value: 42, prefix: '', suffix: '+', label: 'Immersive Deploys', sub: 'Digital experiences shipped globally' },
            { value: 100, prefix: '', suffix: '%', label: 'Performance Score', sub: 'Lighthouse Core Web Vitals index' },
            { value: 3.5, prefix: '', suffix: 'x', label: 'Average Visitor Lift', sub: 'Audited increase in user attention', decimals: 1 },
            { value: 98, prefix: '', suffix: '%', label: 'Partner Retention', sub: 'Sustained engineering collaborations' }
          ].map((metric, i) => (
            <div key={i} className="flex flex-col text-left group relative">
              {/* Sleek vertical separator lines */}
              {i > 0 && <div className="hidden md:block absolute left-[-12px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-white/0 via-white/5 to-white/0" />}
              
              <div className="text-3xl md:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 tracking-tight leading-none group-hover:text-[#22d3ee] transition-colors duration-300 mb-2">
                <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals || 0} />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-slate-400 group-hover:text-white transition-colors duration-500 mb-1">{metric.label}</div>
              <div className="text-[9px] text-slate-500 font-sans font-light leading-relaxed">{metric.sub}</div>
            </div>
          ))}
        </div>
      </section>


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
            <BentoCard className="border border-white/10" bgClass="bg-[#07070c]/30 backdrop-blur-xl" hoverEffect>
              <div className="w-[52px] h-[52px] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-7 backdrop-blur-sm group-hover:border-[#22d3ee]/40 group-hover:bg-[#22d3ee]/10 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-500">
                <GlobeIcon className="w-6 h-6 text-white group-hover:text-[#22d3ee] group-hover:rotate-[30deg] group-hover:scale-105 transition-all duration-500" />
              </div>
              <h3 className="text-[22px] font-syne font-bold text-white mb-4 tracking-[-0.02em] group-hover:text-[#22d3ee] transition-colors">UI/UX Architecture</h3>
              <p className="text-slate-300 text-[15px] leading-relaxed font-sans font-light mb-8">Interface systems designed with motion-first principles. We engineer custom web systems in React and obsess over every transition curve.</p>
              
              {/* Micro-interaction UI mockup */}
              <div className="mt-auto h-[112px] flex flex-col justify-between p-4 rounded-xl bg-white/[0.01] backdrop-blur-[2px] border border-white/5 font-mono text-[10px] text-slate-400 overflow-hidden relative group-hover:border-[#22d3ee]/20 group-hover:bg-[#22d3ee]/5 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.05)] transition-all duration-500">
                <div className="flex justify-between items-center mb-2">
                  <span>TRANSITION FLOW</span>
                  <span className="text-[#22d3ee] font-medium tracking-wider">active</span>
                </div>
                <div className="flex items-center justify-center flex-grow py-1">
                  <svg className="w-full h-10 overflow-visible" viewBox="0 0 100 40">
                    <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    <line x1="50" y1="0" x2="50" y2="40" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    <path d="M 0,35 C 30,35 40,5 100,5" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
                    <motion.path 
                      d="M 0,35 C 30,35 40,5 100,5" 
                      fill="none" 
                      stroke="url(#uxGradient)" 
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      className="drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                    />
                    <defs>
                      <linearGradient id="uxGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex justify-between items-center mt-2 text-[9px] text-slate-500">
                  <span>ease-out-expo</span>
                  <span>300ms</span>
                </div>
              </div>
            </BentoCard>

            <BentoCard className="border border-white/10" bgClass="bg-[#07070c]/30 backdrop-blur-xl" hoverEffect>
              <div className="w-[52px] h-[52px] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-7 backdrop-blur-sm group-hover:border-[#8b5cf6]/40 group-hover:bg-[#8b5cf6]/10 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-500">
                <Layers className="w-6 h-6 text-white group-hover:text-[#8b5cf6] group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-500" />
              </div>
              <h3 className="text-[22px] font-syne font-bold text-white mb-4 tracking-[-0.02em] group-hover:text-[#8b5cf6] transition-colors">WebGL & 3D Experiences</h3>
              <p className="text-slate-300 text-[15px] leading-relaxed font-sans font-light mb-8">Three.js powered immersive environments that turn your brand into an interactive world. Particle systems, shaders, and physics.</p>
              
              {/* Micro-interaction UI mockup */}
              <div className="mt-auto h-[112px] flex flex-col justify-between p-4 rounded-xl bg-white/[0.01] backdrop-blur-[2px] border border-white/5 font-mono text-[10px] text-slate-400 overflow-hidden relative group-hover:border-[#8b5cf6]/20 group-hover:bg-[#8b5cf6]/5 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.05)] transition-all duration-500">
                <div className="flex justify-between items-center mb-2">
                  <span>3D SHADER CORE</span>
                  <span className="text-[#8b5cf6] font-medium tracking-wider">WebGL 2.0</span>
                </div>
                <div className="h-10 w-full flex items-center justify-between px-2 relative">
                  {[...Array(12)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] shadow-[0_0_6px_#8b5cf6]"
                      animate={{ 
                        y: ["0px", "-14px", "0px"],
                        scale: [0.8, 1.3, 0.8],
                        opacity: [0.4, 1, 0.4]
                      }}
                      transition={{ 
                        duration: 1.6, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: idx * 0.12
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

            <BentoCard className="border border-white/10" bgClass="bg-[#07070c]/30 backdrop-blur-xl" hoverEffect>
              <div className="w-[52px] h-[52px] rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-7 backdrop-blur-sm group-hover:border-[#10b981]/40 group-hover:bg-[#10b981]/10 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-500">
                <Zap className="w-6 h-6 text-white group-hover:text-[#10b981] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
              </div>
              <h3 className="text-[22px] font-syne font-bold text-white mb-4 tracking-[-0.02em] group-hover:text-[#10b981] transition-colors">Performance Engineering</h3>
              <p className="text-slate-300 text-[15px] leading-relaxed font-sans font-light mb-8">Sub-second load times and 100/100 Lighthouse scores aren't aspirational here — they're the baseline. Edge delivery and ISR.</p>
              
              {/* Micro-interaction UI mockup */}
              <div className="mt-auto h-[112px] flex flex-col justify-between p-4 rounded-xl bg-white/[0.01] backdrop-blur-[2px] border border-white/5 font-mono text-[10px] text-slate-400 overflow-hidden relative group-hover:border-[#10b981]/20 group-hover:bg-[#10b981]/5 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-all duration-500">
                <div className="flex justify-between items-center mb-2">
                  <span>LIGHTHOUSE INDEX</span>
                  <span className="text-[#10b981] font-bold">100/100</span>
                </div>
                <div className="flex items-center gap-4 flex-grow py-1">
                  <div className="relative size-10 flex items-center justify-center shrink-0">
                    <svg className="size-10 -rotate-90 overflow-visible" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2.5" />
                      <motion.circle 
                        cx="18" 
                        cy="18" 
                        r="16" 
                        fill="none" 
                        stroke="#10b981" 
                        strokeWidth="2.5" 
                        strokeDasharray="100, 100"
                        animate={{ strokeDashoffset: [100, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="drop-shadow-[0_0_6px_rgba(16,185,129,0.5)]"
                      />
                    </svg>
                    <span className="absolute text-[10px] font-mono font-bold text-[#10b981]">100</span>
                  </div>
                  <div className="flex flex-col gap-0.5 justify-center">
                    <span className="font-mono text-[8px] text-slate-500 uppercase tracking-wider">ENGINE SPEED</span>
                    <div className="flex flex-wrap gap-x-2 gap-y-0.5">
                      <span className="flex items-center gap-1 text-[9px] text-slate-300 font-mono"><span className="size-1 bg-[#10b981] rounded-full animate-pulse" /> FID: 0ms</span>
                      <span className="flex items-center gap-1 text-[9px] text-slate-300 font-mono"><span className="size-1 bg-[#10b981] rounded-full" /> CLS: 0.0</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 text-[9px] text-slate-500">
                  <span>TTI: 0.18s</span>
                  <span>FID: 0ms</span>
                </div>
              </div>
            </BentoCard>
          </div>        </div>
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
            {[
              { 
                num: "01", 
                title: "Discovery & Spatial Architecture", 
                desc: "We define your technical and creative goals, mapping out an elite user journey, precise layout grids, and Three.js/WebGL scene architecture to establish a solid performance baseline.", 
                tags: ["Spatial Mapping", "Design Tokens"] 
              },
              { 
                num: "02", 
                title: "Interactive Prototyping", 
                desc: "We build fluid, motion-first interactive prototypes directly in code. You experience the exact physics of scroll triggers, custom cursor dynamics, and WebGL particle systems in real-time.", 
                tags: ["Interactive Shaders", "Physics Easing"] 
              },
              { 
                num: "03", 
                title: "Precision Engineering", 
                desc: "We engineer clean, semantic React/Next.js architectures, ensuring sub-second page loads, WCAG AA accessibility, and perfect rendering pipeline isolation for 100/100 Lighthouse scores.", 
                tags: ["Next.js Architecture", "WCAG AA Compliance", "TypeScript"] 
              },
              { 
                num: "04", 
                title: "Optimization & Deployment", 
                desc: "We implement edge network delivery and continuous post-launch performance audits. We fine-tune rendering pipelines and asset delivery to guarantee elite visitor engagement and uptime.", 
                tags: ["Edge CDN", "Performance SLA"] 
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
                  <div className="absolute left-[0px] md:left-[-32px] top-[12px] bottom-[-92px] w-[1px] bg-gradient-to-b from-[#7c3aed]/40 to-[#06b6d4]/40 group-hover:from-[#a78bfa] group-hover:to-[#22d3ee] transition-all duration-500 z-0" />
                )}

                {/* Dot marker */}
                <div className="absolute w-6 h-6 rounded-full bg-[#030305] border border-white/20 -left-[12px] md:-left-[44px] top-0 flex items-center justify-center group-hover:border-[#22d3ee]/60 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.2)] transition-all duration-500 z-10">
                  <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-[#22d3ee] group-hover:scale-125 transition-all duration-500" />
                </div>
                
                {/* Content wrapper with translate animation */}
                <div className="transform-gpu transition-all duration-500 group-hover:translate-x-2">
                  <div className="font-mono text-[11px] text-[#22d3ee]/70 tracking-[0.2em] mb-3 uppercase group-hover:text-[#22d3ee] transition-colors duration-300">
                    Phase {step.num}
                  </div>
                  <h3 className="text-[28px] font-syne font-bold text-white mb-4 tracking-[-0.02em] group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 font-sans text-[15px] leading-[1.7] max-w-[600px] mb-6 font-light group-hover:text-slate-300 transition-colors duration-300">
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-[10px] text-slate-400 uppercase tracking-[0.15em] group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 transition-all duration-300"
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
                        <span key={tag} className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] text-slate-300 uppercase tracking-widest backdrop-blur-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-syne font-bold text-white mb-2 group-hover:text-[#22d3ee] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 font-sans font-light text-xs sm:text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
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
      <section id="contact" className="py-32 relative z-10 text-center px-6 scroll-mt-20">
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
