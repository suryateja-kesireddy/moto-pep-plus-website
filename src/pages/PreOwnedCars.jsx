import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
  subscribeApprovedCars
} from "../data/firebaseCars";

function PreOwnedCars() {

  const [cars, setCars] = useState([]);

  /* REALTIME APPROVED CARS */
  useEffect(() => {

    const unsubscribe =
      subscribeApprovedCars(
        (cars) => {

          setCars(

            cars.filter(
              (car) => car.sold !== true
            )

          );

        }
      );

    return () => unsubscribe();

  }, []);

  return (

    <section id="cars"
      className="
    
      min-h-screen
      bg-black
      text-white
      px-6
      py-24
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
        relative
        z-10
        max-w-7xl
        mx-auto
      ">

        {/* HEADER */}
        <div className="mb-16">

          <span className="
            inline-flex
            items-center
            px-5
            py-2
            rounded-full
            border
            border-red-500/20
            bg-red-500/10
            text-xs
            tracking-[3px]
            uppercase
            text-red-300
            mb-6
          ">

            Live Marketplace

          </span>

          <h1 className="
            text-5xl
            md:text-7xl
            font-black
            uppercase
            leading-none
          ">

            Pre-Owned

            <span className="
              block
              text-red-500
            ">
              Cars
            </span>

          </h1>

        </div>

        {/* EMPTY */}
        {
          cars.length === 0 && (

            <div className="
              h-[400px]
              rounded-[40px]
              border
              border-white/[0.06]
              bg-white/[0.03]
              flex
              flex-col
              items-center
              justify-center
              text-center
            ">

              <div className="text-7xl">
                🚘
              </div>

              <h2 className="
                text-4xl
                font-black
                mt-6
              ">
                No Approved Cars Yet
              </h2>

              <p className="
                text-gray-500
                mt-3
              ">
                Approved listings will appear here
              </p>

            </div>

          )
        }

        {/* GRID */}
        <div className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        ">

          {
            cars.map((car) => (

              <Link
                key={car.id}

                to={`/car/${car.id}`}

                className="
                  group
                  rounded-[32px]
                  overflow-hidden
                  border
                  border-white/[0.06]
                  bg-white/[0.03]
                  backdrop-blur-2xl
                  hover:border-red-500/20
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                {/* IMAGE */}
                <div className="
                  relative
                  h-[260px]
                  overflow-hidden
                ">

                  <img
                    src={car.images?.[0]}
                    alt=""

                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      transition-all
                      duration-700
                    "
                  />

                  {/* Overlay */}
                  <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/10
                    to-transparent
                  "></div>

                  {/* PRICE */}
                  <div className="
                    absolute
                    top-4
                    right-4
                    px-4
                    py-2
                    rounded-full
                    bg-red-600
                    text-sm
                    font-bold
                  ">

                    ₹ {car.price}

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h2 className="
                    text-3xl
                    font-black
                    uppercase
                    leading-none
                  ">

                    {car.brand}

                    <span className="
                      block
                      text-red-500
                      mt-2
                    ">
                      {car.model}
                    </span>

                  </h2>

                  {/* SPECS */}
                  <div className="
                    flex
                    flex-wrap
                    gap-3
                    mt-6
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

                      📅 {car.year}

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

                      🛣 {car.km} KM

                    </div>

                  </div>

                  {/* BUTTON */}
                  <div className="
                    mt-8
                    h-[54px]
                    rounded-2xl
                    bg-red-600
                    hover:bg-red-700
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center
                    font-semibold
                    uppercase
                    tracking-[2px]
                  ">

                    View Details

                  </div>

                </div>

              </Link>

            ))
          }

        </div>

      </div>

    </section>

  );

}

export default PreOwnedCars;