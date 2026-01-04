import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ROLES = [
  "Software Developer",
  "Application Developer",
  "Full-Stack Developer",
];
const ORIGINAL = "RAJNEESH";
const TARGET = "RAJNEESH#DEV";
const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function Hero() {
  const navigate = useNavigate();
  const [name, setName] = useState(ORIGINAL);
  const [scrambling, setScrambling] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // --- 3D KINETIC ENGINE ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);
  const bgShiftX = useTransform(springX, [-0.5, 0.5], ["-30px", 30]);
  const bgShiftY = useTransform(springY, [-0.5, 0.5], ["-30px", 30]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX / innerWidth - 0.5);
    mouseY.set(e.clientY / innerHeight - 0.5);
  };

  // --- TYPEWRITER LOGIC ---
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer = setTimeout(
      () => {
        if (!isDeleting && typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else if (!isDeleting && typedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2500);
        } else if (isDeleting && typedText.length > 0) {
          setTypedText(currentRole.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      },
      isDeleting ? 30 : 60
    );
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const scramble = useCallback(() => {
    if (scrambling) return;
    setScrambling(true);
    let iteration = 0;
    const interval = setInterval(() => {
      setName(
        ORIGINAL.split("")
          .map((_, i) =>
            i < iteration
              ? TARGET[i]
              : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      );
      iteration += 1 / 3;
      if (iteration >= ORIGINAL.length) {
        clearInterval(interval);
        setTimeout(() => {
          setName(ORIGINAL);
          setScrambling(false);
        }, 1000);
      }
    }, 30);
  }, [scrambling]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center bg-[#010204] overflow-hidden font-mono perspective-[1000px]"
    >
      {/* 1. ANIMATED ROBOTIC BACKGROUND ENGINE */}
      <motion.div
        style={{ x: bgShiftX, y: bgShiftY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Kinetic Hexagonal Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z' fill='none' stroke='%2306b6d4' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Animated HUD Radar Rings */}
        <motion.div
          animate={{ rotate: 360, opacity: [0.03, 0.08, 0.03] }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            opacity: { duration: 4, repeat: Infinity },
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full stroke-cyan-500 fill-none"
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              strokeDasharray="2 10"
              strokeWidth="0.1"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              strokeDasharray="15 5"
              strokeWidth="0.2"
            />
          </svg>
        </motion.div>

        {/* Vertical Scanning Pulse */}
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.3)] z-10"
        />

        {/* Deep Field Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#010204_85%)]" />
      </motion.div>

      {/* 2. MAIN HUD CONTENT */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-20 w-full max-w-5xl px-12 text-center"
      >
        {/* Connection Telemetry */}
        <div className="mb-10 flex flex-col items-center gap-2">
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                className="w-1 h-1 bg-cyan-500 rounded-full"
              />
            ))}
          </div>
          <span className="text-[9px] text-cyan-400/40 tracking-[1em] uppercase font-black">
            Link_Stable
          </span>
        </div>

        {/* REFINED NAME - COMPACT SCALE */}
        <div className="mb-10 select-none">
          <h1 className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 leading-none">
            <motion.span
              onMouseEnter={scramble}
              className="font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
            >
              {name}
            </motion.span>

            <span
              className="font-black italic uppercase tracking-tighter text-transparent"
              style={{
                fontSize: "clamp(1.8rem, 6vw, 5rem)",
                WebkitTextStroke: "1px rgba(34, 211, 238, 0.35)",
              }}
            >
              RAJAK
            </span>
          </h1>
        </div>

        {/* ROLE INTERFACE */}
        <div className="h-14 flex items-center justify-center mb-16">
          <div className="px-8 py-2 bg-cyan-950/5 backdrop-blur-md border-x border-cyan-500/20 relative group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="text-xl md:text-2xl font-light text-slate-200 flex items-center">
              <span className="text-cyan-500 mr-4 font-black tracking-tighter">
                ::
              </span>
              <span className="tracking-tight">{typedText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-3 h-6 bg-cyan-500 ml-2 shadow-[0_0_10px_#06b6d4]"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          </div>
        </div>

        {/* TELEMETRY DATA */}
        <div className="flex flex-col items-center gap-12">
          <p className="text-slate-500 text-[10px] md:text-[11px] max-w-md leading-relaxed tracking-[0.3em] uppercase opacity-80">
            // SYSTEM_BOOT: <span className="text-cyan-400">SUCCESS</span>{" "}
            <br />
            // ARCHITECTING{" "}
            <span className="text-white">FULL-STACK ECOSYSTEMS</span> <br />
            // OPTIMIZING_LATENCY_PROTOCOL: 0.083ms
          </p>

          {/* ACTION MODULES */}
          <div className="flex flex-wrap justify-center gap-10">
            {/* PROJECTS BUTTON (Primary) */}
            <button
              onClick={() => navigate("/projects")}
              className="relative px-12 py-3.5 group overflow-hidden border border-cyan-500/40"
            >
              <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 text-cyan-400 group-hover:text-black font-black uppercase tracking-[0.4em] text-[10px]">
                EXPLORE_PROJECTS
              </span>
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />
            </button>

            {/* RESUME BUTTON (Highlighted Secondary) */}
            <button
              onClick={() => navigate("/resume")}
              className="relative px-12 py-3.5 group overflow-hidden border border-white/20 hover:border-white/60 transition-colors duration-300"
            >
              {/* White/Slate Fill Animation */}
              <div className="absolute inset-0 bg-slate-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

              {/* Text */}
              <span className="relative z-10 text-white group-hover:text-black font-black uppercase tracking-[0.4em] text-[10px] transition-colors duration-300">
                Open_Resume
              </span>

              {/* Opposite Corner Accents */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40 group-hover:border-white/0 transition-all" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40 group-hover:border-white/0 transition-all" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* 3. SIDE TELEMETRY DECOR */}
      <div className="absolute bottom-10 left-10 opacity-20 hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="w-12 h-[1px] bg-cyan-500" />
          <span className="text-[8px] tracking-[0.5em] text-cyan-400 font-bold uppercase">
            Grid_Coord: 083
          </span>
        </div>
      </div>
    </section>
  );
}
