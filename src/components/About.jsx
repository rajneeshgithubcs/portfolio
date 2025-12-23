import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-[#010204] text-white overflow-hidden font-mono"
    >
      {/* 1. ROBOTIC BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 z-0">
        {/* Geometric Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40 L40 0 M0 0 L5 5 M35 35 L40 40' stroke='%2306b6d4' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Atmospheric Glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      {/* DESIGN SIGNATURE */}
      <div className="absolute top-24 right-10 text-[8rem] md:text-[15rem] font-black text-white/[0.02] select-none leading-none tracking-tighter">
        IDENT_01
      </div>

      {/* 2. DOSSIER CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
      >
        {/* LEFT COLUMN — SYSTEM STATUS & TITLE (Span 5) */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 px-4 py-1.5 border border-cyan-500/30 bg-cyan-500/5 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-400 tracking-[0.4em] text-[10px] uppercase font-bold">
              Subject_Profile_Uplink
            </span>
          </motion.div>

          <motion.div variants={item}>
            <h2 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter">
              ENGINEERING <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(34,211,238,0.5)" }}
              >
                DIGITAL_CORE
              </span>
            </h2>
            <div className="mt-8 h-[1px] w-24 bg-cyan-500/50" />
            <p className="mt-6 text-slate-500 text-xs tracking-[0.2em] uppercase max-w-xs leading-relaxed">
              Architecting scalable systems from ground-zero logic to
              neural-interface deployments.
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — DATA LOGS (Span 7) */}
        <motion.div variants={item} className="lg:col-span-7 space-y-10">
          <div className="relative p-8 border-l border-white/10 bg-white/[0.01] backdrop-blur-sm">
            {/* Corner Decorative Bits */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-500/40" />

            <div className="space-y-6 text-slate-300 text-lg md:text-xl leading-relaxed font-light">
              <p>
                I am{" "}
                <span className="text-white font-bold tracking-tight">
                  Rajneesh Rajak
                </span>
                , a Computer Science Engineer from{" "}
                <span className="text-cyan-400/80">SRIT</span>. I specialize in
                bypassing the "demo" phase to build production-grade
                architectures.
              </p>

              <p>
                My methodology focuses on the{" "}
                <span className="text-white italic">full lifecycle</span>:
                transforming raw database models into low-latency APIs and
                high-fidelity frontends.
              </p>

              <p className="text-base text-slate-400 font-mono border-t border-white/5 pt-6">
                <span className="text-cyan-500 font-bold mr-2">
                  // TECH_STACK:
                </span>
                React_TS, Node.js, Spring_Boot, MongoDB, Tailwind_CSS. Focused
                on maintainability and clean-code protocols.
              </p>
            </div>

            {/* Bottom Status Bar */}
            <div className="mt-10 flex items-center justify-between opacity-30">
              <span className="text-[10px] tracking-[0.3em]">
                LOG_VER: 5.4.0
              </span>
              <div className="flex gap-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-[2px] h-3 bg-white/40" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
