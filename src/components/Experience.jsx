import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaTerminal,
  FaCodeBranch,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";

const internshipData = {
  id: "0X_INT_TVM",
  company: "TVM Private Limited",
  period: "Professional Internship",
  role: "Backend & API Engineer",
  tech: ["Node.js", "TypeScript", "Express", "MongoDB", "Postman", "Flutter"],
  metrics: { cpu: "64%", mem: "1.4GB", status: "STABLE" },
  achievements: [
    {
      icon: <FaCodeBranch />,
      label: "API_ARCHITECTURE",
      text: "Engineered robust REST APIs for a Salesman Management Application, ensuring seamless communication between server and mobile clients.",
    },
    {
      icon: <FaShieldAlt />,
      label: "ACCESS_PROTOCOLS",
      text: "Implemented multi-tier RBAC (Super Admin, Admin, Salesman) to enforce strict security and streamline operational workflows.",
    },
    {
      icon: <FaDatabase />,
      label: "DATABASE_OPTIMIZATION",
      text: "Enhanced MongoDB performance through strategic indexing and schema refinement, significantly reducing query latency.",
    },
    {
      icon: <FaTerminal />,
      label: "SYSTEM_SYNC",
      text: "Integrated real-time data synchronization with Flutter mobile apps and conducted rigorous Postman testing for 100% endpoint stability.",
    },
  ],
};

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollWidth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#020306] text-white font-mono py-40 overflow-hidden"
    >
      {/* 1. BACKGROUND WATERMARK */}
      <div className="absolute top-20 right-0 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[25rem] font-black italic leading-none">EXP</h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-white/5 pb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-cyan-500 text-[10px] font-black tracking-[1em] uppercase mb-4 block">
              Execution_History
            </span>
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none uppercase">
              WORK_<span className="text-cyan-500">LOG</span>
            </h2>
          </motion.div>

          <div className="text-right flex flex-col items-end">
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-black mb-2 uppercase">
              Status: Professional_Active
            </span>
            <p className="text-white/30 text-xs italic uppercase tracking-widest">
              Verified_Production_Environment
            </p>
          </div>
        </div>

        {/* INTERNSHIP MODULE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: COMPANY IDENTITY */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 border border-white/5 bg-white/[0.02] backdrop-blur-md relative group">
              <div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-500" />
              <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter">
                {internshipData.company}
              </h3>
              <p className="text-cyan-500 text-xs font-bold mt-2 uppercase tracking-widest">
                {internshipData.role}
              </p>
              <div className="mt-8 pt-8 border-t border-white/5">
                <span className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
                  Stack_Deployed:
                </span>
                <div className="flex flex-wrap gap-2 mt-4">
                  {internshipData.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[9px] bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-400 transition-colors cursor-default uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: SYSTEM ACHIEVEMENTS */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {internshipData.achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-cyan-500/5 text-cyan-500 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black text-white/30 group-hover:text-cyan-500 transition-colors uppercase tracking-widest">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed italic">
                  "{item.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM METRICS BAR */}
        <div className="mt-20 p-6 border border-white/5 bg-white/[0.01] flex flex-wrap justify-between items-center gap-8">
          <div className="flex gap-12">
            <div>
              <span className="block text-[8px] text-white/20 uppercase mb-1">
                Response_Time
              </span>
              <span className="text-sm font-bold text-cyan-500">240ms</span>
            </div>
            <div>
              <span className="block text-[8px] text-white/20 uppercase mb-1">
                Query_Load
              </span>
              <span className="text-sm font-bold text-white">OPTIMIZED</span>
            </div>
            <div>
              <span className="block text-[8px] text-white/20 uppercase mb-1">
                Environment
              </span>
              <span className="text-sm font-bold text-white">PROD_SYNC</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase text-white/40">
              Remote_Uplink_Active
            </span>
          </div>
        </div>
      </div>

      {/* DYNAMIC PROGRESS LINE */}
      <motion.div
        style={{ scaleX: scrollWidth }}
        className="fixed bottom-0 left-0 w-full h-1 bg-cyan-500 origin-left z-50 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
      />
    </section>
  );
}
