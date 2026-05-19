import { motion } from "framer-motion";
import { useState } from "react";
import { uploadFileToCloudinary } from "../utils/cloudinary";
import { saveCar } from "../data/carStorage";

function SellYourCar() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");
  const [carNumber, setCarNumber] = useState("");

  const [carImages, setCarImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const [rcBook, setRcBook] = useState(null);
  const [license, setLicense] = useState(null);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  /* IMAGE PREVIEW */
  const handleImageUpload = (e) => {

    const files = [...e.target.files];

    setCarImages(files);

    const previews = files.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviewImages(previews);

  };

  /* VALIDATION */
  const validateForm = () => {

    let newErrors = {};

    if (!name.trim().match(/^[A-Za-z ]+$/)) {
      newErrors.name = "Only letters allowed";
    }

    if (!phone.match(/^[0-9]{10}$/)) {
      newErrors.phone =
        "Enter valid 10 digit phone";
    }

    if (!brand.trim()) {
      newErrors.brand = "Brand required";
    }

    if (!model.trim()) {
      newErrors.model = "Model required";
    }

    if (!year.trim()) {
      newErrors.year = "Year required";
    }

    if (!km.trim()) {
      newErrors.km = "KM required";
    }

    if (!price.trim()) {
      newErrors.price =
        "Expected price required";
    }

    if (!carNumber.trim()) {
      newErrors.carNumber =
        "Car number required";
    }

    if (carImages.length === 0) {
      newErrors.images =
        "Upload car images";
    }

    if (!rcBook) {
      newErrors.rc = "RC required";
    }

    if (!license) {
      newErrors.license =
        "License required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  /* SUBMIT */
  const handleSubmit = async () => {

    if (!validateForm()) {
      return;
    }

    try {

      setLoading(true);

      const uploadedImages = await Promise.all(

        carImages.map((file) =>
          uploadFileToCloudinary(file)
        )

      );

      const rcUrl =
        await uploadFileToCloudinary(rcBook);

      const licenseUrl =
        await uploadFileToCloudinary(license);

      const message = `

🚗 SELL MY CAR REQUEST

━━━━━━━━━━━━━━━

👤 Customer Name:
${name}

📞 Phone:
+91 ${phone}

🚘 Brand:
${brand}

🚘 Model:
${model}

🚘 Car Number:
${carNumber}

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

      // Save car data to local storage
      saveCar({

  id: Date.now(),

  name,
  phone,
  brand,
  model,
  year,
  km,
  price,
  carNumber,

  images: uploadedImages,

  rcUrl,
  licenseUrl,

});

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

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>

      <div className="relative z-10  max-w-[1400px] mx-auto">

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

        </motion.div>

        {/* Layout */}
        <div className="
          grid
          lg:grid-cols-2
          gap-10
          items-start
        ">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
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
              backdrop-blur-3xl
              p-9
              md:p-8
              shadow-[0_0_80px_rgba(255,0,0,0.08)]
            "
          >

            <div className="
              absolute
              top-0
              right-0
              w-[250px]
              h-[250px]
              bg-red-500/[0.06]
              blur-[120px]
              rounded-full
            "></div>

            <div className="relative z-10 mb-8">

              <div className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-red-500/20
                bg-red-500/10
                text-[10px]
                tracking-[2px]
                uppercase
                text-red-300
                mb-5
              ">
                Secure Vehicle Submission
              </div>

              <h3 className="
                text-3xl
                md:text-5xl
                font-black
                uppercase
                leading-none
              ">
                Vehicle
                <span className="block text-red-500">
                  Information
                </span>
              </h3>

            </div>

            <div className="
              relative
              z-10
              grid
              md:grid-cols-2
              gap-5
            ">

              {/* Name */}
              <div className="md:col-span-2">

                <input
                  type="text"
                  placeholder="Customer Name"
                  value={name}

                  onChange={(e) =>
                    setName(
                      e.target.value.replace(
                        /[^A-Za-z ]/g,
                        ""
                      )
                    )
                  }

                  className="
                    w-full
                    h-[64px]
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-black/40
                    px-5
                    outline-none
                    text-sm
                    focus:border-red-500/40
                    focus:shadow-[0_0_20px_rgba(255,0,0,0.15)]
                  "
                />

                {
                  errors.name && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.name}
                    </p>
                  )
                }

              </div>

              {/* Phone */}
              <div className="md:col-span-2">

                <div className="
                  flex
                  items-center
                  h-[64px]
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-black/40
                  overflow-hidden
                ">

                  <div className="
                    px-5
                    text-red-400
                    font-medium
                  ">
                    +91
                  </div>

                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}

                    onChange={(e) =>
                      setPhone(
                        e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10)
                      )
                    }

                    className="
                      w-full
                      h-full
                      bg-transparent
                      outline-none
                      text-sm
                    "
                  />

                </div>

              </div>

              {/* Brand */}
              <input
                type="text"
                placeholder="Car Brand"
                value={brand}
                onChange={(e) =>
                  setBrand(e.target.value)
                }

                className="
                  w-full
                  h-[64px]
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-black/40
                  px-5
                  outline-none
                  text-sm
                "
              />

              {/* Model */}
              <input
                type="text"
                placeholder="Car Model"
                value={model}
                onChange={(e) =>
                  setModel(e.target.value)
                }

                className="
                  w-full
                  h-[64px]
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-black/40
                  px-5
                  outline-none
                  text-sm
                "
              />

              {/* Year */}
              <input
                type="text"
                placeholder="Year"
                value={year}

                onChange={(e) =>
                  setYear(
                    e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 4)
                  )
                }

                className="
                  w-full
                  h-[64px]
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-black/40
                  px-5
                  outline-none
                  text-sm
                "
              />

              {/* KM */}
              <input
                type="text"
                placeholder="KM Driven"
                value={km}

                onChange={(e) =>
                  setKm(
                    e.target.value.replace(
                      /\D/g,
                      ""
                    )
                  )
                }

                className="
                  w-full
                  h-[64px]
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-black/40
                  px-5
                  outline-none
                  text-sm
                "
              />

              {/* Price */}
              <input
                type="text"
                placeholder="Expected Price"
                value={price}

                onChange={(e) =>
                  setPrice(
                    e.target.value.replace(
                      /[^0-9,]/g,
                      ""
                    )
                  )
                }

                className="
                  w-full
                  h-[64px]
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-black/40
                  px-5
                  outline-none
                  text-sm
                "
              />

              {/* Car Number */}
              <input
                type="text"
                placeholder="Car Number"
                value={carNumber}

                onChange={(e) =>
                  setCarNumber(
                    e.target.value.toUpperCase()
                  )
                }

                className="
                  w-full
                  h-[64px]
                  uppercase
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-black/40
                  px-5
                  outline-none
                  text-sm
                "
              />

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
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
              backdrop-blur-3xl
              p-9
              md:p-8
              shadow-[0_0_80px_rgba(255,0,0,0.08)]
            "
          >

            <div className="
              absolute
              bottom-0
              left-0
              w-[220px]
              h-[220px]
              bg-blue-500/[0.05]
              blur-[120px]
              rounded-full
            "></div>

            <div className="relative z-10">

              {/* Header */}
              <div className="mb-8">

                <div className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  text-[10px]
                  tracking-[2px]
                  uppercase
                  text-blue-300
                  mb-5
                ">
                  Upload Documents
                </div>

                <h3 className="
                  text-3xl
                  md:text-5xl
                  font-black
                  uppercase
                  leading-none
                ">
                  Vehicle Media
                </h3>

              </div>

              {/* Upload */}
              <label className="
                relative
                flex
                flex-col
                items-center
                justify-center
                w-full
                h-[190px]
                rounded-[32px]
                border
                border-dashed
                border-white/[0.08]
                bg-gradient-to-br
                from-white/[0.03]
                to-transparent
                cursor-pointer
                overflow-hidden
                group
              ">

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />

                <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  bg-red-500/[0.04]
                  transition-all
                  duration-500
                "></div>

                <div className="relative z-10 text-center">

                  <div className="text-6xl mb-3">
                    🚘
                  </div>

                  <p className="
                    text-xl
                    font-bold
                    mb-2
                  ">
                    Upload Car Photos
                  </p>

                  <span className="
                    text-gray-500
                    text-sm
                  ">
                    Front • Rear • Interior • Dashboard
                  </span>

                </div>

              </label>

              {/* Image Preview */}
              {
                previewImages.length > 0 && (

                  <div className="
                    grid
                    grid-cols-3
                    gap-3
                    mt-5
                  ">

                    {
                      previewImages.map(
                        (image, index) => (

                          <div
                            key={index}
                            className="
                              relative
                              rounded-2xl
                              overflow-hidden
                              group
                            "
                          >

                            <img
                              src={image}
                              alt=""
                              className="
                                w-full
                                h-28
                                object-cover
                                group-hover:scale-110
                                transition-all
                                duration-500
                              "
                            />

                            <button
                              type="button"

                              onClick={() => {

                                const updatedImages =
                                  [...carImages];

                                updatedImages.splice(index, 1);

                                setCarImages(updatedImages);

                                const updatedPreviews =
                                  [...previewImages];

                                updatedPreviews.splice(index, 1);

                                setPreviewImages(
                                  updatedPreviews
                                );

                              }}

                              className="
                                absolute
                                top-2
                                right-2
                                w-7
                                h-7
                                rounded-full
                                bg-red-600
                                text-white
                                text-xs
                              "
                            >
                              ✕
                            </button>

                          </div>

                        )
                      )
                    }

                  </div>

                )
              }

              {/* LIVE VEHICLE PREVIEW */}
              <div className="
                mt-6
                rounded-[28px]
                overflow-hidden
                border
                border-white/[0.06]
                bg-gradient-to-br
                from-white/[0.04]
                to-transparent
              ">

                <div className="
                  relative
                  h-[220px]
                  overflow-hidden
                ">

                  {
                    previewImages.length > 0 ? (

                      <img
                        src={previewImages[0]}
                        alt=""
                        className="
                          w-full
                          h-full
                          object-cover
                        "
                      />

                    ) : (

                      <div className="
                        w-full
                        h-full
                        flex
                        items-center
                        justify-center
                        bg-black/40
                        text-7xl
                      ">
                        🚘
                      </div>

                    )
                  }

                  <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/20
                    to-transparent
                  "></div>

                  <div className="
                    absolute
                    top-4
                    right-4
                    px-4
                    py-2
                    rounded-full
                    bg-red-600
                    text-xs
                    font-semibold
                    tracking-[1px]
                  ">

                    ₹ {price || "0"}

                  </div>

                </div>

                <div className="p-6">

                  <h3 className="
                    text-2xl
                    font-black
                    uppercase
                    leading-tight
                  ">

                    {brand || "Brand"} {" "}
                    {model || "Model"}

                  </h3>

                  <div className="
                    flex
                    flex-wrap
                    gap-3
                    mt-5
                  ">

                    <div className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-white/[0.06]
                      bg-white/[0.04]
                      text-xs
                    ">
                      📅 {year || "Year"}
                    </div>

                    <div className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-white/[0.06]
                      bg-white/[0.04]
                      text-xs
                    ">
                      🛣 {km || "0"} KM
                    </div>

                    <div className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-white/[0.06]
                      bg-white/[0.04]
                      text-xs
                    ">
                      🚘 {carNumber || "CAR NUMBER"}
                    </div>

                  </div>

                </div>

              </div>

              {/* RC */}
              <label className="
                flex
                items-center
                justify-between
                mt-6
                px-5
                py-5
                rounded-2xl
                border
                border-white/[0.06]
                bg-black/30
                cursor-pointer
              ">

                <input
                  type="file"
                  accept=".pdf,image/*"
                  className="hidden"

                  onChange={(e) =>
                    setRcBook(
                      e.target.files[0]
                    )
                  }
                />

                <div>

                  <p className="font-semibold">
                    Registration Certificate
                  </p>

                  {
                    rcBook && (
                      <p className="
                        text-green-400
                        text-xs
                        mt-2
                      ">
                        ✓ {rcBook.name}
                      </p>
                    )
                  }

                </div>

                <div className="text-3xl">
                  📄
                </div>

              </label>

              {/* DL */}
              <label className="
                flex
                items-center
                justify-between
                mt-5
                px-5
                py-5
                rounded-2xl
                border
                border-white/[0.06]
                bg-black/30
                cursor-pointer
              ">

                <input
                  type="file"
                  accept=".pdf,image/*"
                  className="hidden"

                  onChange={(e) =>
                    setLicense(
                      e.target.files[0]
                    )
                  }
                />

                <div>

                  <p className="font-semibold">
                    Driving License
                  </p>

                  {
                    license && (
                      <p className="
                        text-green-400
                        text-xs
                        mt-2
                      ">
                        ✓ {license.name}
                      </p>
                    )
                  }

                </div>

                <div className="text-3xl">
                  🪪
                </div>

              </label>

              {/* Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}

                className="
                  relative
                  overflow-hidden
                  w-full
                  h-[64px]
                  rounded-2xl
                  mt-8
                  bg-gradient-to-r
                  from-red-600
                  to-red-700
                  font-semibold
                  uppercase
                  tracking-[2px]
                  shadow-[0_20px_60px_rgba(255,0,0,0.3)]
                  hover:scale-[1.01]
                  transition-all
                  duration-300
                "
              >

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
                  hover:left-[100%]
                  transition-all
                  duration-1000
                "></div>

                <span className="relative z-10">

                  {
                    loading
                      ? "Uploading Files..."
                      : "Submit Vehicle Details"
                  }

                </span>

              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );
}

export default SellYourCar;