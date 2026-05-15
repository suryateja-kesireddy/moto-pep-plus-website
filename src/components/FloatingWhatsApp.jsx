import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917093098989"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-lg shadow-green-500/40 hover:scale-110 transition duration-300"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsApp;