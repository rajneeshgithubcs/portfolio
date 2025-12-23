import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
} from "framer-motion";
import { useEffect } from "react";

const TechDecagon = ({ className, animateProps, strokeWidth = "2" }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    style={{ overflow: "visible" }}
  >
    <motion.polygon
      points="50,5 76,14 93,36 93,64 76,86 50,95 24,86 7,64 7,36 24,14"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      {...animateProps}
    />
  </svg>
);

export default function AdvancedLuminousLogo({ routeKey }) {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  // Spring with higher stiffness for a "magnetic" snap feel
  const smoothVelocity = useSpring(velocity, { damping: 40, stiffness: 450 });

  // 1. PHYSICS ENGINE MAPPINGS
  // Accelerating Rotation: The faster you scroll, the exponentially faster it spins
  const scrollRotation = useTransform(
    smoothVelocity,
    [-4000, 0, 4000],
    [-1440, 0, 1440]
  );

  // Dynamic Thickness: Lines get thinner as the "speed" increases
  const strokeThickness = useTransform(
    smoothVelocity,
    [-3000, 0, 3000],
    [0.1, 0.4, 0.1]
  );

  // Visual Stress: Logo "compresses" vertically when scrolling fast
  const squash = useTransform(
    smoothVelocity,
    [-3000, 0, 3000],
    [0.85, 1, 0.85]
  );

  useEffect(() => {
    // Quantum Boot Sequence on Route Change
    controls.start({
      scale: [1, 2.2, 0.3, 1],
      rotate: [0, 720],
      filter: [
        "hue-rotate(0deg) brightness(1)",
        "hue-rotate(180deg) brightness(3)",
        "hue-rotate(360deg) brightness(1)",
      ],
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    });
  }, [routeKey, controls]);

  return (
    <motion.div
      animate={controls}
      style={{ scaleY: squash }}
      className="relative w-20 h-20 flex items-center justify-center select-none group"
    >
      {/* 2. ATMOSPHERIC DISTORTION (Chromatic Glow) */}
      <motion.div
        style={{
          opacity: useTransform(
            smoothVelocity,
            [-2000, 0, 2000],
            [0.6, 0.1, 0.6]
          ),
          scale: useTransform(smoothVelocity, [-2000, 0, 2000], [1.8, 1, 1.8]),
          rotate: useTransform(smoothVelocity, [-2000, 2000], [-90, 90]),
        }}
        className="absolute inset-[-50%] bg-[radial-gradient(circle,_rgba(34,211,238,0.3)_0%,_transparent_70%)] blur-[40px] -z-10"
      />

      {/* 3. PERPETUAL KINETIC SHELL */}
      <motion.div
        style={{ rotate: scrollRotation }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 text-cyan-400/20"
      >
        <TechDecagon className="w-full h-full" strokeWidth={strokeThickness} />

        {/* Pulse Tracers */}
        <TechDecagon
          className="absolute inset-0 text-cyan-400"
          strokeWidth="1.5"
          animateProps={{
            strokeDasharray: ["1 20", "20 80", "1 20"],
            strokeDashoffset: [0, -400],
            transition: { duration: 2, repeat: Infinity, ease: "linear" },
          }}
        />
      </motion.div>

      {/* 4. REVERSE COUNTER-WEIGHT */}
      <motion.div
        style={{ rotate: useTransform(scrollRotation, (v) => v * -1.2) }}
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[12%] text-white/5"
      >
        <TechDecagon className="w-full h-full" strokeWidth="2" />
      </motion.div>

      {/* 5. THE CORE ENGINE (Glass Plate) */}
      <motion.div
        style={{ rotate: useTransform(scrollRotation, (v) => v * 0.3) }}
        className="absolute inset-[22%] z-10 bg-slate-900/90 backdrop-blur-2xl border-[0.5px] border-cyan-500/30 overflow-hidden"
        style={{
          clipPath:
            "polygon(50% 5%, 76% 14%, 93% 36%, 93% 64%, 76% 86%, 50% 95%, 24% 86%, 7% 64%, 7% 36%, 24% 14%)",
        }}
      >
        {/* Internal High-Speed Scanline */}
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
        />

        {/* Central Reactor Pulse */}
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 0.05, repeat: Infinity }}
          className="absolute inset-0 bg-cyan-400/5"
        />
      </motion.div>

      {/* 6. SYSTEM GLYPH (The Brand) */}
      <div className="relative z-20 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-7 h-7 overflow-visible">
          {/* Main Stroke */}
          <motion.path
            d="M32 20 H58 C72 20 72 45 58 45 H32 V80 M34 45 L68 80"
            fill="none"
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 12px rgba(34,211,238,0.9))" }}
          />
          {/* Internal Energy Path (Flickering) */}
          <motion.path
            d="M32 20 H58 C72 20 72 45 58 45 H32 V80 M34 45 L68 80"
            fill="none"
            stroke="cyan"
            strokeWidth="2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.1, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* 7. RADIAL DATA NODES */}
      {[0, 120, 240].map((angle) => (
        <motion.div
          key={angle}
          style={{ rotate: angle }}
          className="absolute inset-[-15%] flex justify-center items-start pointer-events-none"
        >
          <motion.div
            animate={{ height: ["0%", "20%", "0%"], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: angle / 100 }}
            className="w-[1px] bg-gradient-to-b from-cyan-400 to-transparent shadow-[0_0_10px_cyan]"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
