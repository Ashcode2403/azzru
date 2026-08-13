import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial Film',
    budget: '$5,000 - $10,000',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FFB800]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Huge Dramatic Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#FFB800] tracking-[0.3em] uppercase block mb-4">
            START A PROJECT
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-tight font-sans">
            HAVE A STORY TO TELL?<br />
            <span className="text-[#FFB800]">LET'S CREATE SOMETHING CINEMATIC.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Details Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-[#FFB800] transition-all duration-300 flex items-center gap-5 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/30 flex items-center justify-center group-hover:bg-[#FFB800] group-hover:text-black transition-colors flex-none">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">EMAIL DIRECTLY</span>
                <p className="text-lg font-bold text-white group-hover:text-[#FFB800] transition-colors">
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-[#FFB800] transition-all duration-300 flex items-center gap-5 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/30 flex items-center justify-center group-hover:bg-[#FFB800] group-hover:text-black transition-colors flex-none">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">CALL / WHATSAPP</span>
                <p className="text-lg font-bold text-white group-hover:text-[#FFB800] transition-colors">
                  {PERSONAL_INFO.phone}
                </p>
              </div>
            </a>

            <div className="p-6 rounded-2xl glass-panel border border-white/10 flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-white/5 text-[#FFB800] border border-white/10 flex items-center justify-center flex-none">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">PRODUCTION BASE</span>
                <p className="text-lg font-bold text-white">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>
          </div>

          {/* Minimal Glass Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/15 shadow-2xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FFB800] text-black flex items-center justify-center shadow-[0_0_30px_rgba(255,184,0,0.5)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase">PROJECT REQUEST RECEIVED</h3>
                  <p className="text-sm text-white/70 max-w-md">
                    Thank you, {formData.name || 'friend'}. Azharuddin will review your project requirements and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-xs font-mono tracking-widest text-[#FFB800] uppercase hover:bg-white/20"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-mono text-[#FFB800] tracking-widest uppercase mb-2">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#FFB800] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#FFB800] tracking-widest uppercase mb-2">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#FFB800] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-mono text-[#FFB800] tracking-widest uppercase mb-2">
                        PROJECT TYPE
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0D0D0D] border border-white/10 text-white focus:border-[#FFB800] focus:outline-none transition-colors"
                      >
                        <option value="Real Estate Video">Real Estate Video Tour</option>
                        <option value="Commercial Film">Commercial / Brand Film</option>
                        <option value="Corporate Event">Corporate Summit / Event</option>
                        <option value="Music Visualizer">Music Video / Visualizer</option>
                        <option value="Wedding Film">Luxury Wedding Film</option>
                        <option value="Editorial Stills">Editorial Photography</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#FFB800] tracking-widest uppercase mb-2">
                        ESTIMATED BUDGET
                      </label>
                      <select
                        value={formData.budget}
                        onChange={e => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0D0D0D] border border-white/10 text-white focus:border-[#FFB800] focus:outline-none transition-colors"
                      >
                        <option value="Under $3,000">Under $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#FFB800] tracking-widest uppercase mb-2">
                      PROJECT DETAILS &amp; VISION
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about the project goals, dates, location, and visual style..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#FFB800] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    data-cursor="contact"
                    className="w-full py-4 rounded-xl bg-[#FFB800] text-black font-bold text-xs tracking-[0.25em] uppercase hover:bg-[#FFD700] transition-colors shadow-[0_0_25px_rgba(255,184,0,0.4)] flex items-center justify-center gap-3"
                  >
                    <span>SEND PROJECT REQUEST</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
