import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaCheckCircle,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const { t, i18n } = useTranslation();

  const isTelugu = i18n.language === "te";

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      await emailjs.send(
        "service_pr40shd",
        "template_yrsm9b7",
        formData,
        "Ak_tEcdWoSRZwSxYb"
      );

      setSuccess(true);

      setFormData({
        user_name: "",
        user_email: "",
        user_phone: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);

    } catch (error) {

      alert("Failed to send inquiry.");

    }

    setLoading(false);

  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-28 lg:py-32 px-4 md:px-8 overflow-hidden bg-black"
    >

      {/* Ambient Glows */}
      <div className="absolute top-[10%] left-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-red-500/[0.05] blur-[160px] rounded-full"></div>

      <div className="absolute bottom-[10%] right-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/[0.04] blur-[160px] rounded-full"></div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="automotive-heading text-center mb-12 md:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >

            <p className="text-[10px] md:text-[11px] uppercase tracking-[4px] text-red-500/70 font-medium mb-3 md:mb-4">
              ── {t("contact")} ──
            </p>

            <h1
              className={`
                font-black uppercase leading-[0.9]
                ${isTelugu
                  ? "text-3xl sm:text-4xl md:text-5xl"
                  : "text-3xl sm:text-4xl md:text-6xl"
                }
              `}
            >

              <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                {t("contactHeading")}
              </span>

            </h1>

          </motion.div>

        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">

          {/* LEFT SIDE — 5 cols */}
          <div className="lg:col-span-5 space-y-4 md:space-y-5">

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-xl p-5 md:p-7 hover:border-red-500/20 transition-all duration-500"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>

              <div className="relative z-10 flex gap-4">

                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-red-500/[0.08] border border-red-500/15 flex items-center justify-center text-red-500 text-lg flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h2 className="text-base md:text-lg font-bold mb-2">
                    {t("visitShop")}
                  </h2>

                  <p className="text-gray-500 leading-relaxed text-[13px] md:text-sm">
                    Hislop Rd, Kalyan Gardens,
                    Jai Jawahar Nagar,
                    near HP Petrol Pump,
                    Yapral, Hyderabad,
                    Telangana 500087
                  </p>

                </div>

              </div>

            </motion.div>

            {/* Contact Cards — row */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">

              {/* Call */}
              <a
                href="tel:7093098989"
                className="group rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-xl p-4 md:p-5 hover:border-red-500/20 transition-all duration-500"
              >

                <div className="w-10 h-10 rounded-lg bg-red-500/[0.08] border border-red-500/15 flex items-center justify-center text-red-500 text-base mb-3">
                  <FaPhoneAlt />
                </div>

                <h2 className="text-sm md:text-base font-bold mb-1">
                  {t("callUs")}
                </h2>

                <p className="text-gray-500 text-[12px] md:text-[13px]">
                  7093098989
                </p>

              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917093098989"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-xl p-4 md:p-5 hover:border-green-500/20 transition-all duration-500"
              >

                <div className="w-10 h-10 rounded-lg bg-green-500/[0.08] border border-green-500/15 flex items-center justify-center text-green-400 text-base mb-3">
                  <FaWhatsapp />
                </div>

                <h2 className="text-sm md:text-base font-bold mb-1">
                  WhatsApp
                </h2>

                <p className="text-gray-500 text-[12px] md:text-[13px]">
                  Chat instantly
                </p>

              </a>

            </div>

            {/* Social */}
            <div className="flex gap-2.5">

              <a
                href="https://www.instagram.com/moto_pep_accessories"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 md:w-11 md:h-11 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-base text-gray-500 hover:border-red-500/25 hover:text-red-400 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 md:w-11 md:h-11 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-base text-gray-500 hover:border-blue-500/25 hover:text-blue-400 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.05]">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1272645617287!2d78.5387362!3d17.5014373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bf18cc6167d%3A0x92fd37f6ee556e5!2sMOTO%20PEP%20PLUS%20YAPRAL%20CAR%20ACCESSORIES!5e0!3m2!1sen!2sin!4v1779459991402!5m2!1sen!2sin" 
                width="100%"
                height="220"
                loading="lazy"
                title="Moto Pep Location"
                className="grayscale-[80%] hover:grayscale-0 transition-all duration-700 contrast-[1.1]"
              ></iframe>

            </div>

          </div>

          {/* RIGHT SIDE — 7 cols (form) */}
          <div className="lg:col-span-7">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-xl p-5 md:p-8 lg:p-10"
            >

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/[0.04] to-transparent rounded-bl-3xl"></div>

              <div className="relative z-10">

                <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 leading-tight">
                  {t("sendInquiry")}
                </h2>

                {/* Success */}
                {success && (

                  <div className="mb-5 flex items-center gap-2.5 bg-green-500/[0.08] border border-green-500/15 text-green-400 px-4 py-3 rounded-xl text-sm">

                    <FaCheckCircle className="text-xs" />

                    <span className="text-[13px]">
                      Inquiry sent successfully!
                    </span>

                  </div>

                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3.5 md:space-y-4"
                >

                  {/* Two-column name/email on desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4">

                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-black/30 border border-white/[0.06] rounded-xl px-4 py-3 md:py-3.5 outline-none focus:border-red-500/40 transition-all duration-300 text-sm placeholder:text-gray-600"
                    />

                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full bg-black/30 border border-white/[0.06] rounded-xl px-4 py-3 md:py-3.5 outline-none focus:border-red-500/40 transition-all duration-300 text-sm placeholder:text-gray-600"
                    />

                  </div>

                  <input
                    type="tel"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full bg-black/30 border border-white/[0.06] rounded-xl px-4 py-3 md:py-3.5 outline-none focus:border-red-500/40 transition-all duration-300 text-sm placeholder:text-gray-600"
                  />

                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full bg-black/30 border border-white/[0.06] rounded-xl px-4 py-3 md:py-3.5 outline-none focus:border-red-500/40 transition-all duration-300 text-sm placeholder:text-gray-600 resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full
                      relative
                      overflow-hidden
                      rounded-xl
                      bg-gradient-to-r
                      from-red-600
                      to-red-700
                      py-3.5
                      font-semibold
                      uppercase
                      tracking-[2px]
                      text-[12px] md:text-[13px]
                      shadow-lg
                      shadow-red-900/20
                      hover:shadow-red-800/30
                      hover:from-red-500
                      hover:to-red-600
                      transition-all
                      duration-300
                      disabled:opacity-50
                    "
                  >

                    <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent hover:left-[100%] transition-all duration-1000"></div>

                    <span className="relative z-10">

                      {loading
                        ? "Sending..."
                        : t("sendMessage")
                      }

                    </span>

                  </button>

                </form>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;