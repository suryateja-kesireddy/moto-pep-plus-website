import gallery from "../data/gallery";
import { motion } from "framer-motion";

function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 bg-black">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold uppercase">
          Our <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Gallery</span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore premium automotive transformations, stylish accessories
          and luxury modifications.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {gallery.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10"
          >
            {/* Image */}
            <img
              src={item.image}
              alt="gallery"
              className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>

            {/* Glow */}
            <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 transition duration-500"></div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Gallery;