import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Play, MapPin, Calendar, User, Film } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ 
  project, 
  onClose,
  onSelectProject
}) => {
  if (!project) return null;

  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] bg-[#050505]/95 backdrop-blur-2xl overflow-y-auto"
      >
        {/* Header Control Bar */}
        <div className="sticky top-0 z-50 w-full py-4 px-6 md:px-12 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#FFB800]/20 text-[#FFB800] text-xs font-mono font-bold uppercase tracking-widest border border-[#FFB800]/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-white/50">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:text-[#FFB800] hover:bg-white/20 transition-colors text-xs font-mono tracking-widest uppercase"
          >
            <span>CLOSE</span>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Main Title & Metadata */}
          <div className="mb-10">
            <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-sans">
              {project.title}
            </h1>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl glass-panel border border-white/10">
              <div>
                <span className="text-[10px] font-mono text-[#FFB800] tracking-widest uppercase flex items-center gap-1">
                  <User className="w-3 h-3" /> ROLE
                </span>
                <p className="text-sm font-semibold text-white mt-1">{project.role}</p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#FFB800] tracking-widest uppercase flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> LOCATION
                </span>
                <p className="text-sm font-semibold text-white mt-1">{project.location}</p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#FFB800] tracking-widest uppercase flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> YEAR
                </span>
                <p className="text-sm font-semibold text-white mt-1">{project.year}</p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#FFB800] tracking-widest uppercase flex items-center gap-1">
                  <Film className="w-3 h-3" /> CLIENT
                </span>
                <p className="text-sm font-semibold text-white mt-1">{project.client || 'AzzuDOP Production'}</p>
              </div>
            </div>

            <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Featured Video Player if Youtube ID exists */}
          {project.youtubeId && (
            <div className="mb-12 rounded-2xl overflow-hidden border border-[#FFB800]/30 shadow-[0_0_40px_rgba(255,184,0,0.15)] bg-black aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=0&rel=0`}
                title={project.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Photo Gallery Grid */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-16">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFB800]" />
                VISUAL GALLERY &amp; STILLS
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((imgUrl, i) => (
                  <div 
                    key={i} 
                    className="rounded-xl overflow-hidden glass-card border border-white/10 aspect-video group"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${project.title} still ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation to Prev / Next Project */}
          <div className="border-t border-white/10 pt-8 flex items-center justify-between gap-4">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="flex items-center gap-3 p-4 rounded-xl glass-panel hover:border-[#FFB800] transition-colors text-left group"
            >
              <ArrowLeft className="w-5 h-5 text-[#FFB800] group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase">PREVIOUS PROJECT</span>
                <p className="text-sm font-bold text-white uppercase">{prevProject.title}</p>
              </div>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="flex items-center gap-3 p-4 rounded-xl glass-panel hover:border-[#FFB800] transition-colors text-right group"
            >
              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase">NEXT PROJECT</span>
                <p className="text-sm font-bold text-white uppercase">{nextProject.title}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#FFB800] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
