import services from "../data/services";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";

function Services() {
  return (
    <motion.section
     id="services"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-32 px-6 bg-[#080808]"
    >

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold uppercase">
          Our <span  className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Services</span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Professional automotive solutions designed to elevate your
          driving experience.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-24">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-red-500">5K+</h2>
          <p className="text-gray-400 mt-2">Happy Customers</p>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold text-red-500">10+</h2>
          <p className="text-gray-400 mt-2">Years Experience</p>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold text-red-500">100+</h2>
          <p className="text-gray-400 mt-2">Premium Products</p>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold text-red-500">24/7</h2>
          <p className="text-gray-400 mt-2">Customer Support</p>
        </div>

      </div>

    </motion.section>
  );
}

export default Services;