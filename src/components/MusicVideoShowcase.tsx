import React from 'react';
import { motion } from 'framer-motion';
import { Disc, Play, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface MusicVideoShowcaseProps {
  onSelectProject: (p: Project) => void;
}

export const MusicVideoShowcase: React.FC<MusicVideoShowcaseProps> = ({ onSelectProject }) => {
  const musicProjects = PROJECTS.filter(p => p.category === 'MUSIC VIDEO');

  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-3">
          <Disc className="w-4 h-4 animate-spin-slow" />
          <span>EXPERIMENTAL VISUALS &amp; AUDIO</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-sans mb-12">
          MUSIC / <span className="text-[#FFB800]">VISUALS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {musicProjects.map((proj) => (
            <motion.div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              data-cursor="play"
              whileHover={{ scale: 1.02 }}
              className="relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/15 cursor-pointer group shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center filter brightness-90 contrast-125 group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${proj.coverImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#FFB800] text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,184,0,0.5)]">
                  <Play className="w-7 h-7 fill-black translate-x-0.5" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#FFB800] tracking-widest uppercase">{proj.year}</span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#FFB800] transition-colors">
                    {proj.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-[#FFB800]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
