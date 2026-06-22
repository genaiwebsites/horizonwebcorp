import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SECTORS = [
  { value: 'Manufacturing', label: 'Manufacturing & Industrial' },
  { value: 'Food_Beverage', label: 'Food, Beverage & Agriculture' },
  { value: 'Healthcare', label: 'Healthcare & Medical' },
  { value: 'Fitness', label: 'Fitness, Gym & Wellness' },
  { value: 'Retail_Ecommerce', label: 'Retail & E-Commerce' },
  { value: 'Education', label: 'Education & Training' },
  { value: 'Tech_Software', label: 'Technology & Software' },
  { value: 'Real_Estate', label: 'Real Estate & Construction' },
  { value: 'Finance_Professional', label: 'Finance & Professional Services' },
  { value: 'Hospitality_Tourism', label: 'Hospitality & Tourism' },
  { value: 'Logistics', label: 'Logistics & Transportation' },
  { value: 'Media_Entertainment', label: 'Media & Entertainment' },
  { value: 'Automotive', label: 'Automotive & EV' },
  { value: 'Other', label: 'Other / Specialized Sector' }
];

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    company: '',
    sector: '',
    details: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSectorOpen, setIsSectorOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSectorOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit coordinates.');
      }

      setSubmitted(true);
      setIsSectorOpen(false);
      // Keep the success state for 4 seconds before auto-closing
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', company: '', sector: '', details: '' });
        }, 500); 
      }, 4000);
    } catch (err: any) {
      setSubmitError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          <style dangerouslySetInnerHTML={{ __html: `
            .custom-select-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-select-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-select-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(255, 255, 255, 0.1);
              border-radius: 9999px;
            }
            .custom-select-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(255, 255, 255, 0.2);
            }
          ` }} />
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#030305]/60 cursor-pointer"
          />

          {/* Scrollable Modal Container */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 py-12 sm:p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="relative w-full max-w-2xl bg-[#0A0A0E]/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden text-left"
              >
            {/* Top decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7c3aed] via-[#22d3ee] to-[#06b6d4]" />
            
            {/* Soft background glows */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative p-8 md:p-12">
              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close contact form"
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]/50"
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>


              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', delay: 0.2, damping: 15, stiffness: 200 }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-[#22d3ee]/20 to-[#7c3aed]/20 border border-[#22d3ee]/30 flex items-center justify-center mb-8 relative"
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full border border-[#22d3ee]" 
                      />
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </motion.div>
                    
                    <motion.h4 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl font-syne font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-4"
                    >
                      Signal Confirmed
                    </motion.h4>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-slate-400 text-base max-w-sm"
                    >
                      Your query has entered our matrix. An engineering lead will reach out within 24 hours.
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-10">
                      <h3 className="text-3xl font-syne font-extrabold text-white mb-3">Initiate Protocol</h3>
                      <p className="text-slate-400 text-sm font-light">
                        Provide your project parameters below. We process requests daily and prioritize high-impact visions.
                      </p>
                    </div>


                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div className="group">
                          <label htmlFor="contact-name" className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-[#22d3ee] transition-colors">Full Name</label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            autoComplete="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#13131A] border border-white/5 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#22d3ee]/50 focus:bg-[#1A1A24] transition-all text-sm shadow-inner"
                          />
                        </div>
                        
                        {/* Email Address */}
                        <div className="group">
                          <label htmlFor="contact-email" className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-[#22d3ee] transition-colors">Email Address</label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            autoComplete="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#13131A] border border-white/5 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#22d3ee]/50 focus:bg-[#1A1A24] transition-all text-sm shadow-inner"
                          />
                        </div>

                        {/* Company / Entity */}
                        <div className="group">
                          <label htmlFor="contact-company" className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-[#22d3ee] transition-colors">Company / Entity</label>
                          <input
                            id="contact-company"
                            type="text"
                            autoComplete="organization"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full bg-[#13131A] border border-white/5 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#22d3ee]/50 focus:bg-[#1A1A24] transition-all text-sm shadow-inner"
                          />
                        </div>

                        {/* Sector */}
                        <div className="group relative" ref={dropdownRef}>
                          <label htmlFor="contact-sector" className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-[#22d3ee] transition-colors">Sector</label>
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() => setIsSectorOpen(!isSectorOpen)}
                              className="w-full flex items-center justify-between bg-[#13131A] border border-white/5 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#22d3ee]/50 focus:bg-[#1A1A24] transition-all text-sm shadow-inner text-left cursor-pointer group-focus-within:border-[#22d3ee]/50"
                              aria-haspopup="listbox"
                              aria-expanded={isSectorOpen}
                            >
                              <span className={formData.sector ? "text-white" : "text-slate-500"}>
                                {SECTORS.find(s => s.value === formData.sector)?.label || "Select Sector"}
                              </span>
                              <motion.svg
                                animate={{ rotate: isSectorOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                className="text-slate-500 group-hover:text-white transition-colors"
                              >
                                <polyline points="6 9 12 15 18 9"></polyline>
                              </motion.svg>
                            </button>

                            {/* Hidden native select for standard HTML5 validation */}
                            <select
                              id="contact-sector"
                              required
                              value={formData.sector}
                              onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                              className="absolute opacity-0 pointer-events-none w-full h-full left-0 top-0 -z-10"
                              tabIndex={-1}
                            >
                              <option value="" disabled>Select Sector</option>
                              {SECTORS.map(s => (
                                <option key={s.value} value={s.value}>{s.label}</option>
                              ))}
                            </select>

                            <AnimatePresence>
                              {isSectorOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                  transition={{ duration: 0.15, ease: "easeOut" }}
                                  className="absolute z-50 left-0 right-0 mt-2 bg-[#0A0A0E]/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.9)] overflow-hidden max-h-60 overflow-y-auto custom-select-scrollbar"
                                >
                                  <div className="py-1.5">
                                    {SECTORS.map((s) => {
                                      const isSelected = formData.sector === s.value;
                                      return (
                                        <button
                                          key={s.value}
                                          type="button"
                                          onClick={() => {
                                            setFormData({ ...formData, sector: s.value });
                                            setIsSectorOpen(false);
                                          }}
                                          className={`w-full text-left px-4 py-3 text-sm transition-all flex items-center justify-between cursor-pointer focus:outline-none focus:bg-white/5
                                            ${isSelected 
                                              ? 'bg-gradient-to-r from-[#22d3ee]/10 to-[#7c3aed]/10 text-[#22d3ee] font-medium border-l-2 border-[#22d3ee]' 
                                              : 'text-slate-300 hover:bg-white/5 hover:text-white border-l-2 border-transparent'
                                            }`}
                                        >
                                          <span>{s.label}</span>
                                          {isSelected && (
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#22d3ee]">
                                              <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                          )}
                                        </button>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>

                      {/* Full Width Row */}
                      <div className="group">
                        <label htmlFor="contact-details" className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-[#22d3ee] transition-colors">Project Brief</label>
                        <textarea
                          id="contact-details"
                          required
                          rows={3}
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          className="w-full bg-[#13131A] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#22d3ee]/50 focus:bg-[#1A1A24] transition-all text-sm resize-none shadow-inner"
                        />
                      </div>

                      {submitError && (
                        <div className="text-red-400 text-xs font-mono bg-red-950/20 border border-red-500/20 rounded-xl px-4 py-3 mt-4">
                          ERROR: {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-black font-syne font-bold tracking-wide rounded-xl px-4 py-4 hover:bg-slate-200 disabled:bg-white/50 disabled:text-black/50 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? 'Transmitting Coordinates...' : 'Transmit Coordinates'}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
