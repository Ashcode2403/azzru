import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, Film, MapPin, Award, CheckCircle2, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 6;
      const duration = 1200;
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section id="about" ref={ref} className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual: BTS Shot with Camera */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card border border-white/15 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <img 
                src="/images/bts/bts_azharuddin_team.jpeg" 
                alt="Azharuddin and crew on location in Dubai" 
                className="w-full h-auto rounded-xl object-cover filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700" 
              />

              {/* HUD Accents */}
              <div className="hud-corner-tl m-4" />
              <div className="hud-corner-tr m-4" />
              <div className="hud-corner-bl m-4" />
              <div className="hud-corner-br m-4" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#FFB800] tracking-widest uppercase">ON LOCATION — DUBAI</span>
                  <p className="text-xs font-bold text-white uppercase mt-0.5">Azharuddin &amp; Film Crew</p>
                </div>
                <Camera className="w-5 h-5 text-[#FFB800]" />
              </div>
            </div>

            {/* Animated Stat Badge Floating */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 p-6 rounded-2xl bg-[#0D0D0D] border border-[#FFB800]/50 shadow-[0_10px_30px_rgba(255,184,0,0.2)] flex items-center gap-4">
              <div className="text-4xl sm:text-5xl font-black text-[#FFB800] font-mono">
                0{count}+
              </div>
              <div className="text-xs font-bold tracking-widest uppercase text-white leading-tight">
                YEARS<br />PROFESSIONAL<br />EXPERIENCE
              </div>
            </div>
          </motion.div>

          {/* Right Biography Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFB800] tracking-widest uppercase">
              <User className="w-4 h-4" />
              <span>THE PERSON BEHIND THE CAMERA</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-sans leading-none">
              AZHAR<span className="text-[#FFB800]">UDDIN</span>
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
              {PERSONAL_INFO.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              {[
                'Cinema Camera Handling (Sony FX3)',
                '3-Axis Gimbal Stabilization',
                'Directional & Ambient Lighting',
                'Luxury Real Estate Videography',
                'Corporate & Commercial Shoots',
                'Color Grading & Edit Workflows'
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB800] flex-none" />
                  <span className="text-xs font-bold text-white tracking-wide uppercase">{skill}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl glass-panel border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFB800]" />
                <span>LOCATION: {PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FFB800]" />
                <span>EDUCATION: B.A. (University of Delhi)</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
