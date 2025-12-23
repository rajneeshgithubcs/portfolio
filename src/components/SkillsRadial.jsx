import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { FaReact, FaAws, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiSpringboot,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    icon: FaReact,
    label: "React",
    angle: 0,
    category: "UI_KERNEL",
    color: "#61DAFB",
  },
  {
    icon: SiSpringboot,
    label: "Spring",
    angle: 45,
    category: "BACKEND",
    color: "#6DB33F",
  },
  {
    icon: FaNodeJs,
    label: "Node.js",
    angle: 90,
    category: "RUNTIME",
    color: "#339933",
  },
  {
    icon: FaJava,
    label: "Java",
    angle: 135,
    category: "CORE",
    color: "#007396",
  },
  {
    icon: SiMongodb,
    label: "MongoDB",
    angle: 180,
    category: "STORAGE",
    color: "#47A248",
  },
  {
    icon: FaAws,
    label: "AWS",
    angle: 225,
    category: "INFRA",
    color: "#FF9900",
  },
  {
    icon: SiTailwindcss,
    label: "Tailwind",
    angle: 270,
    category: "STYLE",
    color: "#06B6D4",
  },
  {
    icon: SiFramer,
    label: "Framer",
    angle: 315,
    category: "MOTION",
    color: "#CC33FF",
  },
];

const RADIUS = 200;

export default function SkillsRadial() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const containerRef = useRef(null);

  return (
    <section className="relative bg-[#020306] py-64 flex items-center justify-center overflow-hidden font-mono cursor-crosshair">
      {/* 1. MECHANICAL DEPTH: ETCHED FLOOR */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle at center, #1e293b 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020306_70%)]" />

      <div
        ref={containerRef}
        className="relative w-[600px] h-[600px] flex items-center justify-center"
      >
        {/* 2. ATMOSPHERIC LIGHTING */}
        <AnimatePresence>
          {hoveredSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-full blur-[120px] transition-colors duration-500"
              style={{
                background: `radial-gradient(circle, ${hoveredSkill.color}20 0%, transparent 70%)`,
              }}
            />
          )}
        </AnimatePresence>

        {/* 3. PHYSICAL RINGS (Static mechanical parts) */}
        <div className="absolute w-[400px] h-[400px] border border-white/[0.03] rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]" />
        <div className="absolute w-[402px] h-[402px] border-t border-cyan-500/20 rounded-full animate-spin [animation-duration:10s]" />

        {/* 4. ENERGY FILAMENTS (Laser lines to center) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {skills.map((skill, i) => {
            const rad = (skill.angle * Math.PI) / 180;
            const x2 = 300 + Math.cos(rad) * RADIUS;
            const y2 = 300 + Math.sin(rad) * RADIUS;
            const isActive = hoveredSkill?.label === skill.label;

            return (
              <motion.line
                key={i}
                x1="300"
                y1="300"
                x2={x2}
                y2={y2}
                stroke={isActive ? skill.color : "white"}
                strokeWidth={isActive ? "1" : "0.2"}
                strokeOpacity={isActive ? "0.6" : "0.1"}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
            );
          })}
        </svg>

        {/* 5. CORE UNIT (Processer) */}
        <div className="relative z-20 group">
          <div className="w-32 h-32 rounded-full bg-black border border-white/10 flex flex-col items-center justify-center backdrop-blur-3xl shadow-2xl relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/[0.05] to-transparent" />

            {/* Inner pulsating core */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute w-16 h-16 bg-cyan-500/10 blur-xl rounded-full"
            />

            <span className="text-[7px] tracking-[0.4em] text-white/30 uppercase mb-1">
              Nexus_V5
            </span>
            <h3 className="text-[10px] font-black text-white tracking-widest uppercase">
              Kernel
            </h3>
          </div>
        </div>

        {/* 6. ROTATING MODULES */}
        <motion.div
          className="absolute inset-0 z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          {skills.map((skill, i) => {
            const rad = (skill.angle * Math.PI) / 180;
            const x = Math.cos(rad) * RADIUS;
            const y = Math.sin(rad) * RADIUS;
            const Icon = skill.icon;
            const isActive = hoveredSkill?.label === skill.label;

            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 80,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="relative cursor-pointer group"
                >
                  {/* Glass Module Frame */}
                  <motion.div
                    animate={
                      isActive ? { boxShadow: `0 0 30px ${skill.color}40` } : {}
                    }
                    className={`w-12 h-12 rounded-lg border ${isActive ? "border-white/50" : "border-white/10"} bg-[#0a0a0c] flex items-center justify-center transition-all duration-300 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                    <Icon
                      className={`text-xl transition-all duration-500 ${isActive ? "scale-110" : "opacity-40 grayscale group-hover:grayscale-0"}`}
                      style={{ color: isActive ? skill.color : "white" }}
                    />
                  </motion.div>

                  {/* Mechanical Tag */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 25 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-black px-2 py-0.5 whitespace-nowrap uppercase italic"
                      >
                        {skill.label}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
