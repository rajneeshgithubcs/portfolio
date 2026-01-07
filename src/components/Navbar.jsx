import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
  { name: "Services", path: "/services" },
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
          className="absolute inset-0 bg-cyan-500/[0.05] border border-cyan-400/30 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.1)]"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ left: ["-10%", "110%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
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
  }, [location.pathname]);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-8 left-0 right-0 z-[100] hidden lg:flex justify-center px-6 pointer-events-none"
      >
        <nav className="relative flex items-center p-1.5 rounded-2xl bg-slate-950/60 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto">
          <div className="flex items-center gap-6 pl-4 pr-8 py-2 border-r border-white/5">
            <AdvancedLuminousLogo routeKey={location.pathname} />
            <div className="flex flex-col">
              <span className="text-[11px] font-black text-white tracking-[0.2em] leading-none uppercase">
                Architect<span className="text-cyan-500">.OS</span>
              </span>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[7px] font-mono text-cyan-500/60 uppercase tracking-widest">
                  System_Active
                </span>
              </div>
            </div>
          </div>

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

          <div className="flex items-center gap-8 pl-8 pr-6 border-l border-white/5">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-white/90 tracking-widest leading-none">
                V.4.0.5
              </span>
              <span className="text-[6px] font-mono text-cyan-500/40 uppercase mt-1">
                Node_Verified
              </span>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE NAVBAR - UPDATED TO BE FIXED AND STICKY */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-[200] p-4 pointer-events-none">
        <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-slate-950/80 backdrop-blur-2xl border border-white/10 pointer-events-auto shadow-2xl">
          <AdvancedLuminousLogo routeKey={location.pathname} />
          <button
            onClick={() => setOpen(!open)}
            className="w-11 h-11 flex items-center justify-center bg-cyan-500/5 rounded-xl border border-cyan-500/20 text-cyan-400"
          >
            {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[150] bg-slate-950 flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-4xl font-black uppercase tracking-tighter transition-colors ${
                      isActive ? "text-cyan-400 italic" : "text-white/10"
                    }`
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
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

            <div className="absolute bottom-12 left-8 border-l border-cyan-500/20 pl-4">
              <p className="text-[10px] text-white/20 font-mono uppercase tracking-[0.2em]">
                System_Uplink: Established
                <br />
                User_ID: Rajneesh_Rajak
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
