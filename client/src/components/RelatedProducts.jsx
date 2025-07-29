import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import useCartStore from "../store/cartStore";
import useAuthStore from "../store/useAuthStore";
function getRandomProducts(products, count = 4) {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const RandomProductsSection = () => {
  const { user } = useAuthStore(); 
  const [allProducts, setAllProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  const { addToCart } = useCartStore();
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setRandomProducts(getRandomProducts(data, 4));
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleShuffle = () => {
    setRandomProducts(getRandomProducts(allProducts, 4));
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-500 mb-2">
          You Might Also Like
        </h2>
        <p className="text-gray-400 text-lg">
          Discover some more items we think you’ll love
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {randomProducts.map((product) => (
          <Link
            key={product._id}
            to={`/product/${product._id}`}
            className="bg-emerald-50 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-black transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100 hover:border-emerald-400"
          >
            <div className="relative aspect-square w-full bg-gray-50 flex items-center justify-center">
              {product.images[0] ? (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="object-cover w-full min-h-[21rem] max-h-[25rem] rounded-2xl hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100 rounded-2xl">
                  No Image
                </div>
              )}
              {user?.role === "buyer" && (
                <div className="absolute top-2 right-2">
                  <div className="relative group">
                    <button
                      onClick={(e) => {
                        e.preventDefault(); // stops <a> navigation
                        e.stopPropagation(); // stops bubbling to parent <Link>
                        addToCart(product._id);
                      }}
                      className="bg-emerald-100 bg-opacity-80 text-2xl px-2 py-1 rounded-full shadow text-emerald-600"
                    >
                      <FaCartPlus />
                    </button>
                    <div className="absolute top-1/2 right-12 -translate-y-1/2 bg-emerald-100 text-gray-700 text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg z-50 whitespace-nowrap">
                      Add to Cart
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex-1 flex flex-col p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                {product.about || "No description available."}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-emerald-600 font-bold text-lg">
                  ${product.price}
                </span>
                <button className="bg-gradient-to-tl from-emerald-400 via-gray-500 to-rose-400 text-white cursor-pointer px-3 py-1 rounded-lg text-xs font-semibold shadow-lg transition">
                  View Details
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleShuffle}
          className="bg-gray-800 text-white px-6 cursor-pointer py-3 rounded-lg shadow hover:bg-gray-900 transition"
        >
          Show Other Products
        </button>
      </div>
    </div>
  );
};

export default RandomProductsSection;
