import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTerminal, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Experience", href: "#" },
  ];

  // UPDATED SOCIAL DATA WITH YOUR LINKS
  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/rajneeshgithubcs",
      label: "GITHUB",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com/in/rajneesh-rajak-209882231",
      label: "LINKEDIN",
    },
  ];

  return (
    <footer className="relative bg-[#020306] text-white font-mono border-t border-white/5 overflow-hidden">
      {/* CRT SCANLINE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />

      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        {/* TOP DIAGNOSTICS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8 border-b border-white/5 pb-12">
          <div className="flex items-center gap-6">
            <div className="relative h-12 w-12 border border-white/10 flex items-center justify-center bg-white/5">
              <span className="text-cyan-500 font-black text-xl italic">R</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-500 rounded-full animate-ping" />
            </div>
            <div>
              <h3 className="text-xl font-black italic tracking-tighter uppercase">
                RAJAK.
                <span className="text-cyan-500 text-sm font-bold ml-1">
                  ARCHITECT
                </span>
              </h3>
              <span className="text-[9px] text-white/30 uppercase tracking-[0.3em]">
                System_Terminal_v5.0
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:flex gap-8 text-[10px] font-bold">
            <div className="flex flex-col">
              <span className="text-white/20 uppercase tracking-widest mb-1">
                Local_Time
              </span>
              <span className="text-cyan-500 tracking-tighter min-w-[80px]">
                {time || "00:00:00"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/20 uppercase tracking-widest mb-1">
                Status
              </span>
              <span className="text-green-500 tracking-tighter animate-pulse uppercase">
                Online // Ready
              </span>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-cyan-500">
              <FaTerminal className="text-xs" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                Core_Manifesto
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm italic">
              "Building high-concurrency systems and pixel-perfect interfaces.
              Engineering digital infrastructure that defines the modern web."
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-xs text-white/50 hover:text-cyan-400 transition-all flex items-center group gap-2"
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-cyan-500 text-[8px] transition-opacity">
                      &gt;
                    </span>
                    {item.name.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL TERMINALS - TWITTER REMOVED */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
              Uplink_Protocols
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((soc, i) => (
                <motion.a
                  key={i}
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
                  }}
                  className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/30 hover:text-cyan-400 hover:border-cyan-400 transition-all bg-white/5 relative group"
                >
                  <span className="absolute -top-6 text-[8px] font-bold text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {soc.label}
                  </span>
                  <div className="text-xl">{soc.icon}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM EOF LINE */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[9px] font-black tracking-widest text-white/10 uppercase italic">
          <div className="flex items-center gap-4">
            <span className="text-cyan-500/50 underline decoration-cyan-500/20 underline-offset-4 tracking-normal">
              EOF // END_OF_TRANSMISSION
            </span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 flex items-center gap-3 group text-white/40 hover:text-cyan-500 transition-colors"
          >
            <span className="text-[9px] uppercase tracking-[0.3em]">
              Return_To_Top
            </span>
            <div className="p-2 border border-white/10 group-hover:border-cyan-500/50">
              <FaArrowUp className="text-[10px]" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
