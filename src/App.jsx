import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Loader from "./components/Loader";

import Hero from "./sections/Hero";
import Products from "./sections/Products";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials";

import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Global Ambient Glow — subtle and cinematic */}

      <div className="fixed top-0 left-0 w-[400px] h-[400px] bg-red-600/[0.04] blur-[180px] rounded-full pointer-events-none"></div>

      <div className="fixed top-[40%] right-0 w-[350px] h-[350px] bg-blue-500/[0.03] blur-[160px] rounded-full pointer-events-none"></div>

      <ScrollProgress />
      <Navbar />

      <Hero />
      <Products />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}

export default App;