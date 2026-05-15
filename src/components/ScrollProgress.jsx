import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
      className="fixed top-0 left-0 right-0 h-1 bg-red-500 z-[9999] shadow-[0_0_20px_rgba(255,0,0,0.9)]"
    />
  );
}

export default ScrollProgress;