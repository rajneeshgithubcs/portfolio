import { NavLink, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaBolt, FaWifi } from "react-icons/fa";
import AdvancedLuminousLogo from "./AdvanceLuminousLogo.jsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Services", path: "/services" },
  { name: "Experience", path: "/experience" },
];

// --- COMPONENTS ---

// 1. Glitch Text Effect
const GlitchText = ({ text, isActive }) => {
  const [displayText, setDisplayText] = useState(text);
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&_";

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return charset[Math.floor(Math.random() * charset.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 30);
  };

  return (
    <motion.span
      onHoverStart={scramble}
      className={`font-mono font-bold tracking-[0.15em] uppercase text-[11px] ${isActive ? "text-cyan-400" : "text-white/70"
        }`}
    >
      {displayText}
    </motion.span>
  );
};

// 2. Magnetic Nav Item - Integrated Version
const NavItem = ({ link, isActive }) => {
  return (
    <NavLink to={link.path} className="relative px-5 py-2 group">
      {isActive && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 bg-cyan-500/10 rounded-lg border border-cyan-500/30 shadow-[0_0_15px_-5px_rgba(34,211,238,0.4)]"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <div className="relative z-10 flex items-center gap-2">
        <GlitchText text={link.name} isActive={isActive} />
      </div>

      {/* Hover Line */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-cyan-400 group-hover:w-1/2 transition-all duration-300 opacity-50" />
    </NavLink>
  );
};


export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* --- DESKTOP UNIFIED SMART-GLASS NAVBAR --- */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-0 left-0 right-0 z-[9999] hidden lg:flex justify-center pt-6 pb-4 bg-[#010204] border-b border-white/5 shadow-2xl"
      >

        {/* Main Unified Capsule */}
        <div className="pointer-events-auto relative group">
          <nav className="relative flex items-center bg-[#030712] backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

            {/* Continuous Glow Border Animation */}
            <div className="absolute inset-0 p-[1px] pointer-events-none z-20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            </div>

            {/* Grid Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

            {/* --- SECT 1: BRAND --- */}
            <div className="flex items-center gap-4 px-6 py-3 border-r border-white/5 bg-white/[0.02]">
              <div className="scale-90">
                <AdvancedLuminousLogo routeKey={location.pathname} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white">
                  Nexus<span className="text-cyan-500">Core</span>
                </span>
                <span className="text-[8px] font-mono text-white/30 tracking-widest">SYS.CONNECTED</span>
              </div>
            </div>

            {/* --- SECT 2: NAVIGATION --- */}
            <div className="flex items-center px-2">
              {navLinks.map((link) => (
                <NavItem
                  key={link.name}
                  link={link}
                  isActive={location.pathname === link.path}
                />
              ))}
            </div>

            {/* --- SECT 3: CONTROLS --- */}
            <div className="flex items-center gap-5 px-6 py-3 border-l border-white/5 bg-white/[0.02]">
              <div className="flex gap-3">
                <div className="group/icon relative flex items-center justify-center w-6 h-6 rounded-md bg-white/5 border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-pointer">
                  <FaWifi className="text-[10px] text-white/50 group-hover/icon:text-cyan-400" />
                  <span className="absolute -top-1 -right-0.5 w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div className="group/icon flex items-center justify-center w-6 h-6 rounded-md bg-white/5 border border-white/5 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all cursor-pointer">
                  <FaBolt className="text-[10px] text-white/50 group-hover/icon:text-yellow-400" />
                </div>
              </div>

              <button className="relative px-4 py-1.5 bg-cyan-500 text-[#020617] text-[10px] font-bold uppercase tracking-widest rounded-md hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                Initialize
              </button>
            </div>

          </nav>

          {/* Ambient Underglow */}
          <div className="absolute -inset-1 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </div>

      </motion.header>


      {/* --- MOBILE CYBER MENU --- */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-[9999] bg-[#010204] pt-4 pb-2 border-b border-white/5 shadow-2xl">
        <div className="flex items-center justify-between px-5 py-3 rounded-2xl bg-[#030712] backdrop-blur-3xl border border-white/10 pointer-events-auto shadow-2xl">
          <div className="scale-75 origin-left">
            <AdvancedLuminousLogo routeKey={location.pathname} />
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 text-white active:scale-95 transition-all text-lg hover:bg-white/10"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "circIn" }}
            className="fixed inset-0 z-[150] bg-black"
          >
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none" />

            <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 gap-4 sm:gap-8 z-10 overflow-x-hidden">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `
                            relative group flex items-baseline gap-4 sm:gap-6
                            ${isActive ? "text-cyan-400" : "text-white/30 hover:text-white"}
                        `}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="text-xs sm:text-sm font-mono text-cyan-600 group-hover:text-cyan-400"
                  >
                    0{idx + 1}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter italic break-words"
                  >
                    {link.name}
                  </motion.span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Footer Status */}
            <div className="absolute bottom-12 left-10 right-10 flex justify-between items-end border-t border-white/10 pt-8">
              <div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Grid Status</div>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold uppercase">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  Online
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
