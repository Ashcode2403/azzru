import React, { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import {
  ArrowDown,
  Play,
  Camera,
  MapPin
} from 'lucide-react';

import { PERSONAL_INFO } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { StaggerText } from './MotionReveals';

interface HeroSectionProps {
  onOpenReel: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReel
}) => {

  const sectionRef = useRef<HTMLElement>(null);

  /* =====================================================
     SCROLL PROGRESS
  ===================================================== */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });


  /* =====================================================
     SCROLL PARALLAX LAYERS
  ===================================================== */

  // Background moves slowly
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '22%']
  );

  // Foreground background layer
  const foregroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '12%']
  );

  // Main content moves at a different speed
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '18%']
  );

  // Location moves slightly slower
  const locationY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '-20%']
  );

  // Content fades as hero leaves viewport
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 0.7, 0]
  );

  // Cinematic scale down
  const contentScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.94]
  );

  // Background zoom
  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.05, 1.15]
  );


  /* =====================================================
     MOUSE PARALLAX
  ===================================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5
  });


  /* =====================================================
     BACKGROUND 3D MOVEMENT
  ===================================================== */

  const backgroundX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-18, 18]
  );

  const backgroundY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-18, 18]
  );


  /* =====================================================
     FOREGROUND PARALLAX
  ===================================================== */

  const foregroundX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-8, 8]
  );

  const foregroundMouseY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-8, 8]
  );


  /* =====================================================
     CONTENT MICRO MOVEMENT
  ===================================================== */

  const contentMouseX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-3, 3]
  );

  const contentMouseY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-3, 3]
  );


  /* =====================================================
     CURSOR SPOTLIGHT
  ===================================================== */

  const spotlightX = useTransform(
    smoothX,
    [-0.5, 0.5],
    ['0%', '100%']
  );

  const spotlightY = useTransform(
    smoothY,
    [-0.5, 0.5],
    ['0%', '100%']
  );


  /* =====================================================
     MOUSE HANDLER
  ===================================================== */

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {

      const x =
        e.clientX / window.innerWidth - 0.5;

      const y =
        e.clientY / window.innerHeight - 0.5;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener(
      'mousemove',
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };

  }, [mouseX, mouseY]);


  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        h-screen
        min-h-[700px]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
        select-none
      "
    >

      {/* =================================================
          DEEP BACKGROUND PARALLAX
      ================================================= */}

      <motion.div
        style={{
          y: bgY,
          scale: bgScale,
          x: backgroundX
        }}
        className="
          absolute
          -inset-8
          w-auto
          h-auto
        "
      >

        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            brightness-[1]
            contrast-[1]
          "
          style={{
            backgroundImage:
              'url(/images/bts/person.jpeg)'
          }}
        />

      </motion.div>


      {/* =================================================
          DARK CINEMATIC GRADIENT
      ================================================= */}

      <motion.div
        style={{
          y: foregroundY,
          x: foregroundX
        }}
        className="absolute -inset-8"
      >

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#050505]
            via-[#050505]/40
            to-[#050505]/80
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-radial-at-c
            from-transparent
            via-[#050505]/40
            to-[#050505]
          "
        />

      </motion.div>


      {/* =================================================
          CURSOR SPOTLIGHT
      ================================================= */}

      <motion.div
        style={{
          left: spotlightX,
          top: spotlightY
        }}
        className="
          pointer-events-none
          absolute
          w-[550px]
          h-[550px]
          rounded-full
          -translate-x-1/2
          -translate-y-1/2
          bg-[#FFB800]/10
          blur-[130px]
          opacity-70
        "
      />


      {/* =================================================
          CINEMATIC VIGNETTE
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]
        "
      />


      {/* =================================================
          LOCATION
      ================================================= */}

      <motion.div
        style={{
          y: locationY,
          x: foregroundX
        }}
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1,
          delay: 0.5
        }}
        className="
          absolute
          top-20
          right-8
          md:right-16
          hidden
          sm:flex
          items-center
          gap-2
          text-[10px]
          font-mono
          text-white/50
          tracking-widest
          uppercase
          z-20
        "
      >

        <MapPin
          className="
            w-3.5
            h-3.5
            text-[#FFB800]
          "
        />

        <span>
          DUBAI, UNITED ARAB EMIRATES
        </span>

      </motion.div>


      {/* =================================================
          MAIN HERO CONTENT
      ================================================= */}

      <motion.div
        style={{
          y: contentY,
          x: contentMouseX,
          opacity: contentOpacity,
          scale: contentScale
        }}
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          px-6
          text-center
          flex
          flex-col
          items-center
        "
      >

        {/* =================================================
            EXPERIENCE BADGE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.9,
            filter: 'blur(8px)'
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)'
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-1.5
            rounded-full
            bg-white/5
            border
            border-white/10
            text-xs
            font-mono
            text-[#FFB800]
            tracking-[0.25em]
            uppercase
            mb-6
            backdrop-blur-md
          "
        >

          <Camera className="w-3.5 h-3.5" />

          <span>
            {PERSONAL_INFO.brand} • 6+ YEARS EXPERIENCE
          </span>

        </motion.div>


        {/* =================================================
            MAIN TITLE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            filter: 'blur(18px)'
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)'
          }}
          transition={{
            duration: 1.3,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-center flex justify-center"
        >

          <StaggerText
            text="AZZU"
            className="
              text-5xl
              sm:text-7xl
              lg:text-9xl
              font-black
              tracking-tighter
              text-white
              uppercase
              leading-none
              font-sans
            "
          />
                    <StaggerText
            text="DOP"
            className="
              text-5xl
              sm:text-7xl
              lg:text-9xl
              font-black
              tracking-tighter
              text-white
              uppercase
              leading-none
              font-sans
              tx-color-yellow
            "
          />

        </motion.div>


        {/* =================================================
            PROFESSION
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
            filter: 'blur(8px)'
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)'
          }}
          transition={{
            duration: 0.9,
            delay: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="
            mt-4
            text-lg
            sm:text-2xl
            lg:text-3xl
            font-light
            text-white/90
            tracking-wide
            max-w-3xl
          "
        >
          PHOTOGRAPHER &amp; CINEMATOGRAPHER
        </motion.p>


        {/* =================================================
            TAGLINE
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.9
          }}
          className="
            mt-4
            text-sm
            sm:text-base
            text-[#A0A0A0]
            max-w-xl
            italic
            font-serif
          "
        >
          "{PERSONAL_INFO.tagline}"
        </motion.p>


        {/* =================================================
            BUTTONS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          transition={{
            duration: 0.9,
            delay: 1.05,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-5
          "
        >

          {/* Showreel */}

          <MagneticButton
            onClick={onOpenReel}
            dataCursor="play"
          >

            <div
              className="
                flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                bg-[#FFB800]
                text-black
                font-bold
                text-xs
                tracking-[0.2em]
                uppercase
                transition-all
                duration-300
                hover:bg-[#FFD700]
                hover:scale-105
                shadow-[0_0_30px_rgba(255,184,0,0.4)]
              "
            >

              <Play
                className="
                  w-4
                  h-4
                  fill-black
                "
              />

              <span>
                WATCH 2025 SHOWREEL
              </span>

            </div>

          </MagneticButton>


          {/* Portfolio */}

          <MagneticButton
            href="#work"
            dataCursor="view"
          >

            <div
              className="
                flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                bg-white/5
                hover:bg-white/10
                text-white
                border
                border-white/15
                font-semibold
                text-xs
                tracking-[0.2em]
                uppercase
                transition-all
                duration-300
                backdrop-blur-md
              "
            >

              <span>
                EXPLORE PORTFOLIO
              </span>

            </div>

          </MagneticButton>

        </motion.div>

      </motion.div>


      {/* =================================================
          SCROLL INDICATOR
      ================================================= */}

      <motion.a
        href="#showreel"
        style={{
          opacity: contentOpacity
        }}
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 0.8
        }}
        className="
          absolute
          bottom-10
          left-1/2
          transform
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-2
          group
          text-white/50
          hover:text-[#FFB800]
          transition-colors
          z-20
        "
      >

        <span
          className="
            text-[10px]
            font-mono
            tracking-[0.3em]
            uppercase
          "
        >
          SCROLL TO EXPLORE
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: 'easeInOut'
          }}
        >

          <ArrowDown
            className="
              w-4
              h-4
              text-[#FFB800]
            "
          />

        </motion.div>

      </motion.a>

    </section>
  );
};
