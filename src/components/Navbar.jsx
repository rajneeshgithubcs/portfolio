import { NavLink, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import AdvancedLuminousLogo from "./AdvanceLuminousLogo.jsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
];

const MagneticLink = ({ children, isActive, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set((clientX - (left + width / 2)) * 0.35);
    y.set((clientY - (top + height / 2)) * 0.35);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      className="relative px-6 py-3 group cursor-pointer"
    >
      {isActive && (
        <motion.div
          layoutId="nav-pill-bg"
          className="absolute inset-0 bg-cyan-500/[0.03] border border-cyan-400/20 rounded-xl shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        >
          {/* Subtle horizontal scanline for active tab */}
          <motion.div
            animate={{ left: ["-10%", "110%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
          />
        </motion.div>
      )}

      <span className="absolute top-1 left-4 text-[6px] font-mono text-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity uppercase">
        Path_0{index + 1}
      </span>

      <span
        className={`relative z-10 text-[11px] uppercase tracking-[0.3em] font-black transition-all duration-300 ${
          isActive
            ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
            : "text-white/40 group-hover:text-white"
        }`}
      >
        {children}
      </span>
    </motion.div>
  );
};

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "unset";
  }, [location.pathname]);

  return (
    <>
      {/* ================= DESKTOP COMMAND DECK ================= */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-8 left-0 right-0 z-[100] hidden lg:flex justify-center px-6"
      >
        <nav className="relative flex items-center p-1.5 rounded-2xl bg-slate-950/40 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* 1. LEFT: LOGO & IDENTITY */}
          <div className="flex items-center gap-6 pl-4 pr-8 py-2">
            <div className="scale-110 hover:scale-125 transition-transform duration-700">
              <AdvancedLuminousLogo routeKey={location.pathname} />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-black text-white tracking-[0.2em] leading-none uppercase">
                Architect.OS
              </span>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[7px] font-mono text-cyan-500/60 uppercase tracking-widest">
                  Core_Active
                </span>
              </div>
            </div>
          </div>

          {/* 2. THE KINETIC DIVIDER (Replaces the static line) */}
          <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent relative">
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 -translate-x-1/2 w-[2px] h-3 bg-cyan-400 blur-[1px]"
            />
          </div>

          {/* 3. CENTER: NAVIGATION */}
          <div className="flex items-center gap-1 px-4">
            {navLinks.map((link, idx) => (
              <NavLink key={link.name} to={link.path}>
                {({ isActive }) => (
                  <MagneticLink isActive={isActive} index={idx}>
                    {link.name}
                  </MagneticLink>
                )}
              </NavLink>
            ))}
          </div>

          {/* 4. THE KINETIC DIVIDER (Right side) */}
          <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* 5. RIGHT: TELEMETRY HUD */}
          <div className="flex items-center gap-8 pl-8 pr-6">
            <div className="hidden xl:flex flex-col items-start gap-1">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }}
                    className="w-1 h-3 bg-cyan-500/40"
                  />
                ))}
              </div>
              <span className="text-[6px] font-mono text-white/20 uppercase tracking-tighter">
                Memory_Usage
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-white/90 tracking-widest tabular-nums leading-none">
                V.4.0.5
              </span>
              <span className="text-[6px] font-mono text-cyan-500/40 uppercase mt-1">
                JBP_Node_01
              </span>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* ================= MOBILE HUD TRIGGER ================= */}
      <div className="lg:hidden fixed top-6 left-6 right-6 z-[160] flex items-center justify-between px-6 py-4 rounded-2xl bg-slate-950/80 backdrop-blur-2xl border border-white/10">
        <div className="scale-75 origin-left">
          <AdvancedLuminousLogo routeKey={location.pathname} />
        </div>

        <motion.button
          whileTap={{ scale: 0.9, rotate: 90 }}
          onClick={() => setOpen(!open)}
          className="w-11 h-11 flex items-center justify-center bg-cyan-500/5 rounded-xl border border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <HiX size={22} key="x" />
            ) : (
              <HiMenuAlt3 size={22} key="m" />
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[150] bg-slate-950 flex flex-col justify-center p-12 overflow-hidden"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[size:40px_40px] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)]" />

            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-6xl font-black uppercase tracking-tighter transition-all ${
                      isActive
                        ? "text-cyan-400 italic"
                        : "text-white/10 hover:text-white"
                    }`
                  }
                >
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-baseline gap-4"
                  >
                    <span className="text-xs font-mono italic opacity-40">
                      0{idx + 1}
                    </span>
                    {link.name}
                  </motion.div>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
