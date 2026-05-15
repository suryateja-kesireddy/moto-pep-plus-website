import gallery from "../data/gallery";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Gallery() {

  const { t } = useTranslation();

  return (
    <section
      id="gallery"
      className="relative py-32 px-6 overflow-hidden bg-black"
    >

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-24">

          <h1 className="text-5xl md:text-7xl font-black uppercase">

            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              {t("galleryHeading")}
            </span>

          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mt-6 rounded-full"></div>

        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[320px]">

          {gallery.map((item, index) => {

            const largeCard =
              index === 0 || index === 3;

            return (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl
                  
                  ${largeCard
                    ? "md:col-span-7"
                    : "md:col-span-5"
                  }
                `}
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt="Moto Pep Gallery"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8">

                  <div className="px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl text-sm uppercase tracking-wider w-fit mb-4">
                    Premium Build
                  </div>

                  <h2 className="text-3xl font-black">
                    Moto Pep Showcase
                  </h2>

                </div>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Gallery;