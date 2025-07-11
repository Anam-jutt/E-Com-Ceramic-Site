import React from "react";
import ProductsListShop from "../../components/ProductListShop";

const Shop = () => {
  return (
    <div>
      <div className="px-6 sm:px-12 md:px-20 pt-20 pb-20 siteTColor bg-gray-100">
        <div className="font-black">
          <p className="font-bold tracking-wider font-sans relative mb-2">
            Our Collections
            <span className="block w-26 h-1 bg-rose-400 rounded-full mt-1"></span>
          </p>
        </div>
        <div className=" mt-4 flex">
          <p className="text-lg sm:text-xl md:text-3xl font-extrabold lg:text-4xl mx-auto text-[#033b3596] w-[30%]">
            Shop Our Bestselling Ceramic Art Pieces
          </p>
          <p className="w-[60%] border-l-8 border-[#033b3543] pl-4 text-lg sm:text-xl md:text-3xl lg:text-4xl">
            Discover handcrafted ceramic pieces that blend elegance, durability,
            and timeless design — perfect for any space or occasion.
          </p>
        </div>
      </div>
      <div className="pb-20 bg-gradient-to-b from-gray-100 via-gray-400 to-gray-600">
        <ProductsListShop />
      </div>
    </div>
  );
};

export default Shop;
