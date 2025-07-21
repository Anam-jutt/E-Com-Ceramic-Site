import React from "react";
import { Link } from "react-router-dom";
import image19 from "../../assets/19.jpg";
import image20 from "../../assets/20.jpg";
import image21 from "../../assets/21.jpg";
import MostUseComponent from "../../components/MostUseComponent";
const About = () => (
  <div>
    <div className="flex lg:flex-row md:flex:row sm:flex-row flex-col h-auto pt-20 justify-between text-white pb-10 siteBColor px-6 sm:px-12 md:px-20 overflow-hidden">
      <div className="w-full md:w-1/2 md:text-left mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-playfair font-medium leading-tight sm:leading-[65px] md:leading-[75px] lg:leading-[83px]">
          About Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-4">
          Welcome to the world of CeramicShop, where artistry and innovation
          come together to craft stunning ceramic pieces. Discover our story,
          the passion that drives us, and our commitment to delivering timeless
          beauty and quality.
        </p>
        <div className="mt-8 sm:mt-10 mb-8">
          <Link
            to="/products"
            className="inline-block bg-[#025048] px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg md:text-xl rounded border border-white font-bold text-white hover:bg-[#033b35] duration-500"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="xl:w-[35rem] lg:w-[30rem] md:w-[25rem] sm:w-full w-full">
        <img src={image19} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
    <div className="px-6 sm:px-12 md:px-20 pt-20 pb-20 siteTColor bg-gray-100">
      <div className="font-black">
        <p className="font-bold tracking-wider font-sans relative mb-2">
          Our Story
          <span className="block w-16 h-1 bg-rose-400 rounded-full mt-1"></span>
        </p>
      </div>
      <div className=" mt-4 flex">
        <p className="text-lg sm:text-xl md:text-3xl font-extrabold lg:text-4xl mx-auto text-[#033b3596] w-[30%]">
          Explore CeramicShop and Our Ceramic Artistry
        </p>
        <p className="w-[60%] border-l-8 border-[#033b3543] pl-4 text-md sm:text-md md:text-lg lg:text-xl">
          Step into the world of CeramicShop, where we’re dedicated to crafting
          elegant, functional ceramics that elevate your everyday life. Our
          journey is a testament to the artistry and craftsmanship that infuse
          each unique piece. Discover our story, meet the talented artisans who
          bring these creations to life, and experience the exceptional beauty
          that our ceramics add to your surroundings. Explore the heart and soul
          of our store, where every piece is a work of art, designed to make
          your moments more beautiful and special.
        </p>
      </div>
    </div>
    <div className="">
      <div className="pb-10 px-6 sm:px-12 md:px-20 mx-auto bg-gradient-to-b from-gray-50 via-gray-200 to-gray-300">
        <img src={image20} className="w-full h-full rounded-2xl" alt="" />
      </div>
      <div className="xl:gap-3 lg:gap-3 md:gap-3 xl:flex lg:flex md:flex px-6 sm:px-12 md:px-20 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 pt-6">
        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full h-auto">
          <img src={image21} className="w-full object-cover h-full" alt="" />
        </div>
        <div className=" xl:w-1/2 lg:w-1/2 md:w-1/2 w-full siteTColor">
          <p className="font-bold tracking-wider font-sans mt-5 mb-2">
            OUR JOURNEY
            <span className="block w-20 h-1 bg-rose-400 rounded-full mt-1"></span>
          </p>
          <p className="text-lg sm:text-lg md:text-xl lg:text-3xl mt-5">
            Our Ceramic Odyssey Crafting Beauty and Quality.
          </p>
          <p className="text-sm sm:text-sm md:text-md lg:text-xl mt-5">
            Our company story is a testament to the enduring love for
            craftsmanship, where we combine our passion for ceramics with an
            unwavering commitment to quality and timeless beauty. Explore the
            journey that has led us to become a trusted source for exquisite
            ceramic products.We're proud to share our story, which mirrors the
            growth of a dream into a thriving destination for exceptional
            creations, reflecting artistry and innovation.
          </p>
          <p className="text-sm sm:text-sm md:text-md lg:text-xl mt-5">
            Our dedication to crafting elegant, functional ceramic pieces that
            enhance everyday living is at the heart of our narrative, and it’s a
            story we’re excited to share with you.
          </p>
        </div>
      </div>
    </div>
    <div className="siteTColor gap-3 xl:flex lg:flex md:flex px-6 sm:px-12 md:px-20 bg-gradient-to-t from-gray-100 via-gray-200 to-gray-300 pt-16 pb-20">
      <div >
        <p className="xl:text-4xl font-black lg:text-3xl md:text-2xl sm:text-xl mt-5 text-xl">Our Vision</p>
        <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm mt-5">Our vision is to infuse every home with the timeless beauty and functionality of ceramics. We are dedicated to creating elegant, handcrafted ceramic pieces that elevate everyday living, whether it's enjoying a meal, decorating a space, or finding the perfect gift. Our mission is to inspire and bring artistry into daily life, providing a canvas of creativity through ceramics.</p>
      </div>
      <div>
        <p className="xl:text-4xl font-black lg:text-3xl md:text-2xl sm:text-xl mt-5 text-xl">Our Goals</p>
        <p className="xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm mt-5">Our values are the foundation upon which [Your Ceramicis built. We prioritize craftsmanship, quality, and creativity in all that we do. Integrity, authenticity, and sustainability are at the core of our values, ensuring that our products reflect not just beauty, but also ethical and environmental responsibility. We believe in the power of ceramics to connect people, transform spaces, and create lasting memories.</p>
      </div>
    </div>
    <div className="">
      <MostUseComponent />
    </div>
  </div>
);

export default About;
