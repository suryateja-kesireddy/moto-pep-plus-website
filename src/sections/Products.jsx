import products from "../data/products";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Products() {
  const { t } = useTranslation();

  return (
    <section
      id="products"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black uppercase leading-tight"
          >

            <span className="text-white">
              {t("productsHeading1")}
            </span>{" "}

            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              {t("productsHeading2")}
            </span>

          </motion.h2>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            {t("productsSubtitle")}
          </p>

        </div>
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {products.map((product, index) => (

            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Product Image */}
              <div className="relative h-[320px] overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 backdrop-blur-xl text-sm uppercase tracking-wider">
                  Premium
                </div>

              </div>

              {/* Content */}
              <div className="relative z-10 p-8">

                <h2 className="text-3xl font-bold mb-4">
                  {product.name}
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  {product.description}
                </p>

                {/* Button */}
                <div className="mt-8">

                  <button className="group relative overflow-hidden px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl uppercase tracking-wider">

                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    <span className="relative z-10">
                      View Product
                    </span>

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Products;