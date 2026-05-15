import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Contact() {

  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden bg-black"
    >

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-24">

          <h1 className="text-5xl md:text-7xl font-black uppercase">

            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              {t("contactHeading")}
            </span>

          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mt-6 rounded-full"></div>

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left Side */}
          <div className="space-y-8">

            {/* Visit Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10"
            >

              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10 flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 text-2xl">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h2 className="text-3xl font-bold mb-4">
                    {t("visitShop")}
                  </h2>

                  <p className="text-gray-400 leading-relaxed text-lg">
                    Hislop Rd, Kalyan Gardens,
                    Jai Jawahar Nagar,
                    near HP Petrol Pump,
                    Yapral, Hyderabad,
                    Telangana 500087
                  </p>

                </div>

              </div>

            </motion.div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">

              {/* Call */}
              <motion.a
                whileHover={{ y: -5 }}
                href="tel:7093098989"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8"
              >

                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10">

                  <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 text-2xl mb-6">
                    <FaPhoneAlt />
                  </div>

                  <h2 className="text-2xl font-bold mb-3">
                    {t("callUs")}
                  </h2>

                  <p className="text-gray-400">
                    7093098989
                  </p>

                </div>

              </motion.a>

              {/* WhatsApp */}
              <motion.a
                whileHover={{ y: -5 }}
                href="https://wa.me/917093098989"
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8"
              >

                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10">

                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-2xl mb-6">
                    <FaWhatsapp />
                  </div>

                  <h2 className="text-2xl font-bold mb-3">
                    {t("whatsapp")}
                  </h2>

                  <p className="text-gray-400">
                    {t("chatWithUs")}
                  </p>

                </div>

              </motion.a>

            </div>

            {/* Socials */}
            <div className="flex gap-5 pt-4">

              <a
                href="https://www.instagram.com/moto_pep_accessories"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-2xl hover:border-red-500/40 hover:text-red-500 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-2xl hover:border-blue-500/40 hover:text-blue-500 transition duration-300"
              >
                <FaFacebookF />
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-8">

            {/* Map */}
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

              <iframe
                src="https://www.google.com/maps?q=Hislop+Road+Yapral+Hyderabad&output=embed"
                width="100%"
                height="320"
                allowFullScreen=""
                loading="lazy"
                title="Moto Pep Location"
                className="grayscale hover:grayscale-0 transition duration-500"
              ></iframe>

            </div>

            {/* Form */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10">

              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5"></div>

              <div className="relative z-10">

                <h2 className="text-4xl font-bold mb-10">
                  {t("sendInquiry")}
                </h2>

                <form className="space-y-6">

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-red-500 transition duration-300"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-red-500 transition duration-300"
                  />

                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-red-500 transition duration-300"
                  ></textarea>

                  <button
                    type="submit"
                    className="relative overflow-hidden px-10 py-5 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 font-semibold uppercase tracking-wider shadow-lg shadow-red-500/20 group"
                  >

                    <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>

                    <span className="relative z-10">
                      {t("sendMessage")}
                    </span>

                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;