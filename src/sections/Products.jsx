import products from "../data/products";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";

function Products() {

  const { t, i18n } = useTranslation();

  const isTelugu = i18n.language === "te";

  const featuredProduct = products[0];

  const secondaryProducts = products.slice(1);

  return (

    <section
      id="products"
      className="relative overflow-hidden bg-[#040404] py-20 md:py-32 px-4 md:px-8"
    >

      {/* Ambient Lighting */}
      <div className="absolute top-[-10%] right-[-10%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-red-500/[0.08] blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/[0.05] blur-[180px] rounded-full"></div>

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14 md:mb-24 max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >

            <p className="text-[10px] md:text-[11px] uppercase tracking-[4px] text-red-500/70 font-medium mb-4">
              ── Moto Pep Showcase
            </p>

            <h2
              className={`
                automotive-heading
                font-black
                uppercase
                leading-[0.9]

                ${isTelugu
                  ? "text-3xl sm:text-4xl md:text-5xl"
                  : "text-4xl sm:text-5xl md:text-7xl"
                }
              `}
            >

              <span className="text-white">
                {t("productsHeading1")}
              </span>{" "}

              <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                {t("productsHeading2")}
              </span>

            </h2>

            <p className="mt-5 text-gray-400 text-sm md:text-lg max-w-2xl leading-relaxed">
              {t("productsSubtitle")}
            </p>

          </motion.div>

        </div>

        {/* FEATURED SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-white/[0.06]
            bg-gradient-to-b from-white/[0.05] to-white/[0.01]
            backdrop-blur-2xl
            mb-8
            shadow-[0_0_80px_rgba(255,0,0,0.06)]
          "
        >

          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>

          <div className="grid lg:grid-cols-12 min-h-[600px]">

            {/* IMAGE */}
            <div className="lg:col-span-8 relative overflow-hidden">

              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="
                  w-full
                  h-[320px]
                  md:h-full
                  object-cover
                  scale-[1.02]
                  hover:scale-[1.05]
                  transition-transform
                  duration-[2000ms]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/70"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/[0.05] via-transparent to-blue-500/[0.05]"></div>

              <div className="
                absolute
                top-5 left-5
                md:top-8 md:left-8
                px-5 py-2
                rounded-full
                bg-black/40
                border border-white/[0.08]
                backdrop-blur-xl
                text-[9px] md:text-[10px]
                uppercase
                tracking-[3px]
                text-gray-300
              ">

                Moto Pep Signature Series

              </div>

            </div>

            {/* CONTENT */}
            <div className="
              lg:col-span-4
              relative
              flex
              flex-col
              justify-center
              p-6 md:p-10 lg:p-12
            ">

              <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.04] to-transparent"></div>

              <div className="relative z-10">

                <div className="w-16 h-px bg-gradient-to-r from-red-500 to-transparent mb-6"></div>

                <h2 className="
                  text-3xl
                  md:text-5xl
                  font-black
                  leading-[0.95]
                  mb-5
                ">
                  {featuredProduct.name}
                </h2>

                <p className="
                  text-gray-400
                  leading-relaxed
                  text-sm
                  md:text-lg
                  mb-8
                ">
                  {featuredProduct.description}
                </p>

                {/* Featured CTA Only */}
                <a
                  href="https://wa.me/917093098989"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-red-600
                    to-red-700
                    px-7 py-4
                    text-[11px]
                    md:text-[12px]
                    uppercase
                    tracking-[2px]
                    font-semibold
                    hover:scale-[1.03]
                    transition-all
                    duration-300
                    shadow-2xl
                    shadow-red-900/30
                  "
                >

                  {t("chat")}

                  <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition duration-300" />

                </a>

              </div>

            </div>

          </div>

        </motion.div>

        {/* SECONDARY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {secondaryProducts.map((product, index) => (

            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/[0.06]
                bg-gradient-to-b from-white/[0.05] to-white/[0.01]
                hover:border-red-500/20
                hover:shadow-[0_0_60px_rgba(255,0,0,0.08)]
                transition-all
                duration-500
              "
            >

              {/* Premium Top Light */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>

              {/* Bottom Glow */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[220px] h-[120px] bg-red-500/10 blur-[80px] rounded-full"></div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.04] to-blue-500/[0.03] opacity-0 group-hover:opacity-100 transition duration-700"></div>

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-[340px]
                    object-cover
                    group-hover:scale-[1.08]
                    transition-transform
                    duration-[1500ms]
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Premium Badge */}
                <div className="
                  absolute
                  top-4 left-4
                  px-4 py-2
                  rounded-full
                  bg-black/40
                  border border-white/[0.08]
                  backdrop-blur-xl
                  text-[8px]
                  uppercase
                  tracking-[3px]
                  text-gray-300
                ">

                  Moto Pep Certified

                </div>

              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-7 md:p-8">

                <h2 className="
                  text-2xl
                  font-black
                  leading-tight
                  mb-4
                ">
                  {product.name}
                </h2>

                <p className="
                  text-gray-400
                  text-sm
                  leading-relaxed
                ">
                  {product.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Products;