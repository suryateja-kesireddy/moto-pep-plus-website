import { motion } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logos/moto-logo-1.png";
import { useTranslation } from "react-i18next";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { i18n, t } = useTranslation();

    const navItems = [
        [t("home"), "#home"],
        [t("products"), "#products"],
        [t("services"), "#services"],
        [t("gallery"), "#gallery"],
        [t("contact"), "#contact"],
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-50 bg-black/55 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
        >

            {/* Cinematic Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-blue-500/5 to-red-500/5 blur-3xl pointer-events-none"></div>

            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#home"
                    className="flex items-center gap-4 group"
                >

                    <div className="relative">

                        {/* Glow */}
                        <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>

                        <img
                            src={logo}
                            alt="Moto Pep"
                            className="relative w-12 h-12 rounded-full object-cover border border-red-500/30 shadow-lg shadow-red-500/20"
                        />

                    </div>

                    <div>

                        <h1 className="text-lg md:text-xl font-black uppercase tracking-[3px] leading-tight">

                            <span className="bg-gradient-to-r from-white via-red-200 to-blue-300 bg-clip-text text-transparent">
                                {t("brandName")}
                            </span>

                        </h1>

                        <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-[3px] mt-1">
                            {t("brandSub")}
                        </p>

                    </div>

                </a>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center gap-3">

                    {/* Nav Links */}
                    <ul className="flex items-center gap-3">

                        {navItems.map(([title, link]) => (

                            <a
                                key={title}
                                href={link}
                                className="relative px-4 py-2 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl overflow-hidden group transition duration-500"
                            >

                                {/* Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-blue-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                {/* Border */}
                                <div className="absolute inset-0 rounded-2xl border border-red-500/0 group-hover:border-red-500/40 transition duration-500"></div>

                                {/* Shine */}
                                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>

                                <span className="relative z-10 text-sm uppercase tracking-[2px] font-medium group-hover:text-red-400 transition duration-300">
                                    {title}
                                </span>

                            </a>

                        ))}

                    </ul>

                    {/* Language Switcher */}
                    <div className="flex items-center gap-2 ml-2">

                        {[
                            ["ENGLISH", "en"],
                            ["తెలుగు", "te"],
                            ["हिंदी", "hi"],
                        ].map(([label, lang]) => (

                            <button
                                key={lang}
                                onClick={() => {
                                    i18n.changeLanguage(lang);
                                    localStorage.setItem("lang", lang);
                                }}
                                className={`px-3 py-1.5 rounded-xl border backdrop-blur-xl transition duration-300 text-sm uppercase tracking-wide
                  
                  ${i18n.language === lang
                                        ? "border-red-500/40 bg-red-500/10 text-red-400"
                                        : "border-white/10 bg-white/[0.03] hover:border-red-500/40"
                                    }
                `}
                            >
                                {label}
                            </button>

                        ))}

                    </div>

                    {/* WhatsApp CTA */}
                    <a
                        href="https://wa.me/917093098989?text=Hello%20Moto%20Pep%20Plus%20Yapral,%20I%20would%20like%20to%20know%20more%20about%20your%20car%20accessories%20and%20services."
                        target="_blank"
                        rel="noreferrer"
                        className="group relative overflow-hidden px-5 py-2.5 rounded-2xl border border-red-500/20 bg-white/[0.03] backdrop-blur-xl transition duration-500"
                    >

                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-600/10 to-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                        {/* Shine */}
                        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>

                        <div className="relative z-10 flex items-center gap-2">

                            <FaWhatsapp
                                size={18}
                                className="text-green-400"
                            />

                            <span className="font-semibold uppercase tracking-[2px] text-sm">
                                {t("chat")}
                            </span>

                        </div>

                    </a>

                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="xl:hidden relative z-20 text-2xl"
                >

                    {menuOpen ? <FaTimes /> : <FaBars />}

                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (

                <div className="relative z-10 xl:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 px-6 py-8">

                    <div className="flex flex-col gap-6">

                        {/* Mobile Links */}
                        {navItems.map(([title, link]) => (

                            <a
                                key={title}
                                href={link}
                                onClick={() => setMenuOpen(false)}
                                className="text-lg uppercase tracking-[3px] hover:text-red-500 transition duration-300"
                            >
                                {title}
                            </a>

                        ))}

                        {/* Mobile Language */}
                        <div className="flex flex-wrap gap-3 pt-4">

                            {[
                                ["ENGLISH", "en"],
                                ["తెలుగు", "te"],
                                ["हिंदी", "hi"],
                            ].map(([label, lang]) => (

                                <button
                                    key={lang}
                                    onClick={() => {
                                        i18n.changeLanguage(lang);
                                        localStorage.setItem("lang", lang);
                                    }}
                                    className={`px-4 py-2 rounded-xl border backdrop-blur-xl transition duration-300 text-sm uppercase tracking-wide
                  
                    ${i18n.language === lang
                                            ? "border-red-500/40 bg-red-500/10 text-red-400"
                                            : "border-white/10 bg-white/[0.03] hover:border-red-500/40"
                                        }
                  `}
                                >
                                    {label}
                                </button>

                            ))}

                        </div>

                        {/* Mobile WhatsApp */}
                        {/* Mobile WhatsApp */}
                        <a
                            href="https://wa.me/917093098989?text=Hello%20Moto%20Pep%20Plus%20Yapral,%20I%20would%20like%20to%20know%20more%20about%20your%20car%20accessories%20and%20services."
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:scale-105 transition duration-300 px-6 py-4 rounded-2xl text-sm font-semibold shadow-lg shadow-red-500/30"
                        >

                            <FaWhatsapp />

                            {t("chat")}

                        </a>
                    </div>

                </div>

            )}

        </motion.nav>
    );
}

export default Navbar;