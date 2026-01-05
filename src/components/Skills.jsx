import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const components = [
  {
    name: "React.js",
    type: "Interface",
    size: "col-span-2 row-span-1 md:row-span-2 lg:col-span-2 lg:row-span-2",
    level: 0.95,
  },
  {
    name: "Spring_Boot",
    type: "Kernel",
    size: "col-span-2 row-span-1 lg:col-span-2",
    level: 0.9,
  },
  {
    name: "Node.js",
    type: "Runtime",
    size: "col-span-1 row-span-1",
    level: 0.85,
  },
  {
    name: "TypeScript",
    type: "Logic",
    size: "col-span-1 row-span-1 lg:row-span-2",
    level: 0.92,
  },
  {
    name: "AWS_Cloud",
    type: "Infra",
    size: "col-span-2 row-span-1 lg:col-span-2",
    level: 0.8,
  },
  {
    name: "MongoDB",
    type: "Storage",
    size: "col-span-1 row-span-1",
    level: 0.88,
  },
  {
    name: "TailwindCss",
    type: "Design",
    size: "col-span-1 row-span-1",
    level: 0.95,
  },
  {
    name: "Docker",
    type: "Container",
    size: "col-span-1 row-span-1",
    level: 0.82,
  },
  {
    name: "Java",
    type: "Core",
    size: "col-span-1 row-span-1",
    level: 0.9,
  },
];

function SkillCard({ comp, idx }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.5, delay: idx * 0.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${comp.size} group relative min-h-[140px] overflow-hidden bg-[#0a0c10]/80 border border-white/5 backdrop-blur-md p-5 md:p-8 flex flex-col justify-between transition-all duration-500 hover:border-cyan-500/40 hover:bg-white/[0.04]`}
    >
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-cyan-500 transition-colors" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-cyan-500 transition-colors" />

      <div className="flex justify-between items-start z-10">
        <div className="flex flex-col">
          <span className="text-[9px] font-black text-cyan-500/60 tracking-[0.2em]">
            REF_ID // 0{idx}
          </span>
          <span className="text-[7px] text-white/30 uppercase tracking-tighter mt-1">
            CLASS: {comp.type}
          </span>
        </div>
        <div
          className={`w-2 h-2 rounded-full ${isHovered ? "bg-cyan-500 shadow-[0_0_10px_#06b6d4]" : "bg-white/10"} transition-all`}
        />
      </div>

      <div className="z-10 mt-auto">
        <h3 className="text-lg sm:text-2xl lg:text-3xl font-black italic tracking-tighter uppercase text-white/80 group-hover:text-white transition-all">
          {comp.name}
        </h3>

        <div className="mt-4 flex items-center gap-3">
          <div className="h-[2px] flex-1 bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${comp.level * 100}%` }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="h-full bg-cyan-500 shadow-[0_0_12px_#06b6d4]"
            />
          </div>
          <span className="text-[10px] font-mono text-cyan-500 font-bold">
            {(comp.level * 100).toFixed(0)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function AdvancedSkills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative bg-[#020306] font-mono text-white overflow-x-hidden min-h-screen">
      {/* BACKGROUND DECOR */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff05 1.5px, transparent 1.5px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Container - Dynamic Top Padding (25% of screen height) */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-16 pt-[25vh] pb-32">
        {/* RESPONSIVE HEADER */}
        <div className="mb-24 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-16">
          <div className="relative">
            <h2 className="text-7xl sm:text-9xl lg:text-[11rem] font-black tracking-tighter uppercase italic leading-[0.75] text-white">
              TECH
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(6, 182, 212, 0.4)" }}
              >
                SKILLS
              </span>
            </h2>
            <div className="mt-8 md:mt-12 flex items-center justify-center md:justify-start gap-3 md:gap-5 w-full overflow-hidden">
              {/* The line: shorter on mobile, hidden on ultra-small screens */}
              <span className="hidden xs:block h-[1px] w-12 md:w-24 bg-cyan-500 shrink-0" />

              {/* The text: fluid size and adjusted tracking for small screens */}
              <p className="text-[10px] sm:text-xs md:text-sm text-cyan-500/60 font-black tracking-[0.3em] md:tracking-[0.6em] uppercase whitespace-nowrap">
                SYSTEM_CAPABILITY_INDEX_V4
              </p>

              {/* Optional: Add a second line on mobile to center the text visually */}
              <span className="xs:block md:hidden h-[1px] w-12 bg-cyan-500 shrink-0" />
            </div>
          </div>

          {/* METRICS BOX - Pushed to the right on large screens */}
          <div className="flex gap-16 border-l border-white/10 pl-12 py-4 bg-white/[0.02] backdrop-blur-md">
            <div>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-2">
                Stability
              </p>
              <p className="text-2xl font-black text-cyan-400">99.9%</p>
            </div>
            <div>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-2">
                Neural_Load
              </p>
              <p className="text-2xl font-black text-cyan-400">12.4 tflops</p>
            </div>
          </div>
        </div>

        {/* SKILLS GRID - Scales up to 8 columns on Ultra-Wide */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6 auto-rows-fr">
          {components.map((comp, idx) => (
            <SkillCard key={idx} comp={comp} idx={idx} />
          ))}

          {/* DYNAMIC LOG MODULE */}
          <div className="col-span-2 lg:col-span-2 xl:col-span-2 border border-dashed border-white/10 p-8 flex flex-col items-center justify-center bg-white/[0.01]">
            <div className="text-[10px] text-cyan-500/40 uppercase italic tracking-[0.4em] text-center">
              &gt; sync_completed <br />
              &gt; node_ref_0{components.length} <br />
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-block mt-4 bg-cyan-500/10 px-5 py-2 text-cyan-400 border border-cyan-500/20 font-black"
              >
                LIVE_FEED_STABLE
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
