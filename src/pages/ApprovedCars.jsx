import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../utils/firebase";

import AdminSidebar from "../components/AdminSidebar";

import {
  markCarAsSold
} from "../data/firebaseCars";

function ApprovedCars() {

  const [cars, setCars] = useState([]);

  /* FETCH APPROVED */
  const fetchApprovedCars =
    async () => {

      try {

        const querySnapshot =
          await getDocs(
            collection(
              db,
              "approvedCars"
            )
          );

        const approvedCars =
          querySnapshot.docs.map(
            (doc) => ({

              id: doc.id,
              ...doc.data(),

            })
          );

        setCars(approvedCars);

      } catch (error) {

        console.error(error);

      }

    };

  useEffect(() => {

    fetchApprovedCars();

  }, []);

  /* DELETE */
  const deleteCar = async (id) => {

    try {

      await deleteDoc(
        doc(
          db,
          "approvedCars",
          id
        )
      );

      fetchApprovedCars();

      alert("Car Deleted");

    } catch (error) {

      console.error(error);

    }

  };

  /* SOLD */
  const markSold = async (id) => {

    try {

      await markCarAsSold(id);

      fetchApprovedCars();

      alert("Marked As Sold");

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <section className="
      min-h-screen
      bg-black
      text-white
      py-24
      px-5
    ">

      <AdminSidebar />

      {/* CONTENT */}
      <div className="
        max-w-7xl
        ml-[320px]
      ">

        {/* HEADER */}
        <div className="mb-16">

          <span className="
            px-5
            py-2
            rounded-full
            bg-green-500/10
            border
            border-green-500/20
            text-xs
            uppercase
            tracking-[3px]
            text-green-300
          ">

            Marketplace Inventory

          </span>

          <h1 className="
            text-6xl
            font-black
            uppercase
            mt-6
            leading-none
          ">

            Approved

            <span className="
              block
              text-green-500
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
              rounded-[36px]
              border
              border-white/[0.06]
              bg-white/[0.03]
              flex
              items-center
              justify-center
              text-4xl
              font-black
            ">

              No Approved Cars

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

              <div
                key={car.id}

                className="
                  rounded-[32px]
                  overflow-hidden
                  border
                  border-white/[0.06]
                  bg-white/[0.03]
                "
              >

                {/* IMAGE */}
                <div className="
                  relative
                  h-[240px]
                  overflow-hidden
                ">

                  <img
                    src={car.images?.[0]}
                    alt=""

                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                  {
                    car.sold === true && (

                      <div className="
                        absolute
                        top-4
                        right-4
                        px-4
                        py-2
                        rounded-full
                        bg-yellow-500
                        text-black
                        font-bold
                      ">

                        SOLD

                      </div>

                    )
                  }

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h2 className="
                    text-3xl
                    font-black
                    uppercase
                  ">

                    {car.brand}

                    <span className="
                      block
                      text-green-500
                    ">

                      {car.model}

                    </span>

                  </h2>

                  <div className="
                    mt-6
                    space-y-3
                    text-sm
                    text-gray-300
                  ">

                    <p>👤 {car.name}</p>

                    <p>📞 +91 {car.phone}</p>

                    <p>📅 {car.year}</p>

                    <p>🛣 {car.km} KM</p>

                    <p>💰 ₹ {car.price}</p>

                  </div>

                  {/* BUTTONS */}
                  <div className="
                    flex
                    flex-col
                    gap-3
                    mt-8
                  ">

                    {/* SOLD */}
                    {
                      car.sold !== true && (

                        <button

                          onClick={() =>
                            markSold(
                              car.id
                            )
                          }

                          className="
                            h-[54px]
                            rounded-2xl
                            bg-yellow-500
                            hover:bg-yellow-600
                            transition-all
                            duration-300
                            font-semibold
                            uppercase
                            tracking-[2px]
                            text-black
                          "
                        >

                          Mark As Sold

                        </button>

                      )
                    }

                    {/* DELETE */}
                    <button

                      onClick={() =>
                        deleteCar(
                          car.id
                        )
                      }

                      className="
                        h-[54px]
                        rounded-2xl
                        bg-red-600
                        hover:bg-red-700
                        transition-all
                        duration-300
                        font-semibold
                        uppercase
                        tracking-[2px]
                      "
                    >

                      Delete Car

                    </button>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </section>

  );

}

export default ApprovedCars;