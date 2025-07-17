import React, { useEffect } from "react";
import useCartStore from "../../store/cartStore";
import {
  FaShoppingCart,
  FaTrashAlt,
  FaMinus,
  FaPlus,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, fetchCart, addToCart, removeFromCart, decreaseQuantity } =
    useCartStore();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce((total, item) => {
    // Defensive check, but you shouldn't need it now
    if (!item.product || typeof item.product.price !== "number") return total;
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600 min-h-screen">
      <div className="max-w-6xl mx-auto p-6 lg:p-12 space-y-8">
        <header className="text-center space-y-2">
          <FaShoppingCart className="mx-auto text-5xl text-emerald-600" />
          <h1 className="text-4xl font-extrabold text-gray-900">
            Shopping Cart
          </h1>
          <p className="text-gray-600 text-lg">
            Here's a curated view of items you're planning to buy.
          </p>
        </header>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <p className="text-gray-200 text-xl">
              Your shopping cart is empty.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 transition"
            >
              <FaArrowLeft className="mr-2" /> Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <ul className="space-y-6">
              {cart
                .filter((item) => item.product !== null)
                .map((item) => (
                  <li
                    key={item.product?._id || item._id}
                    className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-center gap-4 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={item.product.images?.[0] || "/placeholder.jpg"}
                      alt={item.product.name}
                      className="h-28 w-28 object-cover rounded-lg"
                    />
                    <div className="flex flex-col space-y-2">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.product.name}
                      </h2>
                      <p className="text-gray-600 font-extrabold text-lg">
                        <span className="font-bold">
                          {typeof item.product.price === "number"
                            ? `$${item.product.price.toFixed(2)}`
                            : "No price"}
                        </span>{" "}
                        × {item.quantity} ={" "}
                        <span className="font-bold text-gray-900">
                          {typeof item.product.price === "number"
                            ? new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                              }).format(item.product.price * item.quantity)
                            : "N/A"}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.product._id)}
                        className="p-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition"
                      >
                        <FaMinus />
                      </button>
                      <span className="text-xl font-bold   text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => addToCart(item.product._id)}
                        className="p-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition"
                      >
                        <FaPlus />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product._id)}
                        className="p-2 text-gray-600 hover:text-rose-500 transition ml-4"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
            {/* Summary & Actions */}
            <div className="bg-gray-100/70 rounded-xl shadow-lg p-8 flex flex-col md:flex-row md:justify-between items-center gap-6 mt-8">
              <div className="text-center md:text-left space-y-2">
                <p className="font-extrabold text-xl text-gray-700">
                  <span className="font-semibold">Total Items:</span>{" "}
                  {totalItems}
                </p>
                <p className="text-2xl font-extrabold text-emerald-600">
                  Total: ${totalPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto px-8 py-3 bg-gray-400 text-gray-800 rounded-full hover:bg-gray-300 transition font-medium"
                >
                  Continue Shopping
                </Link>
                <Link
                  to="/checkout"
                  className="w-full sm:w-auto px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition font-medium"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
