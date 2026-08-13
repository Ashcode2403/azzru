import React, { useEffect, useState } from 'react';

export const GrainOverlay: React.FC = () => {
  return <div className="film-grain" aria-hidden="true" />;
};

export const ScrollProgress: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollPercent(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2.5px] z-[9990] bg-white/5 pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-[#FFB800] via-[#FFD700] to-[#E59400] transition-all duration-150 ease-out shadow-[0_0_8px_#FFB800]"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};
