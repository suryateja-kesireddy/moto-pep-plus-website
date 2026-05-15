import { motion } from "framer-motion";
import carVideo from "../assets/car-video.mp4";
import { useTranslation } from "react-i18next";

function Hero() {

  const { t, i18n } = useTranslation();

  const isTelugu = i18n.language === "te";

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={carVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Red Glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-red-600 to-red-700/20 blur-[120px] rounded-full top-[-100px] right-[-100px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`
            font-extrabold uppercase leading-tight
            ${isTelugu
              ? "text-4xl sm:text-5xl md:text-6xl"
              : "text-4xl sm:text-5xl md:text-7xl"
            }
          `}
        >

          <span className="text-white">
            {t("heroTitle1")}
          </span>

          {" "}

          <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            {t("heroTitle2")}
          </span>

        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`
            mt-6 text-gray-300 max-w-3xl leading-relaxed
            ${isTelugu
              ? "text-lg md:text-2xl"
              : "text-base sm:text-lg md:text-2xl"
            }
          `}
        >

          {t("heroDesc")}

        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center"
        >

          {/* Primary Button */}
          <a
            href="#products"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:scale-105 px-10 py-5 rounded-full text-lg font-semibold transition duration-300 shadow-lg shadow-red-500/30"
          >
            {t("exploreBtn")}
          </a>

          {/* Secondary Button */}
          <a
            href="#gallery"
            className="border border-white/20 hover:border-red-500 hover:text-red-500 px-10 py-5 rounded-full text-lg font-semibold transition duration-300 backdrop-blur-xl bg-black/20"
          >
            {t("contactBtn")}
          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;