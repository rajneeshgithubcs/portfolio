import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaTerminal,
  FaArrowUp,
  FaCircle,
} from "react-icons/fa";
import { useEffect, useState } from "react";

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
      className="relative bg-[#020306] text-white font-mono border-t border-cyan-900/30 overflow-hidden"
    >
      {/* 1. INTERACTIVE MOUSE GLOW */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`,
        }}
      />

      {/* 2. SCANNING MARQUEE */}
      <div className="w-full border-b border-white/5 bg-cyan-500/[0.02] py-2 overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center text-[9px] font-black tracking-[0.3em] text-cyan-500/40 uppercase"
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="flex items-center gap-3">
              <FaCircle className="text-[4px] animate-pulse" />
              Connection_Secure // Node_Active // Protocol_8080 //
              Trace_Route_Enabled
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* BRANDING SECTION - REPLACED RAJAK */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-14 w-14 border border-cyan-500/30 flex items-center justify-center bg-cyan-500/5 relative group">
                <span className="text-cyan-500 font-black text-2xl italic font-sans">
                  R
                </span>
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                {/* NEW NAME: CORE_ENGINE or SYSTECH */}
                <h3 className="text-2xl font-black tracking-tighter uppercase leading-none font-sans">
                  CORE_ENGINE.
                </h3>
                <span className="text-cyan-500 text-[10px] font-black tracking-[0.4em] mt-1 block">
                  FULL_STACK_ARCHITECT
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-500/80">
                <FaTerminal className="text-[10px]" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Manifesto
                </span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed max-w-sm border-l-2 border-cyan-500/20 pl-4 italic">
                "Architecting digital ecosystems where aesthetic precision meets
                backend resilience. Building the scalable infrastructure of the
                modern web."
              </p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-6">
              Directory
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Projects", "Experience"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-xs text-white/40 hover:text-cyan-400 transition-all flex items-center group gap-3 uppercase"
                  >
                    <span className="h-[1px] w-0 group-hover:w-4 bg-cyan-500 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SYSTEM STATUS */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex gap-4">
              <SocialBtn
                icon={<FaGithub />}
                link="https://github.com/rajneeshgithubcs"
                label="GIT"
              />
              <SocialBtn
                icon={<FaLinkedinIn />}
                link="https://linkedin.com/in/rajneesh-rajak-209882231"
                label="LKD"
              />
            </div>

            <div className="p-4 bg-white/[0.02] border border-white/5 space-y-3">
              <div className="flex justify-between text-[10px] uppercase">
                <span className="text-white/20">Local_Time</span>
                <span className="text-cyan-500 font-bold tracking-widest">
                  {time || "Syncing..."}
                </span>
              </div>
              <div className="flex justify-between text-[10px] uppercase">
                <span className="text-white/20">Latency</span>
                <span className="text-green-500 font-bold">0.4ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[9px] font-bold tracking-[0.2em] text-white/10 uppercase italic">
            <span className="text-cyan-500/40 mr-4">
              EOF // TRANSMISSION_COMPLETE
            </span>
            <span>© {new Date().getFullYear()} CORE_ENGINE_SYSTEMS</span>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(6, 182, 212, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-4 border border-cyan-500/30 px-6 py-2 transition-all group"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500 group-hover:text-white transition-colors">
              Return_To_Apex
            </span>
            <FaArrowUp className="text-[10px] text-cyan-500 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

const SocialBtn = ({ icon, link, label }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, borderColor: "rgba(6, 182, 212, 0.5)" }}
    className="w-14 h-14 border border-white/10 flex flex-col items-center justify-center bg-white/5 group transition-all"
  >
    <span className="text-lg text-white/30 group-hover:text-cyan-500 transition-colors">
      {icon}
    </span>
    <span className="text-[7px] mt-1 font-bold text-white/5 group-hover:text-cyan-500/50 uppercase">
      {label}
    </span>
  </motion.a>
);

export default Footer;
