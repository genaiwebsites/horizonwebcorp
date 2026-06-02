import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    company: '',
    sector: '',
    budget: '', 
    details: '' 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Keep the success state for 4 seconds before auto-closing
    setTimeout(() => {
      onClose();
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', company: '', sector: '', budget: '', details: '' });
      }, 500); 
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
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
                        {/* Column 1 */}
                        <div className="space-y-6">
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
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-6">
                          <div className="group">
                            <label htmlFor="contact-sector" className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-[#22d3ee] transition-colors">Sector</label>
                            <div className="relative">
                              <select
                                id="contact-sector"
                                required
                                value={formData.sector}
                                onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                                className="w-full bg-[#13131A] border border-white/5 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#22d3ee]/50 focus:bg-[#1A1A24] transition-all text-sm appearance-none shadow-inner"
                              >
                                <option value="" disabled>Select Domain</option>
                                <option value="Web3">Web3 & Crypto</option>
                                <option value="SaaS">Enterprise SaaS</option>
                                <option value="AI">AI & Machine Learning</option>
                                <option value="Ecommerce">High-End E-Commerce</option>
                                <option value="Other">Other / Experimental</option>
                              </select>
                              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                              </div>
                            </div>
                          </div>

                          <div className="group">
                            <label htmlFor="contact-budget" className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-[#22d3ee] transition-colors">Budget (INR)</label>
                            <div className="relative">
                              <select
                                id="contact-budget"
                                required
                                value={formData.budget}
                                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                className="w-full bg-[#13131A] border border-white/5 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#22d3ee]/50 focus:bg-[#1A1A24] transition-all text-sm appearance-none shadow-inner"
                              >
                                <option value="" disabled>Select Budget Bracket</option>
                                <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                                <option value="1L-5L">₹1,00,000 - ₹5,00,000</option>
                                <option value="5L-15L">₹5,00,000 - ₹15,00,000</option>
                                <option value="15L+">₹15,00,000+</option>
                              </select>
                              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                              </div>
                            </div>
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

                      <button
                        type="submit"
                        className="w-full bg-white text-black font-syne font-bold tracking-wide rounded-xl px-4 py-4 hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
                      >
                        Transmit Coordinates
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
