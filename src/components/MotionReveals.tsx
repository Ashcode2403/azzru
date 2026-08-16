import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Staggered Character / Word Reveal
export const StaggerText: React.FC<{ text: string; className?: string; delay?: number }> = ({ 
  text, 
  className = '',
  delay = 0
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 25,
      filter: 'blur(6px)',
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`flex flex-wrap gap-x-2 ${className}`}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Clip-Path Mask Reveal for Cinematic Images
export const ClipPathReveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
  children,
  className = '',
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0 }}
      whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      viewport={{ once: true, margin: '-80px' }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Parallax Wrapper
export const ParallaxWrapper: React.FC<{ children: React.ReactNode; speed?: number; className?: string }> = ({
  children,
  speed = -0.15,
  className = ''
}) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      style={{ transform: `translate3d(0, ${offsetY}px, 0)` }}
      className={`transition-transform duration-75 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

// Scroll-Based Darkening Overlay
export const ScrollDarkenOverlay: React.FC = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollMax <= 0) return;
      const progress = window.scrollY / scrollMax;
      // Progressive subtle overlay darkening as user scrolls deeper
      setOpacity(Math.min(0.35, progress * 0.45));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[40] transition-opacity duration-300"
      style={{ 
        backgroundColor: '#050505', 
        opacity 
      }} 
    />
  );
};
