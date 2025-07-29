import React from "react";
import { IoClose } from "react-icons/io5";
import useCartStore from "../store/cartStore"; // adjust path
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleProceed = () => {
    onClose();
    navigate("/checkout");
  };
const cartItems = useCartStore((state) => state.cart);
const totalPrice = useCartStore((state) => state.getTotal());



  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}

      {/* Slide-In Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] sm:w-[400px] bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between text-gray-500 items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose}>
            <IoClose className="text-2xl hover:text-red-500 cursor-pointer" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 overflow-y-auto max-h-[calc(100vh-180px)]">
          {cartItems?.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">Cart is empty.</p>
          ) : (
            <ul className="space-y-5">
              {cartItems
                ?.filter((item) => item?.product !== null)
                .map((item) => (
                  <li
                    key={item?.product?._id || item?._id}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 shadow-sm rounded-lg p-3"
                  >
                    <img
                      src={
                        item?.product?.image ||
                        item?.product?.images?.[0] ||
                        "/placeholder.jpg"
                      }
                      alt={item?.product?.title || "Item"}
                      className="w-16 h-16 object-cover rounded-lg border"
                    />
                    <div className="flex flex-col text-sm font-medium">
                      <span className="text-gray-800 font-semibold line-clamp-1">
                        {item?.product?.title || item.product?.name}
                      </span>
                      <span className="text-gray-500">
                        ${item.product?.price} × {item.quantity}
                      </span>
                      <span className="text-emerald-600 font-bold">
                        ${item.product?.price * item.quantity}
                      </span>
                    </div>
                  </li>
                ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cartItems?.length > 0 && (
          <div className="p-4 border-t mt-auto">
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span className="text-gray-500">Total:</span>
              <span className="text-emerald-600">
                ${totalPrice?.toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleProceed}
              className="w-full bg-emerald-600 cursor-pointer hover:bg-emerald-700 text-white py-2 rounded-lg font-medium transition"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
