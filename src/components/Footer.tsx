import React from 'react';
import { AzzuDOPLogo } from './AzzuDOPLogo';
import { Mail, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050505] text-white border-t border-white/10 pt-20 pb-12 overflow-hidden select-none">
      {/* Yellow Animated Footer Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFB800] to-transparent shadow-[0_0_10px_#FFB800]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <AzzuDOPLogo size="md" showSubtitle={true} />
            <p className="text-xs text-white/60 max-w-sm font-light mt-2 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FFB800]">
              <MapPin className="w-4 h-4" />
              <span>BASED IN DUBAI, UNITED ARAB EMIRATES</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-2">NAVIGATION</span>
            <a href="#work" className="text-sm text-white/70 hover:text-[#FFB800] transition-colors w-max">WORK &amp; PORTFOLIO</a>
            <a href="#about" className="text-sm text-white/70 hover:text-[#FFB800] transition-colors w-max">ABOUT AZHARUDDIN</a>
            <a href="#experience" className="text-sm text-white/70 hover:text-[#FFB800] transition-colors w-max">CAREER EXPERIENCE</a>
            <a href="#expertise" className="text-sm text-white/70 hover:text-[#FFB800] transition-colors w-max">EXPERT CAPABILITIES</a>
            <a href="#equipment" className="text-sm text-white/70 hover:text-[#FFB800] transition-colors w-max">EQUIPMENT &amp; GEAR</a>
            <a href="#contact" className="text-sm text-white/70 hover:text-[#FFB800] transition-colors w-max">START A PROJECT</a>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-2">SOCIAL &amp; CONTACT</span>
            <a 
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-white/70 hover:text-[#FFB800] transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-[#FFB800]" />
              <span>Instagram ({PERSONAL_INFO.instagramHandle})</span>
            </a>
            <a 
              href={PERSONAL_INFO.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-white/70 hover:text-[#FFB800] transition-colors"
            >
              <YoutubeIcon className="w-4 h-4 text-[#FFB800]" />
              <span>YouTube ({PERSONAL_INFO.youtubeHandle})</span>
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3 text-sm text-white/70 hover:text-[#FFB800] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#FFB800]" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <a 
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 text-sm text-white/70 hover:text-[#FFB800] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FFB800]" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <p>© {new Date().getFullYear()} AZZUDOP. ALL RIGHTS RESERVED.</p>
          <p className="tracking-widest uppercase">CINEMATOGRAPHY • PHOTOGRAPHY • VISUAL STORYTELLING</p>
        </div>
      </div>
    </footer>
  );
};

