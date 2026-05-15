import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../assets/logos/moto-logo-1.png";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Footer() {

  const { t } = useTranslation();

  const navLinks = [
    [t("home"), "#home"],
    [t("products"), "#products"],
    [t("services"), "#services"],
    [t("gallery"), "#gallery"],
    [t("contact"), "#contact"],
  ];

  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/10">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-16">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-5 mb-8">

              <img
                src={logo}
                alt="Moto Pep"
                className="w-16 h-16 rounded-full border border-red-500/30"
              />

              <div>

                <h1 className="text-3xl font-black uppercase tracking-[4px]">

                  <span className="bg-gradient-to-r from-white via-red-200 to-blue-300 bg-clip-text text-transparent">
                    {t("brandName")}
                  </span>

                </h1>

                <p className="text-gray-500 uppercase tracking-[5px] text-xs mt-2">
                  {t("brandSub")}
                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-relaxed max-w-md text-lg">
              {t("footerTag")}
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h2 className="text-3xl font-bold mb-8">
              {t("quickLinks")}
            </h2>

            <div className="flex flex-col gap-5">

              {navLinks.map(([title, link]) => (

                <a
                  key={title}
                  href={link}
                  className="text-gray-400 hover:text-red-500 transition duration-300 uppercase tracking-[2px]"
                >
                  {title}
                </a>

              ))}

            </div>

          </div>

          {/* Social */}
          <div>

            <h2 className="text-3xl font-bold mb-8">
              {t("followUs")}
            </h2>

            <div className="flex gap-5">

              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.instagram.com/moto_pep_accessories"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-2xl hover:border-red-500/40 hover:text-red-500 transition duration-300"
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-2xl hover:border-blue-500/40 hover:text-blue-500 transition duration-300"
              >
                <FaFacebookF />
              </motion.a>

              <motion.a
                whileHover={{ y: -5 }}
                href="https://wa.me/917093098989"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-2xl hover:border-green-500/40 hover:text-green-400 transition duration-300"
              >
                <FaWhatsapp />
              </motion.a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">

          {t("copyright")}

        </div>

      </div>

    </footer>
  );
}

export default Footer;