import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { EXPERTISES } from '../data/portfolioData';

export const ExpertiseSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string>(EXPERTISES[0].id);

  const activeExpertise = EXPERTISES.find(e => e.id === hoveredId) || EXPERTISES[0];

  return (
    <section id="expertise" className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5 select-none">
      {/* Dynamic Background Image Preview */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExpertise.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.25, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-cover bg-center filter brightness-90 contrast-110 blur-[2px]"
            style={{ backgroundImage: `url(${activeExpertise.bgImage})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-sans">
            CINEMATIC <span className="text-[#FFB800]">EXPERTISE</span>
          </h2>
        </div>

        {/* Large Interactive Typography List */}
        <div className="flex flex-col border-t border-white/10">
          {EXPERTISES.map((item, idx) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                data-cursor="open"
                className="group relative py-8 border-b border-white/10 cursor-pointer transition-all duration-400"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-mono text-white/30 group-hover:text-[#FFB800] transition-colors">
                      0{idx + 1}
                    </span>
                    <h3 className={`text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight transition-all duration-300 ${
                      isHovered ? 'text-[#FFB800] translate-x-3' : 'text-white/80 group-hover:text-white'
                    }`}>
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-white/50 tracking-widest uppercase hidden lg:block">
                      {item.subtitle}
                    </span>
                    <div className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
                      isHovered ? 'bg-[#FFB800] text-black border-[#FFB800]' : 'text-white/40 group-hover:text-white'
                    }`}>
                      <ArrowRight className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                    </div>
                  </div>
                </div>

                {/* Expanded Description on Hover */}
                {isHovered && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-sm sm:text-base text-white/70 max-w-2xl font-light pl-12"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
