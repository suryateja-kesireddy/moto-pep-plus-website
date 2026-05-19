import { motion } from "framer-motion";
import { useState } from "react";

function SellYourCar() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");

  /* WhatsApp Message */
  const whatsappMessage = encodeURIComponent(

`🚗 Sell My Car Request

━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━

Name: ${name}
Phone: ${phone}

━━━━━━━━━━━━━━━
CAR DETAILS
━━━━━━━━━━━━━━━

Brand: ${brand}
Model: ${model}
Year: ${year}
KM Driven: ${km}
Expected Price: ${price}

Please contact me regarding selling my vehicle through Moto Pep Plus.`

  );

  return (

    <section
      id="sell-car"
      className="
        relative
        overflow-hidden
        py-24
        px-5
        md:px-10
      "
    >

      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/[0.05] blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.04] blur-[160px] rounded-full"></div>

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}

          className="max-w-4xl mb-16"
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
            Sell Your Vehicle Through Moto Pep
          </span>

          <h2 className="
            text-4xl
            md:text-7xl
            font-black
            leading-[0.9]
            uppercase
          ">

            Sell Your
            <span className="block text-red-500">
              Car
            </span>

          </h2>

          <p className="
            mt-6
            text-gray-400
            max-w-2xl
            text-sm
            md:text-lg
            leading-relaxed
          ">
            Looking to sell your vehicle? Moto Pep Plus helps connect buyers and sellers with trusted automotive mediation services.
          </p>

        </motion.div>

        {/* Main Layout */}
        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          items-center
        ">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}

            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/[0.06]
              bg-white/[0.03]
              backdrop-blur-2xl
              p-8
              md:p-10
            "
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.04] via-transparent to-blue-500/[0.03]"></div>

            <div className="relative z-10">

              <h3 className="
                text-3xl
                md:text-5xl
                font-black
                leading-tight
                mb-8
              ">
                Premium Vehicle
                <span className="block text-red-500">
                  Mediation Services
                </span>
              </h3>

              <div className="space-y-5">

                {[
                  "Trusted Buyer & Seller Connections",
                  "Premium Car Market Reach",
                  "Luxury Vehicle Listings",
                  "Fast Automotive Deal Support",
                  "Vehicle Inspection Guidance",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-white/[0.06]
                      bg-black/30
                      px-5
                      py-4
                    "
                  >

                    <div className="
                      w-3 h-3
                      rounded-full
                      bg-red-500
                      shadow-lg
                      shadow-red-500/40
                    "></div>

                    <span className="text-gray-300">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}

            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/[0.06]
              bg-white/[0.03]
              backdrop-blur-2xl
              p-8
              md:p-10
            "
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.04] to-transparent"></div>

            <div className="relative z-10">

              <h3 className="
                text-2xl
                md:text-3xl
                font-black
                uppercase
                mb-8
              ">
                Vehicle Details
              </h3>

              <div className="space-y-5">

                <input
                  type="text"
                  placeholder="Customer Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}

                  className="
                    w-full
                    bg-black/40
                    border
                    border-white/[0.06]
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    text-sm
                    focus:border-red-500/30
                    transition
                  "
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}

                  className="
                    w-full
                    bg-black/40
                    border
                    border-white/[0.06]
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    text-sm
                    focus:border-red-500/30
                    transition
                  "
                />

                <input
                  type="text"
                  placeholder="Car Brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}

                  className="
                    w-full
                    bg-black/40
                    border
                    border-white/[0.06]
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    text-sm
                    focus:border-red-500/30
                    transition
                  "
                />

                <input
                  type="text"
                  placeholder="Car Model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}

                  className="
                    w-full
                    bg-black/40
                    border
                    border-white/[0.06]
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    text-sm
                    focus:border-red-500/30
                    transition
                  "
                />

                <div className="grid grid-cols-2 gap-4">

                  <input
                    type="text"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}

                    className="
                      w-full
                      bg-black/40
                      border
                      border-white/[0.06]
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      text-sm
                      focus:border-red-500/30
                      transition
                    "
                  />

                  <input
                    type="text"
                    placeholder="KM Driven"
                    value={km}
                    onChange={(e) => setKm(e.target.value)}

                    className="
                      w-full
                      bg-black/40
                      border
                      border-white/[0.06]
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      text-sm
                      focus:border-red-500/30
                      transition
                    "
                  />

                </div>

                <input
                  type="text"
                  placeholder="Expected Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}

                  className="
                    w-full
                    bg-black/40
                    border
                    border-white/[0.06]
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    text-sm
                    focus:border-red-500/30
                    transition
                  "
                />

                {/* Submit */}
                <a
                  href={`https://wa.me/917093098989?text=${whatsappMessage}`}

                  target="_blank"
                  rel="noreferrer"

                  className="
                    group
                    relative
                    overflow-hidden
                    flex
                    items-center
                    justify-center
                    w-full
                    rounded-2xl
                    bg-gradient-to-r
                    from-red-600
                    to-red-700
                    py-4
                    text-[11px]
                    uppercase
                    tracking-[2px]
                    font-semibold
                    shadow-2xl
                    shadow-red-900/30
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                  "
                >

                  {/* Shine */}
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>

                  <span className="relative z-10">
                    Submit Vehicle Details
                  </span>

                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );
}

export default SellYourCar;