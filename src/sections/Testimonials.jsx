import testimonials from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Testimonials() {

  const { t } = useTranslation();

  return (
    <section
      className="relative py-32 px-6 overflow-hidden bg-black"
    >

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-24">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase"
          >

            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              {t("reviewsHeading")}
            </span>

          </motion.h1>

          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mt-6 rounded-full"></div>

        </div>

        {/* Rating Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row items-center justify-center gap-8"
        >

          {/* Rating Circle */}
          <div className="relative">

            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>

            <div className="relative w-36 h-36 rounded-full border border-green-500/20 bg-green-500/10 backdrop-blur-2xl flex flex-col items-center justify-center">

              <h2 className="text-5xl font-black text-white">
                4.3
              </h2>

              <p className="text-green-400 uppercase tracking-wider text-sm mt-2">
                Rating
              </p>

            </div>

          </div>

          {/* Text */}
          <div className="text-center md:text-left">

            <h2 className="text-4xl md:text-5xl font-black">
              {t("verifiedReviews")}
            </h2>

            <p className="text-gray-400 mt-4 text-lg max-w-xl">
              {t("reviewsSubtitle")}
            </p>

          </div>

        </motion.div>

        {/* Testimonials Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },

            1280: {
              slidesPerView: 3,
            },
          }}
        >

          {testimonials.map((item, index) => (

            <SwiperSlide key={item.id}>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 h-full"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Stars */}
                <div className="relative z-10 flex gap-1 text-yellow-400 text-2xl mb-8">
                  ★★★★★
                </div>

                {/* Review */}
                <p className="relative z-10 text-gray-300 leading-relaxed text-lg">
                  "{t(item.reviewKey)}"
                </p>

                {/* Divider */}
                <div className="relative z-10 mt-10 h-px bg-gradient-to-r from-red-500/30 to-transparent"></div>

                {/* User */}
                <div className="relative z-10 mt-8 flex items-center gap-5">

                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center text-2xl font-black">
                    {item.name.charAt(0)}
                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 uppercase tracking-wider text-sm mt-1">
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