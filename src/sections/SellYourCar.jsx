import { motion } from "framer-motion";

import {
  useState,
  useRef
} from "react";

import { uploadFileToCloudinary } from "../utils/cloudinary";

import { savePendingCar } from "../data/firebaseCars";

function SellYourCar() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");
  const [carNumber, setCarNumber] =
    useState("");

  const [carImages, setCarImages] =
    useState([]);

  const [previewImages, setPreviewImages] =
    useState([]);

  const [rcBook, setRcBook] =
    useState(null);

  const [license, setLicense] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [errors, setErrors] =
    useState({});

  /* REFS */
  const nameRef = useRef(null);

  const phoneRef = useRef(null);

  const brandRef = useRef(null);

  const modelRef = useRef(null);

  const yearRef = useRef(null);

  const kmRef = useRef(null);

  const priceRef = useRef(null);

  const carNumberRef =
    useRef(null);

  /* IMAGE UPLOAD */
  const handleImageUpload = (e) => {

    const files =
      [...e.target.files];

    if (files.length > 8) {

      alert(
        "Maximum 8 images allowed"
      );

      return;

    }

    setCarImages(files);

    const previews =
      files.map((file) =>
        URL.createObjectURL(file)
      );

    setPreviewImages(previews);

  };

  /* VALIDATION */
  const validateForm = () => {

    let newErrors = {};

    carImages.forEach((file) => {

      if (
        file.size >
        5 * 1024 * 1024
      ) {

        newErrors.images =
          "Each image must be under 5MB";

      }

    });

    if (!name.trim()) {

      newErrors.name =
        "Customer name required";

    } else if (
      !name
        .trim()
        .match(/^[A-Za-z ]+$/)
    ) {

      newErrors.name =
        "Only letters allowed";

    }

    if (
      !phone.match(
        /^[0-9]{10}$/
      )
    ) {

      newErrors.phone =
        "Enter valid 10 digit phone";

    }

    if (!brand.trim()) {

      newErrors.brand =
        "Brand required";

    }

    if (!model.trim()) {

      newErrors.model =
        "Model required";

    }

    if (!year.trim()) {

      newErrors.year =
        "Year required";

    }

    if (!km.trim()) {

      newErrors.km =
        "KM required";

    }

    if (!price.trim()) {

      newErrors.price =
        "Expected price required";

    }

    if (!carNumber.trim()) {

      newErrors.carNumber =
        "Car number required";

    }

    if (
      carImages.length === 0
    ) {

      newErrors.images =
        "Upload car images";

    }

    if (!rcBook) {

      newErrors.rc =
        "RC required";

    }

    if (!license) {

      newErrors.license =
        "License required";

    }

    /* AUTO FOCUS */
    if (newErrors.name) {

      nameRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      nameRef.current?.focus();

    } else if (
      newErrors.phone
    ) {

      phoneRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      phoneRef.current?.focus();

    } else if (
      newErrors.brand
    ) {

      brandRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      brandRef.current?.focus();

    } else if (
      newErrors.model
    ) {

      modelRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      modelRef.current?.focus();

    } else if (
      newErrors.year
    ) {

      yearRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      yearRef.current?.focus();

    } else if (
      newErrors.km
    ) {

      kmRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      kmRef.current?.focus();

    } else if (
      newErrors.price
    ) {

      priceRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      priceRef.current?.focus();

    } else if (
      newErrors.carNumber
    ) {

      carNumberRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      carNumberRef.current?.focus();

    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors)
        .length === 0
    );

  };

  /* SUBMIT */
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      if (loading) return;

      if (!validateForm()) {

        return;

      }

      try {

        setLoading(true);

        /* CAR IMAGES */
        const uploadedImages =
          await Promise.all(

            carImages.map(
              (file) =>
                uploadFileToCloudinary(
                  file
                )
            )

          );

        /* RC */
        const rcUrl =
          await uploadFileToCloudinary(
            rcBook
          );

        /* DL */
        const licenseUrl =
          await uploadFileToCloudinary(
            license
          );

        await savePendingCar({

          name,
          phone,
          brand,
          model,
          year,
          km,
          price,
          carNumber,

          images:
            uploadedImages,

          rcUrl,
          licenseUrl,

        });

        alert(
          "Vehicle submitted successfully"
        );

        /* RESET */
        setName("");

        setPhone("");

        setBrand("");

        setModel("");

        setYear("");

        setKm("");

        setPrice("");

        setCarNumber("");

        setCarImages([]);

        setPreviewImages([]);

        setRcBook(null);

        setLicense(null);

        setErrors({});

        setLoading(false);

      } catch (error) {

        console.log(error);

        setLoading(false);

      }

    };

  return (

    <section
      id="sell-car"
      className="
        py-24
        px-5
        md:px-10
      "
    >

      <div className="
        max-w-7xl
        mx-auto
      ">

        {/* TITLE */}
        <motion.div

          initial={{
            opacity: 0,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.7
          }}

          viewport={{
            once: true
          }}

          className="
            mb-16
          "
        >

          <h2 className="
            text-5xl
            md:text-7xl
            font-black
            uppercase
          ">

            Sell Your

            <span className="
              block
              text-red-500
            ">

              Car

            </span>

          </h2>

        </motion.div>

        {/* FORM */}
        <div className="
          grid
          lg:grid-cols-2
          gap-10
        ">

          {/* LEFT */}
          <div className="
            rounded-[36px]
            border
            border-white/[0.06]
            bg-white/[0.03]
            p-8
          ">

            <div className="
              grid
              md:grid-cols-2
              gap-5
            ">

              {/* NAME */}
              <div className="
                md:col-span-2
              ">

                <input
                  ref={nameRef}

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

                  className={`
                    w-full
                    h-[64px]
                    rounded-2xl
                    border
                    ${
                      errors.name
                        ? "border-red-500"
                        : "border-white/[0.06]"
                    }
                    bg-black/40
                    px-5
                    outline-none
                  `}
                />

                {
                  errors.name && (

                    <p className="
                      text-red-500
                      text-xs
                      mt-2
                    ">

                      {errors.name}

                    </p>

                  )
                }

              </div>

              {/* PHONE */}
              <div className="
                md:col-span-2
              ">

                <input
                  ref={phoneRef}

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

                  className={`
                    w-full
                    h-[64px]
                    rounded-2xl
                    border
                    ${
                      errors.phone
                        ? "border-red-500"
                        : "border-white/[0.06]"
                    }
                    bg-black/40
                    px-5
                    outline-none
                  `}
                />

              </div>

              {/* BRAND */}
              <input
                ref={brandRef}

                type="text"

                placeholder="Car Brand"

                value={brand}

                onChange={(e) =>
                  setBrand(
                    e.target.value
                  )
                }

                className={`
                  w-full
                  h-[64px]
                  rounded-2xl
                  border
                  ${
                    errors.brand
                      ? "border-red-500"
                      : "border-white/[0.06]"
                  }
                  bg-black/40
                  px-5
                  outline-none
                `}
              />

              {/* MODEL */}
              <input
                ref={modelRef}

                type="text"

                placeholder="Car Model"

                value={model}

                onChange={(e) =>
                  setModel(
                    e.target.value
                  )
                }

                className={`
                  w-full
                  h-[64px]
                  rounded-2xl
                  border
                  ${
                    errors.model
                      ? "border-red-500"
                      : "border-white/[0.06]"
                  }
                  bg-black/40
                  px-5
                  outline-none
                `}
              />

              {/* YEAR */}
              <input
                ref={yearRef}

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

                className={`
                  w-full
                  h-[64px]
                  rounded-2xl
                  border
                  ${
                    errors.year
                      ? "border-red-500"
                      : "border-white/[0.06]"
                  }
                  bg-black/40
                  px-5
                  outline-none
                `}
              />

              {/* KM */}
              <input
                ref={kmRef}

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

                className={`
                  w-full
                  h-[64px]
                  rounded-2xl
                  border
                  ${
                    errors.km
                      ? "border-red-500"
                      : "border-white/[0.06]"
                  }
                  bg-black/40
                  px-5
                  outline-none
                `}
              />

              {/* PRICE */}
              <input
                ref={priceRef}

                type="text"

                placeholder="Expected Price"

                value={price}

                onChange={(e) =>
                  setPrice(
                    e.target.value.replace(
                      /\D/g,
                      ""
                    )
                  )
                }

                className={`
                  w-full
                  h-[64px]
                  rounded-2xl
                  border
                  ${
                    errors.price
                      ? "border-red-500"
                      : "border-white/[0.06]"
                  }
                  bg-black/40
                  px-5
                  outline-none
                `}
              />

              {/* CAR NUMBER */}
              <input
                ref={carNumberRef}

                type="text"

                placeholder="Car Number"

                value={carNumber}

                onChange={(e) =>
                  setCarNumber(
                    e.target.value.toUpperCase()
                  )
                }

                className={`
                  w-full
                  h-[64px]
                  rounded-2xl
                  border
                  ${
                    errors.carNumber
                      ? "border-red-500"
                      : "border-white/[0.06]"
                  }
                  bg-black/40
                  px-5
                  outline-none
                `}
              />

            </div>

          </div>

          {/* RIGHT */}
          <div className="
            rounded-[36px]
            border
            border-white/[0.06]
            bg-white/[0.03]
            p-8
          ">

            {/* IMAGE UPLOAD */}
            <label className="
              flex
              items-center
              justify-center
              h-[180px]
              rounded-[32px]
              border
              border-dashed
              border-white/[0.08]
              cursor-pointer
            ">

              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />

              <div className="text-center">

                <div className="
                  text-6xl
                ">
                  🚘
                </div>

                <p className="
                  mt-3
                  font-semibold
                ">

                  Upload Car Images

                </p>

              </div>

            </label>

            {
              errors.images && (

                <p className="
                  text-red-500
                  text-xs
                  mt-2
                ">

                  {errors.images}

                </p>

              )
            }

            {/* PREVIEW */}
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
                      (
                        image,
                        index
                      ) => (

                        <img
                          key={index}
                          src={image}
                          alt=""

                          className="
                            h-28
                            w-full
                            object-cover
                            rounded-2xl
                          "
                        />

                      )
                    )
                  }

                </div>

              )
            }

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

                <p className="
                  font-semibold
                ">

                  Upload RC

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

              <div className="
                text-3xl
              ">
                📄
              </div>

            </label>

            {
              errors.rc && (

                <p className="
                  text-red-500
                  text-xs
                  mt-2
                ">

                  {errors.rc}

                </p>

              )
            }

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

                <p className="
                  font-semibold
                ">

                  Upload Driving License

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

              <div className="
                text-3xl
              ">
                🪪
              </div>

            </label>

            {
              errors.license && (

                <p className="
                  text-red-500
                  text-xs
                  mt-2
                ">

                  {errors.license}

                </p>

              )
            }

            {/* BUTTON */}
            <button
              onClick={handleSubmit}

              disabled={loading}

              className="
                w-full
                h-[64px]
                rounded-2xl
                bg-red-600
                hover:bg-red-700
                transition-all
                duration-300
                mt-8
                font-semibold
                uppercase
                tracking-[2px]
              "
            >

              {
                loading
                  ? "Uploading..."
                  : "Submit Vehicle"
              }

            </button>

          </div>

        </div>

      </div>

    </section>

  );

}

export default SellYourCar;