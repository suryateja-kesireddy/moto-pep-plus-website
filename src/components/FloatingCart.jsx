import { motion } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";

function FloatingCart({ cartOpen, setCartOpen, cartCount }) {

  return (

    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}

      whileHover={{
        scale: 1.06,
      }}

      whileTap={{
        scale: 0.95,
      }}

      onClick={() => setCartOpen(true)}

      className="
        group
        fixed
        bottom-24
        right-5
        md:bottom-28
        md:right-7
        z-50
      "
    >

      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-red-500/20 blur-xl animate-pulse"></div>

      {/* Outer Ring */}
      <div className="absolute inset-0 rounded-full border border-red-500/20 scale-[1.2] group-hover:scale-[1.35] transition-all duration-700"></div>

      {/* Main Button */}
      <div
        className="
          relative
          w-[58px]
          h-[58px]
          md:w-[64px]
          md:h-[64px]
          rounded-full
          overflow-hidden
          border border-white/[0.08]
          bg-black/60
          backdrop-blur-2xl
          flex items-center justify-center
          shadow-2xl shadow-red-900/30
        "
      >

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/15 via-transparent to-red-400/10"></div>

        {/* Shine */}
        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>

        {/* Icon */}
        <FaShoppingBag
          className="
            relative z-10
            text-red-400
            text-xl md:text-2xl
            group-hover:scale-110
            transition-transform duration-300
          "
        />

        {/* Cart Count */}
        {cartCount > 0 && (

          <div className="
            absolute
            -top-1
            -right-1
            min-w-[22px]
            h-[22px]
            px-1
            rounded-full
            bg-gradient-to-r
            from-red-500
            to-red-700
            flex
            items-center
            justify-center
            text-[10px]
            font-bold
            text-white
            shadow-lg
            shadow-red-900/40
          ">

            {cartCount}

          </div>

        )}

      </div>

    </motion.button>

  );
}

export default FloatingCart;