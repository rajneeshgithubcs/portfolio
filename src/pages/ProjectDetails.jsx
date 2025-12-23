import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// ---------------- ICONS ----------------
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiSpringboot,
  SiTypescript,
  SiExpress,
  SiFlutter,
} from "react-icons/si";
import { MdApi, MdSecurity } from "react-icons/md";
import { GiAbstract053 } from "react-icons/gi";

// ---------------- PROJECT DATA ----------------
const PROJECTS = {
  "salesman-management-system": {
    title: "Salesman Management System",
    id: "UNIT_01",
    description:
      "A high-availability backend-driven system designed to manage large sales teams with secure role-based access control, optimized REST APIs, and real-time synchronization.",
    stack: [
      { icon: FaNodeJs, name: "Node.js", color: "text-green-400" },
      { icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
      { icon: SiExpress, name: "Express.js", color: "text-white" },
      { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
      { icon: MdApi, name: "REST APIs", color: "text-cyan-400" },
      { icon: MdSecurity, name: "RBAC", color: "text-emerald-400" },
      { icon: SiFlutter, name: "Flutter", color: "text-sky-400" },
    ],
    features: [
      "Type-safe architecture via TypeScript protocols",
      "Multi-level Role-Based Access Control (RBAC)",
      "Low-latency REST API throughput",
      "Flutter-based field agent interface",
      "Real-time database state synchronization",
    ],
  },
  "nike-inspired-ecommerce": {
    title: "Nike-Inspired E-Commerce",
    id: "UNIT_02",
    description:
      "A full-stack commerce engine featuring modular cart lifecycle management, secure JWT authentication layers, and real-time inventory simulation.",
    stack: [
      { icon: FaReact, name: "React", color: "text-cyan-400" },
      { icon: SiRedux, name: "Redux Toolkit", color: "text-purple-400" },
      { icon: SiSpringboot, name: "Spring Boot", color: "text-green-400" },
      { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    ],
    features: [
      "JWT-based secure authentication handshake",
      "State-persistent cart and order lifecycle",
      "Spring Security role-based authorization",
      "Transactional payment simulation flow",
    ],
  },
  "animated-portfolio": {
    title: "Architect Animated Portfolio",
    id: "UNIT_03",
    description:
      "A kinetic UI architecture focused on scroll-driven interactions, reusable component design, and high-performance rendering.",
    stack: [
      { icon: FaReact, name: "React", color: "text-cyan-400" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
      { icon: MdApi, name: "Context API", color: "text-emerald-400" },
      { icon: GiAbstract053, name: "GSAP", color: "text-purple-400" },
    ],
    features: [
      "Complex GSAP scroll-trigger sequences",
      "Modular, atomic UI component library",
      "Optimized DOM rendering performance",
      "Adaptive glassmorphism design system",
    ],
  },
  tastyorder: {
    title: "TastyOrder – Logistics Interface",
    id: "UNIT_04",
    description:
      "A real-time logistics and food delivery interface featuring centralized state management for instantaneous UI feedback.",
    stack: [
      { icon: FaReact, name: "React", color: "text-cyan-400" },
      { icon: SiRedux, name: "Redux Toolkit", color: "text-purple-400" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
    ],
    features: [
      "Real-time Redux state synchronization",
      "Responsive layout for mobile terminal use",
      "Dynamic inventory filtering logic",
      "Optimized re-render prevention strategies",
    ],
  },
};

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = PROJECTS[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#010204] text-cyan-500 flex items-center justify-center font-mono uppercase tracking-[0.5em]">
        <motion.p
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Data_Fragment_Not_Found
        </motion.p>
      </div>
    );
  }

  return (
    <section className="bg-[#010204] text-white min-h-screen py-32 font-mono relative overflow-hidden">
      {/* BACKGROUND GRID DECOR */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* TOP NAVIGATION / STATUS */}
        <div className="mb-20 flex justify-between items-center border-b border-white/5 pb-6">
          <Link
            to="/projects"
            className="text-[10px] text-cyan-500/50 hover:text-cyan-400 tracking-[0.4em] uppercase transition-all"
          >
            [ BACK_TO_REPOSITORY ]
          </Link>
          <span className="text-[10px] text-white/20 tracking-[0.4em] uppercase">
            {project.id} // STABLE_STAGED
          </span>
        </div>

        {/* DIAGNOSTIC HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
            {project.title.split(" ").map((word, i) => (
              <span
                key={i}
                className={i % 2 !== 0 ? "text-cyan-500" : "text-white"}
              >
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="mt-10 text-slate-400 text-lg md:text-xl leading-relaxed font-light border-l-2 border-cyan-500/30 pl-8 max-w-2xl">
            {project.description}
          </p>
        </motion.div>

        {/* DATA MODULES GRID */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* HARDWARE/SOFTWARE STACK (Span 5) */}
          <div className="lg:col-span-5">
            <h2 className="text-xs font-black tracking-[0.5em] text-white/30 uppercase mb-10 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-cyan-500/30"></span> Core_Stack
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {project.stack.map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ backgroundColor: "rgba(6, 182, 212, 0.05)" }}
                    className="group border border-white/5 bg-white/[0.02] p-6 flex flex-col items-start transition-all"
                  >
                    <Icon
                      className={`text-3xl mb-4 ${tool.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`}
                    />
                    <span className="text-[11px] font-bold tracking-widest text-white/50 group-hover:text-white uppercase">
                      {tool.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* FUNCTIONAL LOGIC / FEATURES (Span 7) */}
          <div className="lg:col-span-7 bg-white/[0.01] border border-white/5 p-10 relative">
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500/40" />

            <h2 className="text-xs font-black tracking-[0.5em] text-white/30 uppercase mb-10 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-cyan-500/30"></span>{" "}
              Functional_Logic
            </h2>

            <ul className="space-y-6">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="text-cyan-500 text-xs font-black mt-1 group-hover:translate-x-1 transition-transform">
                    »
                  </span>
                  <p className="text-slate-300 text-sm md:text-base font-light tracking-wide uppercase group-hover:text-white transition-colors">
                    {f}
                  </p>
                </li>
              ))}
            </ul>

            {/* DECORATIVE STATUS BAR */}
            <div className="mt-16 flex items-center gap-2 opacity-20">
              <div className="h-1 flex-1 bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="w-1/3 h-full bg-cyan-500"
                />
              </div>
              <span className="text-[8px] tracking-widest uppercase">
                System_Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
