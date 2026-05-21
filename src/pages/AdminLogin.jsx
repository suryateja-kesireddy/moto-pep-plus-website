import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { adminLogin } from "../utils/auth";

function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await adminLogin(
        email,
        password
      );

      alert("Login Successful");

      navigate("/admin");

    } catch (error) {

      console.log(error);

      alert("Invalid Credentials");

    }

    setLoading(false);

  };

  return (

    <section className="
      min-h-screen
      bg-black
      text-white
      flex
      items-center
      justify-center
      px-5
      relative
      overflow-hidden
    ">

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
        w-full
        max-w-md
        rounded-[36px]
        border
        border-white/[0.06]
        bg-white/[0.03]
        backdrop-blur-3xl
        p-10
      ">

        <div className="
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

          Moto Pep Admin

        </div>

        <h1 className="
          text-5xl
          font-black
          uppercase
          leading-none
        ">

          Admin

          <span className="
            block
            text-red-500
          ">

            Login

          </span>

        </h1>

        <form
          onSubmit={handleLogin}
          className="
            mt-10
            space-y-5
          "
        >

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
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
            "
          />

          <div className="relative">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }

              placeholder="Password"

              value={password}

              onChange={(e) =>
                setPassword(
                  e.target.value
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
                pr-16
                outline-none
              "
            />

            <button
              type="button"

              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }

              className="
                absolute
                top-1/2
                right-5
                -translate-y-1/2
                text-gray-400
              "
            >

              {
                showPassword
                  ? "🙈"
                  : "👁"
              }

            </button>

          </div>

          <button
            type="submit"
            disabled={loading}

            className="
              w-full
              h-[64px]
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

            {
              loading
                ? "Logging In..."
                : "Login"
            }

          </button>

        </form>

      </div>

    </section>

  );

}

export default AdminLogin;