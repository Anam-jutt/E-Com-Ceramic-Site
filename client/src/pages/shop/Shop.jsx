import React from "react";
import ProductsListShop from "../../components/ProductListShop";

const Shop = () => {
  return (
    <div>
      <div className="px-6 sm:px-12 md:px-20 pt-20 pb-20 siteTColor bg-gray-100">
        <div className="font-black">
          <p className="font-bold text tracking-wider font-sans relative mb-2">
            Our Collections
            <span className="block w-46 h-[1px] bg-rose-400 mt-1"></span>
          </p>
        </div>
        <div className=" mt-4 flex">
          <p className="text-lg sm:text-xl md:text-3xl text-justify pr-2 font-extrabold lg:text-4xl mx-auto text-[#033b3596] w-[50%]">
            Shop Our Bestselling Ceramic Art Pieces
          </p>
          <p className="w-[50%] border-l-4 border-[#033b3543] pl-4 text-lg sm:text-xl md:text-3xl lg:text-4xl">
            Discover handcrafted ceramic pieces that blend elegance, durability,
            and timeless design — perfect for any space or occasion.
          </p>
        </div>
      </div>
      <div className="pb-20 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
        <ProductsListShop />
      </div>
    </div>
  );
};

export default Shop;
