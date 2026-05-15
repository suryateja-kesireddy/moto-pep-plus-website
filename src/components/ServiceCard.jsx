import { motion } from "framer-motion";

function ServiceCard({ item }) {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-red-500/40 transition duration-500"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 text-3xl mb-6">
        <Icon />
      </div>

      <h2 className="text-2xl font-bold mb-4">
        {item.title}
      </h2>

      <p className="text-gray-400 leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

export default ServiceCard;