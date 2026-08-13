import React from 'react';
import { motion } from 'framer-motion';
import { Film, Check } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-3">
            <Film className="w-4 h-4" />
            <span>SOLUTIONS &amp; OFFERINGS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-sans">
            PRODUCTION <span className="text-[#FFB800]">SERVICES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl glass-card border border-white/10 hover:border-[#FFB800]/50 transition-all duration-400 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#FFB800] font-bold">0{idx + 1}</span>
                  <div className="w-2 h-2 rounded-full bg-[#FFB800]" />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-3">
                  {srv.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-light mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                {srv.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-white/60">
                    <Check className="w-3.5 h-3.5 text-[#FFB800]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
