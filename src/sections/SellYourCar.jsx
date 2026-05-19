import { motion } from "framer-motion";
import { useState } from "react";
import { uploadFileToCloudinary } from "../utils/cloudinary";

function SellYourCar() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");
  const [carImages, setCarImages] = useState([]);

  const [rcBook, setRcBook] = useState(null);

  const [license, setLicense] = useState(null);

  const [loading, setLoading] = useState(false);

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
  const handleSubmit = async () => {

    try {

      setLoading(true);

      /* Upload Car Images */
      const uploadedImages = await Promise.all(

        carImages.map((file) =>
          uploadFileToCloudinary(file)
        )

      );

      /* Upload RC */
      const rcUrl =
        await uploadFileToCloudinary(rcBook);

      /* Upload License */
      const licenseUrl =
        await uploadFileToCloudinary(license);

      /* WhatsApp Message */
      const message = `

🚗 SELL MY CAR REQUEST

━━━━━━━━━━━━━━━

👤 Customer Name:
${name}

📞 Phone:
${phone}

🚘 Brand:
${brand}

🚘 Model:
${model}

📅 Year:
${year}

🛣 KM Driven:
${km}

💰 Expected Price:
${price}

━━━━━━━━━━━━━━━

📸 CAR IMAGES:
${uploadedImages.join("\n")}

━━━━━━━━━━━━━━━

📄 RC BOOK:
${rcUrl}

━━━━━━━━━━━━━━━

🪪 DRIVING LICENSE:
${licenseUrl}

`;

      window.open(
        `https://wa.me/917093098989?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      setLoading(false);

    } catch (error) {

      console.log(error);

      alert("Upload Failed");

      setLoading(false);

    }

  };

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
          flex
          justify-center
        ">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
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
              w-full
              max-w-[760px]
              shadow-[0_0_80px_rgba(255,0,0,0.08)]
            "
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.04] to-transparent"></div>

            <div className="relative z-10">

              <h3 className="
                text-2xl
                md:text-4xl
                font-black
                uppercase
                mb-8
              ">
                Vehicle Details
              </h3>

              <div className="
  grid
  lg:grid-cols-2
  gap-8
">

                {/* LEFT SIDE */}
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

                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-5">

                  {/* Upload Car Images */}
                  <div>

                    <label className="
      block
      text-sm
      uppercase
      tracking-[2px]
      text-gray-400
      mb-3
    ">
                      Upload Car Images
                    </label>

                    <label className="
      relative
      flex
      flex-col
      items-center
      justify-center
      w-full
      h-[210px]
      rounded-3xl
      border
      border-dashed
      border-white/[0.08]
      bg-white/[0.02]
      hover:border-red-500/30
      hover:bg-red-500/[0.03]
      transition-all
      duration-500
      cursor-pointer
      overflow-hidden
      group
    ">

                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"

                        onChange={(e) =>
                          setCarImages([...e.target.files])
                        }
                      />

                      <div className="text-center">

                        <div className="text-6xl mb-4">
                          🚗
                        </div>

                        <p className="
          text-white
          font-semibold
          text-base
        ">
                          Upload Car Photos
                        </p>

                        <span className="
          text-gray-500
          text-xs
          mt-2
          block
        ">
                          Front • Back • Interior • Side View
                        </span>

                      </div>

                    </label>

                  </div>

                  {/* RC Upload */}
                  <label className="
    relative
    flex
    items-center
    justify-between
    px-5
    py-5
    rounded-2xl
    border
    border-white/[0.06]
    bg-white/[0.02]
    hover:border-red-500/30
    transition-all
    duration-500
    cursor-pointer
    group
  ">

                    <input
                      type="file"
                      accept=".pdf,image/*"
                      className="hidden"

                      onChange={(e) =>
                        setRcBook(e.target.files[0])
                      }
                    />

                    <div>

                      <p className="text-white font-medium">
                        Registration Certificate
                      </p>

                      <span className="text-gray-500 text-xs">
                        Upload RC document/photo
                      </span>

                    </div>

                    <div className="text-2xl">
                      📄
                    </div>

                  </label>

                  {/* DL Upload */}
                  <label className="
    relative
    flex
    items-center
    justify-between
    px-5
    py-5
    rounded-2xl
    border
    border-white/[0.06]
    bg-white/[0.02]
    hover:border-red-500/30
    transition-all
    duration-500
    cursor-pointer
    group
  ">

                    <input
                      type="file"
                      accept=".pdf,image/*"
                      className="hidden"

                      onChange={(e) =>
                        setLicense(e.target.files[0])
                      }
                    />
                    <div>

                      <p className="text-white font-medium">
                        Driving License
                      </p>

                      <span className="text-gray-500 text-xs">
                        Upload valid driving license
                      </span>

                    </div>

                    <div className="text-2xl">
                      🪪
                    </div>

                  </label>

                </div>

                {/* FULL WIDTH BUTTON */}
                <div className="lg:col-span-2">

                  <button
                    onClick={handleSubmit}

                    disabled={loading}

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
    hover:scale-[1.01]
    transition-all
    duration-300
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
                  >

                    {/* Shine Effect */}
                    <div className="
    absolute
    top-0
    left-[-100%]
    w-full
    h-full
    bg-gradient-to-r
    from-transparent
    via-white/10
    to-transparent
    group-hover:left-[100%]
    transition-all
    duration-1000
  "></div>

                    <span className="relative z-10">

                      {loading
                        ? "Uploading Files..."
                        : "Submit Vehicle Details"}

                    </span>

                  </button>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );
}

export default SellYourCar;