import React from 'react';
import { PROJECTS } from '../data/portfolioData';

export const MovingMediaStrips: React.FC = () => {
  const imagesRow1 = [
    'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    '/images/bts/bts_azharuddin_team.jpg',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  ];

  const imagesRow2 = [
    'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
  ];

  // Duplicate for seamless infinite loop
  const list1 = [...imagesRow1, ...imagesRow1];
  const list2 = [...imagesRow2, ...imagesRow2];

  return (
    <section className="py-12 bg-[#050505] overflow-hidden border-t border-b border-white/5 select-none">
      <div className="flex flex-col gap-6">
        {/* Row 1: Left Infinite Scroll */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee-left flex items-center gap-6">
            {list1.map((img, i) => (
              <div
                key={i}
                className="w-72 sm:w-96 aspect-[16/9] rounded-xl overflow-hidden glass-card border border-white/10 flex-none group relative"
              >
                <img 
                  src={img} 
                  alt="AzzuDOP production visual frame" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105" 
                />
                <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-transparent transition-colors" />
                <div className="hud-corner-tl m-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="hud-corner-br m-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right Infinite Scroll */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee-right flex items-center gap-6">
            {list2.map((img, i) => (
              <div
                key={i}
                className="w-72 sm:w-96 aspect-[16/9] rounded-xl overflow-hidden glass-card border border-white/10 flex-none group relative"
              >
                <img 
                  src={img} 
                  alt="AzzuDOP production visual frame" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105" 
                />
                <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-transparent transition-colors" />
                <div className="hud-corner-tr m-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="hud-corner-bl m-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
