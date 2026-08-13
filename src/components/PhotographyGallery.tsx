import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const PHOTOS = [
  {
    id: 'ph-1',
    title: 'DUBAI DESERT SUNSET',
    location: 'Lahbab Desert',
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'ph-2',
    title: 'EDITORIAL PORTRAIT STILL',
    location: 'Studio 1, Dubai',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-square'
  },
  {
    id: 'ph-3',
    title: 'BURJ KHALIVA REFLECTION',
    location: 'Downtown Dubai',
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 'ph-4',
    title: 'FASHION MOOD',
    location: 'Al Serkal Avenue',
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'ph-5',
    title: 'LUXURY ARCHITECTURE',
    location: 'Palm Jumeirah',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'ph-6',
    title: 'DRAMATIC SHADOW PORTRAIT',
    location: 'Dubai Production City',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-square'
  }
];

export const PhotographyGallery: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const activePhoto = activePhotoIndex !== null ? PHOTOS[activePhotoIndex] : null;

  const handlePrev = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex - 1 + PHOTOS.length) % PHOTOS.length);
  };

  const handleNext = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex + 1) % PHOTOS.length);
  };

  return (
    <section id="photography" className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-3">
              <Camera className="w-4 h-4" />
              <span>STILL FRAMES &amp; PORTRAITURE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-sans">
              EDITORIAL <span className="text-[#FFB800]">PHOTOGRAPHY</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#A0A0A0] max-w-md">
            Capturing frozen moments of beauty, architectural lines, and portrait emotion with medium-format precision.
          </p>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              data-cursor="open"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`break-inside-avoid relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-[#FFB800]/60 transition-all duration-500 cursor-pointer group shadow-2xl ${photo.aspect}`}
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-4 right-4 p-2 rounded-full bg-[#050505]/70 backdrop-blur-md text-[#FFB800] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono text-[#FFB800] tracking-widest uppercase">{photo.location}</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#FFB800] transition-colors mt-0.5">
                  {photo.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Viewer */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[#050505]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-12"
          >
            {/* Header controls */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-50">
              <div className="text-xs font-mono text-[#FFB800] tracking-widest">
                <span>STILL {activePhotoIndex! + 1} OF {PHOTOS.length}</span>
              </div>
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="p-3 rounded-full bg-white/10 text-white hover:text-[#FFB800] hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Lightbox Image */}
            <div className="relative max-w-5xl max-h-[80vh] rounded-xl overflow-hidden border border-[#FFB800]/40 shadow-2xl">
              <img 
                src={activePhoto.url} 
                alt={activePhoto.title}
                className="max-h-[80vh] w-auto object-contain mx-auto" 
              />
              <div className="absolute bottom-4 left-6 right-6 p-4 rounded-xl glass-panel text-center">
                <h4 className="text-xl font-bold text-white uppercase tracking-wide">{activePhoto.title}</h4>
                <p className="text-xs font-mono text-[#FFB800] uppercase mt-1">{activePhoto.location}</p>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-6 p-4 rounded-full bg-white/10 text-white hover:text-[#FFB800] hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 p-4 rounded-full bg-white/10 text-white hover:text-[#FFB800] hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
