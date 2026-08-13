import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AzzuDOPLogo } from './AzzuDOPLogo';

interface IntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<IntroProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    // Step sequence
    const t1 = setTimeout(() => setStep(1), 600);   // Aperture sweep & glow
    const t2 = setTimeout(() => setStep(2), 1600);  // Logo scale & title reveal
    const t3 = setTimeout(() => setStep(3), 2800);  // Fade out screen
    const t4 = setTimeout(() => onComplete(), 3400); // Complete

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div 
          className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Aperture Golden Light Beam */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full bg-[#FFB800]/10 blur-[120px] pointer-events-none"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ 
              scale: step >= 1 ? 1.4 : 0.3, 
              opacity: step >= 1 ? 0.6 : 0 
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Film Frame Borders */}
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          {/* Top Camera HUD details */}
          <div className="absolute top-8 left-8 flex items-center gap-3 text-xs tracking-widest text-[#A0A0A0] font-mono">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-600 animate-rec" />
            <span className="text-[#FFB800]">REC</span>
            <span>00:00:00:01</span>
          </div>

          <div className="absolute top-8 right-8 text-xs tracking-widest text-[#A0A0A0] font-mono">
            <span>4K RAW 24FPS</span>
          </div>

          {/* Central Logo Reveal */}
          <motion.div 
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: step >= 1 ? 1 : 0, 
              scale: step >= 2 ? 1.05 : 0.95 
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <AzzuDOPLogo size="xl" showSubtitle={true} />

            <motion.p
              className="mt-6 text-xs uppercase tracking-[0.4em] text-[#FFB800] font-mono"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: step >= 2 ? 1 : 0, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              DUBAI • UAE — CINEMATOGRAPHY
            </motion.p>
          </motion.div>

          {/* Skip Intro CTA */}
          <button
            onClick={onComplete}
            className="absolute bottom-10 text-[11px] tracking-[0.3em] text-[#A0A0A0] hover:text-[#FFB800] transition-colors font-mono uppercase"
          >
            SKIP INTRO →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
