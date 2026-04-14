import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
  useMotionValue,
  useAnimationFrame
} from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// --- GEOMETRY: OCTAGON ---
// Flat-top Octagon points approximation for 100x100 viewbox
// 30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30
// Using a generic polygon for the "small circle" replacement if needed as a background element
const TechShape = ({ className, strokeWidth = 2, animateProps }) => (
  <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
    <motion.polygon
      points="50,5 95,25 95,75 50,95 5,75 5,25"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      {...animateProps}
    />
  </svg>
);
const TechOctagon = ({ className, strokeWidth = 2, animateProps, strokeDasharray }) => (
  <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
    <motion.polygon
      points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeDasharray={strokeDasharray}
      {...animateProps}
    />
  </svg>
);

export default function AdvancedLuminousLogo({ routeKey }) {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 300 });

  // --- PHYSICS ENGINE ---
  // We want continuous rotation that SPEEDS UP with scroll
  const baseRotate = useMotionValue(0);
  const baseRotateOpposite = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    // Base speed = 1, Scroll factor adds to it
    const currentVelocity = smoothVelocity.get();
    const speedFactor = 1 + Math.abs(currentVelocity / 500); // Scale factor

    // Direction depends on scroll? Or just speed up? User said "rotate fast".
    // Let's make it always rotate, but accelerate.
    const rotationAmount = (delta / 20) * speedFactor; // Base speed

    baseRotate.set(baseRotate.get() + rotationAmount);
    baseRotateOpposite.set(baseRotateOpposite.get() - rotationAmount);
  });


  // --- ROUTE ANIMATION ---
  useEffect(() => {
    // "rotating very slowly make it faster also" -> 0.4s duration for aggressive spin
    controls.start({
      rotate: [0, 360],
      scale: [1, 1.4, 1], // Extra pop
      transition: { duration: 0.4, ease: "backInOut" },
    });
  }, [routeKey, controls]);

  return (
    <Link
      to="/"
      className="relative z-[999] block cursor-pointer group w-16 h-16"
      aria-label="Return to Home"
    >
      {/* WRAPPER: Handles Route Rotation */}
      <motion.div
        animate={controls}
        className="relative w-full h-full flex items-center justify-center select-none will-change-transform"
      >

        {/* --- LAYER 1: OUTER OCTAGON (Clockwise) --- */}
        <motion.div
          style={{ rotate: baseRotate }}
          className="absolute inset-0 text-cyan-500/80 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
        >
          <TechOctagon className="w-full h-full" strokeWidth={1.5} />
          {/* Decorative chaser */}
          <TechOctagon
            className="w-full h-full absolute inset-0 text-cyan-200"
            strokeWidth={2}
            strokeDasharray="10 90"
            animateProps={{
              strokeDashoffset: [0, -100],
              transition: { duration: 2, repeat: Infinity, ease: "linear" }
            }}
          />
        </motion.div>

        {/* --- LAYER 2: INNER OCTAGON (Counter-Clockwise) --- */}
        <motion.div
          style={{ rotate: baseRotateOpposite }}
          className="absolute inset-3 text-white/50 group-hover:text-cyan-300 transition-colors"
        >
          <TechOctagon className="w-full h-full" strokeWidth={1.5} strokeDasharray="4 4" />
        </motion.div>

        {/* --- LAYER 3: THE FRAGMENTED CORE (SHATTER-RECONSTRUCT R) --- */}
        <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible perspective-[500px]">

          {/* Subtle Background Hexagon (Static/Slow) */}
          <div className="absolute inset-2 text-cyan-500/10 pointer-events-none">
            <TechShape className="w-full h-full" strokeWidth={0.5} />
          </div>

          <div className="relative w-[65%] h-[65%] flex items-center justify-center">
            {/* 
               HYPER-KINETIC R CORE
               Consists of multiple layers:
               1. Digital Echoes (Afterimages)
               2. Main Energetic Strokes (Flowing Light)
               3. Glitch Overlays
            */}

            {/* Layer 1 & 2: Digital Echoes (Slightly offset in time/space) */}
            {[1, 2].map((i) => (
              <motion.svg
                key={`echo-${i}`}
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full overflow-visible pointer-events-none opacity-20"
                animate={{
                  x: [0, i * 2, -i * 2, 0],
                  y: [0, -i, i, 0],
                  rotateY: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 0.15,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: i * 0.05
                }}
              >
                <path
                  d="M 35 20 V 80 M 35 20 H 60 C 75 20 75 45 60 45 H 35 M 48 45 L 70 80"
                  fill="none"
                  stroke={i === 1 ? "#ec4899" : "#a855f7"} // Pink/Purple echoes
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>
            ))}

            {/* --- THE BOLD NEON "R" --- */}
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full overflow-visible"
            >
              <motion.g
                animate={{
                  y: [0, -2, 0],
                  rotateZ: [0, 1, -1, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* 1. LAYER: SOFT GLOW AURA (Pulsing Depth) */}
                <motion.path
                  d="M 35 20 V 80 M 35 20 H 60 C 75 20 75 45 60 45 H 35 M 48 45 L 70 80"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="blur-md opacity-20"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* 2. LAYER: SOLID VISIBLE BASE (Always Readable) - INCREASED OPACITY */}
                <path
                  d="M 35 20 V 80 M 35 20 H 60 C 75 20 75 45 60 45 H 35 M 48 45 L 70 80"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="opacity-100"
                />

                {/* 3. LAYER: FLUID NEON LIGHT (The Animation) */}
                <motion.path
                  d="M 35 20 V 80 M 35 20 H 60 C 75 20 75 45 60 45 H 35 M 48 45 L 70 80"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="20 180"
                  animate={{
                    strokeDashoffset: [200, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* 4. LAYER: SHARP WHITE HIGHLIGHT (Premium Edge) */}
                <motion.path
                  d="M 35 20 V 80 M 35 20 H 60 C 75 20 75 45 60 45 H 35 M 48 45 L 70 80"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="5 195"
                  animate={{
                    strokeDashoffset: [200, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.g>
            </motion.svg>
          </div>

        </div>
      </motion.div>
    </Link>
  );
}
