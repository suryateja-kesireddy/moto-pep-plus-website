import gallery from "../data/gallery";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Gallery() {

  const { t, i18n } = useTranslation();

  const isTelugu = i18n.language === "te";

  return (
    <section
      id="gallery"
      className="relative py-16 md:py-28 lg:py-32 px-4 md:px-8 overflow-hidden bg-black"
    >

      {/* Ambient Glows */}
      <div className="absolute top-[20%] right-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-red-500/[0.05] blur-[160px] rounded-full"></div>

      <div className="absolute bottom-[20%] left-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/[0.04] blur-[160px] rounded-full"></div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading — centered cinematic */}
        <div className="automotive-heading text-center mb-12 md:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >

            {/* Label */}
            <p className="text-[10px] md:text-[11px] uppercase tracking-[4px] text-red-500/70 font-medium mb-3 md:mb-4">
              ── {t("gallery")} ──
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
                {t("galleryHeading")}
              </span>

            </h1>

          </motion.div>

        </div>

        {/* Cinematic Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">

          {gallery.map((item, index) => {

            // First image: large hero, second: portrait style
            const isHero = index === 0;

            return (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className={`
                  group relative overflow-hidden rounded-2xl
                  border border-white/[0.05] bg-white/[0.02]
                  hover:border-red-500/25
                  transition-all duration-500
                  cursor-pointer
                  
                  ${isHero
                    ? "md:col-span-7 h-[260px] sm:h-[320px] md:h-[420px]"
                    : "md:col-span-5 h-[260px] sm:h-[320px] md:h-[420px]"
                  }
                `}
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt="Moto Pep Gallery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Multi-layer overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>

                {/* Hover accent border glow */}
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_rgba(232,18,36,0.05)] opacity-0 group-hover:opacity-100 transition duration-700"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-4 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">

                  <div className="px-2.5 py-1 rounded-full border border-white/[0.08] bg-black/50 backdrop-blur-xl text-[9px] md:text-[10px] uppercase tracking-[2px] w-fit mb-2 md:mb-3 text-gray-300 font-medium">
                    Moto Pep
                  </div>

                  <h2 className="text-lg md:text-2xl font-bold leading-tight">
                    Premium Showcase
                  </h2>

                </div>

                {/* Corner gradient accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-500/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Gallery;