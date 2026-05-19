import { motion } from "framer-motion";

import {
    FaBars,
    FaTimes,
    FaCarSide,
    FaHome,
    FaBoxOpen,
    FaTools,
    FaImages,
    FaPhoneAlt,
} from "react-icons/fa";

import { useState } from "react";

import logo from "../assets/logos/moto-logo-1.png";

import { useTranslation } from "react-i18next";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const { i18n, t } = useTranslation();

    const navItems = [

        [
            t("home"),
            "#home",
            <FaHome className="text-red-500 text-[12px]" />
        ],

        [
            t("products"),
            "#products",
            <FaBoxOpen className="text-red-500 text-[12px]" />
        ],

        [
            i18n.language === "te"
                ? "వాడిన కార్లు"
                : i18n.language === "hi"
                    ? "पुरानी कारें"
                    : "Pre-Owned Cars",

            "#cars",

            <FaCarSide className="text-red-500 text-[12px]" />
        ],

        [
            i18n.language === "te"
                ? "మీ కారును అమ్మండి"
                : i18n.language === "hi"
                    ? "अपनी CAR बेचें"
                    : "Sell Your Car",

            "#sell-car",

            <FaCarSide className="text-red-500 text-[12px]" />
        ],

        [
            t("services"),
            "#services",
            <FaTools className="text-red-500 text-[12px]" />
        ],

        [
            t("gallery"),
            "#gallery",
            <FaImages className="text-red-500 text-[12px]" />
        ],

        [
            t("contact"),
            "#contact",
            <FaPhoneAlt className="text-red-500 text-[11px]" />
        ],

    ];

    return (

        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}

            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}

            className="
                fixed
                top-0
                left-0
                w-full
                z-50
                bg-black/70
                backdrop-blur-3xl
                border-b
                border-white/[0.04]
            "
        >

            {/* Top Accent */}
            <div className="
                absolute
                top-0
                left-0
                right-0
                h-[1px]
                bg-gradient-to-r
                from-transparent
                via-red-500/40
                to-transparent
            "></div>

            {/* Main Container */}
            <div className="
                relative
                z-10
                max-w-[1600px]
                mx-auto
                px-5
                xl:px-8
                h-[82px]
                md:h-[88px]
                flex
                items-center
                justify-between
            ">

                {/* LOGO */}
                <a
                    href="#home"
                    className="
                        flex
                        items-center
                        gap-2
                        group
                        min-w-[220px]
                        ml-[-4px]
                    "
                >

                    {/* Logo Image */}
                    <div className="relative flex-shrink-0">

                        {/* Glow */}
                        <div className="
                            absolute
                            inset-0
                            bg-red-500/35
                            blur-3xl
                            rounded-full
                            opacity-0
                            group-hover:opacity-100
                            transition-all
                            duration-700
                        "></div>

                        <img
                            src={logo}
                            alt="Moto Pep"

                            className="
                                relative
                                w-10 h-10
                                md:w-11 md:h-11
                                rounded-full
                                object-cover
                                border
                                border-red-500/40
                                shadow-xl
                                shadow-red-900/30
                            "
                        />

                    </div>

                    {/* Brand Text */}
                    <div className="leading-none">

                        <h1
                            className={`
                                ${i18n.language === "te"
                                    ? "text-[13px]"
                                    : "text-[14px]"
                                }

                                xl:text-[22px]
                                font-extrabold
                                uppercase
                                tracking-[2px]
                                whitespace-nowrap
                            `}
                        >

                            <span className="
                                bg-gradient-to-r
                                from-white
                                via-gray-100
                                to-gray-300
                                bg-clip-text
                                text-transparent
                            ">
                                {t("brandName")}
                            </span>

                        </h1>

                        <p className="
                            text-[7px]
                            md:text-[8px]
                            text-gray-500
                            uppercase
                            tracking-[4px]
                            mt-1
                            whitespace-nowrap
                        ">
                            {t("brandSub")}
                        </p>

                    </div>

                </a>

                {/* Desktop Navigation */}
                <div
                    className={`
                        hidden
                        xl:flex
                        items-center
                        ml-2
                        flex-1
                        justify-center

                        ${i18n.language === "te"
                            ? "gap-10 xl:gap-15"
                            : i18n.language === "hi"
                                ? "gap-10 xl:gap-12"
                                : "gap-10 xl:gap-20"
                        }
                    `}
                >

                    {/* Nav Links */}
                    <ul
  className={`
    flex
    items-center

    ${
      i18n.language === "te"
        ? "gap-9"
        : i18n.language === "hi"
        ? "gap-15"
        : "gap-5"
    }
  `}
>

                        {navItems.map(([title, link, icon]) => (

                            <a
                                key={title}
                                href={link}

                                className="
                                    relative
                                    px-1
                                    py-1
                                    rounded-2xl
                                    overflow-hidden
                                    group
                                    transition-all
                                    duration-500
                                "
                            >

                                {/* Hover Glass */}
                                <div className="
                                    absolute
                                    inset-0
                                    bg-white/[0.04]
                                    rounded-2xl
                                    opacity-0
                                    group-hover:opacity-100
                                    transition-all
                                    duration-500
                                "></div>

                                {/* Bottom Glow */}
                                <div className="
                                    absolute
                                    bottom-0
                                    left-1/2
                                    -translate-x-1/2
                                    w-0
                                    group-hover:w-3/4
                                    h-[1px]
                                    bg-gradient-to-r
                                    from-transparent
                                    via-red-500/80
                                    to-transparent
                                    transition-all
                                    duration-500
                                "></div>

                                {/* Link */}
                                <span className={`
    relative
    z-10
    flex
    items-center
    gap-1.5
    text-[12px]
    2xl:text-[13px]
    ${i18n.language === "en" ? "uppercase" : ""}
    tracking-[1.5px]
    whitespace-nowrap
    font-medium
    text-gray-400
    group-hover:text-white
    group-hover:tracking-[2px]
    transition-all
    duration-300
`}>

                                    {icon}

                                    {title}

                                </span>

                            </a>

                        ))}

                    </ul>

                    {/* Language */}
                    <div className="
                        flex
                        items-center
                        gap-1
                        ml-3
                        border-l
                        border-white/[0.06]
                        pl-5
                    ">

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
                                    w-11
                                    h-11
                                    rounded-xl
                                    text-[13px]
                                    font-semibold
                                    transition-all
                                    duration-300

                                    ${i18n.language === lang
                                        ? "bg-red-500/5 border border-red-500/10 shadow-[0_0_6px_rgba(255,0,0,0.08)] text-white"
                                        : "text-gray-400 hover:text-white"
                                    }
                                `}
                            >
                                {label}
                            </button>

                        ))}

                    </div>

                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}

                    className="
                        xl:hidden
                        relative
                        z-20
                        w-11
                        h-11
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-white/[0.03]
                        flex
                        items-center
                        justify-center
                        text-lg
                        text-gray-400
                    "
                >

                    {menuOpen
                        ? <FaTimes />
                        : <FaBars />
                    }

                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}

                    transition={{
                        duration: 0.3,
                    }}

                    className="
                        xl:hidden
                        bg-black/95
                        backdrop-blur-3xl
                        border-t
                        border-white/[0.04]
                        px-4
                        py-5
                    "
                >

                    <div className="
                        flex
                        flex-col
                        gap-1.5
                    ">

                        {navItems.map(([title, link, icon]) => (

                            <a
                                key={title}
                                href={link}

                                onClick={() => setMenuOpen(false)}

                                className="
                                    flex
                                    items-center
                                    gap-3
                                    px-4
                                    py-3.5
                                    rounded-2xl
                                    border
                                    border-white/[0.05]
                                    bg-white/[0.02]
                                    text-gray-300
                                    hover:border-red-500/20
                                    hover:bg-red-500/[0.05]
                                    transition-all
                                    duration-300
                                "
                            >

                                {icon}

                                <span className="
                                    uppercase
                                    tracking-[2px]
                                    text-[11px]
                                    font-medium
                                ">
                                    {title}
                                </span>

                            </a>

                        ))}

                    </div>

                </motion.div>

            )}

        </motion.nav>
    );
}

export default Navbar;