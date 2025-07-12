import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ThnxContacting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-300 via-gray-600 to-rose-300 flex items-center justify-center px-4">
      <div className="p-10 md:p-16 rounded-3xl text-center max-w-xl bg-white/30 backdrop-blur-md shadow-2xl  border border-white/20 animate-fade-in">
        <FaCheckCircle className="text-green-500 text-7xl mx-auto mb-4 drop-shadow-lg animate-bounce" />

        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4">
          Thank You!
        </h2>

        <p className="text-white text-lg md:text-xl mb-6 font-light drop-shadow">
          Your message has been received. Our team will get in touch with you
          shortly. We appreciate your interest and value your time.
        </p>

        <div className="text-white font-medium text-sm">
          Meanwhile, feel free to explore more on our website or follow us on social media!
        </div>
      </div>
    </div>
  );
};

export default ThnxContacting;
