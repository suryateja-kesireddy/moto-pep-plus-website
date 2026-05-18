import { motion } from "framer-motion";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

function ProductModal({ product, closeModal }) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[999] flex items-center justify-center px-4 md:px-6"
      onClick={closeModal}
    >

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl overflow-hidden max-w-4xl w-full relative shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-20 bg-white/[0.06] hover:bg-red-500/20 border border-white/[0.08] hover:border-red-500/30 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
        >
          <FaTimes />
        </button>

        <div className="grid md:grid-cols-2">

          {/* Image */}
          <div className="h-[250px] md:h-full relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/40 hidden md:block"></div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 flex flex-col justify-center">

            <h1 className="automotive-heading text-2xl md:text-3xl font-bold mb-4 leading-tight">
              {product.title}
            </h1>

            <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6">
              Premium automotive accessory designed to enhance
              your vehicle's style and driving experience.
            </p>

            <a
              href="https://wa.me/917093098989"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all duration-300 px-6 py-3.5 rounded-xl font-semibold text-sm w-fit shadow-lg shadow-red-900/30"
            >
              <FaWhatsapp />
              Enquire on WhatsApp
            </a>

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default ProductModal;