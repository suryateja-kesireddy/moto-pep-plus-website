import { motion } from "framer-motion";

function ProductCard({ item, openModal }) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.01,
            }}
            onClick={() => openModal(item)}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] hover:border-red-500/30 bg-white/[0.02] backdrop-blur-xl cursor-pointer transition-all duration-500"
        >

            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="h-[280px] w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-5 w-full">

                <h2 className="text-xl font-bold leading-tight">
                    {item.title}
                </h2>

            </div>

        </motion.div>
    );
}

export default ProductCard;