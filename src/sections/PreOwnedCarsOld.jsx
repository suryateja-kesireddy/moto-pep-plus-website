import { motion } from "framer-motion";

import preOwnedCars from "../data/preOwnedCars";

import {
  FaGasPump,
  FaCalendarAlt,
  FaTachometerAlt,
} from "react-icons/fa";

function PreOwnedCars() {

  return (

    <section
      id="cars"
      className="
        relative
        py-24
        px-5
        md:px-10
        overflow-hidden
      "
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/[0.05] blur-[180px] rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 max-w-7xl mx-auto mb-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="
            inline-flex
            items-center
            px-5
            py-2
            rounded-full
            border
            border-white/[0.08]
            bg-white/[0.03]
            backdrop-blur-xl
            text-xs
            tracking-[3px]
            uppercase
            text-gray-300
            mb-6
          ">
            Verified Pre-Owned Collection
          </span>

          <h2 className="
            text-4xl
            md:text-6xl
            font-black
            leading-none
            uppercase
          ">
            Premium Used
            <span className="block text-red-500">
              Cars
            </span>
          </h2>

        </motion.div>

      </div>

      {/* Cars Grid */}
      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-8
      ">

        {preOwnedCars.map((car, index) => (

          <motion.div
            key={car.id}

            initial={{
              opacity: 0,
              y: 80,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}

            viewport={{ once: true }}

            whileHover={{
              y: -10,
            }}

            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/[0.06]
              bg-white/[0.03]
              backdrop-blur-2xl
            "
          >

            {/* Image */}
            <div className="relative overflow-hidden">

              <img
                src={car.image}
                alt={car.brand}
                className="
                  h-[340px]
                  w-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                "
              />

              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/20
                to-transparent
              "></div>

            </div>

            {/* Content */}
            <div className="p-7">

              <h3 className="
                text-3xl
                font-black
                leading-tight
                mb-5
              ">
                {car.brand}
              </h3>

              {/* Specs */}
              <div className="
                grid
                grid-cols-2
                gap-4
                mb-6
              ">

                <div className="flex items-center gap-3 text-gray-300">
                  <FaCalendarAlt className="text-red-500" />
                  <span>{car.year}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <FaGasPump className="text-red-500" />
                  <span>{car.fuel}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <FaTachometerAlt className="text-red-500" />
                  <span>{car.km}</span>
                </div>

                <div className="text-gray-300">
                  {car.transmission}
                </div>

              </div>

              {/* Price */}
              <div className="
                text-3xl
                font-black
                text-red-500
                mb-6
              ">
                {car.price}
              </div>

              {/* Button */}
              <a
                href={`https://wa.me/917093098989?text=Hello Moto Pep, I am interested in the ${car.brand}`}

                target="_blank"
                rel="noreferrer"

                className="
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-red-600
                  to-red-500
                  font-bold
                  uppercase
                  tracking-[2px]
                  hover:scale-[1.03]
                  transition-all
                  duration-300
                "
              >
                View Details
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );
}

export default PreOwnedCars;