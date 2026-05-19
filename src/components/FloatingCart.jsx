import { motion } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";

function FloatingCart({
  cartOpen,
  setCartOpen,
  cartCount,
}) {

  return (

    <motion.button

      initial={{
        opacity: 0,
        scale: 0.7,
        y: -20,
      }}

      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}

      transition={{
        duration: 0.5,
        delay: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}

      whileHover={{
        scale: 1.05,
      }}

      whileTap={{
        scale: 0.96,
      }}

      onClick={() => setCartOpen(!cartOpen)}

      className="
        group
        fixed
        top-[88px]
        right-4
        md:top-[95px]
        md:right-7
        z-50
      "
    >

      {/* Pulse Glow */}
      <div className="
        absolute
        inset-0
        rounded-full
        bg-red-500/20
        blur-2xl
        animate-pulse
      "></div>

      {/* Outer Ring */}
      <div className="
        absolute
        inset-0
        rounded-full
        border
        border-red-500/20
        scale-[1.25]
        group-hover:scale-[1.45]
        transition-all
        duration-700
      "></div>

      {/* Main Button */}
      <div className="
        relative
        w-14 h-14
        md:w-16 md:h-16
        rounded-full
        border
        border-white/[0.08]
        bg-black/60
        backdrop-blur-3xl
        overflow-hidden
        flex
        items-center
        justify-center
        shadow-2xl
        shadow-red-900/20
      ">

        {/* Gradient */}
        <div className="
          absolute
          inset-0
          bg-gradient-to-br
          from-red-500/15
          via-transparent
          to-red-400/10
        "></div>

        {/* Shine */}
        <div className="
          absolute
          top-0
          left-[-100%]
          w-full
          h-full
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          group-hover:left-[100%]
          transition-all
          duration-1000
        "></div>

        {/* Icon */}
        <FaShoppingBag
          className="
            relative
            z-10
            text-red-400
            text-xl
            md:text-2xl
            group-hover:scale-110
            transition-transform
            duration-300
          "
        />

        {/* Count Badge */}
        {cartCount > 0 && (

          <div className="
            absolute
            -top-1
            -right-1
            min-w-[22px]
            h-[22px]
            px-1
            rounded-full
            bg-red-500
            border
            border-black
            flex
            items-center
            justify-center
            text-[10px]
            font-bold
            text-white
            shadow-lg
            shadow-red-500/40
          ">

            {cartCount}

          </div>

        )}

      </div>

      {/* Hover Label */}
      <div className="
        absolute
        right-[72px]
        md:right-[84px]
        top-1/2
        -translate-y-1/2
        hidden
        md:flex
        items-center
        gap-2
        px-4
        py-2
        rounded-xl
        border
        border-white/[0.06]
        bg-black/70
        backdrop-blur-2xl
        text-[10px]
        uppercase
        tracking-[3px]
        font-semibold
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-300
        whitespace-nowrap
      ">

        <span className="text-red-400">
          Cart
        </span>

      </div>

    </motion.button>

  );
}

export default FloatingCart;