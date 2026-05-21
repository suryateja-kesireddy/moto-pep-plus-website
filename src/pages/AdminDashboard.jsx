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
  adminLogout,
} from "../utils/auth";

function AdminDashboard() {

  const [cars, setCars] = useState([]);

  const [approvedCount, setApprovedCount] =
    useState(0);

  const [pendingCount, setPendingCount] =
    useState(0);

  /* FETCH DASHBOARD */
 /* REALTIME DASHBOARD */
useEffect(() => {

  /* PENDING REALTIME */
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

  /* APPROVED REALTIME */
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

  /* MARK SOLD */
  const markSold = async (id) => {

    try {

      await markCarAsSold(id);

      alert("Car Marked As Sold");



    } catch (error) {

      console.error(error);

    }

  };

  /* AUTH CHECK */
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
          text-5xl
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
      py-24
      px-5
    ">

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* Glow */}
      <div className="
        fixed
        top-0
        right-0
        w-[500px]
        h-[500px]
        bg-red-500/[0.05]
        blur-[180px]
        rounded-full
        pointer-events-none
      "></div>

      {/* CONTENT */}
      <div className="
        max-w-7xl
        ml-[320px]
        relative
        z-10
      ">

        {/* HEADER */}
        <div className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-10
          mb-16
        ">

          <div>

            <span className="
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
              Moto Pep Admin
            </span>

            <h1 className="
              text-5xl
              md:text-6xl
              font-black
              mt-6
              uppercase
              leading-none
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

          {/* LOGOUT */}
          <button

            onClick={async () => {

              await adminLogout();

              window.location.href =
                "/admin-login";

            }}

            className="
              h-[58px]
              px-8
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

            Logout

          </button>

        </div>

        {/* STATS */}
        <div className="
          grid
          md:grid-cols-2
          gap-6
          mb-14
        ">

          {/* Pending */}
          <div className="
            rounded-[32px]
            border
            border-yellow-500/20
            bg-yellow-500/10
            p-8
          ">

            <p className="
              text-sm
              uppercase
              tracking-[3px]
              text-yellow-300
            ">
              Pending Cars
            </p>

            <h2 className="
              text-6xl
              font-black
              mt-4
            ">
              {pendingCount}
            </h2>

          </div>

          {/* Approved */}
          <div className="
            rounded-[32px]
            border
            border-green-500/20
            bg-green-500/10
            p-8
          ">

            <p className="
              text-sm
              uppercase
              tracking-[3px]
              text-green-300
            ">
              Approved Cars
            </p>

            <h2 className="
              text-6xl
              font-black
              mt-4
            ">
              {approvedCount}
            </h2>

          </div>

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
                No Pending Cars
              </h2>

              <p className="
                text-gray-500
                mt-3
              ">
                All vehicle requests are reviewed
              </p>

            </div>

          )
        }

        {/* CAR GRID */}
        <div className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        ">

          {
            cars.map((car) => (

              <div
                key={car.firebaseId}

                className="
                  rounded-[32px]
                  overflow-hidden
                  border
                  border-white/[0.06]
                  bg-white/[0.03]
                  backdrop-blur-2xl
                "
              >

                {/* IMAGE */}
                <div className="
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

                  {/* DETAILS */}
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

                    <p>🚘 {car.carNumber}</p>

                  </div>

                  {/* BUTTONS */}
                  <div className="
                    flex
                    flex-col
                    gap-3
                    mt-8
                  ">

                    {/* APPROVE + REJECT */}
                    <div className="
                      flex
                      gap-4
                    ">

                      <button

                        onClick={() =>
                          approveCar(car)
                        }

                        className="
                          flex-1
                          h-[54px]
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

                        Reject

                      </button>

                    </div>

                    {/* SOLD */}
                    

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