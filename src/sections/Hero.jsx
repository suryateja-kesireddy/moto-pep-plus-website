import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaStar,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

import carVideo from "../assets/car-video.mp4";
import { useTranslation } from "react-i18next";

function Hero() {

  const { t, i18n } = useTranslation();

  const isTelugu = i18n.language === "te";

  return (

    <section
      id="home"
      className="relative min-h-[100vh] overflow-hidden bg-black"
    >

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source src={carVideo} type="video/mp4" />
      </video>

      {/* Cinematic Overlay Stack */}
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>

      {/* Red Glow — top right */}
      <div className="absolute top-[-15%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-500/[0.08] blur-[140px] rounded-full animate-ambient-drift"></div>

      {/* Blue Glow — bottom left */}
      <div className="absolute bottom-[-15%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-500/[0.06] blur-[140px] rounded-full animate-ambient-drift" style={{ animationDelay: '-6s' }}></div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[100vh] px-4 md:px-8 pt-24 md:pt-28 pb-8 md:pb-12 flex items-center">

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center w-full">

          {/* LEFT CONTENT — 7 cols */}
          <div className="lg:col-span-7">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="
                inline-flex
                items-center
                gap-2.5
                px-3.5 py-1.5
                rounded-full
                border border-red-500/15
                bg-white/[0.03]
                backdrop-blur-xl
                mb-5 md:mb-6
              "
            >

              <FaBolt className="text-red-500 text-[10px]" />

              <span className="text-[9px] md:text-[10px] uppercase tracking-[3px] text-gray-400 font-medium">
                Performance Garage Experience
              </span>

            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`
                automotive-heading
                font-black
                uppercase
                leading-[0.88]
                
                ${isTelugu
                  ? "text-[28px] sm:text-4xl md:text-5xl lg:text-6xl"
                  : "text-[34px] sm:text-5xl md:text-6xl lg:text-[5.2rem]"
                }
              `}
            >

              <span className="block text-white">
                {t("heroTitle1")}
              </span>

              <span className="block mt-1 md:mt-2 bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent">
                {t("heroTitle2")}
              </span>

            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="
                mt-5 md:mt-6
                max-w-lg
                text-gray-400
                leading-relaxed
                
                text-[14px]
                sm:text-base
                md:text-lg
              "
            >

              {t("heroDesc")}

            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="
                mt-6 md:mt-8
                flex
                flex-col
                sm:flex-row
                gap-3
                w-full
                sm:w-auto
              "
            >

              {/* Primary */}
              <a
                href="#products"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  bg-gradient-to-r
                  from-red-600
                  to-red-700
                  px-6 md:px-8
                  py-3 md:py-3.5
                  text-[12px] md:text-[13px]
                  font-semibold
                  uppercase
                  tracking-[2px]
                  shadow-xl
                  shadow-red-900/30
                  transition-all
                  duration-300
                  hover:shadow-red-800/40
                  hover:scale-[1.02]
                  text-center
                "
              >

                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>

                <span className="relative z-10 flex items-center justify-center gap-2.5">
                  {t("exploreBtn")}
                  <FaArrowRight className="text-[10px]" />
                </span>

              </a>

              {/* Secondary */}
              <a
                href="#contact"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border border-white/[0.08]
                  bg-white/[0.03]
                  backdrop-blur-xl
                  px-6 md:px-8
                  py-3 md:py-3.5
                  text-[12px] md:text-[13px]
                  font-medium
                  uppercase
                  tracking-[2px]
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/[0.06]
                  text-center
                  text-gray-300
                "
              >

                <span className="relative z-10">
                  {t("contactBtn")}
                </span>

              </a>

            </motion.div>

            {/* Stats — HUD style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="
                mt-8 md:mt-10
                flex
                gap-3 md:gap-4
              "
            >

              {[
                ["10K+", "Happy Drivers"],
                ["500+", "Premium Products"],
                ["4.9★", "Customer Rating"],
              ].map(([value, label]) => (

                <div
                  key={label}
                  className="
                    flex-1
                    rounded-xl
                    border
                    border-white/[0.05]
                    bg-white/[0.02]
                    backdrop-blur-xl
                    p-2.5 md:p-3.5
                  "
                >

                  <h2 className="automotive-heading text-sm md:text-xl font-black text-white leading-none">
                    {value}
                  </h2>

                  <p className="mt-1.5 text-[8px] md:text-[10px] uppercase tracking-[1.5px] text-gray-500 leading-tight">
                    {label}
                  </p>

                </div>

              ))}

            </motion.div>

          </div>

          {/* RIGHT SIDE — 5 cols */}
          <div className="lg:col-span-5"></div>

        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20"></div>

    </section>
  );
}

export default Hero;