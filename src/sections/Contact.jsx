import {
    FaWhatsapp,
    FaPhoneAlt,
    FaInstagram,
    FaFacebookF,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
    return (
        <section id="contact" className="py-32 px-6 bg-[#080808]">

            {/* Heading */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold uppercase">
                    Contact<span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Us</span>
                </h1>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Get in touch for premium automotive accessories,
                    installations and customization services.
                </p>
            </div>

            {/* Main Grid */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

                {/* Left Side */}
                <div className="space-y-8">

                    {/* Address */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-red-500 text-2xl mt-1" />

                            <div>
                                <h2 className="text-2xl font-bold mb-2">
                                    Visit Our Shop
                                </h2>

                                <p className="text-gray-400 leading-relaxed">
                                    Hislop Rd, Kalyan Gardens, Jai Jawahar Nagar,
                                    near HP Petrol Pump, Yapral,
                                    Hyderabad, Telangana 500087
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Buttons */}
                    <div className="grid sm:grid-cols-2 gap-6">

                        {/* Call */}
                        <a
                            href="tel:7093098989"
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/40 transition duration-300"
                        >
                            <FaPhoneAlt className="text-red-500 text-3xl mb-4" />

                            <h3 className="text-2xl font-bold mb-2">
                                Call Us
                            </h3>

                            <p className="text-gray-400">
                                7093098989
                            </p>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/917093098989"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/40 transition duration-300"
                        >
                            <FaWhatsapp className="text-red-500 text-3xl mb-4" />

                            <h3 className="text-2xl font-bold mb-2">
                                WhatsApp
                            </h3>

                            <p className="text-gray-400">
                                Chat With Us
                            </p>
                        </a>

                    </div>

                    {/* Social Links */}
                    <div className="flex gap-5">

                        <a
                            href="https://www.instagram.com/moto_pep_accessories"
                            target="_blank"
                            rel="noreferrer"
                            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-red-500 hover:border-red-500 transition duration-300"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-red-500 hover:border-red-500 transition duration-300"
                        >
                            <FaFacebookF />
                        </a>

                    </div>

                </div>

                {/* Right Side Form */}
                <div className="space-y-8">

                    {/* Google Map */}
                    <div className="overflow-hidden rounded-3xl border border-white/10 h-[350px]">

                        <iframe
                            src="https://www.google.com/maps?q=Hislop+Rd,+Yapral,+Hyderabad&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Moto Pep Plus Location"
                        ></iframe>

                    </div>

                    {/* Inquiry Form */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

                        <h2 className="text-3xl font-bold mb-8">
                            Send Inquiry
                        </h2>

                        <form className="space-y-6">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-red-500"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-red-500"
                            />

                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-red-500"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-gradient-to-r from-red-600 to-red-700 hover:bg-red-700 transition duration-300 px-8 py-4 rounded-full font-semibold shadow-lg shadow-red-500/30"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;