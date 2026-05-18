import { motion } from "framer-motion";

function ServiceCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-6 md:p-8 hover:border-red-500/25 transition-all duration-500"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] to-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition duration-700"></div>

      {/* Icon */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-red-500/8 border border-red-500/15 flex items-center justify-center text-red-500 text-xl md:text-2xl mb-5">
        <Icon />
      </div>

      <h2 className="text-lg md:text-xl font-bold mb-3 leading-snug">
        {item.title}
      </h2>

      <p className="text-gray-500 leading-relaxed text-sm">
        {item.description}
      </p>
    </motion.div>
  );
}

export default ServiceCard;