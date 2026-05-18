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
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-3xl border-b border-white/[0.04]"
        >

            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>

            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 h-[64px] md:h-[72px] flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#home"
                    className="flex items-center gap-2.5 group"
                >

                    <div className="relative">

                        {/* Glow */}
                        <div className="absolute inset-0 bg-red-500/25 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></div>

                        <img
                            src={logo}
                            alt="Moto Pep"
                            className="relative w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border border-red-500/20 shadow-lg shadow-red-900/30"
                        />

                    </div>

                    <div>

                        <h1 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-[2px] leading-none">

                            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                                {t("brandName")}
                            </span>

                        </h1>

                        <p className="text-[8px] md:text-[9px] text-gray-500 uppercase tracking-[3px] mt-0.5">
                            {t("brandSub")}
                        </p>

                    </div>

                </a>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center gap-1.5">

                    {/* Nav Links */}
                    <ul className="flex items-center gap-1">

                        {navItems.map(([title, link]) => (

                            <a
                                key={title}
                                href={link}
                                className="relative px-4 py-2 rounded-xl overflow-hidden group transition-all duration-500"
                            >

                                {/* Hover bg */}
                                <div className="absolute inset-0 bg-white/[0.04] rounded-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[1px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent transition-all duration-500"></div>

                                <span className="relative z-10 text-[11px] uppercase tracking-[2.5px] font-medium text-gray-400 group-hover:text-white transition duration-300">
                                    {title}
                                </span>

                            </a>

                        ))}

                    </ul>

                    {/* Language Switcher */}
                    <div className="flex items-center gap-1 ml-3 border-l border-white/[0.06] pl-3">

                        {[
                            ["EN", "en"],
                            ["తె", "te"],
                            ["हि", "hi"],
                        ].map(([label, lang]) => (

                            <button
                                key={lang}
                                onClick={() => {
                                    i18n.changeLanguage(lang);
                                    localStorage.setItem("lang", lang);
                                }}
                                className={`
                                    w-9 h-9 rounded-lg text-[11px] font-semibold transition-all duration-300
                                    
                                    ${i18n.language === lang
                                        ? "bg-red-500/15 text-red-400 border border-red-500/30"
                                        : "text-gray-500 hover:text-white border border-transparent hover:border-white/10"
                                    }
                                `}
                            >
                                {label}
                            </button>

                        ))}

                    </div>

                    {/* WhatsApp CTA */}
                    <a
                        href="https://wa.me/917093098989"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative overflow-hidden ml-3 px-5 py-2 rounded-xl bg-gradient-to-r from-red-600/90 to-red-700/90 transition-all duration-500 hover:shadow-lg hover:shadow-red-500/20"
                    >

                        {/* Shine */}
                        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>

                        <div className="relative z-10 flex items-center gap-2">

                            <FaWhatsapp
                                size={15}
                                className="text-green-300"
                            />

                            <span className="font-semibold uppercase tracking-[2px] text-[11px]">
                                {t("chat")}
                            </span>

                        </div>

                    </a>

                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="xl:hidden relative z-20 w-10 h-10 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-lg text-gray-400"
                >

                    {menuOpen ? <FaTimes /> : <FaBars />}

                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="xl:hidden relative z-10 bg-black/98 backdrop-blur-3xl border-t border-white/[0.04] px-4 py-6"
                >

                    <div className="flex flex-col gap-2">

                        {/* Mobile Links */}
                        {navItems.map(([title, link]) => (

                            <a
                                key={title}
                                href={link}
                                onClick={() => setMenuOpen(false)}
                                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-3.5 uppercase tracking-[2px] text-[11px] font-medium text-gray-400 hover:text-white hover:border-red-500/30 hover:bg-white/[0.04] transition-all duration-300"
                            >

                                <span className="relative z-10">
                                    {title}
                                </span>

                            </a>

                        ))}

                        {/* Mobile Language */}
                        <div className="flex gap-2 pt-2">

                            {[
                                ["EN", "en"],
                                ["తె", "te"],
                                ["हि", "hi"],
                            ].map(([label, lang]) => (

                                <button
                                    key={lang}
                                    onClick={() => {
                                        i18n.changeLanguage(lang);
                                        localStorage.setItem("lang", lang);
                                    }}
                                    className={`
                                        flex-1 h-10 rounded-lg text-[11px] font-semibold transition-all duration-300
                                        
                                        ${i18n.language === lang
                                            ? "border border-red-500/30 bg-red-500/10 text-red-400"
                                            : "border border-white/[0.06] bg-white/[0.02] text-gray-500"
                                        }
                                    `}
                                >
                                    {label}
                                </button>

                            ))}

                        </div>

                        {/* Mobile WhatsApp */}
                        <a
                            href="https://wa.me/917093098989"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 flex items-center justify-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 transition-all duration-300 px-5 py-3.5 rounded-xl text-[11px] font-semibold uppercase tracking-[2px] shadow-lg shadow-red-900/30"
                        >

                            <FaWhatsapp className="text-green-300" />

                            {t("chat")}

                        </a>

                    </div>

                </motion.div>

            )}

        </motion.nav>
    );
}

export default Navbar;