import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../services/authService";
import useAuthStore from "../../store/useAuthStore";

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    userType: "buyer",
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

      navigate("/");
    } else {
      console.log("Signup failed:", res);
      alert(res.error || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-20 bg-gradient-to-br from-emerald-300 via-gray-600 to-rose-300 pt-20 pb-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 animate-fade-in space-y-6"
      >
        <h2 className="text-4xl font-extrabold text-center text-white drop-shadow mb-2">
          Create an Account
        </h2>
        <p className="text-center text-gray-200 text-sm mb-4">
          Join our platform as a <strong>Buyer</strong> or a <strong>Seller</strong> today.
        </p>

        {/* Full Name */}
        <div className="space-y-1">
          <label className="block text-sm text-white font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="block text-sm text-white font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            required
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="block text-sm text-white font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            required
          />
        </div>

        {/* User Type */}
        <div className="space-y-1">
          <label className="block text-sm text-white font-medium">Register As</label>
          <select
            name="userType"
            value={form.userType}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
          >
            <option className="w-[80%]" value="buyer">Buyer</option>
            <option className="w-[80%]" value="seller">Seller</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 mt-4 cursor-pointer bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-md transition"
        >
          Sign Up
        </button>

        {/* Switch to Login */}
        <p className="text-center text-sm text-gray-200 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-gray-800 font-bold hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
