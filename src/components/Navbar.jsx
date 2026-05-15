import { motion } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-2xl md:text-3xl font-bold tracking-widest">
                    <span className="text-white">MOTO</span>{" "}
                    <span className="text-red-500">PEP PLUS</span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">

                    <a
                        href="#home"
                        className="hover:text-red-500 transition duration-300"
                    >
                        Home
                    </a>

                    <a
                        href="#products"
                        className="hover:text-red-500 transition duration-300"
                    >
                        Products
                    </a>

                    <a
                        href="#services"
                        className="hover:text-red-500 transition duration-300"
                    >
                        Services
                    </a>

                    <a
                        href="#gallery"
                        className="hover:text-red-500 transition duration-300"
                    >
                        Gallery
                    </a>

                    <a
                        href="#contact"
                        className="hover:text-red-500 transition duration-300"
                    >
                        Contact
                    </a>

                </ul>
                {/* Desktop WhatsApp */}
                <a
                    href="https://wa.me/917093098989"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden md:flex items-center gap-2 bg-red-600 hover:bg-red-700 transition duration-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-red-500/30"
                >
                    <FaWhatsapp size={18} />
                    WhatsApp
                </a>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6">
                    <ul className="flex flex-col gap-6 text-lg uppercase tracking-wider">
                        <a
                            href="#home"
                            className="hover:text-red-500 transition duration-300"
                        >
                            Home
                        </a>

                        <a
                            href="#products"
                            className="hover:text-red-500 transition duration-300"
                        >
                            Products
                        </a>

                        <a
                            href="#services"
                            className="hover:text-red-500 transition duration-300"
                        >
                            Services
                        </a>

                        <a
                            href="#gallery"
                            className="hover:text-red-500 transition duration-300"
                        >
                            Gallery
                        </a>

                        <a
                            href="#contact"
                            className="hover:text-red-500 transition duration-300"
                        >
                            Contact
                        </a>

                        <a
                            href="https://wa.me/917093098989"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition duration-300 px-5 py-3 rounded-full text-sm font-semibold w-fit"
                        >
                            <FaWhatsapp />
                            WhatsApp
                        </a>

                    </ul>
                </div>
            )}
        </motion.nav>
    );
}

export default Navbar;