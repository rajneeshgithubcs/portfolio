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
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// --- GEOMETRY: DECAGON ---
const TechShape = ({ className, strokeWidth = 2, animateProps }) => (
  <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
    <motion.polygon
      points="50,5 76.5,13.6 92.8,36.1 92.8,63.9 76.5,86.4 50,95 23.5,86.4 7.2,63.9 7.2,36.1 23.5,13.6"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      {...animateProps}
    />
  </svg>
);
const TechDecagon = ({ className, strokeWidth = 2, animateProps, strokeDasharray }) => (
  <svg viewBox="0 0 100 100" className={`overflow-visible ${className}`}>
    <motion.polygon
      points="50,5 76.5,13.6 92.8,36.1 92.8,63.9 76.5,86.4 50,95 23.5,86.4 7.2,63.9 7.2,36.1 23.5,13.6"
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
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 300 });

  // --- RESPONSIVE ENGINE ---
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- LOGIC: SCROLL TO HERO ---
  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // --- PHYSICS ENGINE ---
  const baseRotate = useMotionValue(0);
  const baseRotateOpposite = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    const currentVelocity = smoothVelocity.get();
    const speedFactor = 1 + Math.abs(currentVelocity / 500);
    const rotationAmount = (delta / 20) * speedFactor;
    baseRotate.set(baseRotate.get() + rotationAmount);
    baseRotateOpposite.set(baseRotateOpposite.get() - rotationAmount);
  });

  // --- ROUTE ANIMATION ---
  useEffect(() => {
    controls.start({
      rotate: [0, 360],
      scale: [1, 1.4, 1],
      transition: { duration: 0.4, ease: "backInOut" },
    });
  }, [routeKey, controls]);

  return (
    <Link
      to="/"
      onClick={handleLogoClick}
      className="relative z-[999] block cursor-pointer group w-20 h-20 active:scale-90 transition-transform"
      aria-label="Return to Home"
    >
      <motion.div
        animate={controls}
        className="relative w-full h-full flex items-center justify-center select-none will-change-transform"
      >
        {/* --- LAYER 1: OUTER DECAGON --- */}
        <motion.div
          style={{ rotate: baseRotate }}
          className="absolute inset-0 text-cyan-500/80 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]"
        >
          <TechDecagon className="w-full h-full" strokeWidth={1.5} />
          <TechDecagon
            className="w-full h-full absolute inset-0 text-cyan-200"
            strokeWidth={2}
            strokeDasharray="10 90"
            animateProps={{
              strokeDashoffset: [0, -100],
              transition: { duration: 2, repeat: Infinity, ease: "linear" }
            }}
          />
        </motion.div>

        {/* --- LAYER 2: INNER DECAGON --- */}
        <motion.div
          style={{ rotate: baseRotateOpposite }}
          className="absolute inset-[15%] text-white/50 group-hover:text-cyan-300 transition-colors"
        >
          <TechDecagon className="w-full h-full" strokeWidth={1.5} strokeDasharray="4 4" />
        </motion.div>

        {/* --- LAYER 3: THE UNIQUE ARCHITECTURAL R --- */}
        <div className="relative z-10 w-full h-full flex items-center justify-center overflow-visible perspective-[500px]">
          <div className="absolute inset-2 text-cyan-500/10 pointer-events-none">
            <TechShape className="w-full h-full" strokeWidth={0.5} />
          </div>

          <div 
            className="relative flex items-center justify-center transition-all duration-500"
            style={{ 
              width: isMobile ? "82%" : "65%", 
              height: isMobile ? "82%" : "65%" 
            }}
          >
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full overflow-visible"
            >
              <defs>
                <filter id="fragmentGlow">
                  <feGaussianBlur stdDeviation={isMobile ? 3 : 2} result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="pieceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>

              <g filter="url(#fragmentGlow)">
                {/* Fragment 1: The Main Stem (Left) */}
                <motion.path
                  d="M 32 20 L 38 20 L 38 80 L 32 80 Z"
                  fill="url(#pieceGrad)"
                  stroke={isMobile ? "#ffffff" : "none"}
                  strokeWidth={isMobile ? 1 : 0}
                  animate={{
                    opacity: isMobile ? 1 : [0, 1, 1, 0],
                    x: isMobile ? 0 : [-30, 0, 0, 20],
                    y: isMobile ? 0 : [10, 0, 0, -10],
                    rotate: isMobile ? 0 : [-45, 0, 0, 45],
                  }}
                  transition={{ duration: isMobile ? 2 : 4, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
                />

                {/* Fragment 2: The Top Bar */}
                <motion.path
                  d="M 38 20 L 65 20 L 65 28 L 38 28 Z"
                  fill="#ffffff"
                  stroke={isMobile ? "#ffffff" : "none"}
                  strokeWidth={isMobile ? 1 : 0}
                  animate={{
                    opacity: isMobile ? 1 : [0, 1, 1, 0],
                    x: isMobile ? 0 : [30, 0, 0, -20],
                    y: isMobile ? 0 : [-30, 0, 0, 30],
                  }}
                  transition={{ duration: isMobile ? 2 : 4, repeat: Infinity, times: [0.05, 0.25, 0.75, 1] }}
                />

                {/* Fragment 3: The Belly Curve (Right) */}
                <motion.path
                  d="M 65 20 C 80 20 80 50 65 50 L 58 50 L 58 42 C 68 42 68 28 58 28 L 58 20 Z"
                  fill="url(#pieceGrad)"
                  stroke={isMobile ? "#ffffff" : "none"}
                  strokeWidth={isMobile ? 1 : 0}
                  animate={{
                    opacity: isMobile ? 1 : [0, 1, 1, 0],
                    scale: isMobile ? 1 : [0.5, 1, 1, 1.5],
                    rotate: isMobile ? 0 : [90, 0, 0, -90],
                    x: isMobile ? 0 : [40, 0, 0, 40]
                  }}
                  transition={{ duration: isMobile ? 2 : 4, repeat: Infinity, times: [0.1, 0.3, 0.7, 1] }}
                />

                {/* Fragment 4: The Kinetic Leg (Diagonal) */}
                <motion.path
                  d="M 45 50 L 55 50 L 75 80 L 65 80 Z"
                  fill="#22d3ee"
                  stroke={isMobile ? "#22d3ee" : "none"}
                  strokeWidth={isMobile ? 1 : 0}
                  animate={{
                    opacity: isMobile ? 1 : [0, 1, 1, 0],
                    x: isMobile ? 0 : [-20, 0, 0, -40],
                    y: isMobile ? 0 : [40, 0, 0, 40],
                  }}
                  transition={{ duration: isMobile ? 2 : 4, repeat: Infinity, times: [0.15, 0.35, 0.65, 1] }}
                />

                {/* Fragment 5: Central Connector Dot */}
                <motion.circle
                  cx="42" cy="50" r={isMobile ? 4.5 : 3.5}
                  fill="#ffffff"
                  animate={{
                    scale: isMobile ? [1, 1.4, 1] : [0, 2, 1, 0],
                    opacity: isMobile ? 1 : [0, 1, 1, 0],
                  }}
                  transition={{ duration: isMobile ? 2 : 4, repeat: Infinity, times: [0.2, 0.35, 0.65, 1] }}
                />
              </g>

              {/* Luminous Architectural Lines */}
              <motion.path
                d="M 35 20 Q 50 10 65 20 M 65 50 Q 50 60 35 80"
                fill="none"
                stroke="#22d3ee"
                strokeWidth={isMobile ? 1.5 : 0.5}
                strokeDasharray="4 8"
                animate={{
                  opacity: isMobile ? 0.8 : [0, 0.5, 0, 0.5, 0],
                  pathLength: [0, 1, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
