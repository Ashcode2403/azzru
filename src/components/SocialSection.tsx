import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Share2 } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const SocialSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-3">
          <Share2 className="w-4 h-4" />
          <span>CONNECT &amp; EXPLORE MORE</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-sans mb-12">
          FOLLOW THE <span className="text-[#FFB800]">JOURNEY</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Instagram Link */}
          <motion.a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="open"
            whileHover={{ scale: 1.03 }}
            className="group p-8 rounded-2xl glass-card border border-white/15 hover:border-[#FFB800] transition-all duration-400 flex flex-col items-center justify-center gap-4 text-center shadow-2xl relative"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <InstagramIcon className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#FFB800] tracking-widest uppercase">INSTAGRAM</span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide mt-1 group-hover:text-[#FFB800] transition-colors">
                {PERSONAL_INFO.instagramHandle}
              </h3>
              <p className="text-xs text-white/60 mt-1">Daily Reels, Behind-the-Scenes &amp; Dubai Shoots</p>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFB800] uppercase mt-2">
              <span>VIEW PROFILE</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.a>

          {/* YouTube Link */}
          <motion.a
            href={PERSONAL_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="open"
            whileHover={{ scale: 1.03 }}
            className="group p-8 rounded-2xl glass-card border border-white/15 hover:border-[#FFB800] transition-all duration-400 flex flex-col items-center justify-center gap-4 text-center shadow-2xl relative"
          >
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <YoutubeIcon className="w-8 h-8 fill-white" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#FFB800] tracking-widest uppercase">YOUTUBE CHANNEL</span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide mt-1 group-hover:text-[#FFB800] transition-colors">
                {PERSONAL_INFO.youtubeHandle}
              </h3>
              <p className="text-xs text-white/60 mt-1">Full 4K Showreels, Property Tours &amp; Music Videos</p>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFB800] uppercase mt-2">
              <span>SUBSCRIBE &amp; WATCH</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

