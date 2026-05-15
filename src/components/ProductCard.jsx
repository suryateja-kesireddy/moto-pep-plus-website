import { motion } from "framer-motion";

function ProductCard({ item, openModal }) {
    return (
        <motion.div
            whileHover={{
                y: -10,
                scale: 1.02,
            }}
            onClick={() => openModal(item)}
            className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-red-500/40 bg-white/5 backdrop-blur-lg cursor-pointer"
        >

            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="h-[300px] w-full object-cover group-hover:scale-110 transition duration-700"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 w-full">

                <h2 className="text-2xl font-bold">
                    {item.title}
                </h2>

            </div>

        </motion.div>
    );
}

export default ProductCard;