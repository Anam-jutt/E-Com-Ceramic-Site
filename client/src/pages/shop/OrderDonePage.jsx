import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const OrderDonePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-emerald-300 via-gray-600 to-rose-300">
      <div className="bg-white/30 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl w-full max-w-md text-center animate-fade-in">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4 drop-shadow-md animate-bounce" />
        <h1 className="text-3xl font-extrabold text-white drop-shadow mb-2">
          Order Confirmed!
        </h1>
        <p className="text-gray-100 text-sm leading-relaxed mb-6">
          Thank you for shopping with us!  <br />
          Your order has been successfully placed.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-gradient-to-tr from-green-500 to-emerald-700 text-white rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-transform"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default OrderDonePage;
