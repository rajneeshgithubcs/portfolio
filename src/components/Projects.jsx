import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "01",
    slug: "salesman-management-system",
    title: "Salesman Management System",
    desc: "Backend-first architecture for distributed workforce synchronization. Features robust RBAC and low-latency mobile integration protocols.",
    tech: "Node.js // TypeScript // MongoDB // Express",
  },
  {
    id: "02",
    slug: "nike-inspired-ecommerce",
    title: "Nike-Inspired E-Commerce",
    desc: "Full-stack commerce engine with modular cart lifecycle and secure JWT-based authentication layers.",
    tech: "React // Spring Boot // Redux // MongoDB",
  },
  {
    id: "03",
    slug: "animated-portfolio",
    title: "Animated Portfolio",
    desc: "High-fidelity UI architecture focusing on scroll-driven kinetic animations and reusable component libraries.",
    tech: "React // GSAP // Framer Motion",
  },
  {
    id: "04",
    slug: "tastyorder",
    title: "TastyOrder",
    desc: "Real-time logistics interface for food delivery systems with centralized state synchronization.",
    tech: "React // Vite // Redux Toolkit",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#010204] text-white py-44 font-mono relative overflow-hidden"
    >
      {/* BACKGROUND TELEMETRY */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#06b6d4 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* SYSTEM HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 border-l-2 border-cyan-500/50 pl-8"
        >
          <h2
            className="
  text-3xl 
  sm:text-4xl 
  md:text-6xl 
  font-black 
  tracking-tight 
  md:tracking-tighter 
  uppercase 
  text-center 
  leading-tight
"
          >
            Project_<span className="text-cyan-400">Repository</span>
          </h2>

          <p className="mt-4 text-slate-500 text-[9px] xs:text-[10px] sm:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase leading-loose md:leading-relaxed break-words sm:break-normal">
            <span className="block md:inline">
              // Accessing_Encrypted_Archives...{" "}
            </span>
            <span className="block md:inline md:ml-2">
              // Displaying_Selected_Deployment_Units
            </span>
          </p>
        </motion.div>

        {/* REPOSITORY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white/[0.01] border border-white/5 p-8 hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* CORNER ACCENTS */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-cyan-500/50 transition-colors" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 group-hover:border-cyan-500/50 transition-colors" />

              {/* PROJECT ID TAG */}
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs text-cyan-500/50 font-bold tracking-widest uppercase">
                  Unit_{p.id}
                </span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="w-1 h-3 bg-white/5 group-hover:bg-cyan-500/20 transition-colors"
                    />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors uppercase">
                {p.title}
              </h3>

              <p className="mt-4 text-slate-400 text-sm leading-relaxed font-light">
                {p.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="text-[10px] text-white/30 tracking-widest uppercase py-1 px-3 bg-white/5 border border-white/5 group-hover:border-cyan-500/20">
                  {p.tech}
                </span>
              </div>

              {/* ACTION LINK */}
              <Link
                to={`/projects/${p.slug}`}
                className="inline-flex items-center gap-4 mt-10 text-[10px] font-black text-white/40 group-hover:text-cyan-400 tracking-[0.4em] uppercase transition-all"
              >
                <span>VIEW DETAILS</span>
                <span className="w-8 h-[1px] bg-white/10 group-hover:bg-cyan-400 group-hover:w-12 transition-all" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
