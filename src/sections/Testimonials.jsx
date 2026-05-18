import testimonials from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Testimonials() {

  const { t, i18n } = useTranslation();

  const isTelugu = i18n.language === "te";

  return (
    <section
      className="relative py-16 md:py-28 lg:py-32 px-4 md:px-8 overflow-hidden bg-[#030303]"
    >

      {/* Ambient Glows */}
      <div className="absolute top-[10%] left-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-red-500/[0.05] blur-[160px] rounded-full"></div>

      <div className="absolute bottom-[10%] right-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/[0.04] blur-[160px] rounded-full"></div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading + Rating — asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-20 items-end">

          {/* Left: heading */}
          <div className="lg:col-span-7">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="automotive-heading"
            >

              <p className="text-[10px] md:text-[11px] uppercase tracking-[4px] text-red-500/70 font-medium mb-3 md:mb-4">
                ── {t("reviewsHeading")}
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
                  {t("reviewsHeading")}
                </span>

              </h1>

              <p className="text-gray-500 mt-4 md:mt-5 max-w-lg text-sm md:text-base leading-relaxed font-sans">
                {t("reviewsSubtitle")}
              </p>

            </motion.div>

          </div>

          {/* Right: Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex lg:justify-end"
          >

            <div className="flex items-center gap-4 md:gap-5">

              {/* Rating Circle */}
              <div className="relative">

                <div className="absolute inset-0 bg-green-500/15 blur-2xl rounded-full"></div>

                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border border-green-500/15 bg-green-500/[0.06] backdrop-blur-2xl flex flex-col items-center justify-center">

                  <h2 className="text-2xl md:text-3xl font-black text-white leading-none automotive-heading">
                    4.3
                  </h2>

                  <p className="text-green-400 uppercase tracking-wider text-[8px] md:text-[9px] mt-1 font-medium">
                    Rating
                  </p>

                </div>

              </div>

              {/* Text */}
              <div>

                <h2 className="text-xl md:text-2xl font-black leading-tight">
                  {t("verifiedReviews")}
                </h2>

                <p className="text-gray-500 mt-1 text-[11px] md:text-xs">
                  Google Reviews
                </p>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Testimonials Slider */}
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >

          {testimonials.map((item, index) => (

            <SwiperSlide key={item.id}>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-xl p-5 md:p-7 h-full hover:border-red-500/20 transition-all duration-500"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.02] to-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition duration-700"></div>

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-red-500/[0.06] to-transparent rounded-br-3xl"></div>

                {/* Stars */}
                <div className="relative z-10 flex gap-0.5 text-yellow-400/80 text-base md:text-lg mb-4 md:mb-5">
                  ★★★★★
                </div>

                {/* Review */}
                <p className="relative z-10 text-gray-400 leading-relaxed text-[13px] md:text-sm italic">
                  "{t(item.reviewKey)}"
                </p>

                {/* Divider */}
                <div className="relative z-10 mt-5 md:mt-7 h-px bg-gradient-to-r from-white/[0.06] to-transparent"></div>

                {/* User */}
                <div className="relative z-10 mt-4 md:mt-5 flex items-center gap-3">

                  {/* Avatar */}
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-red-600/80 to-red-800/80 flex items-center justify-center text-sm md:text-base font-bold flex-shrink-0">
                    {item.name.charAt(0)}
                  </div>

                  <div>

                    <h2 className="text-sm md:text-base font-semibold leading-snug">
                      {item.name}
                    </h2>

                    <p className="text-gray-600 uppercase tracking-wider text-[9px] md:text-[10px] mt-0.5">
                      {t("verifiedCustomer")}
                    </p>

                  </div>

                </div>

              </motion.div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default Testimonials;