import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sliders, Zap, ShieldCheck } from 'lucide-react';
import { EQUIPMENTS } from '../data/portfolioData';

export const EquipmentSection: React.FC = () => {
  return (
    <section id="equipment" className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-3">
            <Sliders className="w-4 h-4" />
            <span>PRODUCTION RIGS &amp; GEAR</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-sans">
            THE TOOLS <span className="text-[#FFB800]">BEHIND THE FRAME</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/60">
            Equipped with state-of-the-art cinema cameras, 3-axis stabilization systems, prime lenses, and directional lighting for pristine 4K video capture.
          </p>
        </div>

        {/* Interactive Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EQUIPMENTS.map((gear, idx) => (
            <motion.div
              key={gear.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              data-cursor="view"
              className="group relative p-6 rounded-2xl glass-card border border-white/10 hover:border-[#FFB800]/60 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-black">
                <img 
                  src={gear.image} 
                  alt={gear.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md text-[10px] font-mono text-[#FFB800] tracking-widest uppercase border border-[#FFB800]/30">
                  {gear.category}
                </span>
              </div>

              {/* Specs & Info */}
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#FFB800] transition-colors">
                  {gear.name}
                </h3>

                <p className="mt-2 text-xs font-mono text-[#FFB800] tracking-wider uppercase font-semibold">
                  {gear.specs}
                </p>

                <p className="mt-3 text-xs text-white/70 leading-relaxed font-light">
                  {gear.description}
                </p>
              </div>

              {/* Bottom Yellow Highlight Line */}
              <div className="mt-6 w-full h-[2px] bg-white/10 overflow-hidden">
                <div className="w-full h-full bg-[#FFB800] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
