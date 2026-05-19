import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaPlus,
  FaMinus,
  FaTrash,
} from "react-icons/fa";

import { useState } from "react";

function CartSidebar({
  cartOpen,
  setCartOpen,
  cartItems,
  increaseQty,
  decreaseQty,
  removeFromCart,
}) {

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  /* WHATSAPP MESSAGE */
  const whatsappMessage = encodeURIComponent(

`🚗 Moto Pep Plus Order Request

━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━

Name: ${customerName}
Phone: ${phone}

━━━━━━━━━━━━━━━
VEHICLE DETAILS
━━━━━━━━━━━━━━━

Brand: ${carBrand}
Model: ${carModel}
Year: ${carYear}

━━━━━━━━━━━━━━━
SELECTED PRODUCTS
━━━━━━━━━━━━━━━

${cartItems.map((item, index) => (
`${index + 1}. ${item.name}
Quantity: ${item.quantity}`
)).join("\n\n")}

━━━━━━━━━━━━━━━
Total Items: ${totalItems}

Please share compatibility, pricing and installation details.`

  );

  return (

    <AnimatePresence>

      {cartOpen && (

        <>

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            onClick={() => setCartOpen(false)}

            className="
              fixed
              inset-0
              bg-black/70
              backdrop-blur-sm
              z-[90]
            "
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}

            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="
              fixed
              top-0
              right-0
              h-full
              w-full
              sm:w-[430px]
              bg-[#070707]
              border-l
              border-white/[0.06]
              backdrop-blur-3xl
              z-[100]
              overflow-hidden
              flex
              flex-col
            "
          >

            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-red-500/[0.08] blur-[120px] rounded-full"></div>

            {/* Header */}
            <div className="
              relative
              z-10
              flex
              items-center
              justify-between
              px-6
              py-5
              border-b
              border-white/[0.06]
            ">

              <div>

                <h2 className="
                  text-2xl
                  font-black
                  uppercase
                  tracking-[2px]
                ">
                  Your Cart
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  {totalItems} Items
                </p>

              </div>

              <button
                onClick={() => setCartOpen(false)}
                className="
                  w-10 h-10
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-white/[0.03]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                "
              >

                <FaTimes />

              </button>

            </div>

            {/* EMPTY */}
            {cartItems.length === 0 ? (

              <div className="
                relative
                z-10
                flex-1
                flex
                flex-col
                items-center
                justify-center
                px-8
                text-center
              ">

                <div className="
                  w-24 h-24
                  rounded-full
                  bg-red-500/10
                  border
                  border-red-500/20
                  flex
                  items-center
                  justify-center
                  text-4xl
                  text-red-400
                  mb-6
                ">
                  🛒
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  Cart is Empty
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  Premium automotive accessories added to cart will appear here.
                </p>

              </div>

            ) : (

              <>

                {/* CONTENT */}
                <div className="
                  relative
                  z-10
                  flex-1
                  overflow-y-auto
                  px-5
                  py-5
                  space-y-5
                ">

                  {/* CUSTOMER FORM */}
                  <div className="
                    rounded-3xl
                    border
                    border-white/[0.06]
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-5
                    space-y-4
                  ">

                    <h3 className="
                      text-sm
                      uppercase
                      tracking-[3px]
                      text-gray-400
                      font-semibold
                    ">
                      Customer Details
                    </h3>

                    <input
                      type="text"
                      placeholder="Customer Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}

                      className="
                        w-full
                        bg-black/40
                        border
                        border-white/[0.06]
                        rounded-2xl
                        px-4
                        py-3
                        outline-none
                        text-sm
                      "
                    />

                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}

                      className="
                        w-full
                        bg-black/40
                        border
                        border-white/[0.06]
                        rounded-2xl
                        px-4
                        py-3
                        outline-none
                        text-sm
                      "
                    />

                  </div>

                  {/* VEHICLE DETAILS */}
                  <div className="
                    rounded-3xl
                    border
                    border-white/[0.06]
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-5
                    space-y-4
                  ">

                    <h3 className="
                      text-sm
                      uppercase
                      tracking-[3px]
                      text-gray-400
                      font-semibold
                    ">
                      Vehicle Details
                    </h3>

                    <input
                      type="text"
                      placeholder="Car Brand"
                      value={carBrand}
                      onChange={(e) => setCarBrand(e.target.value)}

                      className="
                        w-full
                        bg-black/40
                        border
                        border-white/[0.06]
                        rounded-2xl
                        px-4
                        py-3
                        outline-none
                        text-sm
                      "
                    />

                    <input
                      type="text"
                      placeholder="Car Model"
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}

                      className="
                        w-full
                        bg-black/40
                        border
                        border-white/[0.06]
                        rounded-2xl
                        px-4
                        py-3
                        outline-none
                        text-sm
                      "
                    />

                    <input
                      type="text"
                      placeholder="Manufacturing Year"
                      value={carYear}
                      onChange={(e) => setCarYear(e.target.value)}

                      className="
                        w-full
                        bg-black/40
                        border
                        border-white/[0.06]
                        rounded-2xl
                        px-4
                        py-3
                        outline-none
                        text-sm
                      "
                    />

                  </div>

                  {/* CART ITEMS */}
                  {cartItems.map((item) => (

                    <motion.div
                      key={item.id}

                      layout

                      className="
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/[0.06]
                        bg-white/[0.03]
                        backdrop-blur-xl
                        p-4
                      "
                    >

                      <div className="flex gap-4">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="
                            w-24 h-24
                            rounded-2xl
                            object-cover
                          "
                        />

                        <div className="flex-1">

                          <div className="flex justify-between gap-3">

                            <h3 className="
                              text-sm
                              font-bold
                              leading-snug
                            ">
                              {item.name}
                            </h3>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="
                                text-gray-500
                                hover:text-red-400
                                transition
                              "
                            >

                              <FaTrash className="text-sm" />

                            </button>

                          </div>

                          <div className="
                            flex
                            items-center
                            gap-3
                            mt-5
                          ">

                            <button
                              onClick={() => decreaseQty(item.id)}
                              className="
                                w-9 h-9
                                rounded-xl
                                border
                                border-white/[0.06]
                                bg-white/[0.03]
                                flex
                                items-center
                                justify-center
                              "
                            >

                              <FaMinus className="text-xs" />

                            </button>

                            <span className="
                              text-sm
                              font-bold
                            ">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => increaseQty(item.id)}
                              className="
                                w-9 h-9
                                rounded-xl
                                border
                                border-white/[0.06]
                                bg-white/[0.03]
                                flex
                                items-center
                                justify-center
                              "
                            >

                              <FaPlus className="text-xs" />

                            </button>

                          </div>

                        </div>

                      </div>

                    </motion.div>

                  ))}

                </div>

                {/* FOOTER */}
                <div className="
                  border-t
                  border-white/[0.06]
                  p-5
                  bg-black/30
                  backdrop-blur-2xl
                ">

                  <a
                    href={`https://wa.me/917093098989?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"

                    className="
                      group
                      relative
                      overflow-hidden
                      flex
                      items-center
                      justify-center
                      w-full
                      rounded-2xl
                      bg-gradient-to-r
                      from-red-600
                      to-red-700
                      py-4
                      text-[11px]
                      uppercase
                      tracking-[2px]
                      font-semibold
                      shadow-2xl
                      shadow-red-900/30
                    "
                  >

                    <span className="relative z-10">
                      Continue on WhatsApp
                    </span>

                  </a>

                </div>

              </>

            )}

          </motion.div>

        </>

      )}

    </AnimatePresence>

  );
}

export default CartSidebar;