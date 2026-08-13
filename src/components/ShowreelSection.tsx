import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, Film } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface ShowreelSectionProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ShowreelSection: React.FC<ShowreelSectionProps> = ({ 
  isOpen, 
  onOpen, 
  onClose 
}) => {
  const showreelProject = PROJECTS.find(p => p.category === 'REEL') || PROJECTS[0];
  const youtubeId = showreelProject.youtubeId || 'YvklO8NG6dE';

  return (
    <section id="showreel" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-3">
              <Film className="w-4 h-4" />
              <span>CINEMATIC SHOWREEL</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-sans">
              SELECTED <span className="text-[#FFB800]">WORK</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#A0A0A0] max-w-md">
            A curated collection of visual stories, commercial films, luxury property walkthroughs, and cinematic productions captured across Dubai &amp; international locations.
          </p>
        </div>

        {/* Video Area Panel */}
        <motion.div 
          onClick={onOpen}
          data-cursor="play"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden glass-card cursor-pointer group border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          {/* Cover Image Backdrop */}
          <div 
            className="absolute inset-0 bg-cover bg-center filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
            style={{ backgroundImage: `url(${showreelProject.coverImage})` }}
          />

          {/* Dark Overlay with Gold Tint on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent group-hover:via-[#050505]/20 transition-all duration-500" />

          {/* HUD Corner Accents */}
          <div className="hud-corner-tl m-6 opacity-70 group-hover:opacity-100 transition-opacity" />
          <div className="hud-corner-tr m-6 opacity-70 group-hover:opacity-100 transition-opacity" />
          <div className="hud-corner-bl m-6 opacity-70 group-hover:opacity-100 transition-opacity" />
          <div className="hud-corner-br m-6 opacity-70 group-hover:opacity-100 transition-opacity" />

          {/* Play Button Centerpiece */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div 
              whileHover={{ scale: 1.15 }}
              className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#FFB800] text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,184,0,0.6)] transition-transform duration-300"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-black translate-x-0.5" />
            </motion.div>

            <div className="mt-6 flex items-center gap-3 bg-[#050505]/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#FFB800]/40 text-xs font-bold tracking-[0.25em] text-[#FFB800] uppercase shadow-lg group-hover:bg-[#FFB800] group-hover:text-black transition-colors duration-300">
              <span>PLAY REEL 2025</span>
              <span>→</span>
            </div>
          </div>

          {/* Bottom Title Bar */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div>
              <span className="text-xs font-mono text-[#FFB800] tracking-widest uppercase">AZZUDOP DIRECTORS CUT</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase mt-1">
                {showreelProject.title}
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-white/60">
              <Volume2 className="w-4 h-4 text-[#FFB800]" />
              <span>4K STEREO AUDIO</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Video Modal Player */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[#050505]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:text-[#FFB800] hover:bg-white/20 transition-colors z-50 flex items-center gap-2 font-mono text-xs tracking-widest"
            >
              <span>CLOSE</span>
              <X className="w-6 h-6" />
            </button>

            {/* Video Iframe Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-[#FFB800]/40 shadow-[0_0_50px_rgba(255,184,0,0.2)] bg-black"
            >
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title="AzzuDOP Showreel"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
