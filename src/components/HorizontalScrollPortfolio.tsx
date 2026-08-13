import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Filter, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, CategoryType } from '../types';

interface HorizontalScrollPortfolioProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: CategoryType[] = [
  'ALL',
  'REEL',
  'COMMERCIAL & BRAND FILMS',
  'REAL ESTATE',
  'MUSIC VIDEO',
  'WEDDING FILMS',
  'CORPORATE VIDEO',
  'EVENTS & CELEBRATIONS',
  'PHOTOS',
  'BEHIND THE SCENES'
];

export const HorizontalScrollPortfolio: React.FC<HorizontalScrollPortfolioProps> = ({ 
  onSelectProject 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('ALL');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = selectedCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const amount = 500;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="work" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFB800]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
        {/* Section Title & Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-3">
              <Layers className="w-4 h-4" />
              <span>VISUAL ARCHIVE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-sans">
              CINEMATIC <span className="text-[#FFB800]">PORTFOLIO</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#FFB800] hover:text-black transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#FFB800] hover:text-black transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/10">
          <span className="text-xs font-mono text-white/40 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER:</span>
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#FFB800] text-black shadow-[0_0_15px_rgba(255,184,0,0.4)]'
                  : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Signature Horizontal Scrolling Panels */}
      <div 
        ref={scrollContainerRef}
        className="flex items-center gap-8 overflow-x-auto px-6 lg:px-12 pb-12 pt-2 scroll-smooth no-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            onClick={() => onSelectProject(project)}
            data-cursor="view"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="group relative flex-none w-[320px] sm:w-[440px] aspect-[4/5] rounded-2xl overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-[#FFB800]/60 transition-all duration-500 shadow-2xl"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Image Thumbnail */}
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{ backgroundImage: `url(${project.coverImage})` }}
            />

            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent group-hover:via-[#050505]/20 transition-all duration-500" />

            {/* Top Category Tag */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md text-[10px] font-mono text-[#FFB800] tracking-widest uppercase border border-[#FFB800]/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-white/50">{project.year}</span>
            </div>

            {/* Expandable Gold Line on Hover */}
            <div className="absolute bottom-[110px] left-6 right-6 h-[2px] bg-white/20 overflow-hidden">
              <div className="w-full h-full bg-[#FFB800] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </div>

            {/* Bottom Project Details */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide group-hover:text-[#FFB800] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/60 font-mono mt-1">
                    {project.location} • {project.role}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/40 flex items-center justify-center group-hover:bg-[#FFB800] group-hover:text-black transition-all duration-300 flex-none ml-4">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#FFB800] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>VIEW PROJECT</span>
                <span>→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
