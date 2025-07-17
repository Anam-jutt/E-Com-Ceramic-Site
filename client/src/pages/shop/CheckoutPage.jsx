import React, { useEffect, useState } from "react";
import useCartStore from "../../store/cartStore";
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, fetchCart } = useCartStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    if (!item.product) return sum;
    return sum + item.product.price * item.quantity;
  }, 0);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/orderdone");
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        {/* LEFT FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <FaShoppingBag className="text-3xl text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-800">Checkout</h2>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First + Last Name */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Shipping Address *
              </label>
              <input
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="123 Main St, City, Country"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition"
            >
              Place Order - ${totalPrice.toFixed(2)}
            </button>
          </form>
        </div>

        {/* RIGHT ORDER SUMMARY */}
        <div className="bg-gray-100 shadow-lg rounded-2xl p-6 space-y-6">
          <h3 className="text-xl font-bold text-gray-800 border-b pb-2">
            Order Summary
          </h3>

          <ul className="space-y-4 max-h-96 overflow-y-auto pr-1">
            {cart
              .filter((item) => item.product !== null)
              .map((item) => (
                <li
                  key={item.product._id}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.images?.[0] || "/placeholder.jpg"}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-base">
                        {item.product.name}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {item.quantity} × ${item.product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <p className="text-right font-semibold text-gray-800 text-base">
                    ${(item.quantity * item.product.price).toFixed(2)}
                  </p>
                </li>
              ))}
          </ul>

          <div className="border-t pt-4 text-gray-800">
            <div className="flex justify-between text-base">
              <span>Total Items:</span>
              <span className="font-medium">{totalItems}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-2">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
