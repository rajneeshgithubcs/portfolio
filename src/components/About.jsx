import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-[#010204] text-white overflow-hidden font-mono pt-32 pb-20 md:pt-48 lg:pt-56"
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L30 60 M0 30 L60 30' stroke='%2306b6d4' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: PRIMARY IDENTITY */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div variants={item} className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-cyan-500" />
              <span className="text-cyan-400 text-[10px] uppercase tracking-[0.5em] font-bold">
                Identity_Protocol
              </span>
            </motion.div>

            <motion.h2
              variants={item}
              className="text-4xl xs:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85]"
            >
              RAJNEESH
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(34,211,238,0.5)" }}
              >
                RAJAK
              </span>
            </motion.h2>

            <motion.p
              variants={item}
              className="text-slate-500 text-[10px] md:text-xs uppercase tracking-[0.3em] max-w-xs leading-relaxed"
            >
              Full-Stack Developer · MERN Stack · REST APIs · JWT Auth · MongoDB
            </motion.p>
          </div>

          {/* RIGHT: TOOL DOSSIER */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              variants={item}
              className="space-y-6 text-slate-300 text-lg md:text-xl leading-relaxed"
            >
              <p className="text-xl md:text-2xl text-slate-200 leading-snug">
                I'm a Full-Stack Developer who builds real, production-grade web
                applications — from clean APIs to responsive frontends.
              </p>

              {/* Expertise Detail */}
              <div className="border-l-2 border-cyan-500/50 pl-6 space-y-4">
                <p className="text-slate-400 text-lg leading-relaxed">
                  I specialize in the{" "}
                  <span className="text-white font-semibold italic">
                    MERN stack
                  </span>{" "}
                  — building{" "}
                  <span className="text-white">RESTful APIs</span> with Node.js
                  &amp; Express, securing them with{" "}
                  <span className="text-white">JWT authentication</span>, and
                  delivering responsive frontends with{" "}
                  <span className="text-white">React.js &amp; Tailwind CSS</span>.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  I care deeply about{" "}
                  <span className="text-white font-semibold">clean architecture</span>{" "}
                  — writing modular, maintainable code that scales. Every project
                  I build is designed to be fast, secure, and easy to grow.
                </p>
              </div>
            </motion.div>

            {/* THE TOOLSTACK ANALYSIS */}
            <motion.div
              variants={item}
              className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8"
            >
              <div className="space-y-3">
                <h4 className="text-cyan-500 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500" /> 01_FRONTEND
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Building pixel-perfect, responsive UIs with{" "}
                  <span className="text-white">React.js</span>,{" "}
                  <span className="text-white">Tailwind CSS</span>, and{" "}
                  <span className="text-white">Framer Motion</span>{" "}
                  — fast, animated, and user-first.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-cyan-500 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500" /> 02_BACKEND
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Engineering secure, scalable REST APIs using{" "}
                  <span className="text-white">Node.js</span> &amp;{" "}
                  <span className="text-white">Express.js</span>, with{" "}
                  <span className="text-white">JWT</span> auth and role-based
                  access control baked in.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-cyan-500 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500" /> 03_DATABASE
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Designing and optimizing{" "}
                  <span className="text-white">MongoDB</span> schemas for
                  performance — fast queries, clean models, and efficient
                  handling of concurrent users.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-cyan-500 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500" /> 04_TOOLS
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Comfortable with{" "}
                  <span className="text-white">Git &amp; GitHub</span> for version
                  control,{" "}
                  <span className="text-white">Postman</span> for API testing, and
                  following clean, modular coding standards throughout.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
