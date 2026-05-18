import services from "../data/services";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Services() {

  const { t, i18n } = useTranslation();

  const isTelugu = i18n.language === "te";

  return (
    <section
      id="services"
      className="relative py-16 md:py-28 lg:py-32 px-4 md:px-8 overflow-hidden bg-[#030303]"
    >

      {/* Ambient Glows */}
      <div className="absolute top-[10%] left-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-red-500/[0.05] blur-[160px] rounded-full"></div>

      <div className="absolute bottom-[10%] right-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500/[0.04] blur-[160px] rounded-full"></div>

      {/* Top section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading — right-aligned for variety */}
        <div className="automotive-heading mb-12 md:mb-20 md:text-right md:ml-auto md:max-w-2xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >

            {/* Label */}
            <p className="text-[10px] md:text-[11px] uppercase tracking-[4px] text-red-500/70 font-medium mb-3 md:mb-4">
              {t("services")} ──
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
                {t("servicesHeading")}
              </span>

            </h1>

          </motion.div>

        </div>

        {/* Services — Performance Garage Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.015] backdrop-blur-xl p-5 md:p-8 hover:border-red-500/20 transition-all duration-500"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/[0.04] to-transparent rounded-bl-3xl"></div>

                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4 md:gap-6">

                  {/* Icon */}
                  <div className="relative flex-shrink-0">

                    <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border border-red-500/15 bg-red-500/[0.06] flex items-center justify-center text-red-500 text-xl md:text-2xl">

                      <Icon />

                    </div>

                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">

                    <div className="flex items-start justify-between gap-3 mb-3 md:mb-4">

                      <h2 className="text-lg md:text-xl font-bold leading-snug">
                        {t(service.titleKey)}
                      </h2>

                      <span className="text-gray-800 text-2xl md:text-3xl font-black flex-shrink-0 automotive-heading leading-none">
                        0{service.id}
                      </span>

                    </div>

                    <p className="text-gray-500 leading-relaxed text-[13px] md:text-sm">
                      {t(service.descKey)}
                    </p>

                    {/* Bottom Line */}
                    <div className="mt-4 md:mt-6 h-px bg-gradient-to-r from-red-500/20 via-red-500/10 to-transparent"></div>

                  </div>

                </div>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Services;