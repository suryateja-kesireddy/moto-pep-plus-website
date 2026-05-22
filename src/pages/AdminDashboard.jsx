import { useEffect, useState } from "react";

import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";

import { db } from "../utils/firebase";

import AdminSidebar from "../components/AdminSidebar";

import {
  markCarAsSold,
} from "../data/firebaseCars";

import {
  auth,
} from "../utils/auth";

function AdminDashboard() {

  const [cars, setCars] = useState([]);

  const [approvedCount, setApprovedCount] =
    useState(0);

  const [pendingCount, setPendingCount] =
    useState(0);

  /* REALTIME DASHBOARD */
  useEffect(() => {

    const unsubscribePending =
      onSnapshot(

        collection(
          db,
          "pendingCars"
        ),

        (snapshot) => {

          const pendingCars =
            snapshot.docs.map(
              (doc) => ({

                firebaseId: doc.id,
                ...doc.data(),

              })
            );

          setCars(pendingCars);

          setPendingCount(
            pendingCars.length
          );

        }

      );

    const unsubscribeApproved =
      onSnapshot(

        collection(
          db,
          "approvedCars"
        ),

        (snapshot) => {

          setApprovedCount(
            snapshot.size
          );

        }

      );

    return () => {

      unsubscribePending();

      unsubscribeApproved();

    };

  }, []);

  /* APPROVE */
  const approveCar = async (car) => {

    try {

      await addDoc(

        collection(db, "approvedCars"),

        {
          ...car,
          approvedAt: Date.now(),
        }

      );

      await deleteDoc(
        doc(
          db,
          "pendingCars",
          car.firebaseId
        )
      );

      alert(
        "Car Approved Successfully"
      );

    } catch (error) {

      console.error(error);

    }

  };

  /* REJECT */
  const rejectCar = async (id) => {

    try {

      await deleteDoc(
        doc(db, "pendingCars", id)
      );

      alert("Car Rejected");

    } catch (error) {

      console.error(error);

    }

  };

  const user = auth.currentUser;

  if (!user) {

    return (

      <div className="
        min-h-screen
        bg-black
        text-white
        flex
        flex-col
        items-center
        justify-center
        gap-5
      ">

        <h1 className="
          text-4xl
          md:text-5xl
          font-black
          uppercase
        ">
          Unauthorized
        </h1>

        <p className="
          text-gray-500
          text-lg
        ">
          Please login as admin
        </p>

      </div>

    );

  }

  return (

    <section className="
      min-h-screen
      bg-black
      text-white
      px-4
      md:px-6
      py-24
      overflow-x-hidden
    ">

      <AdminSidebar />

      {/* Glow */}
      <div className="
        fixed
        top-0
        right-0
        w-[400px]
        h-[400px]
        bg-red-500/[0.05]
        blur-[150px]
        rounded-full
        pointer-events-none
      "></div>

      {/* CONTENT */}
      <div className="
        lg:ml-[320px]
        ml-0
        relative
        z-10
        max-w-7xl
      ">

        {/* HEADER */}
        <div className="
          mb-12
          pt-6
          lg:pt-0
        ">

          <span className="
            px-4
            py-2
            rounded-full
            bg-red-500/10
            border
            border-red-500/20
            text-[10px]
            md:text-xs
            uppercase
            tracking-[3px]
            text-red-300
          ">
            Moto Pep Admin
          </span>

          <h1 className="
            text-[46px]
            sm:text-[60px]
            md:text-[90px]
            lg:text-[120px]
            font-black
            mt-5
            uppercase
            leading-[0.9]
          ">

            Pending

            <span className="
              block
              text-red-500
            ">
              Car Approvals
            </span>

          </h1>

        </div>

        {/* STATS */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
          mb-10
        ">

          {/* Pending */}
          <div className="
            rounded-[28px]
            border
            border-yellow-500/20
            bg-yellow-500/10
            p-6
          ">

            <p className="
              text-xs
              uppercase
              tracking-[3px]
              text-yellow-300
            ">
              Pending Cars
            </p>

            <h2 className="
              text-5xl
              md:text-6xl
              font-black
              mt-3
            ">
              {pendingCount}
            </h2>

          </div>

          {/* Approved */}
          <div className="
            rounded-[28px]
            border
            border-green-500/20
            bg-green-500/10
            p-6
          ">

            <p className="
              text-xs
              uppercase
              tracking-[3px]
              text-green-300
            ">
              Approved Cars
            </p>

            <h2 className="
              text-5xl
              md:text-6xl
              font-black
              mt-3
            ">
              {approvedCount}
            </h2>

          </div>

        </div>

        {/* EMPTY */}
        {
          cars.length === 0 && (

            <div className="
              h-[320px]
              rounded-[30px]
              border
              border-white/[0.06]
              bg-white/[0.03]
              flex
              flex-col
              items-center
              justify-center
              text-center
            ">

              <div className="text-6xl">
                🚘
              </div>

              <h2 className="
                text-3xl
                md:text-4xl
                font-black
                mt-5
              ">
                No Pending Cars
              </h2>

              <p className="
                text-gray-500
                mt-3
                text-sm
              ">
                All vehicle requests are reviewed
              </p>

            </div>

          )
        }

        {/* CAR GRID */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        ">

          {
            cars.map((car) => (

              <div
                key={car.firebaseId}

                className="
                  rounded-[30px]
                  overflow-hidden
                  border
                  border-white/[0.06]
                  bg-white/[0.03]
                  backdrop-blur-2xl
                "
              >

                {/* IMAGE */}
                <div className="
                  h-[220px]
                  md:h-[240px]
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

                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <h2 className="
                    text-2xl
                    md:text-3xl
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

                  {/* DETAILS */}
                  <div className="
                    mt-5
                    space-y-2
                    text-sm
                    text-gray-300
                  ">

                    <p>👤 {car.name}</p>

                    <p>📞 +91 {car.phone}</p>

                    <p>📅 {car.year}</p>

                    <p>🛣 {car.km} KM</p>

                    <p>💰 ₹ {car.price}</p>

                    <p>🚘 {car.carNumber}</p>

                  </div>

                  {/* BUTTONS */}
                  <div className="
                    flex
                    flex-col
                    gap-3
                    mt-7
                  ">

                    <div className="
                      flex
                      flex-col
                      sm:flex-row
                      gap-3
                    ">

                      <button

                        onClick={() =>
                          approveCar(car)
                        }

                        className="
                          flex-1
                          h-[52px]
                          rounded-2xl
                          bg-green-600
                          hover:bg-green-700
                          transition-all
                          duration-300
                          font-semibold
                          uppercase
                          tracking-[2px]
                        "
                      >

                        Approve

                      </button>

                      <button

                        onClick={() =>
                          rejectCar(
                            car.firebaseId
                          )
                        }

                        className="
                          flex-1
                          h-[52px]
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

                        Reject

                      </button>

                    </div>

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

export default AdminDashboard;