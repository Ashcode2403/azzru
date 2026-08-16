import React from 'react';
import { PROJECTS } from '../data/portfolioData';

export const MovingMediaStrips: React.FC = () => {
  const imagesRow1 = [
    '/images/photo/a.jpg',
    '/images/photo/d.jpg',
    '/images/photo/f.JPG',
    '/images/photo/b.jpg',
    '/images/photo/e.jpg',
    '/images/photo/c.jpg',
  ];

  const imagesRow2 = [
        '/images/photo/h.jpg',
        '/images/photo/i.jpg',
        '/images/photo/IMG_6840.JPG',
        '/images/photo/IMG_4595.JPG',
        '/images/photo/IMG_4589.JPG',
        '/images/bts/img5.jpeg',


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
                className="w-72 sm:w-96 aspect-[3/4] rounded-xl overflow-hidden glass-card border border-white/10 flex-none group relative"
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
                className="w-72 sm:w-96 aspect-[3/4] rounded-xl overflow-hidden glass-card border border-white/10 flex-none group relative"
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
