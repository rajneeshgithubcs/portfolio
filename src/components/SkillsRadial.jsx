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

  // FIXED: Increased mobile radius from 110 to 135 to clear the center circle
  const radius = isMobile ? 135 : 250;

  return (
    <section className="relative bg-[#020306] flex items-center justify-center min-h-[500px] h-screen overflow-hidden font-mono px-4">
      {/* 1. HUD CORE (Nexus) - Lowered Z-index to 30 so icons pass OVER it on mobile */}
      <div className="absolute z-30 flex items-center justify-center pointer-events-none">
        <div
          className={`absolute w-32 h-32 md:w-56 md:h-56 rounded-full blur-[60px] transition-colors duration-700 
          ${hoveredSkill ? "bg-cyan-500/25" : "bg-blue-500/5"}`}
        />

        <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20"
          />
          <div className="z-10 bg-black/90 backdrop-blur-xl w-24 h-24 md:w-36 md:h-36 rounded-full border border-white/10 flex flex-col items-center justify-center shadow-2xl">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[7px] text-cyan-400 font-black tracking-[0.4em] mb-1"
            >
              {hoveredSkill ? "LINK_ESTABLISHED" : "SYSTEM_IDLE"}
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.h3
                key={hoveredSkill?.label || "idle"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[10px] md:text-xs font-black text-white uppercase text-center"
              >
                {hoveredSkill ? hoveredSkill.label : "Nexus_V5"}
              </motion.h3>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 2. ROTATING FIELD - Set to Z-40 to ensure icons stay on top */}
      <div className="relative w-full max-w-[1000px] aspect-square flex items-center justify-center z-40">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {/* LASER CONNECTOR LINES */}
          {skills.map((skill, i) => (
            <div
              key={`line-${i}`}
              className={`absolute top-1/2 left-1/2 h-[1px] origin-left transition-opacity duration-300
                ${hoveredSkill?.label === skill.label ? "opacity-100" : "opacity-0"}`}
              style={{
                width: `${radius}px`,
                transform: `rotate(${skill.angle}deg)`,
                background: `linear-gradient(90deg, transparent, rgba(6,182,212,0.5) 50%, #fff 100%)`,
              }}
            />
          ))}

          {/* SKILL NODES */}
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
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onTouchStart={() => setHoveredSkill(skill)}
                  className="relative flex items-center justify-center"
                >
                  {/* ICON DIAMOND */}
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rotate-45 border transition-all duration-300
                    ${isActive ? "bg-cyan-500 border-white scale-110 shadow-[0_0_20px_#06b6d4]" : "bg-[#0a0c10] border-white/10"}`}
                  >
                    <div className="rotate-[-45deg]">
                      <Icon
                        className={`text-xl ${isActive ? "text-black" : "text-white/40"}`}
                      />
                    </div>
                  </div>

                  {/* INFO BOX (TOOLTIP) - Optimized for Mobile visibility */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          // FIXED: On mobile, move box UP (-65) so it doesn't cover the icon or center
                          y: isMobile ? -65 : 0,
                          x: isMobile ? 0 : 45,
                        }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className={`absolute ${isMobile ? "left-auto" : "left-1/2"} z-[100] pointer-events-none whitespace-nowrap`}
                      >
                        <div className="relative">
                          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                          <div className="bg-black/95 border border-white/10 px-3 py-1.5 backdrop-blur-md ml-[2px]">
                            <p className="text-[6px] text-cyan-400 font-black tracking-[0.2em] uppercase mb-0.5">
                              {skill.category}
                            </p>
                            <p className="text-[10px] font-black text-white uppercase italic tracking-wider">
                              {skill.label}
                            </p>
                          </div>
                          <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-cyan-500" />
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
    </section>
  );
}
