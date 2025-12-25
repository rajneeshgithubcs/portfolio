import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  FaTerminal,
  FaCodeBranch,
  FaDatabase,
  FaShieldAlt,
  FaServer,
  FaLayerGroup,
  FaVial,
  FaCloudUploadAlt,
} from "react-icons/fa";

const internshipData = {
  id: "0X_INT_TVM",
  company: "TVM Private Limited",
  period: "Professional Internship",
  role: "Backend & API Engineer",
  tech: [
    "Node.js",
    "TypeScript",
    "Express",
    "MongoDB",
    "Postman",
    "Flutter",
    "Docker",
    "Redis",
  ],
  metrics: { cpu: "64%", mem: "1.4GB", status: "STABLE" },
  achievements: [
    {
      icon: <FaLayerGroup />,
      label: "STATE_SYNCHRONIZATION",
      text: "Architected a reactive state management layer in Flutter using Provider/Bloc, ensuring real-time UI updates whenever Backend Salesman data changed.",
    },
    {
      icon: <FaCodeBranch />,
      label: "RESTFUL_CONTRACTS",
      text: "Designed type-safe API contracts between Node.js and Flutter using TypeScript interfaces, reducing runtime serialization errors by 90%.",
    },
    {
      icon: <FaTerminal />,
      label: "HYDRATION_LOGIC",
      text: "Implemented offline-first data persistence in Flutter using SQLite, allowing salesmen to log data in low-connectivity zones with background sync to MongoDB.",
    },
    {
      icon: <FaDatabase />,
      label: "QUERY_PIPELINES",
      text: "Developed complex MongoDB aggregation pipelines to generate 'Sales Analytics' dashboards, served via optimized Express.js endpoints.",
    },
    {
      icon: <FaShieldAlt />,
      label: "AUTH_HANDSHAKE",
      text: "Engineered a secure bi-directional authentication flow using JWTs and secure storage (Flutter Secure Storage), protecting sensitive financial records.",
    },
    {
      icon: <FaVial />,
      label: "E2E_VALIDATION",
      text: "Performed End-to-End system testing across the mobile-to-cloud bridge, using Postman for API stress tests and Flutter DevTools for UI profiling.",
    },
    {
      icon: <FaServer />,
      label: "EVENT_DRIVEN_OPS",
      text: "Integrated Firebase Cloud Messaging (FCM) on the Backend to trigger instant push notifications on mobile devices for Super-Admin alerts.",
    },
    {
      icon: <FaCloudUploadAlt />,
      label: "DOCKER_CONTAINERIZATION",
      text: "Dockerized the development environment to ensure the React-based Admin Dashboard and Node.js API behaved identically across all team machines.",
    },
  ],
};

export default function Experience() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      className="relative bg-[#020306] text-white font-mono min-h-screen w-full overflow-x-hidden"
    >
      {/* 1. BACKGROUND WATERMARK */}
      <div className="absolute top-60 right-[-5%] opacity-[0.01] pointer-events-none select-none hidden lg:block">
        <h2 className="text-[25rem] font-black italic leading-none uppercase">
          Dev_Ops
        </h2>
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-44 pb-20 md:pt-56 md:pb-40">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 border-b border-white/5 pb-10">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <span className="text-cyan-500 text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[1em] uppercase mb-4 block">
              Execution_History
            </span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black italic tracking-tighter leading-none uppercase">
              PROFESSIONAL_<span className="text-cyan-500">EXPERIENCE</span>
            </h2>
          </motion.div>

          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse rounded-full" />
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-black uppercase">
                Status: Active
              </span>
            </div>
            <p className="text-white/20 text-[10px] md:text-xs italic uppercase tracking-[0.2em]">
              Backend_Node_Environment
            </p>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* LEFT: IDENTITY */}
          <div className="lg:col-span-4">
            <div className="p-8 border border-white/5 bg-white/[0.02] backdrop-blur-xl relative sticky top-32">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-cyan-500 shadow-[0_0_15px_#06b6d4]" />
              <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter leading-tight">
                {internshipData.company}
              </h3>
              <p className="text-cyan-500 text-xs font-bold mt-3 uppercase tracking-widest border-b border-white/5 pb-4">
                {internshipData.role}
              </p>

              <div className="mt-6">
                <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] block mb-4">
                  Tech_Stack:
                </span>
                <div className="flex flex-wrap gap-2">
                  {internshipData.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[9px] bg-cyan-500/5 border border-cyan-500/10 text-white/50 uppercase font-bold hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-crosshair"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: ACHIEVEMENTS (Now 8 items) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {internshipData.achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="p-6 border border-white/5 bg-[#0a0c10] hover:border-cyan-500/40 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Subtle Hover Effect */}
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-1 h-1 bg-cyan-500 rounded-full" />
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/5 text-cyan-500 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                    {item.icon}
                  </div>
                  <span className="text-[8px] font-mono text-white/10 group-hover:text-cyan-500/30 transition-colors">
                    REF_0{i + 1}
                  </span>
                </div>
                <h4 className="text-[10px] font-black text-cyan-500/60 uppercase tracking-widest mb-3">
                  {item.label}
                </h4>
                <p className="text-sm text-white/40 leading-relaxed font-light italic group-hover:text-white/70 transition-colors">
                  "{item.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FOOTER METRICS */}
        <div className="mt-20 p-8 border border-white/5 bg-white/[0.01] backdrop-blur-sm flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap gap-12 justify-center md:justify-start">
            <div>
              <p className="text-[8px] text-white/20 uppercase tracking-widest mb-1">
                Latency
              </p>
              <p className="text-sm font-bold text-cyan-500">240ms</p>
            </div>
            <div>
              <p className="text-[8px] text-white/20 uppercase tracking-widest mb-1">
                Architecture
              </p>
              <p className="text-sm font-bold text-white uppercase">
                Distributed_v2
              </p>
            </div>
            <div>
              <p className="text-[8px] text-white/20 uppercase tracking-widest mb-1">
                Test_Coverage
              </p>
              <p className="text-sm font-bold text-white uppercase">85%_UNIT</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-cyan-500/5 px-4 py-2 border border-cyan-500/10">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
            <span className="text-[10px] font-black uppercase text-cyan-500 tracking-widest">
              Processing_Logs...
            </span>
          </div>
        </div>
      </div>

      {/* SECTION PROGRESS */}
      <motion.div
        style={{ scaleX: scrollWidth }}
        className="fixed bottom-0 left-0 w-full h-1 bg-cyan-500 origin-left z-50 shadow-[0_0_15px_#06b6d4]"
      />
    </section>
  );
}
