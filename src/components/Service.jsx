import { motion } from "framer-motion";
import { FaGlobe, FaMobileAlt, FaCode, FaTerminal } from "react-icons/fa";

const services = [
  {
    id: "SRV-001",
    title: "Full_Stack_Deployment",
    desc: "Architecting end-to-end systems using MERN. High-concurrency backends paired with low-latency interfaces.",
    tags: ["MERN_STACK", "CLOUD_NATIVE"],
    icon: <FaGlobe />,
    accent: "cyan",
  },
  {
    id: "SRV-002",
    title: "Mobile_Engineering",
    desc: "Cross-platform neural-speed interfaces. Native-feel applications for iOS/Android ecosystem integration.",
    tags: ["REACT_NATIVE", "FLUTTER"],
    icon: <FaMobileAlt />,
    accent: "purple",
  },
];

export default function Services() {
  return (
    <section className="relative bg-[#020306] text-white py-44 overflow-hidden font-mono">
      {/* BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* DIAGNOSTIC HEADER */}
        <div className="mb-24 flex flex-col items-start border-l-2 border-cyan-500 pl-8">
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[10px] tracking-[0.6em] text-cyan-500 font-black"
          >
            SYSTEM_CAPABILITIES_v4.0
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black mt-4 italic tracking-tighter uppercase leading-none">
            CORE_<span className="text-cyan-500">SERVICES</span>
          </h2>
          <div className="mt-4 flex gap-4 text-[8px] text-white/20 uppercase tracking-widest">
            <span>// Latency: 0.2ms</span>
            <span>// Status: Authorized</span>
          </div>
        </div>

        {/* SERVICE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-[#020306] p-12 transition-all duration-500 hover:bg-white/[0.02]"
            >
              {/* CORNER ID */}
              <span className="absolute top-6 right-8 text-[10px] text-white/10 font-black tracking-widest group-hover:text-cyan-500/30 transition-colors">
                {service.id}
              </span>

              {/* ICON UNIT */}
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center text-2xl relative group-hover:border-cyan-500/50 transition-colors">
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-white/40 group-hover:text-cyan-400 transition-colors">
                  {service.icon}
                </span>
                {/* Micro-Accents */}
                <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-cyan-500 opacity-0 group-hover:opacity-100" />
              </div>

              {/* CONTENT */}
              <h3 className="mt-10 text-2xl font-black italic tracking-tight uppercase group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h3>

              <p className="mt-6 text-sm text-white/40 leading-relaxed font-medium max-w-sm">
                {service.desc}
              </p>

              {/* TECH TAGS */}
              <div className="mt-8 flex gap-2 flex-wrap">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-[9px] font-black border border-white/5 bg-white/[0.01] text-white/30 tracking-tighter group-hover:border-cyan-500/20 group-hover:text-cyan-500/50 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ACTION LINK */}
              <div className="mt-12 flex items-center gap-4 cursor-pointer">
                <div className="h-[1px] w-8 bg-white/10 group-hover:w-16 group-hover:bg-cyan-500 transition-all duration-500" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-20 group-hover:opacity-100 group-hover:text-cyan-400 transition-all">
                  Initialize_Request
                </span>
              </div>

              {/* HOVER GLITCH SCANNER */}
              <motion.div
                className="absolute inset-0 pointer-events-none border-0 border-cyan-500/20"
                whileHover={{ borderLeftWidth: "4px" }}
              />
            </motion.div>
          ))}
        </div>

        {/* PERIPHERAL DATA FLOW */}
        <div className="mt-20 flex justify-between items-center opacity-10">
          <div className="flex gap-1">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-[2px] h-4 bg-white" />
            ))}
          </div>
          <span className="text-[9px] tracking-[1em] uppercase italic">
            Integrated_Circuitry_v4
          </span>
        </div>
      </div>
    </section>
  );
}
