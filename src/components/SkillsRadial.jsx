import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";

const skills = [
  { icon: FaReact,       label: "React.js",   angle: 0,   category: "UI_KERNEL", color: "#22d3ee" },
  { icon: SiExpress,     label: "Express.js",  angle: 45,  category: "BACKEND",   color: "#a3a3a3" },
  { icon: FaNodeJs,      label: "Node.js",     angle: 90,  category: "RUNTIME",   color: "#22c55e" },
  { icon: FaJs,          label: "JavaScript",  angle: 135, category: "LANG",      color: "#eab308" },
  { icon: SiMongodb,     label: "MongoDB",     angle: 180, category: "STORAGE",   color: "#16a34a" },
  { icon: MdSecurity,    label: "JWT Auth",    angle: 225, category: "SECURITY",  color: "#10b981" },
  { icon: SiTailwindcss, label: "Tailwind",    angle: 270, category: "STYLE",     color: "#38bdf8" },
  { icon: FaGitAlt,      label: "Git",         angle: 315, category: "VERSION",   color: "#f97316" },
];

const additionalSkills = [
  { name: "HTML5",           level: 95 },
  { name: "CSS3",            level: 90 },
  { name: "REST APIs",       level: 88 },
  { name: "Postman",         level: 86 },
  { name: "GitHub",          level: 87 },
  { name: "Framer Motion",   level: 78 },
];

export default function SkillsRadial() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const radius = isMobile ? 108 : 210;

  return (
    <section className="relative bg-[#020306] text-white font-mono overflow-hidden py-16 px-4 sm:px-8">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-3"
        >
          <div className="h-[1px] w-10 bg-cyan-500" />
          <span className="text-cyan-500 text-[10px] font-black tracking-[0.5em] uppercase">
            Skill_Matrix
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-4 mb-12"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
            TECH_
            <span className="text-cyan-500">CORE</span>
          </h2>
          <div className="hidden sm:flex items-center gap-2 text-[9px] text-white/20 uppercase tracking-widest pb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            All_Systems_Active // 8_Nodes_Online
          </div>
        </motion.div>

        {/* ── MAIN LAYOUT: Orbital + Sidebar ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── ORBITAL SECTION ── */}
          <div className="relative flex items-center justify-center shrink-0">

            {/* Center HUD */}
            <div className="absolute z-10 flex items-center justify-center pointer-events-none">
              {/* Outer glow bloom */}
              <div
                className={`absolute rounded-full blur-[60px] transition-all duration-700
                ${hoveredSkill ? "w-40 h-40 bg-cyan-500/30" : "w-24 h-24 bg-blue-500/10"}`}
              />

              {/* Outer dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-28 h-28 md:w-44 md:h-44 rounded-full border border-dashed border-cyan-500/20"
              />

              {/* Inner solid ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute w-20 h-20 md:w-32 md:h-32 rounded-full border border-cyan-500/10"
              />

              {/* Core circle */}
              <div className="relative w-16 h-16 md:w-28 md:h-28 rounded-full bg-black/90 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                <motion.p
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-[5px] md:text-[8px] text-cyan-400 font-black tracking-[0.3em] mb-0.5 uppercase"
                >
                  {hoveredSkill ? "LINKED" : "NEXUS_V5"}
                </motion.p>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={hoveredSkill?.label || "idle"}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-[8px] md:text-[11px] font-black text-white uppercase text-center leading-tight px-1"
                  >
                    {hoveredSkill ? hoveredSkill.label : "Orbital"}
                  </motion.p>
                </AnimatePresence>
                {hoveredSkill && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[5px] md:text-[7px] text-cyan-500/60 uppercase tracking-widest mt-0.5"
                  >
                    {hoveredSkill.category}
                  </motion.p>
                )}
              </div>
            </div>

            {/* ── ROTATING FIELD ── */}
            <div className={`relative flex items-center justify-center z-20
              ${isMobile ? "w-[280px] h-[280px]" : "w-[560px] h-[560px]"}`}>

              {/* Static outer tick ring */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
                viewBox="0 0 560 560"
              >
                {Array.from({ length: 36 }).map((_, i) => {
                  const a = (i * 10 * Math.PI) / 180;
                  const r1 = 272, r2 = i % 3 === 0 ? 262 : 267;
                  return (
                    <line
                      key={i}
                      x1={280 + r1 * Math.cos(a)} y1={280 + r1 * Math.sin(a)}
                      x2={280 + r2 * Math.cos(a)} y2={280 + r2 * Math.sin(a)}
                      stroke="#22d3ee" strokeWidth={i % 3 === 0 ? 1.5 : 0.5}
                    />
                  );
                })}
                <circle cx="280" cy="280" r="272" fill="none" stroke="#22d3ee" strokeWidth="0.5" />
                <circle cx="280" cy="280" r="210" fill="none" stroke="#22d3ee" strokeWidth="0.3" strokeDasharray="2 8" />
              </svg>

              {/* Radar sweep */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
                style={{ borderRadius: "50%" }}
              >
                <svg className="w-full h-full" viewBox="0 0 560 560">
                  <defs>
                    <radialGradient id="radarGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.08" />
                    </radialGradient>
                  </defs>
                  <path
                    d={`M 280 280 L ${280 + 270} 280 A 270 270 0 0 0 ${280 + 270 * Math.cos(-Math.PI / 3)} ${280 + 270 * Math.sin(-Math.PI / 3)} Z`}
                    fill="url(#radarGrad)"
                  />
                  <line x1="280" y1="280" x2={280 + 270} y2="280" stroke="#22d3ee" strokeWidth="0.8" strokeOpacity="0.5" />
                </svg>
              </motion.div>

              {/* Orbital field that rotates with nodes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {/* Connector lines */}
                {skills.map((skill, i) => (
                  <div
                    key={`line-${i}`}
                    className={`absolute top-1/2 left-1/2 h-[1px] origin-left transition-all duration-300
                      ${hoveredSkill?.label === skill.label ? "opacity-100" : "opacity-[0.06]"}`}
                    style={{
                      width: `${radius}px`,
                      transform: `rotate(${skill.angle}deg)`,
                      background: hoveredSkill?.label === skill.label
                        ? `linear-gradient(90deg, transparent, ${skill.color}80 50%, ${skill.color} 100%)`
                        : `linear-gradient(90deg, transparent, rgba(255,255,255,0.3) 100%)`,
                    }}
                  />
                ))}

                {/* Skill nodes */}
                {skills.map((skill, i) => {
                  const rad = (skill.angle * Math.PI) / 180;
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;
                  const Icon = skill.icon;
                  const isActive = hoveredSkill?.label === skill.label;

                  return (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 z-30"
                      style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        onTouchStart={() => setHoveredSkill(s => s?.label === skill.label ? null : skill)}
                        className="relative flex flex-col items-center justify-center cursor-pointer"
                      >
                        {/* Node diamond */}
                        <div
                          className={`flex items-center justify-center rotate-45 border transition-all duration-300
                          ${isMobile ? "w-9 h-9" : "w-14 h-14"}
                          ${isActive
                            ? "scale-125 shadow-[0_0_24px_currentColor] border-white"
                            : "bg-[#0a0c10] border-white/15 hover:border-white/40 hover:scale-110"
                          }`}
                          style={isActive ? { backgroundColor: skill.color, color: skill.color } : {}}
                        >
                          <div className="rotate-[-45deg]">
                            <Icon
                              className={`${isMobile ? "text-sm" : "text-xl"} transition-colors duration-300`}
                              style={isActive ? { color: "#000" } : { color: skill.color, opacity: 0.6 }}
                            />
                          </div>
                        </div>

                        {/* Always-visible label */}
                        <div className={`absolute ${isMobile ? "-bottom-5" : "-bottom-7"} whitespace-nowrap`}>
                          <p className={`text-center font-black uppercase tracking-wider transition-colors duration-300
                            ${isMobile ? "text-[6px]" : "text-[8px]"}
                            ${isActive ? "text-cyan-400" : "text-white/20"}`}>
                            {skill.label}
                          </p>
                        </div>

                        {/* Hover tooltip */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.85, y: 4 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.85, y: 4 }}
                              className="absolute -top-14 left-1/2 -translate-x-1/2 z-[100] pointer-events-none whitespace-nowrap"
                            >
                              <div className="relative bg-black/95 border px-3 py-1.5 backdrop-blur-md"
                                style={{ borderColor: `${skill.color}60` }}>
                                <div className="absolute left-0 top-0 bottom-0 w-[2px]"
                                  style={{ backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}` }} />
                                <p className="text-[7px] font-black tracking-[0.2em] uppercase mb-0.5"
                                  style={{ color: skill.color }}>{skill.category}</p>
                                <p className="text-[11px] font-black text-white uppercase italic">{skill.label}</p>
                                <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r"
                                  style={{ borderColor: skill.color }} />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* ── SIDEBAR: Additional Skills ── */}
          <div className="flex-1 w-full max-w-sm lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <p className="text-[9px] text-white/30 uppercase tracking-[0.4em] mb-5">
                Additional_Stack // Proficiency_Index
              </p>
              {additionalSkills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group flex items-center gap-4"
                >
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors w-28 shrink-0">
                    {s.name}
                  </span>
                  <div className="flex-1 h-[2px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: "circOut", delay: i * 0.07 + 0.2 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 shadow-[0_0_8px_#22d3ee]"
                    />
                  </div>
                  <span className="text-[9px] font-black text-cyan-500 w-8 text-right shrink-0">
                    {s.level}%
                  </span>
                </motion.div>
              ))}

              {/* Status block */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-6 border-t border-white/5 space-y-3"
              >
                {[
                  { label: "Primary_Stack",  value: "MERN",        color: "text-cyan-400" },
                  { label: "Auth_Protocol",  value: "JWT + RBAC",  color: "text-emerald-400" },
                  { label: "API_Type",       value: "REST",        color: "text-white" },
                  { label: "Version_Ctrl",   value: "Git + GitHub",color: "text-orange-400" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-[9px] text-white/25 uppercase tracking-widest">{item.label}</span>
                    <span className={`text-[10px] font-black uppercase ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 border border-white/5 bg-white/[0.015] px-6 py-3 flex flex-wrap items-center justify-between gap-4"
        >
          <span className="text-[9px] text-white/20 uppercase tracking-[0.4em]">
            NEXUS_V5 // ORBITAL_SCAN_ACTIVE
          </span>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[9px] text-white/20 uppercase tracking-widest">8_Nodes_Tracked</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] text-white/20 uppercase tracking-widest">All_Systems_Online</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
