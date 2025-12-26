import { motion, useScroll, useSpring } from "framer-motion";
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

// DATA: Balanced between TVM Backend impact and React Frontend expertise
const internshipData = {
  id: "0X_INT_TVM",
  company: "TVM Private Limited Company",
  period: "Professional Internship",
  role: "React & Full Stack Engineer",
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
      text: "Implemented Role-Based Security (Super Admin, Admin, Salesman) to ensure users only see the data they are authorized to manage.",
    },
    {
      icon: <FaSync />,
      label: "REAL_TIME_SYNC",
      text: "Bridge the gap between the Backend and Flutter mobile apps, ensuring salesmen see live updates while working in the field.",
    },
    {
      icon: <FaDatabase />,
      label: "DATABASE_OPTIMIZATION",
      text: "Improved MongoDB performance through schema design and indexing, allowing the app to handle large amounts of sales records without slowing down.",
      // Adding a diagram here helps recruiters visualize the data flow from database to user.
      //
    },
    {
      icon: <FaCode />,
      label: "STATE_MANAGEMENT",
      text: "Managed complex frontend data using Redux/Context API, keeping the User Interface in sync with the backend database automatically.",
    },
    {
      icon: <FaVial />,
      label: "QUALITY_ASSURANCE",
      text: "Rigorous API testing using Postman and UI debugging to ensure the application remains stable and error-free for the client.",
    },
    {
      icon: <FaMobileAlt />,
      label: "CLIENT_COLLABORATION",
      text: "Worked directly with clients to translate business needs into technical features, delivering a product tailored to their specific workflow.",
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
      {/* BACKGROUND WATERMARK */}
      <div className="absolute top-60 right-[-5%] opacity-[0.01] pointer-events-none select-none hidden lg:block">
        <h2 className="text-[25rem] font-black italic leading-none uppercase">
          FULLSTACK
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-44 pb-20 md:pt-56 md:pb-40">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 border-b border-white/5 pb-10">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <span className="text-cyan-500 text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[1em] uppercase mb-4 block">
              Professional_Log
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black italic tracking-tight leading-tight uppercase">
              Professional_<span className="text-cyan-500">EXPERIENCE</span>
            </h2>
          </motion.div>

          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse rounded-full" />
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-black uppercase">
                Status: Verified
              </span>
            </div>
            <p className="text-white/20 text-[10px] md:text-xs italic uppercase tracking-[0.2em]">
              Node_React_EcoSystem
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* LEFT: COMPANY CARD */}
          <div className="lg:col-span-4">
            <div className="p-8 border border-white/5 bg-white/[0.02] backdrop-blur-xl relative sticky top-32">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-cyan-500 shadow-[0_0_15px_#06b6d4]" />
              <span className="text-[10px] text-cyan-500/60 uppercase tracking-[0.3em] font-bold">
                Organization
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest leading-tight mt-2 border-l-4 border-cyan-500 pl-4">
                {internshipData.company}
              </h3>
              <p className="text-cyan-500 text-xs font-bold mt-4 uppercase tracking-widest pb-4 border-b border-white/5">
                {internshipData.role}
              </p>

              <div className="mt-6">
                <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] block mb-4">
                  Tech_Utilization:
                </span>
                <div className="flex flex-wrap gap-2">
                  {internshipData.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[9px] bg-cyan-500/5 border border-cyan-500/10 text-white/50 uppercase font-bold hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILED ACHIEVEMENTS */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {internshipData.achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-white/5 bg-[#0a0c10] hover:border-cyan-500/40 transition-all duration-500 group relative"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/5 text-cyan-500 border border-white/10 group-hover:bg-cyan-500/10 transition-all">
                    {item.icon}
                  </div>
                  <span className="text-[8px] font-mono text-white/10 group-hover:text-cyan-500/30">
                    STK_0{i + 1}
                  </span>
                </div>
                <h4 className="text-[10px] font-black text-cyan-500/60 uppercase tracking-widest mb-3">
                  {item.label}
                </h4>
                <p className="text-sm text-white/50 leading-relaxed font-normal group-hover:text-white/80 transition-colors">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RECRUITER METRICS */}
        <div className="mt-20 p-8 border border-white/5 bg-white/[0.01] backdrop-blur-sm flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-wrap gap-12 justify-center md:justify-start">
            <div>
              <p className="text-[8px] text-white/20 uppercase tracking-widest mb-1">
                Architecture
              </p>
              <p className="text-sm font-bold text-cyan-500 uppercase">
                MERN + Flutter Sync
              </p>
            </div>
            <div>
              <p className="text-[8px] text-white/20 uppercase tracking-widest mb-1">
                Security
              </p>
              <p className="text-sm font-bold text-white uppercase">
                RBAC Implemented
              </p>
            </div>
            <div>
              <p className="text-[8px] text-white/20 uppercase tracking-widest mb-1">
                Efficiency
              </p>
              <p className="text-sm font-bold text-white uppercase">
                Optimized Schemas
              </p>
            </div>
          </div>
          <div className="bg-cyan-500/5 px-6 py-3 border border-cyan-500/20">
            <span className="text-[10px] font-black uppercase text-cyan-500 tracking-[0.2em]">
              Full_System_Stability: 100%
            </span>
          </div>
        </div>
      </div>

      <motion.div
        style={{ scaleX: scrollWidth }}
        className="fixed bottom-0 left-0 w-full h-1 bg-cyan-500 origin-left z-50 shadow-[0_0_15px_#06b6d4]"
      />
    </section>
  );
}
