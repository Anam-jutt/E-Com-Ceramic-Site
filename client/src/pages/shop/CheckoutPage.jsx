import React, { useEffect } from "react";
import useCartStore from "../../store/cartStore";
import { FaShoppingBag } from "react-icons/fa";

const CheckoutPage = () => {
  const { cart, fetchCart } = useCartStore();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    if (!item.product) return sum;
    return sum + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600">
      <div className="max-w-7xl mx-auto p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        {/* Left: Form */}
        <div className="bg-gradient-to-t from-gray-100 via-gray-200 to-gray-50 shadow-lg rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <FaShoppingBag className="text-3xl text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-700 font-medium">
                First Name
              </label>
              <input
                type="text"
                className="mt-1 w-full border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="John"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium">
                Last Name
              </label>
              <input
                type="text"
                className="mt-1 w-full border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Doe"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="mt-1 w-full border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="john@example.com"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-700 font-medium">
                Shipping Address
              </label>
              <input
                type="text"
                className="mt-1 w-full border-gray-300 rounded-lg shadow-sm px-4 py-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="123 Main St, City, Country"
              />
            </div>

            <div className="md:col-span-2">
              <Link
                type="submit"
                to='orderdone'
                className="w-full bg-emerald-600 duration-500 cursor-pointer text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition"
              >
                Place an Order of  $ {totalPrice.toFixed(2)}
              </Link>
            </div>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-gray-50 shadow-lg rounded-2xl p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Order Summary
          </h2>

          <ul className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {cart.map((item) => (
              <li
                key={item.product._id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.product.images?.[0] || "/placeholder.jpg"}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      {item.product.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × ${item.product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <p className="text-right font-semibold text-gray-700">
                  ${(item.quantity * item.product.price).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <div className="border-t pt-4 space-y-2 text-gray-700">
            <p className="flex justify-between">
              <span>Total Items:</span>
              <span>{totalItems}</span>
            </p>
            <p className="flex justify-between font-bold text-xl text-gray-900">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
