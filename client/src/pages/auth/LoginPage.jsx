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

      if (res.user.role === "seller") {
        navigate("/admin/homes");
      } else {
        navigate("/");
      }
    } else {
      alert(res.error || "Login failed");
    }
  };

  return (
    <div className="flex items-center px-6 sm:px-12 md:px-20 lg:px-30 siteTColor justify-center bg-gradient-to-br from-gray-500 via-gray-400 to-gray-500">
      <form
        onSubmit={handleSubmit}
        className="w-full p-8 xl:w-[50%] bg-gray-400/90 mt-14 mb-14 backdrop-blur-md rounded-2xl shadow-2xl space-y-6 border border-white/30"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 drop-shadow-sm">
          Login to Continue
        </h2>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
            placeholder="••••••••"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 cursor-pointer bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition shadow-lg"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-rose-500 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
