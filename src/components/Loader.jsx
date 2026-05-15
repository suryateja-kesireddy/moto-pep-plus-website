import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[999]">

      <div className="text-center">

        {/* Animated Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
          className="w-20 h-20 border-4 border-red-500 border-t-transparent rounded-full mx-auto"
        />

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "reverse",
          }}
          className="mt-6 text-3xl font-bold tracking-widest"
        >
          <span className="text-white">MOTO</span>{" "}
          <span className="text-red-500">PEP PLUS</span>
        </motion.h1>

      </div>

    </div>
  );
}

export default Loader;