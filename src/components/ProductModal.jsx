import { motion } from "framer-motion";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

function ProductModal({ product, closeModal }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center px-6">

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full relative"
      >

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 z-20 bg-red-600 hover:bg-red-700 w-12 h-12 rounded-full flex items-center justify-center"
        >
          <FaTimes />
        </button>

        <div className="grid md:grid-cols-2">

          {/* Image */}
          <div className="h-full">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-10 flex flex-col justify-center">

            <h1 className="text-4xl font-bold mb-6">
              {product.title}
            </h1>

            <p className="text-gray-400 leading-relaxed mb-8">
              Premium automotive accessory designed to enhance
              your vehicle’s style and driving experience.
            </p>

            <a
              href="https://wa.me/917093098989"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-red-600 hover:bg-red-700 transition duration-300 px-8 py-4 rounded-full font-semibold w-fit shadow-lg shadow-red-500/30"
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