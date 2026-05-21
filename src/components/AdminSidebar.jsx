import {
  FaCarSide,
  FaCheckCircle,
  FaClock,
  FaHome,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  Link,
  useLocation,
} from "react-router-dom";

import { adminLogout } from "../utils/auth";

function AdminSidebar() {

  const location = useLocation();

  /* ACTIVE MENU */
  const isActive = (path) => {

    return location.pathname === path;

  };

  return (

    <aside className="
      fixed
      top-0
      left-0
      h-screen
      w-[280px]
      bg-black
      border-r
      border-white/[0.06]
      p-6
      z-50
    ">

      {/* LOGO */}
      <Link to="/admin">

        <div className="mb-14">

          <h1 className="
            text-3xl
            font-black
            uppercase
            leading-none
          ">

            Moto

            <span className="
              block
              text-red-500
            ">
              Pep
            </span>

          </h1>

          <p className="
            text-gray-500
            text-sm
            mt-3
          ">
            Admin Dashboard
          </p>

        </div>

      </Link>

      {/* MENU */}
      <div className="
        flex
        flex-col
        gap-3
      ">

        {/* HOME */}
        <Link
          to="/admin"

          className={`
            flex
            items-center
            gap-4
            h-[60px]
            px-5
            rounded-2xl
            transition-all
            duration-300

            ${
              isActive("/admin")
                ? "bg-red-600 text-white"
                : "text-gray-400 hover:bg-white/[0.04]"
            }
          `}
        >

          <FaHome />

          Dashboard

        </Link>

        {/* PENDING */}
        <Link
          to="/pending-cars"

          className={`
            flex
            items-center
            gap-4
            h-[60px]
            px-5
            rounded-2xl
            transition-all
            duration-300

            ${
              isActive("/pending-cars")
                ? "bg-red-600 text-white"
                : "text-gray-400 hover:bg-white/[0.04]"
            }
          `}
        >

          <FaClock />

          Pending Cars

        </Link>

        {/* APPROVED */}
        <Link
          to="/approved-cars"

          className={`
            flex
            items-center
            gap-4
            h-[60px]
            px-5
            rounded-2xl
            transition-all
            duration-300

            ${
              isActive("/approved-cars")
                ? "bg-red-600 text-white"
                : "text-gray-400 hover:bg-white/[0.04]"
            }
          `}
        >

          <FaCheckCircle />

          Approved Cars

        </Link>

        {/* MARKETPLACE */}
        <Link
          to="/"

          className="
            flex
            items-center
            gap-4
            h-[60px]
            px-5
            rounded-2xl
            text-gray-400
            hover:bg-white/[0.04]
            transition-all
          "
        >

          <FaCarSide />

          Marketplace

        </Link>

      </div>

      {/* LOGOUT */}
      <button

        onClick={async () => {

          await adminLogout();

          window.location.href =
            "/admin-login";

        }}

        className="
          absolute
          bottom-6
          left-6
          right-6
          h-[58px]
          rounded-2xl
          bg-red-600
          hover:bg-red-700
          transition-all
          duration-300
          font-semibold
          uppercase
          tracking-[2px]
          flex
          items-center
          justify-center
          gap-3
        "
      >

        <FaSignOutAlt />

        Logout

      </button>

    </aside>

  );

}

export default AdminSidebar;