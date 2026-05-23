import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaTerminal,
  FaArrowUp,
  FaCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // CRITICAL: Use Link for internal routing

const Footer = () => {
  const [time, setTime] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      onMouseMove={handleMouseMove}
      className="relative bg-[#020306] text-white font-mono border-t border-cyan-500/10 overflow-hidden"
    >
      {/* BACKGROUND INTERACTIVE GLOW */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.08), transparent 80%)`,
        }}
      />

      {/* TOP DATA MARQUEE */}
      <div className="w-full border-b border-white/5 bg-white/[0.01] py-2 overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center text-[8px] font-black tracking-[0.5em] text-cyan-500/20 uppercase"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              <FaCircle className="text-[3px] animate-pulse" />
              AUTH_STATUS: VERIFIED // UPLINK: STABLE // ARCHITECT_OS_V4.0 //
              RAJNEESH_RAJAK
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
          {/* BRANDING */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0.8 }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative h-14 w-14 border-2 border-cyan-500/30 bg-cyan-500/5 flex items-center justify-center"
              >
                <span className="relative text-cyan-400 font-black text-2xl tracking-tighter italic z-10">
                  RR
                </span>
                <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500/40" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-500/40 opacity-50" />
              </motion.div>

              <div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase leading-none">
                  ARCHITECT<span className="text-cyan-500/50">.OS</span>
                </h3>
                <span className="text-cyan-500/60 text-[9px] font-bold tracking-[0.4em] uppercase mt-2 block">
                  Full_Stack_Developer
                </span>
              </div>
            </div>

            <div className="relative pt-4">
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed border-l border-cyan-500/30 pl-6">
                "Building beautiful frontends and powerful backends. I turn
                complex ideas into clean, functional digital products."
              </p>
              <FaTerminal className="absolute left-[-5px] top-4 text-[12px] text-cyan-500/40" />
            </div>
          </div>

          {/* DIRECTORY - FIXED TO 4 LINKS WITH CORRECT ROUTING */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/10 mb-8 border-b border-white/5 pb-2">
              Directory
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-5">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Skills", path: "/skills" },
              ].map((link) => (
                <li key={link.name}>
                  {/* Use Link instead of a tag to prevent 404s */}
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-[10px] text-white/40 hover:text-cyan-400 transition-all flex items-center group gap-4 uppercase"
                  >
                    <div className="w-1.5 h-1.5 border border-cyan-500/30 group-hover:bg-cyan-500 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SYSTEM TELEMETRY */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex gap-3">
              <SocialBtn
                icon={<FaGithub />}
                label="Git"
                link="https://github.com/rajneeshgithubcs"
              />
              <SocialBtn
                icon={<FaLinkedinIn />}
                label="Lnk"
                link="https://linkedin.com/in/rajneesh-rajak-209882231"
              />
              <div className="flex-1 border border-white/5 bg-white/[0.01] p-3 flex flex-col justify-center">
                <span className="text-[7px] text-white/20 uppercase tracking-widest mb-1">
                  Status
                </span>
                <div className="flex items-center gap-2 text-green-500/60">
                  <FaShieldAlt className="text-[9px]" />
                  <span className="text-[9px] font-black uppercase tracking-widest">
                    Available
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 border border-cyan-500/10 bg-cyan-500/[0.02] relative">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-[8px] text-white/20 uppercase tracking-widest">
                    Current_Time
                  </span>
                  <span className="text-xs text-cyan-400 font-bold tracking-widest">
                    {time || "SYNCING..."}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[8px] text-white/20 uppercase tracking-widest">
                    System_Load
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((b) => (
                      <div
                        key={b}
                        className={`w-4 h-1.5 ${
                          b < 4 ? "bg-cyan-500/50" : "bg-white/5"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM AUTH BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-10 order-2 md:order-1 text-[9px] font-black tracking-[0.2em] text-white/20 uppercase">
            <span>ID: RAJNEESH_01</span>
            <span>© 2026 ARCHITECT_OS_SYSTEMS</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(6,182,212,0.05)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-full md:w-auto flex items-center justify-center gap-10 border border-cyan-500/20 px-8 py-3 group hover:border-cyan-500/60 transition-all order-1 md:order-2"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500">
              Return_To_Apex
            </span>
            <FaArrowUp className="text-[10px] text-cyan-500 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

const SocialBtn = ({ icon, label, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, backgroundColor: "rgba(6, 182, 212, 0.1)" }}
    className="w-14 h-14 border border-white/10 flex flex-col items-center justify-center bg-white/[0.02] group transition-all cursor-pointer"
  >
    <span className="text-lg text-white/20 group-hover:text-cyan-400 transition-colors">
      {icon}
    </span>
    <span className="text-[7px] mt-1 font-black text-white/10 group-hover:text-cyan-500/50 uppercase">
      {label}
    </span>
  </motion.a>
);

export default Footer;