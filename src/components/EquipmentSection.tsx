import React from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion';
import { Sliders } from 'lucide-react';
import { EQUIPMENTS } from '../data/portfolioData';

interface EquipmentCardProps {
  gear: any;
  idx: number;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({
  gear,
  idx
}) => {

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 20
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 20
  });

  // 3D card rotation
  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    [6, -6]
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-6, 6]
  );

  // Image parallax
  const imageX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-12, 12]
  );

  const imageY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-12, 12]
  );

  // Cursor glow
  const glowX = useTransform(
    smoothX,
    [-0.5, 0.5],
    ['0%', '100%']
  );

  const glowY = useTransform(
    smoothY,
    [-0.5, 0.5],
    ['0%', '100%']
  );

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
      key={gear.id}

      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}

      initial={{
        opacity: 0,
        y: 60,
        scale: 0.92,
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
        y: -10
      }}

      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}

      data-cursor="view"

      className="
        group
        relative
        p-6
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

      {/* Ambient cursor glow */}
      <motion.div
        style={{
          left: glowX,
          top: glowY
        }}
        className="
          absolute
          w-48
          h-48
          rounded-full
          -translate-x-1/2
          -translate-y-1/2
          bg-[#FFB800]/10
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          pointer-events-none
        "
      />

      {/* Image */}
      <motion.div
        style={{
          x: imageX,
          y: imageY
        }}

        initial={{
          scale: 1.15,
          filter: 'blur(10px)'
        }}

        whileInView={{
          scale: 1,
          filter: 'blur(0px)'
        }}

        viewport={{
          once: true
        }}

        transition={{
          duration: 1,
          delay: idx * 0.12
        }}

        className="
          relative
          w-full
          aspect-[4/3]
          rounded-xl
          overflow-hidden
          mb-6
          bg-black
        "
      >

        <motion.img
          src={gear.image}
          alt={gear.name}

          whileHover={{
            scale: 1.12
          }}

          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}

          className="
            w-full
            h-full
            object-cover
            filter
            brightness-90
            contrast-105
          "
        />

        {/* Cinematic gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#050505]
            via-transparent
            to-transparent
            opacity-80
            pointer-events-none
          "
        />

        {/* Category */}
        <motion.span
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
            delay: 0.5 + idx * 0.12
          }}

          className="
            absolute
            top-3
            left-3
            px-3
            py-1
            rounded-full
            bg-[#050505]/80
            backdrop-blur-md
            text-[10px]
            font-mono
            text-[#FFB800]
            tracking-widest
            uppercase
            border
            border-[#FFB800]/30
          "
        >
          {gear.category}
        </motion.span>

        {/* Image scanning line */}
        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-[1px]
            bg-[#FFB800]
            opacity-0
            group-hover:opacity-100
            group-hover:top-full
            transition-all
            duration-[1200ms]
            ease-in-out
          "
        />

      </motion.div>


      {/* Content */}
      <div className="relative z-10">

        <motion.h3
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
            delay: 0.35 + idx * 0.12
          }}

          className="
            text-xl
            font-bold
            text-white
            uppercase
            tracking-wide
            group-hover:text-[#FFB800]
            transition-colors
            duration-300
          "
        >
          {gear.name}
        </motion.h3>


        {/* Specs */}
        <motion.p
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
            delay: 0.45 + idx * 0.12
          }}

          className="
            mt-2
            text-xs
            font-mono
            text-[#FFB800]
            tracking-wider
            uppercase
            font-semibold
          "
        >
          {gear.specs}
        </motion.p>


        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 10
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            delay: 0.55 + idx * 0.12
          }}

          className="
            mt-3
            text-xs
            text-white/70
            leading-relaxed
            font-light
          "
        >
          {gear.description}
        </motion.p>

      </div>


      {/* Bottom Gold Line */}
      <div
        className="
          mt-6
          w-full
          h-[2px]
          bg-white/10
          overflow-hidden
        "
      >

        <motion.div
          initial={{
            x: '-100%'
          }}

          whileInView={{
            x: '0%'
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: 0.8,
            delay: 0.6 + idx * 0.12
          }}

          className="
            w-full
            h-full
            bg-[#FFB800]
            group-hover:shadow-[0_0_12px_rgba(255,184,0,0.8)]
            transition-shadow
            duration-300
          "
        />

      </div>

    </motion.div>
  );
};


export const EquipmentSection: React.FC = () => {

  return (
    <section
      id="equipment"
      className="
        relative
        py-28
        bg-[#050505]
        overflow-hidden
        border-t
        border-white/5
      "
    >

      {/* Background cinematic glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
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
          left-1/2
          -translate-x-1/2
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

        {/* Header */}
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

          className="
            mb-16
            text-center
            max-w-3xl
            mx-auto
          "
        >

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

            <Sliders className="w-4 h-4" />

            <span>
              PRODUCTION RIGS &amp; GEAR
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
            THE TOOLS{' '}

            <span className="text-[#FFB800]">
              BEHIND THE FRAME
            </span>
          </h2>


          <motion.p
            initial={{
              opacity: 0
            }}

            whileInView={{
              opacity: 1
            }}

            viewport={{
              once: true
            }}

            transition={{
              delay: 0.3,
              duration: 0.8
            }}

            className="
              mt-4
              text-sm
              sm:text-base
              text-white/60
            "
          >
            Equipped with state-of-the-art cinema cameras,
            3-axis stabilization systems, prime lenses,
            and directional lighting for pristine 4K video capture.
          </motion.p>

        </motion.div>


        {/* Equipment Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
          style={{
            perspective: '1200px'
          }}
        >

          {EQUIPMENTS.map((gear, idx) => (
            <EquipmentCard
              key={gear.id}
              gear={gear}
              idx={idx}
            />
          ))}

        </div>

      </div>
    </section>
  );
};