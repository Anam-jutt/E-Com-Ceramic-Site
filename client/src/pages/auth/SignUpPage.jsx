import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../services/authService";
import useAuthStore from "../../store/useAuthStore";

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    userType: "buyer", // default role
  });

  const loginStore = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signup({
      username: form.name,
      email: form.email,
      password: form.password,
      role: form.userType,
    });

    if (res.token) {
      loginStore.login({
        token: res.token,
        role: res.user.role,
        user: res.user,
      });

      localStorage.setItem("userId", res.user._id);

      if (res.user.role === "seller") {
        navigate("/admin/homes");
      } else {
        navigate("/");
      }
    } else {
      console.log("Signup failed:", res);
      alert(res.error || "Signup failed");
    }
  };

  return (
    <div className="flex items-center px-6 sm:px-12 md:px-20 lg:px-30 siteTColor justify-center bg-gradient-to-br from-gray-500 via-gray-400 to-gray-500">
      <form
        onSubmit={handleSubmit}
        className="w-full p-8 xl:w-[50%] bg-gray-400/90 mt-14 mb-14 backdrop-blur-md rounded-2xl shadow-2xl space-y-6 border border-white/30"
      >
        <h2 className="text-3xl font-bold text-center drop-shadow-sm">
          Create Your Account
        </h2>
        <p className="text-center text-sm">Join as Buyer or Seller</p>

        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            placeholder="••••••••"
            required
          />
        </div>

        {/* User Type Select */}
        <div>
          <label className="block text-sm font-medium mb-1">Register As</label>
          <select
            name="userType"
            value={form.userType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            required
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-gray-800 cursor-pointer text-white font-semibold rounded-lg hover:bg-gray-900 transition shadow-lg"
        >
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-rose-500 hover:underline font-medium">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
