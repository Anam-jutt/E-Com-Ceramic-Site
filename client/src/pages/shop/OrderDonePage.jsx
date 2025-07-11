import React from "react";
import { Link } from "react-router-dom";

const OrderDonePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-4 flex justify-center">
          {/* Success icon */}
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12l3 3 5-5"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Thank you for your order!</h1>
        <p className="text-gray-500 mb-6">
          Your order has been placed successfully.<br />
          We appreciate your business.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition font-medium shadow"
        >
          Go Back To Home
        </Link>
      </div>
    </div>
  );
};

export default OrderDonePage;