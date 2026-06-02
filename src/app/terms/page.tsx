import React from 'react';
import { Metadata } from 'next';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import { PillButton } from '../../components/PillButton';
import { ArrowRight } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Horizon Web Corp, Kolkata. Read our terms governing the use of our web engineering services.',
  alternates: { canonical: 'https://horizonwebcorp.com/terms' },
};

export default function TermsOfService() {
  return (
    <>
      <Nav />
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(6,182,212,0.08)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-[400px] right-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(139,92,246,0.06)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-24 flex-grow">
        {/* Header Stack */}
        <div className="mb-12 border-b border-white/5 pb-8">
          <span className="font-mono text-[10px] text-[#8b5cf6] uppercase tracking-[0.2em] mb-3 block">LEGAL DOCUMENTATION</span>
          <h1 className="text-4xl sm:text-5xl font-syne font-extrabold tracking-tight text-white mb-4">Terms of Service</h1>
          <p className="text-slate-400 font-mono text-xs">Last Updated: June 2, 2026</p>
        </div>

        {/* Content Box */}
        <div className="space-y-10 text-slate-300 font-sans font-light leading-relaxed text-sm md:text-base">
          <p>
            Welcome to the Horizon Web Corp digital domain. By entering this web experience, consulting our materials, or collaborating on engineering designs, you establish a binding contract governed by the following Terms of Service.
          </p>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-syne font-bold text-white tracking-tight">1. Core Acceptance</h2>
            <p>
              By accessing this digital surface, you verify that you have read, understood, and consented to these Terms of Service in full. If you disagree with any segment, please terminate access to the domain.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-syne font-bold text-white tracking-tight">2. Intellectual Property Rights</h2>
            <p>
              The visual systems, customized React codebases, custom WebGL/Three.js environments, layout arrangements, graphic mockups, and typographic systems displayed on this site are protected by global trademark and copyright laws. All assets are owned by Horizon Web Corp unless explicitly stated.
            </p>
            <p className="text-slate-400">
              Users are prohibited from duplicating, cloning, or distributing code segments, visual patterns, or graphics without receiving prior written licensing authorization.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-syne font-bold text-white tracking-tight">3. Prohibited Digital Activities</h2>
            <p>
              You agree to engage with this website in compliance with all relevant state, federal, and international regulations. You are strictly banned from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Deploying scraper scripts, bots, or data-mining utilities to harvest code, text, or structural patterns.</li>
              <li>Injecting malicious software, Trojans, or payloads that could compromise rendering frameworks, databases, or hosting infrastructure.</li>
              <li>Interfering with server request paths, page load processes, or WebGL shader integrity.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-syne font-bold text-white tracking-tight">4. Warranties & Disclaimers</h2>
            <p>
              This website, along with all designs, animations, and services, is delivered on an "as-is" and "as-available" basis. Horizon Web Corp makes no warranties (express or implied) concerning uptime, absolute compatibility with legacy browsers, or uninterrupted server availability.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-syne font-bold text-white tracking-tight">5. Limits of Liability</h2>
            <p>
              In no event shall Horizon Web Corp or its directors, engineers, or partners be liable for any direct, indirect, incidental, or consequential damages (including loss of profits, data, or system interruptions) originating from your use or inability to use this digital interface.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-syne font-bold text-white tracking-tight">6. Jurisdictional Ruling</h2>
            <p>
              These Terms of Service shall be governed by, construed, and enforced in accordance with the laws of India. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Kolkata, West Bengal, India.
            </p>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4">
          <PillButton href="/">
            Back to Home <ArrowRight className="w-4 h-4 ml-1" />
          </PillButton>
        </div>
      </div>

      <Footer />
    </>
  );
}
