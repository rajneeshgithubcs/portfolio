import { motion } from "framer-motion";

export default function AnimatedBg() {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        backgroundImage: "url(../public/videoframe_7760.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
