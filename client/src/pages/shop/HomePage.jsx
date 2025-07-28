import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";
import image6 from "../../assets/6.jpg";
import image7 from "../../assets/7.jpg";
import image14 from "../../assets/14.jpg";
import ProductsList from "../../components/ProductList";
import MostUseComponent from "../../components/MostUseComponent";

const HomePage = () => {
  return (
    <div className="">
      <div className="flex lg:flex-row md:flex:row sm:flex-row flex-col h-[46.4rem] pt-20 justify-between text-white pb-10 siteBColor px-6 sm:px-12 md:px-20 overflow-hidden">
        {/* Left Side */}
        <div className="w-full md:w-1/2 md:text-left flex flex-col justify-center h-full">
          <p className="text-xl sm:text-2xl md:text-[24px] mb-2">
            WELCOME TO CERAMIC SHOP
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-playfair font-medium leading-tight sm:leading-[65px] md:leading-[75px] lg:leading-[83px]">
            Elevate Your Space With Ceramic Elegance.
          </h1>

          <p className="text-base sm:text-lg md:text-xl mt-4">
            Starting From Just <strong>$149.00</strong>
          </p>

          <div className="mt-8 sm:mt-10 mb-8">
            <Link
              to="/shop"
              className="inline-block bg-[#025048] px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg md:text-xl rounded border border-white font-bold text-white hover:bg-[#033b35] duration-500"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full overflow-hidden md:w-1/2 flex justify-center md:justify-end items-center relative ">
          <img
            src={image1}
            alt="main product"
            className="w-[100%] sm:w-[70%] md:w-[85%] object-cover z-0 relative"
          />
          <img
            src={image2}
            alt="overlay"
            className="absolute rounded-2xl top-[-2rem] left-6 sm:top-[3rem] sm:left-10 md:top-[20rem] md:left-8 lg:top-[10rem] lg:left-1 w-[50%] sm:w-[40%] md:w-[50%] z-10 hidden md:block"
          />
        </div>
      </div>
      <div className="mt-16 px-6 sm:px-12 md:px-20 siteTColor">
        <div className="font-black">
          <p className="font-bold tracking-wider font-sans relative mb-2">
            ABOUT CERAMIC SHOP
            <span className="block w-40 h-1 bg-rose-400 rounded-full mt-1"></span>
          </p>
        </div>
        <div className=" mt-4">
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl mx-auto">
            The versatility of ceramics is what makes them truly remarkable,
            with their presence in various forms such as{" "}
            <span className="font-semibold text-[#025048]">stoneware</span> and{" "}
            <span className="font-semibold text-[#025048]">porcelain</span>.
          </p>
        </div>
      </div>
      <div className="mt-6 px-6 sm:px-12 md:px-20 xl:flex lg:flex md:flex gap-3">
        <div className="xl:w-1/2 md:w-1/2">
          <img
            src={image3}
            alt=" Heloo"
            className="rounded h-full object-cover"
          />
        </div>
        <div className="xl:w-1/2 md:w-1/2 mt-14 siteTColor">
          <div className="">
            <img src={image4} alt="hello" className="rounded" />
          </div>
          <div className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-xl mt-3">
            Welcome to Ceramic Shop, where passion meets craftsmanship to bring
            you a world of timeless beauty and creativity.
          </div>
          <div className="xl:text-md lg:text-md md:text-sm sm:text-xs text-xs mt-3">
            Our journey is steeped in the art of ceramics, where each piece
            tells a unique story. Get to know the heart and soul behind our
            store.
          </div>
          <div className=" px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg md:text-xl rounded border border-[#033b35] font-bold inline-block hover:bg-[#033b35c9] cursor-pointer mt-5 hover:text-gray-200 duration-500">
            <Link to="/about">READ MORE</Link>
          </div>
        </div>
      </div>
      <div className="px-6 sm:px-12 md:px-20 mt-16 bg-[#F1F4F1] xl:flex lg:flex md:flex pt-5 pb-5 siteTColor gap-5">
        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 pt-20">
          <p className="font-medium tracking-wider font-sans relative mb-2">
            THE BEST OR CERMAICS
            <span className="block w-40 h-1 bg-rose-400 rounded-full mt-1"></span>
          </p>
          <div className="text-2xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl mt-3">
            <p>Our Products Category</p>
          </div>
          <div className="text-md xl:text-xl lg:text-xl md:text-lg sm:text-md mt-3">
            <p>
              Explore our exquisite collection of ceramic treasures that elevate
              your spaces and celebrate the artistry of craftsmanship. From
              dinnerware to decor, each piece in our product range is a
              testament to quality, style, and the timeless beauty of ceramics.
            </p>
          </div>
          <div className="relative mt-7 w-full">
            <img src={image6} alt="" className="h-full w-full object-cover" />
            <div className="absolute bottom-[1.5rem] left-2 bg-gray-300 w-[90%] p-4 sm:p-6 z-10 shadow-lg">
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                <p>Stylish Ceramic Home Decor</p>
              </div>
              <div className="text-sm sm:text-md mt-2">
                <p>Starting from just $99.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" xl:w-1/2 lg:w-1/2 md:w-1/2">
          <div className=" w-full h-full">
            <div className="relative mt-7 w-full">
              <img src={image5} alt="" className="h-full w-full object-cover" />
              <div className="absolute bottom-[1.5rem] left-2 bg-gray-300 w-[90%] p-4 sm:p-6 z-10 shadow-lg">
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  <p>Trending Ceramic Dinnerware</p>
                </div>
                <div className="text-sm sm:text-md mt-2">
                  <p>Starting from just $299.00</p>
                </div>
              </div>
            </div>
            <div className="relative mt-7 w-full">
              <img src={image7} alt="" className="h-full w-full object-cover" />
              <div className="absolute bottom-[1.5rem] left-2 bg-gray-300 w-[90%] p-4 sm:p-6 z-10 shadow-lg">
                <div className="">
                  <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    Garden and Outdoor Accents
                  </p>
                  <p className="text-sm sm:text-md mt-2">
                    Starting from just $199.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="siteTColor px-6 sm:px-12 md:px-20 pt-20 pb-20 bg-gradient-to-b from-gray-100 via-gray-400 to-gray-500">
        <div className="font-black">
          <p className="font-bold tracking-wider font-sans relative mb-2">
            Most Popular
            <span className="block w-20 h-1 bg-rose-400 rounded-full mt-1"></span>
          </p>
        </div>
        <div className=" mt-4">
          <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl mx-auto">
            Discover the Latest Additions at Your Top Choice Flower Shop
          </p>
        </div>
        <div>
          <ProductsList />
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat bg-fixed min-h-[30rem] flex items-center justify-center "
        style={{ backgroundImage: `url(${image14})` }}
      >
        <div className="text-center bg-opacity-50 px-6 py-14 siteTColor w-[80%] bg-gradient-to-br rounded-4xl from-gray-200 site via-gray-400 to-gray-600">
          <p className="text-2xl md:text-3xl font-semibold mb-4">
            Begin Your Ceramic Journey — Explore Our Stunning Collections
          </p>
          <p className="text-lg md:text-xl">Starting from just $149.00</p>
          <div className=" px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg md:text-xl rounded border border-[#033b35] font-bold inline-block hover:bg-[#033b35c9] cursor-pointer mt-5 hover:text-gray-200 duration-500">
            <Link to="/shop">Shop Now</Link>
          </div>
        </div>
      </div>
      <div>
        <div className="px-6 sm:px-12 md:px-20 pt-20 pb-20 siteTColor">
          <div className="font-black">
            <p className="font-bold tracking-wider font-sans relative mb-2">
              Top Picks
              <span className="block w-16 h-1 bg-rose-400 rounded-full mt-1"></span>
            </p>
          </div>
          <div className=" mt-4 flex">
            <p className="text-lg sm:text-xl md:text-3xl font-extrabold lg:text-4xl mx-auto text-[#033b3596] w-[30%]">
              Shop Our Bestselling Ceramic Art Pieces
            </p>
            <p className="w-[60%] border-l-8 border-[#033b3543] pl-4 text-lg sm:text-xl md:text-3xl lg:text-4xl">
              Loved by hundreds for their elegance, texture, and lasting charm.
            </p>
          </div>
        </div>
        <MostUseComponent />
      </div>
    </div>
  );
};

export default HomePage;
