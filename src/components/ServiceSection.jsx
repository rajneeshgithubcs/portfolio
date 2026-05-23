import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGlobe,
  FaMobileAlt,
  FaArrowLeft,
  FaCode,
  FaMicrochip,
  FaShieldAlt,
  FaTerminal,
  FaWifi,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiAmazonaws,
  SiFirebase,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiDocker,
} from "react-icons/si";

// --- 1. DATA MATRIX ---
const SERVICES = [
  {
    id: "SYS-001",
    title: "FULL_STACK_ARCH",
    tagline: "High-availability distributed systems.",
    desc: "End-to-end architecture using MERN/Next.js. Designed for high-concurrency and fault tolerance.",
    status: "ONLINE",
    latency: "12ms",
    icon: <FaGlobe />,
    coreStack: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
      { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    ],
    logs: [
      "> INITIALIZING HANDSHAKE...",
      "> VALIDATING JWT TOKENS...",
      "> CONNECTING TO AWS CLUSTER...",
      "> SUCCESS: PIPELINE ESTABLISHED.",
    ],
    features: [
      "RBAC_AUTH_PROTOCOLS",
      "SERVERLESS_LAMBDA_FUNCTIONS",
      "REDIS_CACHING_LAYER",
      "REAL_TIME_WEBSOCKETS",
    ],
  },
  {
    id: "SYS-002",
    title: "MOBILE_INTERFACE",
    tagline: "Neural-speed cross-platform bridging.",
    desc: "Native-feel applications for iOS/Android using React Native and Flutter engines.",
    status: "OPTIMIZED",
    latency: "4ms",
    icon: <FaMobileAlt />,
    coreStack: [
      { name: "React Native", icon: <SiReact />, color: "text-cyan-400" },
      { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500" },
      { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300" },
    ],
    logs: [
      "> MOUNTING NATIVE MODULES...",
      "> SYNCING LOCAL DATABASE...",
      "> BIOMETRIC GATEWAY OPEN...",
      "> UI THREAD: 60FPS LOCKED.",
    ],
    features: [
      "OFFLINE_PERSISTENCE_MODE",
      "BIOMETRIC_ENCRYPTION",
      "HAPTIC_FEEDBACK_ENGINE",
      "OTA_UPDATE_CHANNELS",
    ],
  },
];

// --- 2. UTILITY HOOK: TEXT SCRAMBLER ---
const useScramble = (text, active = false) => {
  const [display, setDisplay] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

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
        i += 1 / 3;
        if (i >= text.length) clearInterval(interval);
      }, 30);
    } else {
      setDisplay(text);
    }
    return () => clearInterval(interval);
  }, [text, active]);

  return display;
};

// --- 3. SUB-COMPONENTS ---

const ScrambleText = ({ text, hoverState, className }) => {
  const scrambled = useScramble(text, hoverState);
  return <span className={className}>{scrambled}</span>;
};

const CRTOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden h-full w-full">
    {/* Scanlines */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_3px,3px_100%] pointer-events-none" />
    {/* Flicker */}
    <div className="absolute inset-0 bg-white opacity-[0.02] animate-pulse pointer-events-none" />
    {/* Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
  </div>
);

// --- 4. MAIN DASHBOARD ---

export default function ServiceSection() {
  const [activeId, setActiveId] = useState(null);
  const activeItem = SERVICES.find((s) => s.id === activeId);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-mono relative overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <CRTOverlay />

      {/* Dynamic Background Grid */}
      <div className="fixed inset-0 z-0 perspective-[1000px]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(60deg)_scale(2)] opacity-20 origin-top animate-pan-grid" />
      </div>

      <AnimatePresence mode="wait">
        {!activeId ? (
          <DirectoryView key="directory" onSelect={setActiveId} />
        ) : (
          <DeepDiveView
            key="deep-dive"
            data={activeItem}
            onBack={() => setActiveId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// --- 5. VIEW: DIRECTORY (LIST) ---

const DirectoryView = ({ onSelect }) => {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(10px)",
      transition: { duration: 0.3 },
    },
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      animate="show"
      exit="exit"
      className="relative z-10 max-w-7xl mx-auto p-6 md:p-12"
    >
      <header className="mb-16 border-b border-white/10 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            SYSTEM_<span className="text-cyan-500">ROOT</span>
          </h1>
          <div className="flex items-center gap-2 mt-2 text-xs text-cyan-500/70 tracking-[0.3em]">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            V.4.0.5 :: SECURE_CONNECTION
          </div>
        </div>
        <div className="hidden md:block text-right text-[10px] text-white/30 leading-relaxed">
          <p>MEM: 64GB // CPU: 32 CORE</p>
          <p>LOC: AP-SOUTH-1</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((s) => (
          <Card
            key={s.id}
            data={s}
            variants={itemVars}
            onClick={() => onSelect(s.id)}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({ data, onClick, variants }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      variants={variants}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative bg-[#0a0a0a] border border-white/10 p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:border-cyan-500/50"
    >
      {/* Glitch Effect Background on Hover */}
      <div
        className={`absolute inset-0 bg-cyan-500/5 transition-opacity duration-300 ${hover ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/20 blur-[50px] rounded-full transition-all duration-500 ${hover ? "scale-150 opacity-100" : "scale-50 opacity-0"}`}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <div className="p-3 bg-white/5 border border-white/5 rounded-sm text-2xl text-cyan-400 group-hover:text-white transition-colors group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            {data.icon}
          </div>
          <span className="text-[9px] font-bold tracking-widest text-white/20 group-hover:text-cyan-500 transition-colors">
            [{data.id}]
          </span>
        </div>

        <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">
          <ScrambleText text={data.title} hoverState={hover} />
        </h3>

        <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors mb-8 line-clamp-2">
          {data.desc}
        </p>

        <div className="mt-auto flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-cyan-500/50 transition-colors" />
          <span className="text-[10px] uppercase tracking-wider text-cyan-500 font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Initialize &gt;&gt;
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// --- 6. VIEW: DEEP DIVE (DETAIL) ---

const DeepDiveView = ({ data, onBack }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulated Loading Sequence
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative z-20 min-h-screen p-6 md:p-12 max-w-[1600px] mx-auto"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="group flex items-center gap-3 text-xs tracking-[0.2em] text-white/40 hover:text-cyan-400 transition-colors mb-12"
      >
        <div className="p-2 border border-white/10 group-hover:border-cyan-400 transition-colors">
          <FaArrowLeft />
        </div>
        RETURN_TO_INDEX
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Col: Info */}
        <div className="lg:col-span-8 space-y-12">
          <div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              className="h-1 bg-cyan-500 mb-6"
            />
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
              {data.title.split("_").join(" ")}
            </h2>
            <p className="text-xl text-cyan-100/60 font-light border-l-2 border-white/10 pl-6">
              {data.tagline}
            </p>
          </div>

          {/* Terminal Logs (Visual Flavor) */}
          <div className="bg-black/60 border border-white/10 p-6 font-mono text-xs rounded-sm backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2 text-white/30">
              <FaTerminal /> SYSTEM_LOGS
            </div>
            <div className="space-y-1 text-green-400/80">
              {data.logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                >
                  {log}
                </motion.div>
              ))}
              {isLoaded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-cyan-400 font-bold mt-2"
                >
                  &gt; READY_FOR_INTERACTION_
                  <span className="animate-ping inline-block ml-1">_</span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Logic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-cyan-500/[0.05] transition-colors"
              >
                <FaMicrochip className="text-cyan-500 text-lg" />
                <span className="text-xs font-bold tracking-[0.15em]">
                  {feat}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Col: Stats & Stack */}
        <div className="lg:col-span-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#0f1115] border border-cyan-500/20 p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/20 to-transparent" />
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8 flex items-center gap-2">
              <FaShieldAlt /> Performance_Metrics
            </h3>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-black text-white mb-1">
                  {data.latency}
                </div>
                <div className="text-[9px] text-cyan-500 uppercase tracking-widest">
                  Latency
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-400 mb-1">
                  99.9%
                </div>
                <div className="text-[9px] text-green-600 uppercase tracking-widest">
                  Uptime
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-full bg-white/5 h-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                />
              </div>
              <div className="flex justify-between text-[9px] text-white/30 uppercase">
                <span>Load Capacity</span>
                <span>92%</span>
              </div>
            </div>
          </motion.div>

          {/* Stack Grid */}
          <div className="grid grid-cols-2 gap-2">
            {data.coreStack.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="bg-black/40 border border-white/5 p-4 flex flex-col items-center justify-center gap-3 hover:border-cyan-500/30 transition-colors group"
              >
                <div
                  className={`text-2xl ${tool.color} filter grayscale group-hover:grayscale-0 transition-all`}
                >
                  {tool.icon}
                </div>
                <span className="text-[9px] uppercase font-bold text-white/30 group-hover:text-white transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
