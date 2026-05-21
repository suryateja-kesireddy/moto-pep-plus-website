import { useEffect, useState } from "react";

import AdminSidebar from "../components/AdminSidebar";

import {
  getApprovedCount,
  getPendingCount,
} from "../data/firebaseCars";

function AdminHome() {

  const [approvedCount, setApprovedCount] =
    useState(0);

  const [pendingCount, setPendingCount] =
    useState(0);

  useEffect(() => {

    const loadStats = async () => {

      const approved =
        await getApprovedCount();

      const pending =
        await getPendingCount();

      setApprovedCount(approved);

      setPendingCount(pending);

    };

    loadStats();

  }, []);

  return (

    <section className="
      min-h-screen
      bg-black
      text-white
      py-24
      px-5
    ">

      <AdminSidebar />

      <div className="
        ml-[320px]
        max-w-7xl
      ">

        {/* HEADER */}
        <div className="mb-16">

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
            text-6xl
            font-black
            uppercase
            mt-6
            leading-none
          ">

            Dashboard

            <span className="
              block
              text-red-500
            ">

              Overview

            </span>

          </h1>

        </div>

        {/* STATS */}
        <div className="
          grid
          md:grid-cols-2
          gap-6
        ">

          {/* PENDING */}
          <div className="
            rounded-[36px]
            border
            border-yellow-500/20
            bg-yellow-500/10
            p-10
          ">

            <p className="
              text-sm
              uppercase
              tracking-[4px]
              text-yellow-300
            ">

              Pending Cars

            </p>

            <h2 className="
              text-7xl
              font-black
              mt-5
            ">

              {pendingCount}

            </h2>

          </div>

          {/* APPROVED */}
          <div className="
            rounded-[36px]
            border
            border-green-500/20
            bg-green-500/10
            p-10
          ">

            <p className="
              text-sm
              uppercase
              tracking-[4px]
              text-green-300
            ">

              Approved Cars

            </p>

            <h2 className="
              text-7xl
              font-black
              mt-5
            ">

              {approvedCount}

            </h2>

          </div>

        </div>

      </div>

    </section>

  );

}

export default AdminHome;