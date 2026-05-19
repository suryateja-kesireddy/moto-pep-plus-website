import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FloatingCart from "./components/FloatingCart";
import CartSidebar from "./components/CartSidebar";
import Loader from "./components/Loader";

import Hero from "./sections/Hero";
import Products from "./sections/Products";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials";

import ScrollProgress from "./components/ScrollProgress";
import PreOwnedCars from "./sections/PreOwnedCars";
import SellYourCar from "./sections/SellYourCar";

function App() {

  const [loading, setLoading] = useState(true);

  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  /* TOAST */
  const [toast, setToast] = useState({
    show: false,
    message: "",
  });

  /* SHOW TOAST */
  const showToast = (message) => {

    setToast({
      show: true,
      message,
    });

    setTimeout(() => {

      setToast({
        show: false,
        message: "",
      });

    }, 2500);

  };

  /* LOADER */
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  /* ADD TO CART */
  const addToCart = (product) => {

    setCartOpen(true);

    showToast(`${product.name} added to cart`);

    setCartItems((prev) => {

      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      if (existingItem) {

        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];

    });

  };

  /* INCREASE */
  const increaseQty = (id) => {

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

    showToast("Quantity increased");

  };

  /* DECREASE */
  const decreaseQty = (id) => {

    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

    showToast("Quantity updated");

  };

  /* REMOVE */
  const removeFromCart = (id) => {

    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );

    showToast("Item removed from cart");

  };

  /* TOTAL COUNT */
  const cartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  if (loading) {
    return <Loader />;
  }

  return (

    <div className="relative bg-black text-white overflow-hidden">

      {/* Ambient Glow */}
      <div className="fixed top-0 left-0 w-[400px] h-[400px] bg-red-600/[0.04] blur-[180px] rounded-full pointer-events-none"></div>

      <div className="fixed top-[40%] right-0 w-[350px] h-[350px] bg-blue-500/[0.03] blur-[160px] rounded-full pointer-events-none"></div>

      {/* Progress */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Hero />

      <Products
        addToCart={addToCart}
      />
      <PreOwnedCars />
      
      <SellYourCar />

      <Services />

      <Gallery />

      <Testimonials />

      <Contact />

      <Footer />

      {/* Floating Buttons */}
      <FloatingCart
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartCount={cartCount}
      />

      <FloatingWhatsApp />

      {/* Cart Sidebar */}
      <CartSidebar
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cartItems}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeFromCart={removeFromCart}
      />

      {/* PREMIUM TOAST */}
      <AnimatePresence>

        {toast.show && (

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.9,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}

            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="
              fixed
              bottom-6
              left-1/2
              -translate-x-1/2
              z-[999]
              px-5
              py-4
              rounded-2xl
              border
              border-white/[0.08]
              bg-black/70
              backdrop-blur-2xl
              shadow-2xl
              shadow-red-900/20
              overflow-hidden
            "
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/[0.08] via-transparent to-red-500/[0.04]"></div>

            {/* Shine */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shine_2s_linear]"></div>

            <div className="
              relative
              z-10
              flex
              items-center
              gap-3
            ">

              {/* Dot */}
              <div className="
                w-3 h-3
                rounded-full
                bg-red-500
                shadow-lg
                shadow-red-500/40
              "></div>

              {/* Message */}
              <p className="
                text-sm
                md:text-base
                font-medium
                whitespace-nowrap
              ">
                {toast.message}
              </p>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  );
}

export default App;