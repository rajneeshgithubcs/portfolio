import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaReact, FaAws, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiSpringboot,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { icon: FaReact, label: "React", angle: 0, category: "UI_KERNEL" },
  { icon: SiSpringboot, label: "Spring", angle: 45, category: "BACKEND" },
  { icon: FaNodeJs, label: "Node.js", angle: 90, category: "RUNTIME" },
  { icon: FaJava, label: "Java", angle: 135, category: "CORE" },
  { icon: SiMongodb, label: "MongoDB", angle: 180, category: "STORAGE" },
  { icon: FaAws, label: "AWS", angle: 225, category: "INFRA" },
  { icon: SiTailwindcss, label: "Tailwind", angle: 270, category: "STYLE" },
  { icon: SiFramer, label: "Framer", angle: 315, category: "MOTION" },
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

  const radius = isMobile ? 120 : 250;

  return (
    <section className="relative bg-[#020306] py-20 flex items-center justify-center min-h-screen overflow-hidden font-mono">
      {/* 1. THE ADVANCED HUD CORE */}
      <div className="absolute z-50 flex items-center justify-center">
        {/* INNER GLOW */}
        <div
          className={`absolute w-32 h-32 md:w-56 md:h-56 rounded-full blur-[60px] transition-colors duration-500 
          ${hoveredSkill ? "bg-cyan-500/20" : "bg-blue-500/10"}`}
        />

        <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
          {/* LAYER 1: OUTER DASHED ROTATOR (Slow) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30"
          />

          {/* LAYER 2: INTERMEDIATE GEOMETRY (Fast) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border-2 border-double border-white/5 border-t-cyan-500/40"
          />

          {/* LAYER 3: CORE DATA CHIP */}
          <div className="z-10 bg-black/80 backdrop-blur-md w-24 h-24 md:w-36 md:h-36 rounded-full border border-white/10 flex flex-col items-center justify-center overflow-hidden">
            {/* Pulsing Hex Grid Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[8px] text-cyan-400 font-black tracking-[0.3em] mb-1"
            >
              SYSTEM_LIVE
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.h3
                key={hoveredSkill ? hoveredSkill.label : "IDLE"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-xs md:text-sm font-black text-white text-center leading-tight uppercase"
              >
                {hoveredSkill ? (
                  <>
                    <span className="text-cyan-500 italic">Load:</span>
                    <br />
                    {hoveredSkill.label}
                  </>
                ) : (
                  "Nexus_V5"
                )}
              </motion.h3>
            </AnimatePresence>

            {/* Bottom Telemetry Mini-Bar */}
            <div className="mt-2 flex gap-1">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [2, 8, 2] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  className="w-1 bg-cyan-500/50"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE ROTATING SKILL FIELD */}
      <div className="relative w-full max-w-[1000px] aspect-square flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-20"
        >
          {skills.map((skill, i) => {
            const rad = (skill.angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
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
                {/* 3. NODE COMPONENT */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group relative flex items-center justify-center"
                >
                  {/* Skill Connector Line to Center (only visible on hover) */}
                  <div
                    className={`absolute h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent origin-left transition-all duration-500
                    ${isActive ? "w-[200px] opacity-100" : "w-0 opacity-0"}`}
                    style={{ transform: `rotate(${skill.angle + 180}deg)` }}
                  />

                  {/* Icon Hexagon/Circle Container */}
                  <div
                    className={`w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-sm rotate-45 border transition-all duration-500
                    ${
                      isActive
                        ? "bg-cyan-500 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)] rotate-[135deg]"
                        : "bg-white/[0.03] border-white/10 group-hover:border-cyan-500/50"
                    }`}
                  >
                    <div className="rotate-[-45deg] group-hover:rotate-[-135deg] transition-transform duration-500">
                      <Icon
                        className={`text-xl md:text-3xl transition-colors ${isActive ? "text-black" : "text-white/40"}`}
                      />
                    </div>
                  </div>

                  {/* Floating ID Tag */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 50 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute hidden md:block left-full ml-4 whitespace-nowrap"
                      >
                        <div className="bg-black/80 border-l-2 border-cyan-500 px-3 py-1 backdrop-blur-md">
                          <p className="text-[10px] text-cyan-500 font-bold tracking-tighter uppercase">
                            {skill.category}
                          </p>
                          <p className="text-sm font-black text-white uppercase">
                            {skill.label}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* BACKGROUND ORBITAL RINGS */}
        <div className="absolute inset-0 rounded-full border border-white/[0.02] pointer-events-none" />
        <div className="absolute inset-20 rounded-full border border-white/[0.01] pointer-events-none" />
      </div>
    </section>
  );
}
