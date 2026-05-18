import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function FloatingWhatsApp() {

  const { t } = useTranslation();

  return (

    <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 1,
        ease: [0.22, 1, 0.36, 1],
      }}

      whileHover={{
        scale: 1.06,
      }}

      whileTap={{
        scale: 0.95,
      }}

      href="https://wa.me/917093098989?text=Hello%20Moto%20Pep%20Plus,%20I%20am%20interested%20in%20your%20car%20accessories%20and%20services."

      target="_blank"
      rel="noreferrer"

      className="
        group
        fixed
        bottom-4 right-4
        md:bottom-7 md:right-7
        z-50
      "
    >

      {/* Pulse Glow */}
      <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl animate-pulse-glow"></div>

      {/* Outer Ring */}
      <div className="absolute inset-0 rounded-full border border-green-400/15 scale-[1.2] group-hover:scale-[1.4] transition-all duration-700 ease-out"></div>

      {/* Main Button */}
      <div
        className="
          relative
          w-14 h-14
          md:w-16 md:h-16
          rounded-full
          overflow-hidden
          border border-white/[0.08]
          bg-black/50
          backdrop-blur-2xl
          flex items-center justify-center
          shadow-2xl shadow-green-900/20
        "
      >

        {/* Automotive Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 via-transparent to-green-400/8"></div>

        {/* Shine Animation */}
        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/8 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>

        {/* Icon */}
        <FaWhatsapp
          className="
            relative z-10
            text-green-400
            text-2xl md:text-3xl
            group-hover:scale-110
            transition-transform duration-300
          "
        />

      </div>

      {/* Floating Label */}
      <div
        className="
          absolute
          right-[65px]
          md:right-[78px]
          top-1/2
          -translate-y-1/2
          hidden md:flex
          items-center
          gap-2
          px-3.5 py-1.5
          rounded-lg
          border border-white/[0.06]
          bg-black/70
          backdrop-blur-xl
          text-[10px]
          uppercase
          tracking-[2px]
          font-medium
          opacity-0
          group-hover:opacity-100
          transition-all duration-300
          whitespace-nowrap
        "
      >

        <span className="text-green-400">
          {t("chat")}
        </span>

      </div>

    </motion.a>

  );
}

export default FloatingWhatsApp;