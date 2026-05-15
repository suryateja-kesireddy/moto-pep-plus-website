import products from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

import { motion } from "framer-motion";
import { useState } from "react";

function Products() {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <motion.section
      id="products"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-32 px-6 bg-black"
      >

        {/* Heading */}
        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-6xl font-bold uppercase">
            Our <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Products</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore premium automotive accessories designed to upgrade
            your car’s style, comfort and performance.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto mt-10">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-red-500"
            />
          </div>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              openModal={setSelectedProduct}
            />
          ))}

        </div>

      </motion.section>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        closeModal={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default Products;