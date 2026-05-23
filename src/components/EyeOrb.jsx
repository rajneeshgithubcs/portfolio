import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const EyeOrb = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const eyeX = useSpring(mouseX, { stiffness: 160, damping: 14 });
  const eyeY = useSpring(mouseY, { stiffness: 160, damping: 14 });

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="
        absolute -top-12 right-20
        w-44 h-44 rounded-full
        bg-black
        shadow-[0_0_80px_rgba(0,0,0,1)]
        border border-white/5
        flex items-center justify-center
      "
    >
      {/* EYES */}
      <motion.div
        animate={{ scaleY: [1, 1, 0.1, 1] }}
        transition={{
          repeat: Infinity,
          duration: 3.2,
          ease: "easeInOut",
          times: [0, 0.46, 0.5, 1], // 👈 fast close + fast open
        }}
        className="flex gap-4"
      >
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            style={{ x: eyeX, y: eyeY }}
            className="w-3.5 h-7 rounded-full bg-cyan-400"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default EyeOrb;
