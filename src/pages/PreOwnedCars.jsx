import { useEffect, useMemo, useState } from "react";

import { Link } from "react-router-dom";

import { getCars } from "../data/carStorage";

function PreOwnedCars() {

  const [cars, setCars] = useState([]);

  const [search, setSearch] = useState("");

  const [brandFilter, setBrandFilter] = useState("All");

  useEffect(() => {

    const allCars = getCars();

    setCars(allCars);

  }, []);

  /* BRANDS */
  const brands = useMemo(() => {

    const uniqueBrands = [
      ...new Set(
        cars.map((car) => car.brand)
      ),
    ];

    return ["All", ...uniqueBrands];

  }, [cars]);

  /* FILTERED CARS */
  const filteredCars = useMemo(() => {

    return cars.filter((car) => {

      const matchesSearch =
        car.brand
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        car.model
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesBrand =
        brandFilter === "All" ||
        car.brand === brandFilter;

      return (
        matchesSearch &&
        matchesBrand
      );

    });

  }, [cars, search, brandFilter]);

  return (

    <section
      id="cars"

      className="
        relative
        overflow-hidden
        min-h-screen
        bg-black
        py-28
        px-5
      "
    >

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
      ">

        {/* HEADER */}
        <div className="
          flex
          flex-col
          lg:flex-row
          lg:items-end
          lg:justify-between
          gap-10
          mb-16
        ">

          <div>

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
            ">
              Premium Collection
            </span>

            <h2 className="
              text-5xl
              md:text-7xl
              font-black
              mt-6
              leading-none
              uppercase
            ">

              PRE-OWNED

              <span className="block text-red-500">
                CARS
              </span>

            </h2>

          </div>

          {/* SEARCH + FILTER */}
          <div className="
            flex
            flex-col
            md:flex-row
            gap-4
            w-full
            lg:w-auto
          ">

            {/* SEARCH */}
            <input
              type="text"

              placeholder="Search Cars..."

              value={search}

              onChange={(e) =>
                setSearch(e.target.value)
              }

              className="
                h-[58px]
                px-6
                rounded-2xl
                border
                border-white/[0.06]
                bg-white/[0.03]
                backdrop-blur-xl
                outline-none
                min-w-[260px]
              "
            />

            {/* FILTER */}
            <select
              value={brandFilter}

              onChange={(e) =>
                setBrandFilter(e.target.value)
              }

              className="
                h-[58px]
                px-6
                rounded-2xl
                border
                border-white/[0.06]
                bg-white/[0.03]
                backdrop-blur-xl
                outline-none
              "
            >

              {
                brands.map((brand) => (

                  <option
                    key={brand}
                    value={brand}
                    className="bg-black"
                  >
                    {brand}
                  </option>

                ))
              }

            </select>

          </div>

        </div>

        {/* NO CARS */}
        {
          filteredCars.length === 0 ? (

            <div className="
              h-[420px]
              rounded-[36px]
              border
              border-white/[0.06]
              bg-white/[0.02]
              flex
              flex-col
              items-center
              justify-center
              text-center
            ">

              <div className="text-7xl">
                🚘
              </div>

              <h3 className="
                text-3xl
                font-bold
                mt-6
              ">
                No Cars Found
              </h3>

              <p className="
                text-gray-500
                mt-3
              ">
                Try another search or upload a new car
              </p>

            </div>

          ) : (

            <div className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
            ">

              {
                filteredCars.map((car) => (

                  <Link
                    key={car.id}

                    to={`/car/${car.id}`}

                    className="
                      relative
                      rounded-[32px]
                      overflow-hidden
                      border
                      border-white/[0.06]
                      bg-white/[0.03]
                      backdrop-blur-2xl
                      group
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-red-500/20
                      hover:shadow-[0_20px_80px_rgba(255,0,0,0.12)]
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

                      {/* OVERLAY */}
                      <div className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black
                        via-black/20
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

                      <h3 className="
                        text-2xl
                        font-black
                        uppercase
                      ">

                        {car.brand}

                        <span className="
                          block
                          text-red-500
                          mt-1
                        ">
                          {car.model}
                        </span>

                      </h3>

                      {/* SPECS */}
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
                          bg-white/[0.04]
                          border
                          border-white/[0.05]
                          text-xs
                        ">
                          📅 {car.year}
                        </div>

                        <div className="
                          px-4
                          py-2
                          rounded-full
                          bg-white/[0.04]
                          border
                          border-white/[0.05]
                          text-xs
                        ">
                          🛣 {car.km} KM
                        </div>

                      </div>

                      {/* BUTTON */}
                      <div className="
                        mt-6
                        h-[54px]
                        rounded-2xl
                        border
                        border-red-500/20
                        bg-red-500/10
                        hover:bg-red-600
                        transition-all
                        duration-300
                        flex
                        items-center
                        justify-center
                        font-semibold
                        tracking-[2px]
                        uppercase
                      ">
                        View Details
                      </div>

                    </div>

                  </Link>

                ))
              }

            </div>

          )
        }

      </div>

    </section>

  );

}

export default PreOwnedCars;