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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <WebGLBackground />
      <Nav />
      <Hero />

      {/* --- METRICS BAR --- */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-[#0A0A0E]/80 backdrop-blur-3xl border border-white/5 rounded-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/5 shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
          {[
            { value: 14, prefix: '', suffix: '+', label: 'Projects Shipped' },
            { value: 100, prefix: '', suffix: '/100', label: 'Lighthouse Score' },
            { value: 30, prefix: '< ', suffix: 'ms', label: 'Global Edge Latency' },
            { value: 99, prefix: '', suffix: '%', label: 'Client Satisfaction' }
          ].map((metric, i) => (
            <div key={i} className="px-8 py-10 relative overflow-hidden group interactive-hover transition-colors duration-500 hover:bg-white/[0.02]">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="text-3xl md:text-4xl font-syne font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 mb-2 leading-none relative z-10 group-hover:text-white transition-colors duration-300">
                <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </div>
              <div className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.15em] text-slate-400 group-hover:text-[#22d3ee] transition-colors duration-500 relative z-10">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <TrailDivider />

      {/* --- MODERN BENTO GRID UI (SERVICES) --- */}
      <section id="services" className="py-20 md:py-32 relative z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 mb-5 w-full">
              <div className="h-[1px] w-full max-w-[40px] bg-white/10" />
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-[0.25em]">What We Do</span>
              <div className="h-[1px] w-full max-w-[40px] bg-white/10" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tight text-white leading-[1.05] mb-5">
              Capabilities built <br className="hidden md:block"/>
              <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#22d3ee]">for Scale.</em>
            </h2>
            <p className="text-slate-300 max-w-xl text-[17px] leading-relaxed font-light">
              Each service is crafted with obsessive attention to performance, aesthetics, and the business outcomes that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 border border-white/5 rounded overflow-hidden p-1 shadow-2xl">
            <BentoCard className="!rounded-md border-none bg-[#0A0A0E]/95 hover:bg-[#111118]/98" hoverEffect>
              <div className="w-[52px] h-[52px] rounded border border-white/10 bg-white/5 flex items-center justify-center mb-7">
                <GlobeIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[22px] font-syne font-bold text-white mb-4 tracking-[-0.02em]">UI/UX Architecture</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed font-sans mb-8">Interface systems designed with motion-first principles. We prototype in Figma, engineer in React, and obsess over every transition curve.</p>
            </BentoCard>

            <BentoCard className="!rounded-md border-none bg-[#0A0A0E]/95 hover:bg-[#111118]/98" hoverEffect>
              <div className="w-[52px] h-[52px] rounded border border-white/10 bg-white/5 flex items-center justify-center mb-7">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[22px] font-syne font-bold text-white mb-4 tracking-[-0.02em]">WebGL & 3D Experiences</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed font-sans mb-8">Three.js powered immersive environments that turn your brand into an interactive world. Particle systems, shaders, and physics.</p>
            </BentoCard>

            <BentoCard className="!rounded-md border-none bg-[#0A0A0E]/95 hover:bg-[#111118]/98" hoverEffect>
              <div className="w-[52px] h-[52px] rounded border border-white/10 bg-white/5 flex items-center justify-center mb-7">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[22px] font-syne font-bold text-white mb-4 tracking-[-0.02em]">Performance Engineering</h3>
              <p className="text-slate-400 text-[15px] leading-relaxed font-sans mb-8">Sub-second load times and 100/100 Lighthouse scores aren't aspirational here — they're the baseline. Edge delivery and ISR.</p>
            </BentoCard>
          </div>
        </div>
      </section>

      <TrailDivider />

      {/* --- PROCESS TIMELINE --- */}
      <section id="process" className="py-20 md:py-32 relative z-10 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24 flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 mb-5 w-full">
              <div className="h-[1px] w-full max-w-[40px] bg-white/10" />
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-[0.25em]">How We Build</span>
              <div className="h-[1px] w-full max-w-[40px] bg-white/10" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tight text-white leading-[1.05] mb-5">
              Our <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#22d3ee]">Process</em> <br/> Is The Product.
            </h2>
            <p className="text-slate-300 font-sans max-w-xl mx-auto text-[17px] font-light">Four deliberate phases that eliminate guesswork and compound quality at every step.</p>
          </div>
          
          <div className="relative ml-6 md:ml-0 md:pl-16 space-y-20">
            <div className="absolute left-[0px] md:left-[24px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#7c3aed] via-[#06b6d4] to-transparent" />

            {[
              { num: "01", title: "Strategic Alignment", desc: "We begin with a two-week deep dive into your business model, user psychology, and competitive landscape. The output is a strategic brief.", tags: ["User Research", "Architecture Planning"] },
              { num: "02", title: "Motion-First Prototyping", desc: "Figma prototypes that feel like the real product. We design in context — animated interactions, real content, and device-accurate previews.", tags: ["Interaction Design", "Prototyping"] },
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
            <div className="flex items-center justify-center gap-3 mb-5 w-full">
              <div className="h-[1px] w-full max-w-[40px] bg-white/10" />
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-[0.25em]">Our Portfolio</span>
              <div className="h-[1px] w-full max-w-[40px] bg-white/10" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-tight text-white mb-5">
              Featured <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#22d3ee]">Odysseys.</em>
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-[17px] font-light">A curated selection of our most complex engineering feats.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Large Featured Card */}
            <BentoCard className="md:col-span-2 p-0! group min-h-[450px] md:min-h-[550px]" bgClass="bg-black" hoverEffect>
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/60 to-transparent z-10" />
                <Image 
                  src="/work/nexus.png" 
                  alt="Work 1" 
                  width={1600} 
                  height={900} 
                  quality={80} 
                  placeholder="blur" 
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  className="w-full h-full object-cover mix-blend-luminosity opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700" 
                />
              </div>
              <div className="relative z-20 p-8 md:p-12 flex flex-col justify-end h-full">
                <div className="flex gap-2 mb-5">
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full font-mono text-[10px] text-white uppercase tracking-widest backdrop-blur-md">WebGL</span>
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full font-mono text-[10px] text-white uppercase tracking-widest backdrop-blur-md">FinTech</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-syne font-bold text-white mb-4">Nexus Trading Platform</h3>
                <p className="text-slate-300 max-w-xl font-light text-lg mb-6">High-frequency trading dashboard rendering 2.4M data points per second with zero latency. Built for the modern enterprise.</p>
                <a href="#" className="flex items-center gap-2 text-[#22d3ee] font-semibold text-sm hover:text-white transition-colors w-max interactive-hover">
                  View Case Study <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </BentoCard>

            {/* Standard Cards */}
            <BentoCard className="p-0! group min-h-[400px]" bgClass="bg-black" hoverEffect>
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/60 to-transparent z-10" />
                <Image 
                  src="/work/rbo_screenshot.jpg" 
                  alt="Jeevan Rekha Rice Bran Oil" 
                  width={800} 
                  height={800} 
                  quality={80} 
                  placeholder="blur" 
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  className="w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" 
                />
              </div>
              <div className="relative z-20 p-8 flex flex-col justify-end h-full">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full font-mono text-[10px] text-white uppercase tracking-widest backdrop-blur-md">Consumer</span>
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full font-mono text-[10px] text-white uppercase tracking-widest backdrop-blur-md">E-Commerce</span>
                </div>
                <h3 className="text-2xl font-syne font-bold text-white mb-3">Jeevan Rekha RBO</h3>
                <p className="text-slate-300 font-light text-sm mb-5">A premium immersive web experience crafted for health-conscious consumers, showcasing pure Rice Bran Oil.</p>
                <a href="https://rbo-spa.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#22d3ee] font-semibold text-xs hover:text-white transition-colors w-max interactive-hover">
                  View Live Site <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </BentoCard>

            <BentoCard className="p-0! group min-h-[400px]" bgClass="bg-black" hoverEffect>
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/60 to-transparent z-10" />
                <Image 
                  src="/work/dorb_screenshot.jpg" 
                  alt="Magik DORB" 
                  width={800} 
                  height={800} 
                  quality={80} 
                  placeholder="blur" 
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  className="w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" 
                />
              </div>
              <div className="relative z-20 p-8 flex flex-col justify-end h-full">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full font-mono text-[10px] text-white uppercase tracking-widest backdrop-blur-md">AgriTech</span>
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full font-mono text-[10px] text-white uppercase tracking-widest backdrop-blur-md">E-Commerce</span>
                </div>
                <h3 className="text-2xl font-syne font-bold text-white mb-3">Magik DORB</h3>
                <p className="text-slate-300 font-light text-sm mb-5">A high-end, immersive digital presence for AB Udyog&apos;s premium De-Oiled Rice Bran agricultural feed product.</p>
                <a href="https://dorb.vercel.app" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#22d3ee] font-semibold text-xs hover:text-white transition-colors w-max interactive-hover">
                  View Live Site <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </BentoCard>

            <BentoCard className="p-0! group min-h-[400px]" bgClass="bg-black" hoverEffect>
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/60 to-transparent z-10" />
                <Image 
                  src="/work/aura.png" 
                  alt="Work 2" 
                  width={800} 
                  height={800} 
                  quality={80} 
                  placeholder="blur" 
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  className="w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" 
                />
              </div>
              <div className="relative z-20 p-8 flex flex-col justify-end h-full">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full font-mono text-[10px] text-white uppercase tracking-widest backdrop-blur-md">Web3</span>
                </div>
                <h3 className="text-2xl font-syne font-bold text-white mb-3">Aura Protocol</h3>
                <p className="text-slate-300 font-light text-sm mb-5">A decentralized autonomous architecture scaling to global users securely.</p>
                <a href="#" className="flex items-center gap-2 text-[#22d3ee] font-semibold text-xs hover:text-white transition-colors w-max interactive-hover">
                  View Case Study <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </BentoCard>

            <BentoCard className="p-0! group min-h-[400px]" bgClass="bg-black" hoverEffect>
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/60 to-transparent z-10" />
                <Image 
                  src="/work/quantum.png" 
                  alt="Work 3" 
                  width={800} 
                  height={800} 
                  quality={80} 
                  placeholder="blur" 
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  className="w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" 
                />
              </div>
              <div className="relative z-20 p-8 flex flex-col justify-end h-full">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full font-mono text-[10px] text-white uppercase tracking-widest backdrop-blur-md">AI Model</span>
                </div>
                <h3 className="text-2xl font-syne font-bold text-white mb-3">Quantum Compute</h3>
                <p className="text-slate-300 font-light text-sm mb-5">Consumer facing interface for large language model interactions.</p>
                <a href="#" className="flex items-center gap-2 text-[#22d3ee] font-semibold text-xs hover:text-white transition-colors w-max interactive-hover">
                  View Case Study <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </BentoCard>

          </div>
        </div>
      </section>

      <TrailDivider />

      <TechMarquee />

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

          <div className="flex items-center justify-center gap-3 mb-6 relative z-10">
            <div className="h-[1px] w-8 bg-white/10" />
            <span className="font-mono text-[11px] text-slate-400 uppercase tracking-[0.25em]">Let&apos;s Build</span>
            <div className="h-[1px] w-8 bg-white/10" />
          </div>
          
          <h2 className="text-[clamp(44px,6vw,90px)] font-syne font-extrabold text-white mb-8 tracking-[-0.03em] leading-[0.95] relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Your Vision.<br/>Our Craft.
          </h2>
          <p className="text-[18px] text-slate-300 mb-14 relative z-10 font-sans font-light">
            We take on 4 new projects per quarter. <strong className="text-white font-medium">2 spots open for Q3 2026.</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <PillButton primary onClick={() => setIsModalOpen(true)}>
              Start a Conversation
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
