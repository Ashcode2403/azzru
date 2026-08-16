import React, { useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Play, X, Volume2, Film } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface ShowreelSectionProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ShowreelSection: React.FC<ShowreelSectionProps> = ({
  isOpen,
  onOpen,
  onClose
}) => {
  const showreelProject =
    PROJECTS.find(p => p.category === 'REEL') || PROJECTS[0];

  const youtubeId = showreelProject.youtubeId || 'YvklO8NG6dE';

  // Section reference for scroll-based animation
  const sectionRef = useRef<HTMLElement | null>(null);

  // Track section position in viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // ==============================
  // SCROLL PARALLAX
  // ==============================

  // Background image moves slower than the page
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ['-8%', '8%']
  );

  // Slight cinematic zoom
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.08, 1.12, 1.08]
  );

  // Header moves slightly slower
  const headerY = useTransform(
    scrollYProgress,
    [0, 1],
    [40, -40]
  );

  // Description has different movement speed
  const descriptionY = useTransform(
    scrollYProgress,
    [0, 1],
    [25, -25]
  );

  // Video panel subtle parallax
  const panelY = useTransform(
    scrollYProgress,
    [0, 1],
    [30, -30]
  );

  return (
    <section
      ref={sectionRef}
      id="showreel"
      className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ==============================
            SECTION HEADER
        ============================== */}

        <motion.div
          style={{ y: headerY }}
          initial={{
            opacity: 0,
            y: 60
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.2
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>

            {/* Category Label */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.7,
                delay: 0.1
              }}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-3"
            >
              <Film className="w-4 h-4" />
              <span>CINEMATIC SHOWREEL</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
                filter: 'blur(10px)'
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)'
              }}
              viewport={{
                once: true,
                amount: 0.3
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-sans"
            >
              SELECTED{' '}
              <span className="text-[#FFB800]">
                WORK
              </span>
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            style={{ y: descriptionY }}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-sm md:text-base text-[#A0A0A0] max-w-md"
          >
            A curated collection of visual stories, commercial films,
            luxury property walkthroughs, and cinematic productions
            captured across Dubai &amp; international locations.
          </motion.p>
        </motion.div>


        {/* ==============================
            VIDEO PANEL
        ============================== */}

        <motion.div
          style={{ y: panelY }}
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.96
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          viewport={{
            once: true,
            amount: 0.2
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          onClick={onOpen}
          data-cursor="play"
          whileHover={{
            scale: 1.01
          }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden glass-card cursor-pointer group border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >

          {/* ==============================
              PARALLAX IMAGE
          ============================== */}

          <motion.div
            style={{
              y: imageY,
              scale: imageScale
            }}
            className="absolute -inset-[8%] bg-cover bg-center"
          >
            <div
              className="absolute inset-0 bg-cover bg-center brightness-90"
              style={{
                backgroundImage: `url(${showreelProject.coverImage})`
              }}
            />
          </motion.div>


          {/* ==============================
              DARK OVERLAY
          ============================== */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent group-hover:via-[#050505]/20 transition-all duration-500" />


          {/* ==============================
              HUD CORNERS
          ============================== */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hud-corner-tl m-6 group-hover:opacity-100 transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="hud-corner-tr m-6 group-hover:opacity-100 transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1 }}
            className="hud-corner-bl m-6 group-hover:opacity-100 transition-opacity"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="hud-corner-br m-6 group-hover:opacity-100 transition-opacity"
          />


          {/* ==============================
              PLAY BUTTON
          ============================== */}

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                type: 'spring',
                stiffness: 120
              }}
              whileHover={{
                scale: 1.15
              }}
              className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#FFB800] text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,184,0,0.6)] transition-transform duration-300"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-black translate-x-0.5" />
            </motion.div>


            {/* Play Reel Label */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.7,
                delay: 0.55
              }}
              className="mt-6 flex items-center gap-3 bg-[#050505]/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#FFB800]/40 text-xs font-bold tracking-[0.25em] text-[#FFB800] uppercase shadow-lg group-hover:bg-[#FFB800] group-hover:text-black transition-colors duration-300"
            >
              <span>PLAY REEL 2025</span>
              <span>→</span>
            </motion.div>

          </div>


          {/* ==============================
              BOTTOM TITLE BAR
          ============================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.5
            }}
            className="absolute bottom-8 left-8 right-8 flex justify-between items-end"
          >

            <div>
              <span className="text-xs font-mono text-[#FFB800] tracking-widest uppercase">
                AZZUDOP DIRECTORS CUT
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase mt-1">
                {showreelProject.title}
              </h3>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-white/60">
              <Volume2 className="w-4 h-4 text-[#FFB800]" />
              <span>4K STEREO AUDIO</span>
            </div>

          </motion.div>

        </motion.div>
      </div>


      {/* ==============================
          FULLSCREEN VIDEO MODAL
      ============================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              backdropFilter: 'blur(0px)'
            }}
            animate={{
              opacity: 1,
              backdropFilter: 'blur(24px)'
            }}
            exit={{
              opacity: 0,
              backdropFilter: 'blur(0px)'
            }}
            className="fixed inset-0 z-[10000] bg-[#050505]/95 flex items-center justify-center p-4 sm:p-8"
          >

            {/* Close Button */}
            <motion.button
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.8
              }}
              transition={{
                delay: 0.2
              }}
              onClick={onClose}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:text-[#FFB800] hover:bg-white/20 transition-colors z-50 flex items-center gap-2 font-mono text-xs tracking-widest"
            >
              <span>CLOSE</span>
              <X className="w-6 h-6" />
            </motion.button>


            {/* Video */}
            <motion.div
              initial={{
                scale: 0.85,
                opacity: 0,
                y: 40
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
                y: 40
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-[#FFB800]/40 shadow-[0_0_50px_rgba(255,184,0,0.2)] bg-black"
            >
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title="AzzuDOP Showreel"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};