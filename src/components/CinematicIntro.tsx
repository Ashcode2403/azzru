import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<IntroProps> = ({
  onComplete
}) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    // Cinematic intro timeline
    const t1 = setTimeout(() => setStep(1), 500);
    const t2 = setTimeout(() => setStep(2), 1300);
    const t3 = setTimeout(() => setStep(3), 2500);
    const t4 = setTimeout(() => onComplete(), 3300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <AnimatePresence mode="wait">
      {step < 3 && (
        <motion.div
          key="cinematic-intro"
          className="
            fixed
            inset-0
            z-[10000]
            bg-[#050505]
            flex
            items-center
            justify-center
            overflow-hidden
          "
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: 'blur(10px)'
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        >

          {/* =====================================================
              BACKGROUND VIGNETTE
          ====================================================== */}

          <div
            className="
              absolute
              inset-0
              pointer-events-none
              bg-[radial-gradient(circle_at_center,transparent_0%,#050505_75%)]
            "
          />


          {/* =====================================================
              GOLDEN APERTURE LIGHT
          ====================================================== */}

          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[400px]
              h-[400px]
              sm:w-[600px]
              sm:h-[600px]
              rounded-full
              bg-[#FFB800]/10
              blur-[100px]
              pointer-events-none
            "
            initial={{
              scale: 0.15,
              opacity: 0
            }}
            animate={{
              scale: step >= 1 ? 1.5 : 0.15,
              opacity: step >= 1 ? 0.65 : 0
            }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1]
            }}
          />


          {/* =====================================================
              SECONDARY LIGHT PULSE
          ====================================================== */}

          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[180px]
              h-[180px]
              rounded-full
              border
              border-[#FFB800]/20
              pointer-events-none
            "
            initial={{
              scale: 0,
              opacity: 0
            }}
            animate={{
              scale: step >= 1 ? [0.5, 1.8, 1.4] : 0,
              opacity: step >= 1 ? [0, 0.8, 0] : 0
            }}
            transition={{
              duration: 1.6,
              ease: 'easeOut'
            }}
          />


          {/* =====================================================
              APERTURE RINGS
          ====================================================== */}

          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[280px]
              h-[280px]
              sm:w-[420px]
              sm:h-[420px]
              rounded-full
              border
              border-[#FFB800]/10
              pointer-events-none
            "
            initial={{
              scale: 0.5,
              opacity: 0,
              rotate: 0
            }}
            animate={{
              scale: step >= 1 ? 1.5 : 0.5,
              opacity: step >= 1 ? 0.5 : 0,
              rotate: 180
            }}
            transition={{
              duration: 2,
              ease: 'easeOut'
            }}
          />


          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[200px]
              h-[200px]
              sm:w-[300px]
              sm:h-[300px]
              rounded-full
              border
              border-white/5
              pointer-events-none
            "
            initial={{
              scale: 0.3,
              opacity: 0
            }}
            animate={{
              scale: step >= 1 ? 1.8 : 0.3,
              opacity: step >= 1 ? 0.4 : 0
            }}
            transition={{
              duration: 1.8,
              delay: 0.15,
              ease: 'easeOut'
            }}
          />


          {/* =====================================================
              FILM FRAME HUD CORNERS
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: step >= 1 ? 0.8 : 0
            }}
            transition={{ duration: 0.6 }}
            className="hud-corner-tl"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: step >= 1 ? 0.8 : 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.05
            }}
            className="hud-corner-tr"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: step >= 1 ? 0.8 : 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="hud-corner-bl"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: step >= 1 ? 0.8 : 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.15
            }}
            className="hud-corner-br"
          />


          {/* =====================================================
              TOP LEFT CAMERA HUD
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: step >= 1 ? 1 : 0,
              x: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="
              absolute
              top-6
              left-6
              sm:top-8
              sm:left-8
              flex
              items-center
              gap-3
              text-[10px]
              sm:text-xs
              tracking-widest
              text-[#A0A0A0]
              font-mono
            "
          >
            <motion.span
              animate={{
                opacity: [1, 0.35, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
              className="
                inline-block
                w-2.5
                h-2.5
                rounded-full
                bg-red-600
                shadow-[0_0_10px_rgba(255,0,0,0.7)]
              "
            />

            <span className="text-[#FFB800]">
              REC
            </span>

            <span>
              00:00:00:01
            </span>
          </motion.div>


          {/* =====================================================
              TOP RIGHT CAMERA INFO
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: step >= 1 ? 1 : 0,
              x: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="
              absolute
              top-6
              right-6
              sm:top-8
              sm:right-8
              text-[10px]
              sm:text-xs
              tracking-widest
              text-[#A0A0A0]
              font-mono
            "
          >
            4K RAW 24FPS
          </motion.div>


          {/* =====================================================
              CENTER CONTENT
          ====================================================== */}

          <motion.div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              justify-center
              text-center
              perspective-[1200px]
            "
            initial={{
              opacity: 0,
              scale: 0.75,
              rotateX: 18,
              filter: 'blur(20px)'
            }}
            animate={{
              opacity: step >= 1 ? 1 : 0,
              scale: step >= 2 ? 1.05 : 0.95,
              rotateX: 0,
              filter: 'blur(0px)'
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1]
            }}
          >

            {/* =================================================
                LOGO
            ================================================== */}

            <motion.div
              className="relative"
              initial={{
                scale: 0.7,
                opacity: 0
              }}
              animate={{
                scale: step >= 2 ? [0.98, 1.04, 1] : 0.9,
                opacity: step >= 1 ? 1 : 0
              }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >

              {/* Logo Glow */}

              <motion.div
                className="
                  absolute
                  inset-0
                  bg-[#FFB800]/20
                  blur-[50px]
                  rounded-full
                  pointer-events-none
                "
                animate={{
                  opacity: step >= 2
                    ? [0.2, 0.5, 0.25]
                    : 0
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />


              {/* PNG Logo */}

              <img
                src="/images/logo/logo.png"
                alt="AzzuDOP Logo"
                className="
                  relative
                  z-10
                  w-56
                  sm:w-72
                  md:w-96
                  lg:w-[500px]
                  h-auto
                  object-contain
                  drop-shadow-[0_0_35px_rgba(255,184,0,0.3)]
                "
              />

            </motion.div>


            {/* =================================================
                GOLD LIGHT SWEEP
            ================================================== */}

            <motion.div
              initial={{
                x: '-120%',
                opacity: 0
              }}
              animate={{
                x: step >= 2 ? '120%' : '-120%',
                opacity: step >= 2 ? [0, 1, 0] : 0
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut'
              }}
              className="
                absolute
                top-0
                bottom-0
                left-0
                w-20
                bg-gradient-to-r
                from-transparent
                via-[#FFB800]/40
                to-transparent
                blur-xl
                pointer-events-none
              "
            />


            {/* =================================================
                SUBTITLE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
                letterSpacing: '0.1em'
              }}
              animate={{
                opacity: step >= 2 ? 1 : 0,
                y: step >= 2 ? 0 : 15,
                letterSpacing:
                  step >= 2 ? '0.4em' : '0.1em'
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: 'easeOut'
              }}
              className="
                mt-6
                text-[9px]
                sm:text-xs
                uppercase
                text-[#FFB800]
                font-mono
              "
            >
              DUBAI • UAE — CINEMATOGRAPHY
            </motion.div>


            {/* =================================================
                SCAN LINE
            ================================================== */}

            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0
              }}
              animate={{
                scaleX: step >= 2 ? 1 : 0,
                opacity: step >= 2 ? 1 : 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.4
              }}
              className="
                mt-5
                w-32
                sm:w-48
                h-[1px]
                bg-[#FFB800]
                shadow-[0_0_12px_rgba(255,184,0,0.7)]
                origin-center
              "
            />

          </motion.div>


          {/* =====================================================
              SCANLINE OVERLAY
          ====================================================== */}

          <motion.div
            initial={{
              y: '-100%'
            }}
            animate={{
              y: '100%'
            }}
            transition={{
              duration: 2.8,
              ease: 'linear'
            }}
            className="
              absolute
              left-0
              right-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#FFB800]/20
              to-transparent
              pointer-events-none
            "
          />


          {/* =====================================================
              BOTTOM CAMERA INFO
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15
            }}
            animate={{
              opacity: step >= 2 ? 1 : 0,
              y: step >= 2 ? 0 : 15
            }}
            transition={{
              duration: 0.6
            }}
            className="
              absolute
              bottom-20
              left-6
              sm:left-8
              text-[9px]
              sm:text-[10px]
              font-mono
              tracking-widest
              text-white/30
              uppercase
            "
          >
            AZZUDOP / VISUAL STORIES
          </motion.div>


          {/* =====================================================
              SKIP INTRO
          ====================================================== */}

          <motion.button
            onClick={handleSkip}
            initial={{
              opacity: 0,
              y: 15
            }}
            animate={{
              opacity: step >= 1 ? 1 : 0,
              y: step >= 1 ? 0 : 15
            }}
            transition={{
              duration: 0.6,
              delay: 0.3
            }}
            className="
              absolute
              bottom-8
              sm:bottom-10
              right-6
              sm:right-10
              text-[10px]
              sm:text-[11px]
              tracking-[0.3em]
              text-[#A0A0A0]
              hover:text-[#FFB800]
              transition-colors
              duration-300
              font-mono
              uppercase
            "
          >
            SKIP INTRO →
          </motion.button>


          {/* =====================================================
              BOTTOM CENTER TIMELINE
          ====================================================== */}

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0
            }}
            animate={{
              scaleX: step >= 1 ? 1 : 0,
              opacity: step >= 1 ? 1 : 0
            }}
            transition={{
              duration: 1
            }}
            className="
              absolute
              bottom-3
              left-1/2
              -translate-x-1/2
              w-32
              sm:w-48
              h-[1px]
              bg-white/10
              overflow-hidden
              origin-center
            "
          >
            <motion.div
              className="
                h-full
                bg-[#FFB800]
                shadow-[0_0_10px_rgba(255,184,0,0.8)]
              "
              initial={{
                width: '0%'
              }}
              animate={{
                width: step >= 2 ? '100%' : '0%'
              }}
              transition={{
                duration: 1.2,
                ease: 'linear'
              }}
            />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};