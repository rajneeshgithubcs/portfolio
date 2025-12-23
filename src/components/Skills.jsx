import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useState } from "react";

const components = [
  {
    name: "React.js",
    type: "Interface",
    size: "md:col-span-2 md:row-span-2",
    level: 0.95,
    color: "#06b6d4",
  },
  {
    name: "Spring_Boot",
    type: "Kernel",
    size: "md:col-span-2 md:row-span-1",
    level: 0.9,
    color: "#06b6d4",
  },
  {
    name: "Node.js",
    type: "Runtime",
    size: "md:col-span-1 md:row-span-1",
    level: 0.85,
    color: "#ffffff",
  },
  {
    name: "TypeScript",
    type: "Logic",
    size: "md:col-span-1 md:row-span-2",
    level: 0.92,
    color: "#ffffff",
  },
  {
    name: "AWS_Cloud",
    type: "Infra",
    size: "md:col-span-2 md:row-span-1",
    level: 0.8,
    color: "#06b6d4",
  },
  {
    name: "MongoDB",
    type: "Storage",
    size: "md:col-span-1 md:row-span-1",
    level: 0.88,
    color: "#ffffff",
  },
  {
    name: "TailwindCss",
    type: "Design",
    size: "md:col-span-1 md:row-span-1",
    level: 0.95,
    color: "#ffffff",
  },
  {
    name: "Docker",
    type: "Container",
    size: "md:col-span-1 md:row-span-1",
    level: 0.82,
    color: "#ffffff",
  },
  {
    name: "Java",
    type: "Core",
    size: "md:col-span-1 md:row-span-1",
    level: 0.9,
    color: "#ffffff",
  },
];

function SkillCard({ comp, idx }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${comp.size} relative group overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] backdrop-blur-sm p-6 flex flex-col justify-between transition-all duration-500 hover:border-cyan-500/50`}
    >
      {/* 1. GLASS GLARE EFFECT */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/[0.02] to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* 2. DYNAMIC CORNER ID */}
      <div className="flex justify-between items-start z-10">
        <div className="flex flex-col">
          <span className="text-[7px] font-black text-cyan-500/40 tracking-[0.2em]">
            NODE_REF // 0{idx}
          </span>
          <span className="text-[6px] text-white/20">
            TYPE: {comp.type.toUpperCase()}
          </span>
        </div>
        <motion.div
          animate={isHovered ? { rotate: 90 } : { rotate: 0 }}
          className="w-1.5 h-1.5 border-t border-r border-cyan-500/50"
        />
      </div>

      {/* 3. MAIN DISPLAY */}
      <div className="z-10 mt-auto">
        <h3
          className={`text-xl md:text-2xl font-black italic tracking-tighter uppercase transition-all duration-500 ${isHovered ? "text-white translate-x-1" : "text-white/60"}`}
        >
          {comp.name}
        </h3>

        {/* ADVANCED LEVEL INDICATOR */}
        <div className="mt-3 flex items-center gap-2">
          <div className="h-[2px] flex-1 bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${comp.level * 100}%` }}
              transition={{ duration: 1, ease: "circOut" }}
              className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"
            />
          </div>
          <span className="text-[8px] font-mono text-cyan-500/50 italic">
            {(comp.level * 100).toFixed(0)}%
          </span>
        </div>
      </div>

      {/* 4. BACKGROUND NOISE OVERLAY */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </motion.div>
  );
}

export default function AdvancedSkills() {
  return (
    <section className="relative bg-[#020306] py-32 font-mono text-white overflow-hidden">
      {/* NEURAL BACKGROUND GRID */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-radial-at-t from-cyan-500/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* SCANNING HEADER */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="relative">
            <motion.div
              animate={{ left: ["-10%", "110%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 h-[1px] w-20 bg-cyan-500 shadow-[0_0_15px_#06b6d4] z-20"
            />
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none text-white">
              TECH
              <span
                className="text-transparent stroke-cyan-500 stroke-1"
                style={{ WebkitTextStroke: "1px #06b6d4" }}
              >
                MATRIX
              </span>
            </h2>
            <p className="mt-4 text-[9px] text-cyan-500/40 tracking-[0.8em] font-bold uppercase">
              // Neural_Interface_Deployment_v5.0
            </p>
          </div>

          <div className="flex gap-8 border-l border-white/10 pl-8">
            <div className="flex flex-col">
              <span className="text-[8px] text-white/20 uppercase">
                Core_Stability
              </span>
              <span className="text-xs font-bold text-cyan-400">99.9%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] text-white/20 uppercase">
                Logic_Cycles
              </span>
              <span className="text-xs font-bold text-cyan-400">
                12.4 tflops
              </span>
            </div>
          </div>
        </div>

        {/* MASONRY-STYLE ADVANCED GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {components.map((comp, idx) => (
            <SkillCard key={idx} comp={comp} idx={idx} />
          ))}

          {/* DYNAMIC LOG MODULE */}
          <div className="col-span-2 row-span-1 bg-white/[0.01] border border-dashed border-white/10 p-6 flex items-center justify-center overflow-hidden">
            <div className="text-[7px] text-cyan-500/20 leading-loose uppercase italic tracking-widest text-center">
              &gt; system_initialized <br />
              &gt; loading_neural_weights [ok] <br />
              &gt; scanning_available_subsystems... <br />
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity }}
                className="bg-cyan-500/40 px-1 text-black"
              >
                _
              </motion.span>
            </div>
          </div>
        </div>

        {/* FOOTER TELEMETRY */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-[8px] tracking-[0.4em] text-white/20 font-bold">
            <span>REGISTRY_083_ALPHA</span>
            <div className="w-12 h-[1px] bg-white/10" />
            <span>ENCRYPT_SECURE</span>
          </div>
          <div className="flex gap-1">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [4, 12, 4] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                className="w-[2px] bg-cyan-500/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
