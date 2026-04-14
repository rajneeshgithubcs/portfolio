import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// ---------------- ICONS ----------------
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiSpringboot,
  SiExpress,
  SiPostman,
  SiGithub,
} from "react-icons/si";
import { MdApi, MdSecurity } from "react-icons/md";
import { GiAbstract053 } from "react-icons/gi";

// ---------------- PROJECT DATA (DO NOT REMOVE THIS) ----------------
const PROJECTS = {
  "superprop-360": {
    title: "SuperProp360",
    id: "UNIT_01",
    description:
      "A full-stack property management web application built with Node.js and React.js, designed to simplify real estate operations for admins and users. Features property listing, search, filtering, secure JWT authentication with role-based access control, and optimized MongoDB queries for smooth concurrent performance.",
    stack: [
      { icon: FaNodeJs, name: "Node.js", color: "text-green-400" },
      { icon: SiExpress, name: "Express.js", color: "text-white" },
      { icon: FaReact, name: "React.js", color: "text-cyan-400" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
      { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
      { icon: MdSecurity, name: "JWT Auth", color: "text-emerald-400" },
      { icon: SiPostman, name: "Postman", color: "text-orange-400" },
      { icon: SiGithub, name: "GitHub", color: "text-white" },
    ],
    features: [
      "Property listing, search & filtering with RESTful APIs",
      "JWT-based auth with admin & customer role-based access control",
      "Dynamic property management — add, view & manage listings",
      "Optimized MongoDB queries for high-concurrency performance",
      "Responsive React.js + Tailwind CSS frontend seamlessly integrated",
      "Clean modular backend architecture with proper separation of concerns",
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
  "ecommerce-bookstore": {
    title: "E-Commerce Bookstore",
    id: "UNIT_04",
    description:
      "A full-stack online bookstore built with Node.js and React.js providing users a smooth book purchasing experience. Features RESTful APIs for user registration, login, book listing, search, filtering, and order management — with JWT authentication, admin/user role-based access, cart management, and a dummy payment gateway.",
    stack: [
      { icon: FaNodeJs, name: "Node.js", color: "text-green-400" },
      { icon: SiExpress, name: "Express.js", color: "text-white" },
      { icon: FaReact, name: "React.js", color: "text-cyan-400" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
      { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
      { icon: MdSecurity, name: "JWT Auth", color: "text-emerald-400" },
      { icon: SiPostman, name: "Postman", color: "text-orange-400" },
      { icon: SiGithub, name: "GitHub", color: "text-white" },
    ],
    features: [
      "Book listing, search & filtering with RESTful APIs",
      "JWT auth with admin & user role-based access control",
      "Cart management — add, remove & update book quantities",
      "Order placement with dummy payment gateway simulation",
      "Admin panel to manage books; users can browse & purchase",
      "Optimized MongoDB queries & modular scalable architecture",
    ],
  },
};

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = PROJECTS[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#010204] text-cyan-500 flex items-center justify-center font-mono uppercase tracking-[0.5em] px-6 text-center">
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
    <section className="bg-[#010204] text-white min-h-screen py-20 md:py-32 font-mono relative overflow-hidden">
      {/* BACKGROUND DECOR */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* NAV */}
        <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/5 pb-6 gap-4">
          <Link
            to="/projects"
            className="text-[10px] text-cyan-500/50 hover:text-cyan-400 tracking-[0.4em] uppercase transition-all flex items-center gap-2"
          >
            <span>←</span> [ BACK_TO_REPOSITORY ]
          </Link>
          <span className="text-[9px] text-white/20 tracking-[0.4em] uppercase">
            {project.id} // STABLE_STAGED
          </span>
        </div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[1]">
            {project.title.split(" ").map((word, i) => (
              <span
                key={i}
                className={i % 2 !== 0 ? "text-cyan-500" : "text-white"}
              >
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-slate-400 text-base md:text-xl leading-relaxed border-l-2 border-cyan-500/30 pl-5 max-w-2xl">
            {project.description}
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          {/* STACK */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h2 className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase mb-6 flex items-center gap-4">
              <span className="w-6 h-[1px] bg-cyan-500/30"></span> Core_Stack
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
              {project.stack.map((tool, idx) => (
                <motion.div
                  key={idx}
                  className="border border-white/5 bg-white/[0.02] p-4 flex flex-col items-start transition-all"
                >
                  <tool.icon
                    className={`text-2xl mb-3 ${tool.color} opacity-80`}
                  />
                  <span className="text-[9px] font-bold tracking-widest text-white/50 uppercase truncate w-full">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FEATURES */}
          <div className="lg:col-span-7 bg-white/[0.01] border border-white/5 p-6 md:p-10 relative order-1 lg:order-2">
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-cyan-500/40" />
            <h2 className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase mb-6 flex items-center gap-4">
              <span className="w-6 h-[1px] bg-cyan-500/30"></span>{" "}
              Functional_Logic
            </h2>
            <ul className="space-y-4">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="text-cyan-500 text-xs font-black mt-1">
                    »
                  </span>
                  <p className="text-slate-300 text-xs md:text-base font-light tracking-wide uppercase group-hover:text-white transition-colors">
                    {f}
                  </p>
                </li>
              ))}
            </ul>
            {/* STATUS BAR */}
            <div className="mt-10 flex items-center gap-3 opacity-20">
              <div className="h-[2px] flex-1 bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="w-1/3 h-full bg-cyan-500"
                />
              </div>
              <span className="text-[7px] tracking-widest uppercase">
                System_Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
