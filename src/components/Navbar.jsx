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
          className="absolute inset-0 bg-cyan-500/[0.03] border border-cyan-400/20 rounded-xl shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        >
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
  const [activeSection, setActiveSection] = useState("/");

  // Update activeSection based on the URL path
  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const handleNavClick = (e, path) => {
    if (location.pathname === "/" || path === "/") {
      const sectionId = path === "/" ? "home" : path.replace("/", "");
      const element = document.getElementById(sectionId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", path);
        setActiveSection(path); // Force update state
        setOpen(false);
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-8 left-0 right-0 z-[100] hidden lg:flex justify-center px-6"
      >
        <nav className="relative flex items-center p-1.5 rounded-2xl bg-slate-950/40 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-6 pl-4 pr-8 py-2">
            <AdvancedLuminousLogo routeKey={location.pathname} />
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

          <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent relative">
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute left-1/2 -translate-x-1/2 w-[2px] h-3 bg-cyan-400"
            />
          </div>

          <div className="flex items-center gap-1 px-4">
            {navLinks.map((link, idx) => {
              // MANUALLY CHECK ACTIVE STATE
              const isActive = activeSection === link.path;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                >
                  <MagneticLink isActive={isActive} index={idx}>
                    {link.name}
                  </MagneticLink>
                </NavLink>
              );
            })}
          </div>

          <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="flex items-center gap-8 pl-8 pr-6">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-white/90 tracking-widest leading-none">
                V.4.0.5
              </span>
              <span className="text-[6px] font-mono text-cyan-500/40 uppercase mt-1">
                JBP_Node_01
              </span>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE TRIGGER */}
      <div className="lg:hidden fixed top-6 left-6 right-6 z-[200] flex items-center justify-between px-6 py-4 rounded-2xl bg-slate-950/80 backdrop-blur-2xl border border-white/10">
        <AdvancedLuminousLogo routeKey={location.pathname} />
        <button
          onClick={() => setOpen(!open)}
          className="w-11 h-11 flex items-center justify-center bg-cyan-500/5 rounded-xl border border-cyan-500/20 text-cyan-400"
        >
          {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-slate-950 flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-8 pt-20">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.path;
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`text-4xl font-black uppercase tracking-tighter ${isActive ? "text-cyan-400 italic" : "text-white/10"}`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-mono italic opacity-40">
                        0{idx + 1}
                      </span>
                      {link.name}
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
