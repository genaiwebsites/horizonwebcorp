import React from 'react';
import { Metadata } from 'next';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import { PillButton } from '../../components/PillButton';
import { ArrowRight } from '../../components/Icons';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Horizon Web Corp, Kolkata. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://horizonwebcorp.com/privacy' },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(139,92,246,0.1)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-[400px] left-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-24 flex-grow">
        {/* Header Stack */}
        <div className="mb-12 border-b border-white/5 pb-8">
          <span className="font-mono text-[10px] text-[#22d3ee] uppercase tracking-[0.2em] mb-3 block">LEGAL DOCUMENTATION</span>
          <h1 className="text-4xl sm:text-5xl font-syne font-extrabold tracking-tight text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 font-mono text-xs">Last Updated: June 2, 2026</p>
        </div>

        {/* Content Box */}
        <div className="space-y-10 text-slate-300 font-sans font-light leading-relaxed text-sm md:text-base">
          <p>
            At Horizon Web Corp, we prioritize the protection and security of your digital footprint. This Privacy Policy details how we collect, process, and safeguard the information you provide when interacting with our experiential design and engineering ecosystem.
          </p>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-syne font-bold text-white tracking-tight">1. Information We Collect</h2>
            <p>
              We compile minimal data points specifically meant to measure product performance and contact prospective client partners. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li><strong>Contact Information:</strong> Name, business email, and company details provided when submitting contact forms or scheduling consulting sessions.</li>
              <li><strong>Usage Analytics:</strong> Anonymized interaction events, page timings, navigation logs, and WebGL rendering frame-rate indicators compiled through privacy-respecting client analytics.</li>
              <li><strong>Technical Metadata:</strong> Browser type, viewport size, GPU capability identifiers (for optimizing WebGL/Shader scaling), and locale options.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-syne font-bold text-white tracking-tight">2. How We Process Data</h2>
            <p>
              Your metrics and records are analyzed strictly to elevate your browsing experience and fulfill agency services. We use the information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Facilitate project scheduling, engineering consultation, and partner onboarding.</li>
              <li>Resolve performance bottle-necks, layout shifts, or rendering anomalies in browser contexts.</li>
              <li>Develop custom design systems, animations, and typography pairings.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-syne font-bold text-white tracking-tight">3. Cookies and Storage</h2>
            <p>
              We utilize localized, transient browser session storage to store user interface preferences (such as the active state of design audits, theme tags, or animation controls). We do not deploy cross-site tracker cookies or third-party advertising scripts.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-syne font-bold text-white tracking-tight">4. Third-Party Disclosures</h2>
            <p>
              Horizon Web Corp does not trade, rent, or distribute client or visitor data to automated data-brokers or ad-networks. Data is shared only with verified cloud infrastructure providers (e.g., Vercel, Supabase) strictly to support active hosting and contact pipelines under secure API compliance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-syne font-bold text-white tracking-tight">5. Data Retention & Your Rights</h2>
            <p>
              We hold communication files and analytical logs only as long as necessary to complete business obligations. We process data in compliance with the Information Technology Act, 2000 of India, as well as global standards (including GDPR where applicable), granting you full rights to access, rectify, or request deletion of your records.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-syne font-bold text-white tracking-tight">6. Reach Out</h2>
            <p>
              If you have any questions, compliance requests, or need data deletions completed, connect with our engineering lead:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-slate-400 w-fit">
              <span className="text-[#22d3ee]">Horizon Web Corp Legal Division</span><br />
              Email: legal@horizonwebcorp.com<br />
              Location: Kolkata, West Bengal, India
            </div>
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
