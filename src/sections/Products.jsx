import products from "../data/products";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaShoppingBag } from "react-icons/fa";

function Products({ addToCart }) {

  const { t, i18n } = useTranslation();

  const isTelugu = i18n.language === "te";

  const featuredProduct = products[0];

  const secondaryProducts = products.slice(1);

  return (

    <section
      id="products"
      className="
        relative
        overflow-hidden
        bg-[#030303]
        py-20 md:py-32
        px-4 md:px-6
      "
    >

      {/* Ambient Background */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/[0.08] blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-blue-500/[0.05] blur-[180px] rounded-full"></div>

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto">

        {/* SECTION HEADING */}
        <div className="mb-14 md:mb-24 max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >

            <p className="
              text-[10px]
              md:text-xs
              uppercase
              tracking-[5px]
              text-red-500/70
              mb-5
            ">
              ── PREMIUM PERFORMANCE COLLECTION
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

              <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-700 bg-clip-text text-transparent">
                {t("productsHeading2")}
              </span>

            </h2>

            <p className="
              mt-6
              text-gray-400
              text-sm
              md:text-lg
              max-w-2xl
              leading-relaxed
            ">
              {t("productsSubtitle")}
            </p>

          </motion.div>

        </div>

        {/* FEATURED PRODUCT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/[0.06]
            bg-white/[0.03]
            backdrop-blur-2xl
            mb-8 md:mb-10
          "
        >

          <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.04] via-transparent to-blue-500/[0.03]"></div>

          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>

          <div className="grid xl:grid-cols-12">

            {/* IMAGE */}
            <div className="xl:col-span-8 relative overflow-hidden">

              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="
                  w-full
                  h-[340px]
                  md:h-[600px]
                  object-cover
                  brightness-[0.88]
                  contrast-[1.08]
                  saturate-[1.05]
                  hover:scale-[1.04]
                  transition-transform
                  duration-[2000ms]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/80"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              <div className="
                absolute
                top-5 left-5
                md:top-8 md:left-8
                px-5 py-2
                rounded-full
                border border-white/[0.08]
                bg-black/40
                backdrop-blur-xl
                text-[9px]
                md:text-[10px]
                uppercase
                tracking-[3px]
                text-gray-300
              ">

                Moto Pep Signature Series

              </div>

            </div>

            {/* CONTENT */}
            <div className="
              xl:col-span-4
              relative
              flex
              flex-col
              justify-center
              p-7 md:p-12
            ">

              <div className="w-14 h-[2px] bg-gradient-to-r from-red-500 to-transparent rounded-full mb-6"></div>

              <h2 className="
                text-4xl
                md:text-6xl
                font-black
                leading-[0.9]
                tracking-[-2px]
                mb-6
              ">
                {featuredProduct.name}
              </h2>

              <p className="
                text-gray-400
                text-sm
                md:text-lg
                leading-relaxed
                mb-8
              ">
                {featuredProduct.description}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">

                {/* Chat */}
                <a
                  href="https://wa.me/917093098989"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    relative
                    overflow-hidden
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-red-600
                    to-red-700
                    px-7 py-4
                    text-[11px]
                    uppercase
                    tracking-[2px]
                    font-semibold
                    shadow-2xl
                    shadow-red-900/30
                    hover:scale-[1.03]
                    transition-all
                    duration-300
                  "
                >

                  <span className="relative z-10">
                    {t("chat")}
                  </span>

                  <FaArrowRight className="relative z-10 text-[10px]" />

                </a>

                {/* Add To Cart */}
                <button
                  onClick={() => addToCart(featuredProduct)}
                  className="
                    group
                    relative
                    overflow-hidden
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-white/[0.04]
                    backdrop-blur-xl
                    px-7 py-4
                    text-[11px]
                    uppercase
                    tracking-[2px]
                    font-semibold
                    hover:border-red-500/30
                    hover:bg-red-500/[0.08]
                    transition-all
                    duration-300
                  "
                >

                  <FaShoppingBag className="text-red-400" />

                  Add To Cart

                </button>

              </div>

            </div>

          </div>

        </motion.div>

        {/* SECONDARY PRODUCTS */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-12
          gap-6
        ">

          {secondaryProducts.map((product, index) => (

            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              viewport={{ once: true }}

              className={`
                group
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-white/[0.06]
                bg-white/[0.03]
                backdrop-blur-2xl
                transition-all
                duration-700
                hover:border-red-500/20
                hover:-translate-y-1

                ${index === 0 ? "xl:col-span-7" : ""}
                ${index === 1 ? "xl:col-span-5" : ""}
                ${index === 2 ? "xl:col-span-5" : ""}
                ${index === 3 ? "xl:col-span-7" : ""}
                ${index > 3 ? "xl:col-span-6" : ""}
              `}
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.12),transparent_60%)]"></div>

              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-[280px]
                    md:h-[340px]
                    xl:h-[420px]
                    object-cover
                    brightness-[0.88]
                    contrast-[1.05]
                    saturate-[1.1]
                    group-hover:scale-[1.08]
                    group-hover:rotate-[1deg]
                    transition-transform
                    duration-[1800ms]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

                <div className="
                  absolute
                  top-5 left-5
                  px-4 py-2
                  rounded-full
                  border border-white/[0.08]
                  bg-black/40
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
              <div className="
                relative
                z-10
                p-6 md:p-8 xl:p-10
              ">

                <h2 className="
                  text-2xl
                  md:text-3xl
                  font-black
                  leading-tight
                  tracking-[-1px]
                  mb-4
                ">
                  {product.name}
                </h2>

                <div className="w-14 h-[2px] bg-gradient-to-r from-red-500 to-transparent rounded-full mb-5"></div>

                <p className="
                  text-gray-400
                  text-sm
                  md:text-base
                  leading-relaxed
                  mb-7
                ">
                  {product.description}
                </p>

                {/* Add To Cart */}
                <button
                  onClick={() => addToCart(product)}
                  className="
                    group
                    relative
                    overflow-hidden
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-white/[0.04]
                    backdrop-blur-xl
                    px-6 py-3
                    text-[10px]
                    uppercase
                    tracking-[2px]
                    font-semibold
                    hover:border-red-500/30
                    hover:bg-red-500/[0.08]
                    transition-all
                    duration-300
                  "
                >

                  <FaShoppingBag className="text-red-400" />

                  Add To Cart

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Products;