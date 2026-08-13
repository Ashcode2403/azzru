import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowUpRight, Play } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface RealEstateShowcaseProps {
  onSelectProject: (p: Project) => void;
}

export const RealEstateShowcase: React.FC<RealEstateShowcaseProps> = ({ onSelectProject }) => {
  const realEstateProjects = PROJECTS.filter(p => p.category === 'REAL ESTATE');

  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Subtle Luxury Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFB800]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-3">
              <Home className="w-4 h-4" />
              <span>LUXURY PROPERTY CINEMATOGRAPHY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-sans">
              REAL <span className="text-[#FFB800]">ESTATE</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#A0A0A0] max-w-md italic font-serif">
            "Turning architectural spaces into immersive visual experiences."
          </p>
        </div>

        {/* Featured Big Parallax Hero for Real Estate */}
        {realEstateProjects.length > 0 && (
          <motion.div
            onClick={() => onSelectProject(realEstateProjects[0])}
            data-cursor="play"
            className="relative w-full aspect-[16/8] sm:aspect-[21/9] rounded-2xl overflow-hidden glass-card border border-white/15 mb-12 cursor-pointer group shadow-2xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center filter brightness-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
              style={{ backgroundImage: `url(${realEstateProjects[0].coverImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

            <div className="hud-corner-tl m-6" />
            <div className="hud-corner-br m-6" />

            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#FFB800] text-black font-bold text-[10px] tracking-widest uppercase font-mono">
                  FEATURED LUXURY TOUR
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide mt-2 group-hover:text-[#FFB800] transition-colors">
                  {realEstateProjects[0].title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-white/70 mt-1">
                  {realEstateProjects[0].location} • {realEstateProjects[0].client}
                </p>
              </div>

              <div className="w-14 h-14 rounded-full bg-[#FFB800] text-black flex items-center justify-center shadow-[0_0_25px_rgba(255,184,0,0.5)] group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-black translate-x-0.5" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Real Estate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {realEstateProjects.slice(1).map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              data-cursor="view"
              className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-[#FFB800]/50 transition-all duration-500 cursor-pointer aspect-[16/10]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                style={{ backgroundImage: `url(${proj.coverImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#FFB800] tracking-widest uppercase">{proj.year}</span>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#FFB800] transition-colors">
                    {proj.title}
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 text-white group-hover:bg-[#FFB800] group-hover:text-black flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
