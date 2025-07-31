import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaCartPlus } from "react-icons/fa";
import "../index.css";
import useAuthStore from "../store/useAuthStore";
import useCartStore from "../store/cartStore";
import Navlogo from "../assets/mylogo2.png";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { role, token, logout } = useAuthStore();
  const { cart } = useCartStore();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Track window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto close menu on larger screens
  useEffect(() => {
    if (windowWidth >= 768) setMenuOpen(false);
  }, [windowWidth]);

  return (
    <nav className="bg-[#025048] text-gray-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold hover:scale-105 duration-500 flex items-center"
        >
          <img src={Navlogo} alt="Logo" className="w-12 h-12" />
          Ceramic<span className="text-rose-400">Shop</span>
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`gap-6 items-center font-sans font-medium ${
            windowWidth >= 768 ? "flex" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-rose-400 focus:text-rose-400 focus:font-bold duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="hover:text-rose-400 focus:text-rose-400 focus:font-bold duration-300"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-rose-400 focus:text-rose-400 focus:font-bold duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-rose-400 focus:text-rose-400 focus:font-bold duration-300"
            >
              Contact
            </Link>
          </li>

          {token && role === "seller" && (
            <>
              <li>
                <Link
                  to="/admin/products/new"
                  className="hover:text-rose-400 duration-300 focus:text-rose-400 focus:font-bold"
                >
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/homes"
                  className="hover:text-rose-400 duration-300 focus:text-rose-400 focus:font-bold"
                >
                  My Listings
                </Link>
              </li>
            </>
          )}

          {/* {token && role === "buyer" && (
            <>
              <li>
                <Link
                  to="/cart"
                  className="hover:text-rose-400 duration-300 focus:text-rose-400 focus:font-bold"
                >
                  Cart
                </Link>
              </li>
            </>
          )} */}
        </ul>

        {/* Desktop Buttons */}
        <div
          className={`${
            windowWidth >= 768 ? "flex" : "hidden"
          } gap-7 items-center`}
        >
             {token && role === "buyer" && (
            <>
             <li style={{listStyle:"none"}}>
                <Link
                  to="/cart"
                  className="hover:scale-110 focus:font-bold"
                >
                 View Cart
                </Link>
              </li>
              {/* Cart Icon */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="text-2xl flex gap-1 cursor-pointer  items-center hover:scale-110 transition duration-300 relative"
              >
                <FaCartPlus />
                <sup className="text-lg absolute font-bold -top-3 -right-6 text-white rounded-full px-1">
                  {totalItems}
                </sup>
              </button>
             
              {/* Drawer Component */}
              <CartDrawer
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              />
            </>
          )}
          {!token ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 boreder-color-[#78B9B5] border-2 cursor-pointer rounded duration-500 hover:scale-105 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 boreder-color-[#78B9B5] border-2 cursor-pointer rounded duration-500 hover:scale-105 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                logout();
              }}
              className="px-4 py-2 boreder-color-[#78B9B5] border-2 cursor-pointer rounded duration-500 hover:scale-105 transition"
            >
              Logout
            </button>
          )}

       
        </div>

        {/* Mobile Menu Button */}
        {windowWidth < 768 && (
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && windowWidth < 768 && (
        <div className="px-4 pb-4 space-y-3">
          <Link
            to="/"
            className="block hover:text-rose-400"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="block hover:text-rose-400"
            onClick={toggleMenu}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="block hover:text-rose-400"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block hover:text-rose-400"
            onClick={toggleMenu}
          >
            Contact
          </Link>

          {token && role === "seller" && (
            <>
              <Link
                to="/admin/homes"
                className="hover:text-rose-400 focus:text-rose-300 duration-500"
              >
                My Listing
              </Link>
              <Link
                to="/admin/products/new"
                className="block hover:text-rose-400 pt-3"
                onClick={toggleMenu}
              >
                Add Product
              </Link>
            </>
          )}

          {token && role === "buyer" && (
            <>
              <Link
                to="/cart"
                className="block hover:text-rose-400"
                onClick={toggleMenu}
              >
                Cart
              </Link>
            </>
          )}

          {!token ? (
            <>
              <Link
                to="/login"
                className="block hover:text-rose-400"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block hover:text-rose-400"
                onClick={toggleMenu}
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                toggleMenu();
                logout();
              }}
              className="block cursor-pointer text-left hover:text-rose-400 w-full"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
