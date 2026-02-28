import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StickyBox() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const goToForm = () => {
    navigate("/contact");

    // small delay to wait for Contact page to render
    setTimeout(() => {
      window.location.hash = "form";
    }, 300);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        // Full box
        <div className="relative bg-blue-100 bg-opacity-80 text-blue-400 p-4 rounded-lg shadow-lg w-64 md:w-80 backdrop-blur-sm transition transform hover:scale-105">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-blue-900 hover:text-blue-700 font-bold"
          >
            ✕
          </button>

          <h3 className="font-bold text-lg mb-2">Connect with Us</h3>
          <p className="text-sm mb-2">Welcome to VH'STEC HSPHEREPVTLTD</p>
          <p className="text-sm mb-4">Choose your experience:</p>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold w-full hover:bg-blue-700 transition"
            onClick={goToForm}
          >
            VH'STECHSPHEREPVTLTD
          </button>
        </div>
      ) : (
        // Minimized "Contact Us" button
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition font-semibold"
        >
          Contact Us
        </button>
      )}
    </div>
  );
}
