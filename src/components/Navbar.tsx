import React, { useState, useEffect } from 'react';
// import { AzzuDOPLogo } from './AzzuDOPLogo';
import { Menu, X, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';


interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'EXPERTISE', href: '#expertise' },
    { label: 'EQUIPMENT', href: '#equipment' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[9980] transition-all duration-500 ${
          isScrolled 
            ? 'py-3.5 bg-[#050505]/75 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
<a
  href="#"
  className="group flex items-center"
>
  <img
    src="/images/logo/logo.png"
    alt="AzzuDOP Logo"
    className="
      h-10
      sm:h-12
      w-auto
      object-contain
      transition-all
      duration-500
      group-hover:scale-105
      group-hover:drop-shadow-[0_0_12px_rgba(255,184,0,0.45)]
    "
  />
</a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 glass-panel px-6 py-2.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label.toLowerCase();
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-semibold tracking-widest transition-all duration-300 relative py-1 ${
                    isActive ? 'text-[#FFB800]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] rounded-full shadow-[0_0_8px_#FFB800]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              data-cursor="contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#FFB800] text-black transition-all duration-300 hover:bg-[#FFD700] hover:scale-105 shadow-[0_0_20px_rgba(255,184,0,0.3)]"
            >
              <span>LET'S WORK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#FFB800] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9970] bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-between p-8 md:hidden border-b border-white/10">
          

          <div className="flex flex-col gap-6 my-auto">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-black tracking-wider text-white hover:text-[#FFB800] transition-colors flex items-center justify-between border-b border-white/10 pb-4"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#FFB800]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
            <div className="flex items-center gap-6 justify-center">
              <a 
                href={PERSONAL_INFO.instagramUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs tracking-wider text-white/80 hover:text-[#FFB800]"
              >
                <InstagramIcon className="w-4 h-4 text-[#FFB800]" />
                <span>Instagram</span>
              </a>
              <a 
                href={PERSONAL_INFO.youtubeUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs tracking-wider text-white/80 hover:text-[#FFB800]"
              >
                <YoutubeIcon className="w-4 h-4 text-[#FFB800]" />
                <span>YouTube</span>
              </a>

            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-4 rounded-full bg-[#FFB800] text-black font-bold tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(255,184,0,0.4)]"
            >
              LET'S WORK TOGETHER
            </a>
          </div>
        </div>
      )}
    </>
  );
};
