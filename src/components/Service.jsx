import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGlobe,
  FaMobileAlt,
  FaArrowLeft,
  FaDocker,
  FaAws,
  FaNodeJs,
  FaReact,
  FaMicrochip,
  FaServer,
  FaMemory,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiFirebase,
  SiFlutter,
  SiNginx,
  SiRedis,
  SiGraphql,
} from "react-icons/si";

// --- 1. ENHANCED DATA STRUCTURE ---
const SERVICES = [
  {
    id: "SRV-001",
    title: "FULL_STACK_DEPLOYMENT",
    short: "MERN / Next.js Architecture",
    desc: "Architecting end-to-end systems using MERN. High-concurrency backends paired with low-latency interfaces.",
    details:
      "Deployment strategies include Docker containerization, AWS Lambda integration, and Nginx reverse proxy configurations. Real-time monitoring via Prometheus.",
    stats: [
      { label: "Uptime", value: "99.99%", icon: <FaServer /> },
      { label: "Latency", value: "< 25ms", icon: <FaNetworkWired /> },
      { label: "Scale", value: "Auto", icon: <FaMemory /> },
    ],
    tags: ["MERN_STACK", "CLOUD_NATIVE", "SERVERLESS"],
    icon: <FaGlobe />,
    tools: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
      { name: "Express", icon: <FaNodeJs />, color: "text-gray-400" },
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
      { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
      { name: "AWS", icon: <FaAws />, color: "text-orange-500" },
    ],
  },
  {
    id: "SRV-002",
    title: "MOBILE_ENGINEERING",
    short: "iOS / Android / Hybrid",
    desc: "Cross-platform neural-speed interfaces. Native-feel applications for iOS/Android ecosystem integration.",
    details:
      "Utilizing React Native Bridge and Flutter Engines. Emphasis on 60fps animations, biometric security, and offline-first data synchronization.",
    stats: [
      { label: "FPS", value: "60 Locked", icon: <FaMicrochip /> },
      { label: "Sync", value: "Real-time", icon: <SiGraphql /> },
      { label: "Cache", value: "Local", icon: <SiRedis /> },
    ],
    tags: ["REACT_NATIVE", "FLUTTER", "OFFLINE_FIRST"],
    icon: <FaMobileAlt />,
    tools: [
      { name: "React Native", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Flutter", icon: <SiFlutter />, color: "text-blue-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-300" },
      { name: "Framer", icon: <SiFramer />, color: "text-pink-500" },
      { name: "Firebase", icon: <SiFirebase />, color: "text-orange-400" },
    ],
  },
];

// --- 2. UTILITY: TEXT SCRAMBLER HOOK ---
const useScramble = (text, active = false) => {
  const [display, setDisplay] = useState(text);
  const chars = "XY_<>[]/\\!@#$%^&*";
  useEffect(() => {
    let interval;
    if (active) {
      let i = 0;
      interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, index) => {
              if (index < i) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        i += 1 / 2;
        if (i >= text.length) clearInterval(interval);
      }, 30);
    } else {
      setDisplay(text);
    }
    return () => clearInterval(interval);
  }, [text, active]);
  return display;
};

// --- 3. SUB-COMPONENT: SERVICE CARD ---
const ServiceCard = ({ service, onClick }) => {
  const [hover, setHover] = useState(false);
  const title = useScramble(service.title, hover);

  return (
    <motion.div
      layoutId={`card-${service.id}`}
      onClick={() => onClick(service)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative bg-[#0a0c10] border border-white/10 overflow-hidden cursor-pointer hover:border-cyan-500/50 transition-colors duration-500"
    >
      {/* Background Grid Animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0)_2px,transparent_2px)] bg-[size:40px_40px] opacity-0 group-hover:opacity-20 transition-opacity" />

      <div className="relative p-8 md:p-12 z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <motion.div
            layoutId={`icon-${service.id}`}
            className="text-4xl text-white/20 group-hover:text-cyan-400 transition-colors duration-300"
          >
            {service.icon}
          </motion.div>
          <span className="text-[9px] font-bold tracking-widest text-white/30 group-hover:text-cyan-500 transition-colors">
            [{service.id}]
          </span>
        </div>

        <motion.h3
          layoutId={`title-${service.id}`}
          className="text-2xl md:text-3xl font-black italic uppercase mb-4 tracking-tighter text-white"
        >
          {title}
        </motion.h3>

        <motion.p
          layoutId={`desc-${service.id}`}
          className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-3"
        >
          {service.desc}
        </motion.p>

        <div className="mt-auto flex flex-wrap gap-2">
          {service.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 border border-white/5 text-[8px] tracking-wider text-cyan-500/70 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

// --- 4. MAIN COMPONENT ---
export default function ServiceSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="min-h-screen bg-[#020306] text-white font-mono relative overflow-hidden selection:bg-cyan-500/30">
      {/* Global Scanlines Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%]" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]" />

      <AnimatePresence mode="wait">
        {!selectedService ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            className="max-w-7xl mx-auto px-6 py-24 relative z-10"
          >
            {/* Header */}
            <div className="mb-20 border-l-2 border-cyan-500 pl-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[10px] tracking-[0.6em] text-cyan-500 font-bold"
              >
                SYSTEM_CAPABILITIES_v4.0
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl md:text-8xl font-black italic uppercase text-white mt-2"
              >
                SER<span className="text-cyan-500">VICES</span>
              </motion.h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onClick={setSelectedService}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col p-6 md:p-12 lg:p-24 relative z-20 max-w-[1600px] mx-auto"
          >
            {/* Back Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="flex items-center gap-3 text-cyan-500 text-[10px] tracking-[0.3em] font-bold mb-12 hover:text-white transition-colors group w-fit"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              SYSTEM_INDEX // BACK
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column: Context */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <motion.div
                  layoutId={`card-${selectedService.id}`}
                  className="absolute inset-0 bg-transparent pointer-events-none"
                />

                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    layoutId={`icon-${selectedService.id}`}
                    className="text-4xl text-cyan-400"
                  >
                    {selectedService.icon}
                  </motion.div>
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] tracking-widest uppercase">
                    Status: Online
                  </span>
                </div>

                <motion.h1
                  layoutId={`title-${selectedService.id}`}
                  className="text-5xl md:text-7xl font-black italic uppercase leading-[0.9] mb-8 text-white"
                >
                  {selectedService.title.split("_").join(" ")}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl text-white/70 italic border-l-4 border-cyan-500 pl-6 mb-12"
                >
                  "{selectedService.desc}"
                </motion.div>

                {/* Tech Specs Stats */}
                <div className="grid grid-cols-3 gap-4 mb-12">
                  {selectedService.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="bg-white/5 border border-white/5 p-4"
                    >
                      <div className="text-cyan-500 mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-[9px] uppercase tracking-widest text-white/40">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  layoutId={`desc-${selectedService.id}`}
                  className="text-sm text-white/40 leading-relaxed font-mono bg-black/40 p-6 border border-white/5"
                >
                  <span className="text-cyan-500 mr-2">&gt;&gt;</span>
                  {selectedService.details}
                  <span className="animate-pulse">_</span>
                </motion.div>
              </div>

              {/* Right Column: Toolkit Matrix */}
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-4 bg-cyan-500/5 blur-2xl rounded-full" />
                <div className="relative border border-white/10 bg-[#0a0c10] p-8 md:p-12">
                  <h4 className="text-[10px] text-cyan-500 tracking-[0.4em] uppercase mb-10 flex items-center gap-3">
                    <FaMicrochip className="animate-spin-slow" /> STACK_MATRIX
                  </h4>

                  <div className="grid grid-cols-2 gap-4">
                    {selectedService.tools.map((tool, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="group flex items-center gap-4 p-4 border border-white/5 hover:bg-white/5 hover:border-cyan-500/30 transition-all cursor-crosshair"
                      >
                        <div
                          className={`text-2xl ${tool.color} group-hover:scale-110 transition-transform`}
                        >
                          {tool.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-white/80 group-hover:text-white uppercase tracking-wider">
                            {tool.name}
                          </span>
                          <span className="text-[8px] text-white/20 group-hover:text-cyan-500/50">
                            v.Latest
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <button className="w-full mt-12 py-4 border border-cyan-500/20 text-cyan-500 text-[10px] tracking-[0.5em] hover:bg-cyan-500 hover:text-black transition-all font-bold uppercase">
                    Initialize_Project
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
