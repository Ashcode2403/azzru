import React from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion';
import { Film, Check } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServiceCardProps {
  srv: any;
  idx: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  srv,
  idx
}) => {

  /* ---------------------------------------
     Mouse Position
  --------------------------------------- */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 20
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 20
  });


  /* ---------------------------------------
     3D Perspective
  --------------------------------------- */

  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    [5, -5]
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-5, 5]
  );


  /* ---------------------------------------
     Spotlight Position
  --------------------------------------- */

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


  /* ---------------------------------------
     Mouse Move
  --------------------------------------- */

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    const rect =
      e.currentTarget.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (e.clientY - rect.top) /
        rect.height -
      0.5;

    mouseX.set(x);
    mouseY.set(y);
  };


  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };


  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}

      initial={{
        opacity: 0,
        y: 70,
        scale: 0.94,
        filter: 'blur(8px)'
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)'
      }}

      viewport={{
        once: true,
        amount: 0.2
      }}

      transition={{
        duration: 0.8,
        delay: idx * 0.12,
        ease: [0.16, 1, 0.3, 1]
      }}

      whileHover={{
        y: -8
      }}

      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}

      className="
        group
        relative
        p-8
        rounded-2xl
        glass-card
        border
        border-white/10
        hover:border-[#FFB800]/60
        transition-colors
        duration-500
        flex
        flex-col
        justify-between
        overflow-hidden
      "
    >

      {/* ---------------------------------------
          Mouse Spotlight
      --------------------------------------- */}

      <motion.div
        style={{
          left: spotlightX,
          top: spotlightY
        }}

        className="
          pointer-events-none
          absolute
          w-64
          h-64
          rounded-full
          -translate-x-1/2
          -translate-y-1/2
          bg-[#FFB800]/10
          blur-[80px]
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />


      {/* ---------------------------------------
          Top Section
      --------------------------------------- */}

      <div className="relative z-10">

        <div className="
          flex
          items-center
          justify-between
          mb-6
        ">

          {/* Animated Number */}

          <motion.span
            initial={{
              opacity: 0,
              x: -20
            }}

            whileInView={{
              opacity: 1,
              x: 0
            }}

            viewport={{
              once: true
            }}

            transition={{
              delay: 0.3 + idx * 0.12,
              duration: 0.5
            }}

            className="
              text-xs
              font-mono
              text-[#FFB800]
              font-bold
              tracking-widest
            "
          >
            0{idx + 1}
          </motion.span>


          {/* Pulsing Indicator */}

          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
              delay: idx * 0.2
            }}

            className="
              w-2
              h-2
              rounded-full
              bg-[#FFB800]
              shadow-[0_0_12px_rgba(255,184,0,0.8)]
            "
          />

        </div>


        {/* ---------------------------------------
            Title
        --------------------------------------- */}

        <motion.h3
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
            delay: 0.35 + idx * 0.12,
            duration: 0.6
          }}

          className="
            text-2xl
            font-bold
            text-white
            uppercase
            tracking-wide
            mb-3
            group-hover:text-[#FFB800]
            transition-colors
            duration-300
          "
        >
          {srv.title}
        </motion.h3>


        {/* ---------------------------------------
            Description
        --------------------------------------- */}

        <motion.p
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
            delay: 0.45 + idx * 0.12,
            duration: 0.6
          }}

          className="
            text-sm
            text-white/70
            leading-relaxed
            font-light
            mb-8
          "
        >
          {srv.description}
        </motion.p>

      </div>


      {/* ---------------------------------------
          Features
      --------------------------------------- */}

      <div
        className="
          relative
          z-10
          grid
          grid-cols-2
          gap-3
          pt-5
          border-t
          border-white/10
        "
      >

        {srv.features.map(
          (feat: string, fIdx: number) => (

            <motion.div
              key={fIdx}

              initial={{
                opacity: 0,
                x: -15
              }}

              whileInView={{
                opacity: 1,
                x: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                delay:
                  0.5 +
                  idx * 0.12 +
                  fIdx * 0.06,
                duration: 0.4
              }}

              className="
                flex
                items-center
                gap-2
                text-xs
                font-mono
                text-white/60
                group-hover:text-white/80
                transition-colors
              "
            >

              <Check
                className="
                  w-3.5
                  h-3.5
                  text-[#FFB800]
                  flex-none
                  group-hover:scale-110
                  transition-transform
                "
              />

              <span>
                {feat}
              </span>

            </motion.div>

          )
        )}

      </div>


      {/* ---------------------------------------
          Animated Bottom Border
      --------------------------------------- */}

      <motion.div
        initial={{
          scaleX: 0
        }}

        whileInView={{
          scaleX: 1
        }}

        viewport={{
          once: true
        }}

        transition={{
          duration: 0.8,
          delay: 0.5 + idx * 0.12
        }}

        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[2px]
          bg-[#FFB800]
          origin-left
          opacity-70
          group-hover:opacity-100
          group-hover:shadow-[0_0_15px_rgba(255,184,0,0.8)]
          transition-all
          duration-300
        "
      />

    </motion.div>
  );
};


export const ServicesSection: React.FC = () => {

  return (
    <section
      className="
        relative
        py-28
        bg-[#050505]
        overflow-hidden
        border-t
        border-white/5
      "
    >

      {/* ---------------------------------------
          Background Ambient Glow
      --------------------------------------- */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1]
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}

        className="
          absolute
          top-1/3
          right-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#FFB800]/5
          blur-[150px]
          pointer-events-none
        "
      />


      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-12
        "
      >

        {/* ---------------------------------------
            Header Reveal
        --------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1]
          }}

          className="mb-16"
        >

          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}

            whileInView={{
              opacity: 1,
              x: 0
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
              mb-3
            "
          >

            <Film className="w-4 h-4" />

            <span>
              SOLUTIONS &amp; OFFERINGS
            </span>

          </motion.div>


          <h2
            className="
              text-4xl
              sm:text-6xl
              font-black
              text-white
              uppercase
              tracking-tight
              font-sans
            "
          >
            PRODUCTION{' '}

            <span className="text-[#FFB800]">
              SERVICES
            </span>

          </h2>

        </motion.div>


        {/* ---------------------------------------
            Services Grid
        --------------------------------------- */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
          style={{
            perspective: '1200px'
          }}
        >

          {SERVICES.map((srv, idx) => (

            <ServiceCard
              key={srv.id}
              srv={srv}
              idx={idx}
            />

          ))}

        </div>

      </div>

    </section>
  );
};