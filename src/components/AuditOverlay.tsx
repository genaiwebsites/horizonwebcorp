'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Shield, X, Eye, AlertCircle, HelpCircle, CheckCircle } from 'lucide-react';

// Simple Event Bus for Audit Mode
const AUDIT_EVENT = 'hwc-toggle-audit-mode';

interface AuditIssue {
  id: string;
  severity: 'P0' | 'P1' | 'P2';
  category: string;
  title: string;
  desc: string;
  rec: string;
  location: string;
  status: 'fixed' | 'pending';
}

export const auditIssuesList: AuditIssue[] = [
  {
    id: 'parallax-collision',
    severity: 'P0',
    category: 'Responsive Design',
    title: 'Parallax Header Collision',
    desc: 'The Hero headings translate down by 300px on scroll, colliding directly with the metrics section rising from the bottom.',
    rec: 'Relocated metrics panel into Hero container bottom so they scroll together in sync, and reduced parallax factor to 80px.',
    location: 'Hero.tsx & page.tsx',
    status: 'fixed'
  },
  {
    id: 'globe-mosquitoes',
    severity: 'P1',
    category: 'Visual Design / Perf',
    title: 'Globe "Mosquito" Dashes',
    desc: 'Active data pulses are short, fast, and render on all 60+ connections, causing a cheap visual flicker.',
    rec: 'Thinned lines to stroke 0.06, slowed speeds (7-12s), set long sweeps (dashLength 0.35, gap 2.5), and limited active flow to 30% of connections.',
    location: 'Globe.tsx',
    status: 'fixed'
  },
  {
    id: 'card-readability',
    severity: 'P1',
    category: 'Accessibility / Experiential',
    title: 'Capabilities & Services Card UX',
    desc: 'Cards lacked interactive visual feedback (hover feedback) and were visually flat over the active WebGL background grid lines.',
    rec: 'Upgraded cards to custom Spotlight containers with cursor-following radial borders, grid texture glows, and custom SVG animation widgets (Transition Curves, Vertex Shader nodes, and Lighthouse performance trackers).',
    location: 'page.tsx & BentoCard.tsx',
    status: 'fixed'
  },
  {
    id: 'metrics-dull',
    severity: 'P1',
    category: 'Visual Design',
    title: 'Dull Metrics Counter UI',
    desc: 'The current metrics block uses flat list layout columns with generic lines, lacking premium experiential value.',
    rec: 'Re-engineered into a glassmorphic dashboard panel with vertical dividers and clean monospace layouts.',
    location: 'Hero.tsx & page.tsx',
    status: 'fixed'
  },
  {
    id: 'focus-indicators',
    severity: 'P2',
    category: 'Accessibility',
    title: 'Missing Focus Outlines',
    desc: 'Interactive links and buttons lack visible keyboard focus styles, breaking keyboard-only accessibility.',
    rec: 'Added custom focus-visible ring styles and aria collapsible accessibility rules to all header and footer links.',
    location: 'Nav.tsx & Footer.tsx',
    status: 'fixed'
  },
  {
    id: 'gradient-text-tells',
    severity: 'P2',
    category: 'Anti-Pattern',
    title: 'Gradient Text AI Tells',
    desc: 'The page overuses 9 separate text-gradient headers, creating a common automated template feel.',
    rec: 'Limit gradients only to the main brand word and keep secondary headings solid.',
    location: 'page.tsx & Hero.tsx',
    status: 'pending'
  }
];

// Interactive Marker component to place next to target elements
export const AuditMarker = ({ id, severity, title, desc, placement = "top-0 right-0" }: { id: string; severity: 'P0' | 'P1' | 'P2'; title: string; desc: string; placement?: string }) => {
  const [active, setActive] = useState(false);
  const [showResolved, setShowResolved] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

  const issue = auditIssuesList.find(x => x.id === id);
  const isFixed = issue?.status === 'fixed';

  useEffect(() => {
    const handleToggle = (e: any) => {
      setActive(e.detail.active);
      if (e.detail.showResolved !== undefined) {
        setShowResolved(e.detail.showResolved);
      }
    };
    const handleHighlight = (e: any) => {
      if (e.detail.id === id) {
        setHighlighted(e.detail.highlight);
      }
    };
    window.addEventListener(AUDIT_EVENT, handleToggle);
    window.addEventListener('hwc-highlight-marker', handleHighlight as any);
    return () => {
      window.removeEventListener(AUDIT_EVENT, handleToggle);
      window.removeEventListener('hwc-highlight-marker', handleHighlight as any);
    };
  }, [id]);

  if (!active) return null;
  if (isFixed && !showResolved) return null;

  const severityColor = isFixed
    ? 'bg-emerald-500 shadow-emerald-500/50'
    : severity === 'P0'
      ? 'bg-red-500 shadow-red-500/50'
      : severity === 'P1'
        ? 'bg-amber-500 shadow-amber-500/50'
        : 'bg-blue-500 shadow-blue-500/50';

  return (
    <div className={`absolute ${placement} z-[40] pointer-events-auto`}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative"
      >
        {/* Pulsing visual outline */}
        <span className={`absolute -inset-1.5 rounded-full animate-ping opacity-60 ${severityColor}`} />
        
        {/* Small interactive dot */}
        <button
          onClick={() => setHovered(!hovered)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`relative flex items-center justify-center size-5 rounded-full border border-white/20 text-[9px] font-mono font-bold text-white shadow-lg cursor-help transition-transform duration-300 ${severityColor} ${highlighted ? 'scale-125 ring-2 ring-white' : 'hover:scale-110'}`}
        >
          {isFixed ? '✓' : severity}
        </button>

        {/* Floating tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-7 w-[240px] p-4 bg-[#0a0a0f] border border-white/10 rounded-xl shadow-2xl backdrop-blur-md text-left z-[50]"
            >
              <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">{isFixed ? 'RESOLVED' : `${severity} / Audit`}</span>
                <span className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-bold ${isFixed ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : severity === 'P0' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : severity === 'P1' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                  {isFixed ? 'VERIFIED' : severity === 'P0' ? 'BLOCKER' : severity === 'P1' ? 'MAJOR' : 'MINOR'}
                </span>
              </div>
              <h4 className="text-[12px] font-syne font-bold text-white mb-1">{title}</h4>
              <p className="text-[11px] text-slate-300 font-sans leading-relaxed">{isFixed ? `Fixed: ${desc}` : desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export const AuditOverlay = () => {
  const [active, setActive] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showResolved, setShowResolved] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'fixed'>('all');

  const toggleAuditMode = () => {
    const nextState = !active;
    setActive(nextState);
    window.dispatchEvent(new CustomEvent(AUDIT_EVENT, { detail: { active: nextState, showResolved } }));
    if (nextState) {
      setDrawerOpen(true);
    } else {
      setDrawerOpen(false);
    }
  };

  const handleToggleShowResolved = (val: boolean) => {
    setShowResolved(val);
    window.dispatchEvent(new CustomEvent(AUDIT_EVENT, { detail: { active: true, showResolved: val } }));
  };

  const highlightOnPage = (id: string, highlight: boolean) => {
    window.dispatchEvent(new CustomEvent('hwc-highlight-marker', { detail: { id, highlight } }));
  };

  const resolvedCount = auditIssuesList.filter(x => x.status === 'fixed').length;
  const pendingCount = auditIssuesList.filter(x => x.status === 'pending').length;
  const totalCount = auditIssuesList.length;
  const percentResolved = Math.round((resolvedCount / totalCount) * 100);

  const filteredIssues = auditIssuesList.filter(issue => {
    if (activeTab === 'pending') return issue.status === 'pending';
    if (activeTab === 'fixed') return issue.status === 'fixed';
    return true;
  });

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-[60] flex items-center gap-2">
        <button
          onClick={toggleAuditMode}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-mono font-medium uppercase tracking-wider transition-all duration-300 shadow-xl backdrop-blur-md cursor-pointer ${active ? 'bg-purple-600 border-purple-500 text-white shadow-purple-500/20 hover:bg-purple-700' : 'bg-slate-950/70 border-white/10 text-slate-300 hover:border-white/20 hover:text-white'}`}
        >
          <Shield className={`w-3.5 h-3.5 ${active ? 'animate-pulse' : ''}`} />
          {active ? `Audit Active (${resolvedCount}/${totalCount} Fixed)` : 'Inspect Audit'}
        </button>
      </div>

      {/* Audit Drawer */}
      <AnimatePresence>
        {active && drawerOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full max-w-[420px] bg-[#030305]/98 border-l border-white/5 backdrop-blur-3xl z-[55] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] pt-20 px-6 pb-6"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <h3 className="font-syne text-lg font-bold text-white">Live Audit Annotations</h3>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-1 rounded hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Audit Statistics & Progress */}
            <div className="mb-5 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 shadow-inner">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-mono tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  RESOLVED STATUS
                </span>
                <span className="text-xs font-mono font-bold text-white bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  {percentResolved}% COMPLETED
                </span>
              </div>
              
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden flex gap-0.5 border border-white/5 mb-3">
                <div 
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${percentResolved}%` }} 
                />
                <div 
                  className="bg-blue-500/60 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${100 - percentResolved}%` }} 
                />
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Out of <span className="font-bold text-white font-mono">{totalCount} total issues</span> identified during the audit, 
                {' '}<span className="font-bold text-emerald-400 font-mono">{resolvedCount} have been resolved</span> and 
                {' '}<span className="font-bold text-blue-400 font-mono">{pendingCount} is still pending</span> review.
              </p>
            </div>

            {/* Marker Toggle Control */}
            <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl mb-4">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Show Resolved Fixes on Page</span>
                <span className="text-[10px] text-slate-400">Display green checkmarks at resolved locations</span>
              </div>
              <button
                onClick={() => handleToggleShowResolved(!showResolved)}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${showResolved ? 'bg-emerald-500' : 'bg-slate-700'}`}
              >
                <span
                  className={`pointer-events-none inline-block size-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${showResolved ? 'translate-x-4' : 'translate-x-0'}`}
                />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex p-1 bg-slate-950/80 border border-white/5 rounded-xl mb-4">
              {(['all', 'pending', 'fixed'] as const).map((tab) => {
                const count = tab === 'all' 
                  ? totalCount 
                  : tab === 'pending' 
                    ? pendingCount 
                    : resolvedCount;
                const label = tab === 'all' 
                  ? 'All Issues' 
                  : tab === 'pending' 
                    ? 'Pending' 
                    : 'Resolved';
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${isActive ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                  >
                    {label} ({count})
                  </button>
                );
              })}
            </div>

            {/* List */}
            <div className="flex-grow overflow-y-auto space-y-4 pr-1 scrollbar-thin">
              {filteredIssues.map((issue) => {
                const isFixed = issue.status === 'fixed';
                return (
                  <div
                    key={issue.id}
                    onMouseEnter={() => highlightOnPage(issue.id, true)}
                    onMouseLeave={() => highlightOnPage(issue.id, false)}
                    className={`p-4 rounded-xl border transition-all duration-300 group cursor-pointer ${isFixed ? 'bg-emerald-950/5 border-emerald-500/10 opacity-70 hover:opacity-100 hover:bg-emerald-950/10' : 'bg-[#0a0a0f] border-white/5 hover:border-white/15 hover:bg-[#12121b]'}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">{issue.category}</span>
                      <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold ${isFixed ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20' : issue.severity === 'P0' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : issue.severity === 'P1' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                        {isFixed ? 'RESOLVED' : issue.severity}
                      </span>
                    </div>
                    <h4 className={`font-syne font-bold text-sm mb-1.5 flex items-center gap-1.5 transition-colors ${isFixed ? 'text-slate-400 line-through group-hover:text-emerald-400' : 'text-white group-hover:text-purple-400'}`}>
                      {isFixed ? (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      ) : (
                        <AlertCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      )}
                      {issue.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed mb-3">{issue.desc}</p>
                    
                    <div className="pt-3 border-t border-white/5 flex flex-col gap-1.5 font-mono text-[9px]">
                      <div className="flex justify-between">
                        <span className="text-slate-500">LOCATION</span>
                        <span className="text-slate-300">{issue.location}</span>
                      </div>
                      <div className="flex flex-col gap-0.5 text-left">
                        <span className="text-slate-500">{isFixed ? 'RESOLUTION' : 'FIX PLAN'}</span>
                        <span className={isFixed ? 'text-emerald-400 font-sans leading-relaxed' : 'text-purple-300 font-sans leading-relaxed'}>{issue.rec}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
              {filteredIssues.length === 0 && (
                <div className="text-center py-10 text-slate-500 font-mono text-xs border border-dashed border-white/5 rounded-xl">
                  No issues found in this category
                </div>
              )}
            </div>

            {/* Footer summary */}
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono text-slate-500">
              <span>HWC Experiential Lab</span>
              <span>Total: {auditIssuesList.length} Issues</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button to reopen drawer if closed but mode active */}
      {active && !drawerOpen && (
        <div className="fixed bottom-6 right-[240px] z-[60]">
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center justify-center size-10 rounded-full border border-white/10 bg-slate-950/70 text-slate-300 hover:text-white hover:border-white/20 transition-all shadow-xl backdrop-blur-md cursor-pointer"
            aria-label="Open Audit Drawer"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
};
