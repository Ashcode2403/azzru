import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Play, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface WeddingFilmsSectionProps {
  onSelectProject: (p: Project) => void;
}

export const WeddingFilmsSection: React.FC<WeddingFilmsSectionProps> = ({ onSelectProject }) => {
  const weddingProjects = PROJECTS.filter(p => p.category === 'WEDDING FILMS');

  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-3">
              <Heart className="w-4 h-4 text-red-500 fill-red-500/20" />
              <span>EMOTIONAL DOCUMENTARY CINEMATOGRAPHY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-sans">
              WEDDING <span className="text-[#FFB800]">FILMS</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#A0A0A0] max-w-md italic font-serif">
            "Stories that deserve to be remembered."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {weddingProjects.map((proj) => (
            <motion.div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              data-cursor="play"
              whileHover={{ scale: 1.01 }}
              className="relative aspect-[16/10] rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-[#FFB800]/50 transition-all duration-500 cursor-pointer group shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${proj.coverImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 rounded-full bg-[#FFB800] text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,184,0,0.5)] group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-black translate-x-0.5" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono text-[#FFB800] tracking-widest uppercase">{proj.location} • {proj.year}</span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide group-hover:text-[#FFB800] transition-colors mt-1">
                  {proj.title}
                </h3>
                <p className="text-xs text-white/70 line-clamp-2 mt-1 font-light">
                  {proj.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
