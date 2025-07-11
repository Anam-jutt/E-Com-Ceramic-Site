import React from "react";
import image18 from "../assets/18.jpg";
import { Link } from "react-router-dom";
const MostUseComponent = () => {
  return (
    <div className="w-full xl:flex lg:flex md:flex">
      <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full h-auto">
        <img src={image18} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full siteBColor h-auto pb-14 p-5">
        <p className="text-xl text-white pt-20 sm:text-2xl md:text-3xl lg:text-5xl font-playfair font-medium"> Uncover the World of Ceramic Artistry Start Your Journey Here!</p>
        <div className=" px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg md:text-xl rounded border border-white font-bold inline-block cursor-pointer mt-5 text-white hover:bg-[#033b35] duration-500">
          <Link to="/shop">Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default MostUseComponent;
