import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useState } from "react";

const components = [
  {
    name: "React.js",
    type: "Interface",
    size: "md:col-span-2 md:row-span-2",
    level: 0.95,
  },
  {
    name: "Spring_Boot",
    type: "Kernel",
    size: "md:col-span-2 md:row-span-1",
    level: 0.9,
  },
  {
    name: "Node.js",
    type: "Runtime",
    size: "md:col-span-1 md:row-span-1",
    level: 0.85,
  },
  {
    name: "TypeScript",
    type: "Logic",
    size: "md:col-span-1 md:row-span-2",
    level: 0.92,
  },
  {
    name: "AWS_Cloud",
    type: "Infra",
    size: "md:col-span-2 md:row-span-1",
    level: 0.8,
  },
  {
    name: "MongoDB",
    type: "Storage",
    size: "md:col-span-1 md:row-span-1",
    level: 0.88,
  },
  {
    name: "TailwindCss",
    type: "Design",
    size: "md:col-span-1 md:row-span-1",
    level: 0.95,
  },
  {
    name: "Docker",
    type: "Container",
    size: "md:col-span-1 md:row-span-1",
    level: 0.82,
  },
  {
    name: "Java",
    type: "Core",
    size: "md:col-span-1 md:row-span-1",
    level: 0.9,
  },
];

function SkillCard({ comp, idx, mouseX, mouseY }) {
  const bg = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(250px at ${x}px ${y}px, rgba(6, 182, 212, 0.1), transparent 80%)`
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className={`${comp.size} group relative min-h-[140px] bg-black border border-white/5 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-cyan-500/50`}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: bg }}
      />
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      <div className="p-4 relative z-10">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-cyan-500 font-bold tracking-tighter uppercase block">
              &gt; NODE_0{idx + 1}
            </span>
            <span className="text-[8px] text-white/20 uppercase font-black">
              SEC_TYPE // {comp.type}
            </span>
          </div>
          <div className="w-2 h-2 border-t border-r border-white/20 group-hover:border-cyan-500 group-hover:rotate-90 transition-all duration-500" />
        </div>
      </div>

      <div className="p-4 relative z-10 mt-auto">
        <h3 className="text-xl font-black italic tracking-tighter text-white/50 group-hover:text-white transition-colors duration-300 uppercase leading-none">
          {comp.name}
        </h3>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-1 flex-1 bg-white/5 relative overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${comp.level * 100}%` }}
              transition={{ duration: 2, ease: "circOut" }}
              className="absolute h-full bg-cyan-500 shadow-[0_0_15px_#06b6d4]"
            />
          </div>
          <span className="text-[10px] font-mono text-cyan-500 font-bold italic">
            {Math.round(comp.level * 100)}%
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-1 h-4 bg-white/5 group-hover:bg-cyan-500/50 transition-colors" />
    </motion.div>
  );
}

export default function AdvancedSkills() {
  const mouseX = useSpring(useMotionValue(0), { stiffness: 500, damping: 50 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 500, damping: 50 });

  return (
    <section
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="relative bg-[#020306] font-mono text-white overflow-hidden min-h-screen py-24 px-4 sm:px-10"
    >
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16 border-b border-white/5 pb-8">
          <div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter italic uppercase text-white leading-none">
              TECH{" "}
              <span className="text-cyan-500 text-3xl md:text-5xl align-top">
                _
              </span>
              <br />
              <span
                className="text-white/10"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
              >
                SKILLS
              </span>
            </h2>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-8">
            <div className="text-right">
              <p className="text-[10px] text-white/20 uppercase font-bold mb-1">
                Stability_Core
              </p>
              <p className="text-3xl font-black italic">99.98%</p>
            </div>
            <div className="text-right border-l border-white/10 pl-8">
              <p className="text-[10px] text-white/20 uppercase font-bold mb-1">
                Active_Nodes
              </p>
              <p className="text-3xl font-black italic text-cyan-500">
                14.2 TF
              </p>
            </div>
          </div>
        </div>

        {/* MASONRY GRID - FOOTER REMOVED */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {components.map((comp, idx) => (
            <SkillCard
              key={idx}
              comp={comp}
              idx={idx}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          ))}
        </div>
      </div>

      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"
      />
    </section>
  );
}
