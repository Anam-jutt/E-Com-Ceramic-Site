import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Footer() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter a valid email.");
      return;
    }
    // Proceed with navigation
    navigate("/thnx");
  };

  return (
    <>
      <hr />
      <footer className="bg-gray-800 text-gray-100 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">
          {/* Brand */}
          <div className="">
            <Link
              to="/"
              className="text-2xl font-bold hover:scale-105 duration-500 "
            >
              Ceramic<span className="text-rose-400">Shop</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mt-3 font-extrabold">
              Discover beautifully crafted ceramics to elevate your space.
              Quality, elegance, and timeless design—delivered to your door.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Quick Links
            </h3>
           <li> <Link href="/" className="hover:text-emerald-400 transition">
              Home
            </Link></li>
           <li> <Link href="/shop" className="hover:text-emerald-400 transition">
              Shop
            </Link></li>
           <li> <Link href="/about" className="hover:text-emerald-400 transition">
              About
            </Link></li>
           <li> <Link href="/contact" className="hover:text-emerald-400 transition">
              Contact
            </Link></li>
          </div>

          {/* Subscribe + Social */}
          <div className="">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Stay Connected
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for updates, offers & new collections.
            </p>
            <form onSubmit={handleSubmit} className="xl:flex lg:flex md:flex-col sm:flex flex space-x-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="px-3 w-full py-2 mt-2 rounded bg-gray-800 text-white placeholder-gray-400 border-gray-500 border-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <button
        type="submit"
        className="bg-emerald-500 mt-2 hover:bg-emerald-600 rounded text-white transition px-4 py-2"
      >
        Subscribe
      </button>
    </form>
            <div className="flex gap-4 mt-6">
              <Link
                to="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-emerald-400 transition text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-emerald-400 transition text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-emerald-400 transition text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t text-center border-gray-200 pt-4  text-xs text-gray-300 font-extrabold">
          &copy; {new Date().getFullYear()} CeramicShop. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
