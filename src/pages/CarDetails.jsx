import {
  useState,
  useEffect
} from "react";

import {
  useParams,
  Link
} from "react-router-dom";

import { motion } from "framer-motion";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../utils/firebase";

function CarDetails() {

  const { id } = useParams();

  const [car, setCar] =
    useState(null);
  const [activeImage, setActiveImage] =
    useState("");


  useEffect(() => {

    const fetchCar = async () => {

      try {

        const snapshot =
          await getDocs(
            collection(
              db,
              "approvedCars"
            )
          );

        const cars =
          snapshot.docs.map(
            (doc) => ({

              id: doc.id,
              ...doc.data(),

            })
          );

        const foundCar =
          cars.find(
            (item) =>
              item.id === id
          );

        setCar(foundCar);

        setActiveImage(
          foundCar?.images?.[0]
        );

      } catch (error) {

        console.error(error);

      }

    };

    fetchCar();

  }, [id]);

  if (!car) {

    return (

      <div className="
        min-h-screen
        bg-black
        flex
        items-center
        justify-center
        text-3xl
        font-bold
      ">
        Car Not Found
      </div>

    );

  }

  return (

    <section className="
      min-h-screen
      bg-black
      text-white
      py-28
      px-5
      relative
      overflow-hidden
    ">

      {/* Glow */}
      <div className="
        absolute
        top-0
        right-0
        w-[500px]
        h-[500px]
        bg-red-500/[0.05]
        blur-[180px]
        rounded-full
      "></div>

      <div className="
        max-w-7xl
        mx-auto
        relative
        z-10
        grid
        lg:grid-cols-2
        gap-12
      ">

        {/* LEFT */}
        <div>

          {/* Main Image */}
          <motion.div
            layoutId={`car-${car.id}`}
            className="
              rounded-[36px]
              overflow-hidden
              h-[520px]
              border
              border-white/[0.06]
              bg-white/[0.03]
            "
          >

            <img
              src={activeImage}
              alt=""
              className="
                w-full
                h-full
                object-cover
              "
            />

          </motion.div>

          {/* Thumbnails */}
          <div className="
            grid
            grid-cols-4
            gap-4
            mt-5
          ">

            {
              car.images.map((img, index) => (

                <button
                  key={index}
                  onClick={() => setActiveImage(img)}

                  className={`
                    rounded-2xl
                    overflow-hidden
                    h-24
                    border
                    transition-all
                    duration-300

                    ${activeImage === img
                      ? "border-red-500"
                      : "border-white/[0.06]"
                    }
                  `}
                >

                  <img
                    src={img}
                    alt=""
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                </button>

              ))
            }

          </div>

        </div>

        {/* RIGHT */}
        <div>
          <Link
            to="/#cars"

            className="
    inline-flex
    items-center
    gap-2
    px-5
    py-3
    rounded-2xl
    border
    border-white/[0.08]
    bg-white/[0.03]
    hover:bg-red-600
    transition-all
    duration-300
    mb-6
  "
          >

            ← Back

          </Link>

          {/* Badge */}
          <div className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            bg-red-500/10
            border
            border-red-500/20
            text-xs
            uppercase
            tracking-[3px]
            text-red-300
          ">
            Verified Vehicle
          </div>

          {/* Title */}
          <h1 className="
            text-6xl
            font-black
            leading-none
            mt-6
            uppercase
          ">

            {car.brand}

            <span className="
              block
              text-red-500
              mt-2
            ">
              {car.model}
            </span>

          </h1>

          {/* Price */}
          <div className="
            mt-8
            text-5xl
            font-black
          ">
            ₹ {car.price}
          </div>

          {/* Specs */}
          <div className="
            grid
            grid-cols-2
            gap-5
            mt-10
          ">

            {[
              ["Year", car.year],
              ["KM Driven", `${car.km} KM`],
              ["Car Number", car.carNumber],
              ["Seller", car.name],
            ].map(([label, value]) => (

              <div
                key={label}
                className="
                  p-6
                  rounded-[28px]
                  border
                  border-white/[0.06]
                  bg-white/[0.03]
                "
              >

                <p className="
                  text-gray-500
                  text-sm
                ">
                  {label}
                </p>

                <h3 className="
                  text-2xl
                  font-bold
                  mt-3
                ">
                  {value}
                </h3>

              </div>

            ))}

          </div>

          {/* Buttons */}
          <div className="
            flex
            gap-4
            mt-10
          ">

            <a
              href={`https://wa.me/91${car.phone}`}
              target="_blank"
              rel="noreferrer"

              className="
                flex-1
                h-[64px]
                rounded-2xl
                bg-red-600
                hover:bg-red-700
                transition-all
                duration-300
                flex
                items-center
                justify-center
                font-semibold
                tracking-[2px]
                uppercase
              "
            >
              WhatsApp Seller
            </a>

            <a
              href={`tel:+91${car.phone}`}

              className="
                w-[64px]
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.03]
                flex
                items-center
                justify-center
                text-2xl
              "
            >
              📞
            </a>

          </div>

        </div>

      </div>

    </section>

  );

}

export default CarDetails;