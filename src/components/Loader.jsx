import { motion } from "framer-motion";
import logo from "../assets/logos/moto-logo-1.png";

function Loader() {

  return (

    <div className="fixed inset-0 z-[9999] overflow-hidden bg-black flex items-center justify-center">

      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050505] to-black"></div>

      {/* Red Glow — ambient drift */}
      <div className="absolute top-[-100px] right-[-80px] w-[280px] md:w-[450px] h-[280px] md:h-[450px] bg-red-500/10 blur-[120px] rounded-full animate-ambient-drift"></div>

      {/* Blue Glow — ambient drift */}
      <div className="absolute bottom-[-100px] left-[-80px] w-[280px] md:w-[450px] h-[280px] md:h-[450px] bg-blue-500/8 blur-[120px] rounded-full animate-ambient-drift" style={{ animationDelay: '-4s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">

        {/* Outer Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="
            absolute
            w-[160px] h-[160px]
            md:w-[220px] md:h-[220px]
            rounded-full
            border border-red-500/15
          "
          style={{
            borderTopColor: 'rgba(232, 18, 36, 0.4)',
          }}
        />

        {/* Inner Rotating Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
          className="
            absolute
            w-[120px] h-[120px]
            md:w-[180px] md:h-[180px]
            rounded-full
            border border-blue-500/10
          "
          style={{
            borderBottomColor: 'rgba(0, 120, 255, 0.25)',
          }}
        />

        {/* Pulse Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
          }}
          className="
            absolute
            w-[100px] h-[100px]
            md:w-[150px] md:h-[150px]
            rounded-full
            bg-red-500/8
            blur-3xl
          "
        />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-red-500/15 blur-3xl rounded-full"></div>

          <img
            src={logo}
            alt="Moto Pep"
            className="
              relative
              w-24 md:w-36
              rounded-full
              border border-red-500/15
              shadow-2xl shadow-red-900/20
            "
          />

        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="
            mt-6
            text-xl md:text-4xl
            font-black
            uppercase
            tracking-[5px]
            text-center
            automotive-heading
          "
        >

          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            MOTO PEP
          </span>

        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.6,
          }}
          className="
            mt-2
            text-[9px] md:text-xs
            uppercase
            tracking-[4px]
            text-gray-600
            text-center
          "
        >

          PERFORMANCE GARAGE EXPERIENCE

        </motion.p>

        {/* Loading Bar */}
        <div className="mt-6 w-40 md:w-56 h-[2px] bg-white/[0.04] rounded-full overflow-hidden">

          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
            className="w-1/2 h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
          />

        </div>

      </div>

    </div>
  );
}

export default Loader;