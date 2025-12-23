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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Radius logic: smaller for mobile to prevent overflow
  const radius = isMobile ? 120 : 220;

  return (
    <section className="relative bg-[#020306] py-20 flex items-center justify-center min-h-screen overflow-hidden font-mono">
      {/* 1. FIXED CIRCULAR CORE */}
      <div className="absolute z-50">
        <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-black border border-white/10 flex flex-col items-center justify-center relative shadow-[0_0_50px_rgba(6,182,212,0.1)]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-2 border-cyan-500/20"
          />
          <span className="text-[8px] text-cyan-500 font-bold tracking-widest uppercase">
            Stable
          </span>
          <h3 className="text-[10px] md:text-xs font-black text-white uppercase">
            Nexus_V5
          </h3>
        </div>
      </div>

      <div className="relative w-full max-w-[1000px] aspect-square flex items-center justify-center">
        {/* 2. ROTATING ORBIT */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
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
                {/* 3. COUNTER-ROTATION (This prevents the "left side" tilt issue) */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="relative flex flex-col items-center justify-center"
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full transition-all duration-300
                    ${isActive ? "bg-white text-black scale-110 shadow-xl" : "bg-[#0a0c10] border border-white/10 text-white/30"}`}
                  >
                    <Icon className="text-xl md:text-2xl" />
                  </div>

                  {/* 4. RESPONSIVE HUD TAG */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: isMobile ? 10 : 0,
                          x: isMobile ? 0 : -80,
                        }}
                        animate={{
                          opacity: 1,
                          y: isMobile ? 50 : 0,
                          x: isMobile ? 0 : -110,
                        }}
                        exit={{ opacity: 0 }}
                        className="absolute z-[100] pointer-events-none"
                      >
                        <div className="bg-black border-r-2 border-cyan-500 p-2 min-w-[120px] shadow-2xl backdrop-blur-md text-center md:text-left">
                          <p className="text-[7px] text-cyan-500 font-bold uppercase tracking-tighter">
                            {skill.category}
                          </p>
                          <p className="text-[10px] md:text-sm font-black text-white uppercase italic">
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
      </div>
    </section>
  );
}
