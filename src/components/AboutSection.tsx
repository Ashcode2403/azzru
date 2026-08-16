import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll
} from 'framer-motion';
import {
  Camera,
  Film,
  MapPin,
  Award,
  CheckCircle2,
  User
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });

  const [count, setCount] = useState(0);

  /* ==========================================
     EXPERIENCE COUNTER
  ========================================== */

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = 6;
    const duration = 1200;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);


  /* ==========================================
     SCROLL PARALLAX
  ========================================== */

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const imageParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [-35, 35]
  );

  const badgeParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [30, -30]
  );

  const contentParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [25, -25]
  );


  /* ==========================================
     3D MOUSE PARALLAX
  ========================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20
  });

  const rotateX = useTransform(
    smoothMouseY,
    [-0.5, 0.5],
    [7, -7]
  );

  const rotateY = useTransform(
    smoothMouseX,
    [-0.5, 0.5],
    [-7, 7]
  );

  const imageX = useTransform(
    smoothMouseX,
    [-0.5, 0.5],
    [-8, 8]
  );

  const imageY = useTransform(
    smoothMouseY,
    [-0.5, 0.5],
    [-8, 8]
  );


  /* ==========================================
     CURSOR GLOW
  ========================================== */

  const glowX = useTransform(
    smoothMouseX,
    [-0.5, 0.5],
    ['0%', '100%']
  );

  const glowY = useTransform(
    smoothMouseY,
    [-0.5, 0.5],
    ['0%', '100%']
  );


  /* ==========================================
     MOUSE HANDLERS
  ========================================== */

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };


  return (
    <section
      id="about"
      ref={ref}
      className="
        relative
        py-28
        bg-[#050505]
        overflow-hidden
        border-t
        border-white/5
      "
    >

      {/* ==========================================
          AMBIENT BACKGROUND GLOW
      ========================================== */}

      <div
        className="
          absolute
          -left-40
          top-1/3
          w-96
          h-96
          rounded-full
          bg-[#FFB800]/5
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          right-0
          bottom-0
          w-80
          h-80
          rounded-full
          bg-[#FFB800]/[0.03]
          blur-[120px]
          pointer-events-none
        "
      />


      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">


          {/* ==========================================
              LEFT VISUAL
          ========================================== */}

          <motion.div
            style={{
              y: imageParallaxY,
              perspective: 1200
            }}
            initial={{
              opacity: 0,
              x: -70,
              scale: 0.94
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1
            }}
            viewport={{
              once: true,
              amount: 0.25
            }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="lg:col-span-6 relative"
          >

            {/* ==========================================
                3D IMAGE WRAPPER
            ========================================== */}

            <motion.div
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d'
              }}
              className="relative"
            >

              <div
                className="
                  relative
                  rounded-2xl
                  overflow-hidden
                  glass-card
                  border
                  border-white/15
                  p-2
                  shadow-[0_20px_50px_rgba(0,0,0,0.8)]
                  group
                "
              >

                {/* ==========================================
                    PARALLAX IMAGE
                ========================================== */}

                <motion.div
                  style={{
                    x: imageX,
                    y: imageY,
                    scale: 1.08
                  }}
                  initial={{
                    scale: 1.18,
                    filter: 'blur(12px)'
                  }}
                  whileInView={{
                    scale: 1.08,
                    filter: 'blur(0px)'
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 1.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative"
                >

                  <img
                    src="/images/bts/bts_azharuddin_team.jpeg"
                    alt="Azharuddin and crew on location in Dubai"
                    className="
                      w-full
                      h-auto
                      rounded-xl
                      object-cover
                      filter
                      brightness-95
                      contrast-105
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                </motion.div>


                {/* ==========================================
                    CINEMATIC DARK OVERLAY
                ========================================== */}

                <div
                  className="
                    absolute
                    inset-2
                    rounded-xl
                    bg-gradient-to-t
                    from-black/50
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />


                {/* ==========================================
                    CURSOR FOLLOW GLOW
                ========================================== */}

                <motion.div
                  style={{
                    left: glowX,
                    top: glowY
                  }}
                  className="
                    absolute
                    w-40
                    h-40
                    rounded-full
                    bg-[#FFB800]/10
                    blur-3xl
                    -translate-x-1/2
                    -translate-y-1/2
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    pointer-events-none
                  "
                />


                {/* ==========================================
                    HUD ACCENTS
                ========================================== */}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="hud-corner-tl m-4"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="hud-corner-tr m-4"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="hud-corner-bl m-4"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="hud-corner-br m-4"
                />


                {/* ==========================================
                    CAMERA LABEL
                ========================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 0.6
                  }}
                  className="
                    absolute
                    top-7
                    left-7
                    flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    rounded-full
                    bg-black/60
                    backdrop-blur-md
                    border
                    border-white/10
                    text-[10px]
                    font-mono
                    tracking-widest
                    text-white/70
                  "
                >
                  <Camera className="w-3.5 h-3.5 text-[#FFB800]" />
                  <span>ON LOCATION</span>
                </motion.div>

              </div>


              {/* ==========================================
                  FLOATING EXPERIENCE BADGE
              ========================================== */}

              <motion.div
                style={{
                  y: badgeParallaxY,
                  translateZ: 80
                }}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 120
                }}
                className="
                  absolute
                  -bottom-6
                  -right-4
                  sm:-right-8
                  p-6
                  rounded-2xl
                  bg-[#0D0D0D]
                  border
                  border-[#FFB800]/50
                  shadow-[0_10px_30px_rgba(255,184,0,0.2)]
                  flex
                  items-center
                  gap-4
                "
              >

                <div className="text-4xl sm:text-5xl font-black text-[#FFB800] font-mono">
                  0{count}+
                </div>

                <div className="text-xs font-bold tracking-widest uppercase text-white leading-tight">
                  YEARS
                  <br />
                  PROFESSIONAL
                  <br />
                  EXPERIENCE
                </div>

              </motion.div>

            </motion.div>

          </motion.div>


          {/* ==========================================
              RIGHT CONTENT
          ========================================== */}

          <motion.div
            style={{
              y: contentParallaxY
            }}
            initial={{
              opacity: 0,
              x: 70
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1]
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            className="
              lg:col-span-6
              flex
              flex-col
              gap-6
            "
          >

            {/* ==========================================
                LABEL
            ========================================== */}

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
                duration: 0.6
              }}
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-mono
                text-[#FFB800]
                tracking-widest
                uppercase
              "
            >
              <User className="w-4 h-4" />

              <span>
                THE PERSON BEHIND THE CAMERA
              </span>
            </motion.div>


            {/* ==========================================
                TITLE
            ========================================== */}

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
                once: true
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="
                text-4xl
                sm:text-6xl
                font-black
                text-white
                uppercase
                tracking-tight
                font-sans
                leading-none
              "
            >
              AZHAR
              <span className="text-[#FFB800]">
                UDDIN
              </span>
            </motion.h2>


            {/* ==========================================
                BIO
            ========================================== */}

            <motion.p
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
                delay: 0.2
              }}
              className="
                text-base
                sm:text-lg
                text-white/90
                leading-relaxed
                font-light
              "
            >
              {PERSONAL_INFO.bio}
            </motion.p>


            {/* ==========================================
                SKILLS
            ========================================== */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">

              {[
                'Cinema Camera Handling (Sony FX3)',
                '3-Axis Gimbal Stabilization',
                'Directional & Ambient Lighting',
                'Luxury Real Estate Videography',
                'Corporate & Commercial Shoots',
                'Color Grading & Edit Workflows'
              ].map((skill, i) => (

                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 25,
                    scale: 0.96
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.02
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    p-3
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    hover:border-[#FFB800]/40
                    hover:bg-[#FFB800]/5
                    transition-colors
                    duration-300
                  "
                >

                  <CheckCircle2
                    className="
                      w-4
                      h-4
                      text-[#FFB800]
                      flex-none
                    "
                  />

                  <span
                    className="
                      text-xs
                      font-bold
                      text-white
                      tracking-wide
                      uppercase
                    "
                  >
                    {skill}
                  </span>

                </motion.div>

              ))}

            </div>


            {/* ==========================================
                INFO PANEL
            ========================================== */}

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
                delay: 0.7
              }}
              className="
                p-4
                rounded-xl
                glass-panel
                border
                border-white/10
                flex
                flex-wrap
                items-center
                justify-between
                gap-4
                text-xs
                font-mono
                text-white/60
              "
            >

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFB800]" />

                <span>
                  LOCATION: {PERSONAL_INFO.location}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FFB800]" />

                <span>
                  EDUCATION: B.A. (University of Delhi)
                </span>
              </div>

            </motion.div>

          </motion.div>

        </div>
      </div>

    </section>
  );
};