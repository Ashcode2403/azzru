import React from 'react';
import { motion } from 'framer-motion';
import { Video, Film, Camera, MapPin } from 'lucide-react';

export const BehindTheScenes: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-3">
              <Video className="w-4 h-4" />
              <span>ON-SET PRODUCTION MOMENTS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-sans">
              BEHIND THE <span className="text-[#FFB800]">FRAME</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#A0A0A0] max-w-md">
            A look into active production sets, camera rigging, wireless monitoring, lighting setups, and location shoots across the UAE.
          </p>
        </div>

        {/* Overlapping Glass & Image Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main BTS Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card border border-white/15 p-3 shadow-2xl">
              <img 
                src="/images/bts/bts_azharuddin_team.jpg" 
                alt="Azharuddin with production crew in Dubai"
                className="w-full h-auto rounded-xl object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="hud-corner-tl m-4" />
              <div className="hud-corner-br m-4" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel flex items-center justify-between border border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-[#FFB800] tracking-widest uppercase">DUBAI PRODUCTION CREW</span>
                  <h4 className="text-sm font-bold text-white uppercase mt-0.5">Azharuddin &amp; Team on Location</h4>
                </div>
                <Film className="w-5 h-5 text-[#FFB800]" />
              </div>
            </div>
          </motion.div>

          {/* Side Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-[#FFB800]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <Camera className="w-5 h-5 text-[#FFB800]" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wide">RIGGING &amp; CAMERA SETUP</h3>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Custom Sony FX3 builds featuring top handles, wireless follow focus systems, external monitors, and lightweight matte boxes for smooth operation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-[#FFB800]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-[#FFB800]" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wide">LOCATION &amp; ATMOSPHERE</h3>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                From high-rise penthouse balconies in Downtown Dubai to golden desert dunes at Lahbab, adapting lighting and framing to natural environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl glass-card border border-[#FFB800]/30 bg-[#FFB800]/5 flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[#FFB800] tracking-widest uppercase">WORKFLOW DISCIPLINE</span>
                <p className="text-xs font-bold text-white uppercase mt-1">100% On-Time Delivery • RAW 4K Masters</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-[#FFB800] animate-ping" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
