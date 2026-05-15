import services from "../data/services";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Services() {

  const { t } = useTranslation();

  return (
    <section
      id="services"
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
              {t("servicesHeading")}
            </span>

          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mt-6 rounded-full"></div>

        </div>

        {/* Services Layout */}
        <div className="grid lg:grid-cols-2 gap-10">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">

                  {/* Icon */}
                  <div className="relative">

                    <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full"></div>

                    <div className="relative w-24 h-24 rounded-3xl border border-red-500/20 bg-red-500/10 flex items-center justify-center text-red-500 text-4xl">

                      <Icon />

                    </div>

                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <div className="flex items-center justify-between gap-4 mb-6">

                      <h2 className="text-3xl font-black">
                        {t(service.titleKey)}
                      </h2>

                      <span className="text-gray-600 text-5xl font-black">
                        0{service.id}
                      </span>

                    </div>

                    <p className="text-gray-400 leading-relaxed text-lg">
                     {t(service.titleKey)}
                    </p>

                    {/* Bottom Line */}
                    <div className="mt-8 h-px bg-gradient-to-r from-red-500/30 to-transparent"></div>

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