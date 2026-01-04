import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaShieldAlt,
  FaMobileAlt,
  FaSync,
  FaVial,
  FaCode,
} from "react-icons/fa";

const internshipData = {
  id: "0X_INT_TVM",
  company: "TVM Private Ltd",
  period: "Professional Internship",
  role: "Full Stack Engineer",
  tech: [
    "React.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Express",
    "Redux",
    "Flutter Sync",
    "Postman",
  ],
  achievements: [
    {
      icon: <FaNodeJs />,
      label: "BACKEND_ARCHITECTURE",
      text: "Developed and optimized REST APIs using Node.js and TypeScript, acting as the core engine for the Salesman Management system.",
    },
    {
      icon: <FaReact />,
      label: "REACT_INTERFACE",
      text: "Built dynamic Admin Dashboards in React.js, using functional components and Hooks to provide managers with a clear view of sales data.",
    },
    {
      icon: <FaShieldAlt />,
      label: "ACCESS_CONTROL",
      text: "Implemented Role-Based Security (Super Admin, Admin, Salesman) to ensure users only see authorized data.",
    },
    {
      icon: <FaSync />,
      label: "REAL_TIME_SYNC",
      text: "Bridge the gap between Backend and Flutter mobile apps, ensuring salesmen see live updates while working in the field.",
    },
    {
      icon: <FaDatabase />,
      label: "DATABASE_OPTIMIZATION",
      text: "Improved MongoDB performance through schema design and indexing, allowing the app to handle large amounts of sales records.",
    },
    {
      icon: <FaCode />,
      label: "STATE_MANAGEMENT",
      text: "Managed complex frontend data using Redux/Context API, keeping the UI in sync with the backend database automatically.",
    },
  ],
};

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scrollWidth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#05060a] text-white font-mono min-h-screen w-full overflow-hidden py-24"
    >
      {/* 1. CRT SCANLINE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER SECTION */}
        <header className="mb-20">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-cyan-500" />
            <span className="text-cyan-500 text-xs font-black tracking-[0.5em] uppercase">
              Deployment_History
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter">
            PRO_
            <span className="text-cyan-500 transition-all duration-500 hover:text-white cursor-default">
              EXPERIENCE
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: THE "SERVER" UNIT */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="sticky top-32 p-1 bg-gradient-to-b from-cyan-500/20 to-transparent">
              <div className="bg-[#0a0c12] p-8 border border-white/10 relative overflow-hidden">
                {/* Decorative Tech Grid */}
                <div className="absolute top-0 right-0 p-2 text-[8px] text-white/5 leading-none">
                  010101 <br /> 110011 <br /> 001100
                </div>

                <h3 className="text-3xl font-black mb-2 leading-none uppercase tracking-tighter">
                  {internshipData.company}
                </h3>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-white/40 uppercase tracking-widest">
                    {internshipData.period}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] text-cyan-500 font-bold uppercase mb-3 tracking-widest underline decoration-cyan-500/30 underline-offset-4">
                      Core_Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {internshipData.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-[9px] border border-white/10 bg-white/5 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-crosshair"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: ACHIEVEMENT LOGS */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {internshipData.achievements.map((item, i) => (
              <AchievementCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* BOTTOM METRICS BAR */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="mt-20 border border-cyan-500/20 bg-cyan-500/5 p-6 flex flex-wrap justify-between items-center gap-6 backdrop-blur-md"
        >
          <div className="flex gap-8">
            <Metric label="Latency" value="0.4ms" color="text-green-500" />
            <Metric label="Uptime" value="99.9%" color="text-cyan-500" />
            <Metric label="Security" value="RBAC_ACTIVE" color="text-white" />
          </div>
          <div className="text-[10px] text-white/20 italic">
            END_OF_TRANSMISSION // {new Date().getFullYear()}
          </div>
        </motion.div>
      </div>

      {/* FIXED PROGRESS BAR */}
      <motion.div
        style={{ scaleX: scrollWidth }}
        className="fixed bottom-0 left-0 w-full h-1.5 bg-cyan-500 origin-left z-50 shadow-[0_0_20px_#06b6d4]"
      />
    </section>
  );
}

// Sub-component for individual cards
function AchievementCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, backgroundColor: "rgba(6, 182, 212, 0.03)" }}
      className="group relative p-6 border border-white/5 bg-[#0a0c12] transition-all duration-300"
    >
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-cyan-500/50 transition-colors" />

      <div className="mb-4 text-2xl text-cyan-500/50 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300 origin-left">
        {item.icon}
      </div>

      <h4 className="text-[10px] font-bold text-white/40 group-hover:text-cyan-500 uppercase tracking-[0.2em] mb-2 transition-colors">
        {item.label}
      </h4>

      <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/90 transition-colors">
        {item.text}
      </p>
    </motion.div>
  );
}

function Metric({ label, value, color }) {
  return (
    <div>
      <p className="text-[8px] text-white/30 uppercase mb-1">{label}</p>
      <p className={`text-xs font-black ${color}`}>{value}</p>
    </div>
  );
}
