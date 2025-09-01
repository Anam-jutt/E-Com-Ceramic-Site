import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../services/authService";
import useAuthStore from "../../store/useAuthStore";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const loginStore = useAuthStore();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await login(form);

    if (res.token) {
      loginStore.login({
        token: res.token,
        role: res.user.role,
        user: res.user,
      });

      localStorage.setItem("userId", res.user._id);

      navigate("/");
    } else {
      alert(res.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-20 bg-gradient-to-br from-emerald-300 via-gray-600 to-rose-300">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 animate-fade-in space-y-6"
      >
        <h2 className="text-4xl font-extrabold text-center text-white drop-shadow mb-2">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-100 text-sm mb-4">
          Log in to access your dashboard and continue shopping.
        </p>

        {/* Email */}
        <div className="space-y-1">
          <label className="block text-sm text-white font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
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
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 cursor-pointer mt-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-md transition"
        >
          Sign In
        </button>

        {/* Signup Prompt */}
        <p className="text-center text-sm text-gray-200 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-black font-bold underline">
            Create now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
