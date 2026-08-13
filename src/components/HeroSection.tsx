import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Play, Camera, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenReel: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReel }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize to range -1 to 1
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#050505] select-none">
      {/* Background Video / Visual Layer with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full scale-105 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(1.05)`
        }}
      >
        {/* Background Image / Video Fallback */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter brightness-[0.4] contrast-[1.1] transition-transform duration-1000"
          style={{ 
            backgroundImage: `url(/images/bts/person.jpeg)` 
          }}
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#050505]/50 to-[#050505]" />
      </div>

      {/* Cursor Light Follow Effect */}
      <div 
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full bg-[#FFB800]/10 blur-[130px] transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 2.5}px, ${mousePos.y * 2.5}px, 0)`
        }}
      />

      {/* Camera HUD Grid & Overlay Details */}
      <div className="hud-corner-tl m-6 md:m-12" />
      <div className="hud-corner-tr m-6 md:m-12" />
      <div className="hud-corner-bl m-6 md:m-12" />
      <div className="hud-corner-br m-6 md:m-12" />

      {/* Camera HUD Telemetry */}
      <div className="absolute top-20 left-8 md:left-16 hidden sm:flex items-center gap-4 text-[10px] font-mono text-white/50 tracking-widest uppercase">
        <div className="flex items-center gap-2 text-[#FFB800]">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-rec" />
          <span>STDBY / REC</span>
        </div>
        <span>•</span>
        <span>ISO 800</span>
        <span>•</span>
        <span>FPS 24.0</span>
        <span>•</span>
        <span>3840×2160 RAW</span>
      </div>

      <div className="absolute top-20 right-8 md:right-16 hidden sm:flex items-center gap-2 text-[10px] font-mono text-white/50 tracking-widest uppercase">
        <MapPin className="w-3.5 h-3.5 text-[#FFB800]" />
        <span>DUBAI, UNITED ARAB EMIRATES</span>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Brand Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FFB800] tracking-[0.25em] uppercase mb-6 backdrop-blur-md"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>{PERSONAL_INFO.brand} • 6+ YEARS EXPERIENCE</span>
        </motion.div>

        {/* Main Huge Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-none font-sans"
        >
          AZZU<span className="text-[#FFB800]">DOP</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-lg sm:text-2xl lg:text-3xl font-light text-white/90 tracking-wide max-w-3xl"
        >
          PHOTOGRAPHER &amp; CINEMATOGRAPHER
        </motion.p>

        {/* Client Tagline Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-4 text-sm sm:text-base text-[#A0A0A0] max-w-xl italic font-serif"
        >
          "{PERSONAL_INFO.tagline}"
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <button
            onClick={onOpenReel}
            data-cursor="play"
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFB800] text-black font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#FFD700] hover:scale-105 shadow-[0_0_30px_rgba(255,184,0,0.4)]"
          >
            <Play className="w-4 h-4 fill-black" />
            <span>WATCH 2025 SHOWREEL</span>
          </button>

          <a
            href="#work"
            data-cursor="view"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-md"
          >
            <span>EXPLORE PORTFOLIO</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Animated Scroll Indicator */}
      <motion.a
        href="#showreel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 group text-white/50 hover:text-[#FFB800] transition-colors"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase">SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#FFB800]" />
        </motion.div>
      </motion.a>
    </section>
  );
};
