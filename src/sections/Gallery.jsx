import gallery from "../data/gallery";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaExpand,
  FaCamera,
} from "react-icons/fa";

function Gallery() {

  const { t, i18n } = useTranslation();

  const isTelugu = i18n.language === "te";

  return (

    <section
      id="gallery"
      className="relative py-20 md:py-32 overflow-hidden bg-black px-4 md:px-8"
    >

      {/* Ambient Background */}
      <div className="absolute inset-0">

        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-600/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-red-500/10 blur-[180px] rounded-full"></div>

      </div>

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-xl mb-6">

            <FaCamera className="text-red-500 text-sm" />

            <span className="text-[11px] tracking-[4px] uppercase text-red-400 font-semibold">
              Moto Pep Gallery
            </span>

          </div>

          <h1
            className={`
              font-black uppercase leading-[0.9]
              ${isTelugu
                ? "text-4xl md:text-6xl"
                : "text-5xl md:text-8xl"
              }
            `}
          >

            <span className="text-white">
              PREMIUM
            </span>

            <br />

            <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              SHOWCASE
            </span>

          </h1>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Explore premium custom builds, luxury detailing,
            cinematic modifications, and exclusive automotive styling.
          </p>

        </motion.div>

        {/* Premium Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[260px]">

          {gallery.map((item, index) => {

            let cardClass = "";

            if (index === 0) {
              cardClass =
                "md:col-span-7 md:row-span-2";
            } else if (index === 1) {
              cardClass =
                "md:col-span-5";
            } else if (index === 2) {
              cardClass =
                "md:col-span-5";
            } else if (index === 3) {
              cardClass =
                "md:col-span-4";
            } else {
              cardClass =
                "md:col-span-3";
            }

            return (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                className={`
                  group relative overflow-hidden
                  rounded-[28px]
                  border border-white/[0.06]
                  bg-white/[0.02]
                  backdrop-blur-xl
                  ${cardClass}
                `}
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt="Moto Pep"
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.12] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>

                {/* Shine */}
                <div className="absolute inset-0 overflow-hidden">

                  <div className="
                    absolute top-0 left-[-120%]
                    w-[60%] h-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    skew-x-[-25deg]
                    group-hover:left-[140%]
                    transition-all
                    duration-1000
                  "></div>

                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-20">

                  <div className="
                    px-4 py-2 rounded-full
                    border border-white/10
                    bg-black/40 backdrop-blur-xl
                    text-[10px]
                    tracking-[3px]
                    uppercase
                    text-white/80
                    font-semibold
                  ">

                    Moto Pep Exclusive

                  </div>

                </div>

                {/* Expand Icon */}
                <div className="
                  absolute top-4 right-4
                  w-11 h-11 rounded-full
                  bg-black/40 backdrop-blur-xl
                  border border-white/10
                  flex items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                ">

                  <FaExpand className="text-white text-sm" />

                </div>

                {/* Bottom Content */}
                <div className="
                  absolute bottom-0 left-0
                  p-6 md:p-8 z-20
                ">

                  <h2 className="
                    text-2xl md:text-4xl
                    font-black uppercase
                    leading-none
                    mb-3
                  ">

                    <span className="text-white">
                      Premium
                    </span>

                    <br />

                    <span className="text-red-500">
                      Automotive
                    </span>

                  </h2>

                  <div className="
                    flex items-center gap-2
                    text-[11px]
                    uppercase tracking-[3px]
                    text-gray-300
                  ">

                    <span>Luxury</span>
                    <span>•</span>
                    <span>Performance</span>
                    <span>•</span>
                    <span>Custom</span>

                  </div>

                </div>

                {/* Border Glow */}
                <div className="
                  absolute inset-0 rounded-[28px]
                  border border-red-500/0
                  group-hover:border-red-500/30
                  transition duration-500
                "></div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );
}

export default Gallery;