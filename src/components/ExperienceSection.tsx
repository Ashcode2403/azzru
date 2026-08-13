import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Check } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-3">
            <Briefcase className="w-4 h-4" />
            <span>CAREER ROADMAP</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-sans">
            PROFESSIONAL <span className="text-[#FFB800]">TIMELINE</span>
          </h2>
        </div>

        {/* Futuristic Timeline Structure */}
        <div className="relative border-l-2 border-[#FFB800]/30 ml-4 sm:ml-8 pl-6 sm:pl-12 flex flex-col gap-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#FFB800] group-hover:bg-[#FFB800] group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_#FFB800]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 rounded-2xl glass-card border border-white/10 hover:border-[#FFB800]/50 transition-all duration-400">
                {/* Period & Company */}
                <div className="lg:col-span-4 flex flex-col gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FFB800]/10 text-[#FFB800] text-xs font-mono font-bold tracking-widest w-max border border-[#FFB800]/30">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide mt-2">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                    <MapPin className="w-3.5 h-3.5 text-[#FFB800]" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Role & Description */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                  <h4 className="text-xl font-bold text-[#FFB800] uppercase tracking-wide">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed font-light">
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-mono text-white/70">
                        <Check className="w-3.5 h-3.5 text-[#FFB800]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
