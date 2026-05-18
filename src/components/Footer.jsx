import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../assets/logos/moto-logo-1.png";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Footer() {

  const { t, i18n } = useTranslation();

  const isTelugu = i18n.language === "te";

  const navLinks = [
    [t("home"), "#home"],
    [t("products"), "#products"],
    [t("services"), "#services"],
    [t("gallery"), "#gallery"],
    [t("contact"), "#contact"],
  ];

  return (
    <footer className="relative overflow-hidden bg-[#030303] border-t border-white/[0.04]">

      {/* Ambient Glow — subtle */}
      <div className="absolute top-0 left-[-10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-red-500/[0.06] blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 right-[-10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-500/[0.04] blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 pt-14 md:pt-20 pb-10 md:pb-14">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">

          {/* Brand — wider */}
          <div className="lg:col-span-5">

            <div className="flex items-center gap-3.5 mb-5 md:mb-6">

              {/* Logo */}
              <div className="relative">

                <div className="absolute inset-0 bg-red-500/15 blur-2xl rounded-full"></div>

                <img
                  src={logo}
                  alt="Moto Pep"
                  className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border border-red-500/20 shadow-lg shadow-red-900/20"
                />

              </div>

              {/* Brand Text */}
              <div>

                <h1
                  className={`
                    font-black uppercase leading-none tracking-[2px]
                    ${isTelugu
                      ? "text-lg md:text-xl"
                      : "text-xl md:text-2xl"
                    }
                  `}
                >

                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    {t("brandName")}
                  </span>

                </h1>

                <p className="text-gray-600 uppercase tracking-[3px] text-[9px] md:text-[10px] mt-1">
                  {t("brandSub")}
                </p>

              </div>

            </div>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed max-w-sm text-sm md:text-base">
              {t("footerTag")}
            </p>

            {/* Social — inline with brand */}
            <div className="flex gap-3 mt-6 md:mt-8">

              {/* Instagram */}
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.instagram.com/moto_pep_accessories"
                target="_blank"
                rel="noreferrer"
                className="group w-11 h-11 md:w-12 md:h-12 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-lg hover:border-red-500/30 hover:bg-red-500/[0.05] transition-all duration-300"
              >
                <FaInstagram className="text-gray-500 group-hover:text-red-400 transition duration-300" />
              </motion.a>

              {/* Facebook */}
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="group w-11 h-11 md:w-12 md:h-12 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-lg hover:border-blue-500/30 hover:bg-blue-500/[0.05] transition-all duration-300"
              >
                <FaFacebookF className="text-gray-500 group-hover:text-blue-400 transition duration-300" />
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                whileHover={{ y: -3 }}
                href="https://wa.me/917093098989"
                target="_blank"
                rel="noreferrer"
                className="group w-11 h-11 md:w-12 md:h-12 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-lg hover:border-green-500/30 hover:bg-green-500/[0.05] transition-all duration-300"
              >
                <FaWhatsapp className="text-gray-500 group-hover:text-green-400 transition duration-300" />
              </motion.a>

            </div>

          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7">

            <h2 className="text-xs uppercase tracking-[3px] text-gray-500 font-semibold mb-5 md:mb-6">
              {t("quickLinks")}
            </h2>

            <div className="flex flex-col gap-1">

              {navLinks.map(([title, link]) => (

                <a
                  key={title}
                  href={link}
                  className="group py-2 uppercase tracking-[1.5px] text-[11px] md:text-xs text-gray-500 hover:text-white transition-all duration-300 flex items-center gap-2"
                >

                  <span className="w-0 group-hover:w-3 h-[1px] bg-red-500 transition-all duration-300"></span>

                  <span>{title}</span>

                </a>

              ))}

            </div>

          </div>

          {/* Follow Us */}
          <div className="lg:col-span-3">

            <h2 className="text-xs uppercase tracking-[3px] text-gray-500 font-semibold mb-5 md:mb-6">
              {t("followUs")}
            </h2>

            <div className="space-y-3">

              <a
                href="https://www.instagram.com/moto_pep_accessories"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-red-400 transition-all duration-300 text-sm"
              >
                <FaInstagram className="text-base" />
                <span className="text-[11px] uppercase tracking-[1.5px]">@moto_pep_accessories</span>
              </a>

              <a
                href="https://wa.me/917093098989"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-green-400 transition-all duration-300 text-sm"
              >
                <FaWhatsapp className="text-base" />
                <span className="text-[11px] uppercase tracking-[1.5px]">+91 7093098989</span>
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 md:mt-14 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>

        {/* Bottom */}
        <div className="pt-5 md:pt-6 text-center text-gray-600 text-[10px] md:text-xs tracking-wider leading-relaxed">

          {t("copyright")}

        </div>

      </div>

    </footer>
  );
}

export default Footer;