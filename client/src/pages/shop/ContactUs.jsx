import React from "react";
import { Link } from "react-router-dom";
import image13 from "../../assets/13.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import MostUseComponent from "../../components/MostUseComponent";
const ContactUs = () => (
  <div>
    <div className="flex lg:flex-row md:flex:row sm:flex-row flex-col h-auto pt-20 justify-between text-white pb-10 siteBColor px-6 sm:px-12 md:px-20 overflow-hidden">
      <div className="w-full md:w-1/2 md:text-left mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-playfair font-medium leading-tight sm:leading-[65px] md:leading-[75px] lg:leading-[83px]">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-4">
          We're here to assist you in any way we can. Whether you have questions
          about our products, need personalized recommendations, or simply want
          to connect with our team, don't hesitate to reach out.
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
      <div className="xl:w-[35rem] lg:w-[30rem] md:w-[25rem] sm:w-full w-full">
        <img
          src={image13}
          className="w-full h-full object-cover rounded"
          alt=""
        />
      </div>
    </div>
    <div className="siteTColor xl:flex gap-3 lg:flex md:flex mt-20 px-6 sm:px-12 md:px-20 pb-10">
      <div className=" xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full">
        <div>
          <p className="text-2xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl">
            Get in touch
          </p>
          <p className="mt-4 xl:text-xl lg:text-lg md:text-base sm:text-sm">
            Share some details here. This is Flexible section where you can
            share anything you want. It could be details or some information.
          </p>
        </div>
        <div className="mt-4">
          <p className="xl:text-xl lg:text-lg md:text-base sm:text-sm flex items-center gap-2">
            <FaLocationDot /> ADDRESS
          </p>
          <p className="mt-2 xl:text-xl lg:text-lg md:text-base sm:text-sm pb-5">
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </p>
          <hr />
        </div>
        <div className="mt-4">
          <p className="xl:text-xl lg:text-lg md:text-base sm:text-sm flex items-center gap-2">
            <FaPhoneAlt /> PHONE
          </p>
          <p className="mt-2 xl:text-xl lg:text-lg md:text-base sm:text-sm pb-5">
            (+91) 987 654 321
          </p>
          <hr />
        </div>
        <div className="mt-4">
          <p className="xl:text-xl lg:text-lg md:text-base sm:text-sm flex items-center gap-2">
            <MdEmail /> EMAIL
          </p>
          <p className="mt-2 xl:text-xl lg:text-lg md:text-base sm:text-sm pb-5">
            info@contact.com
          </p>
          <hr />
        </div>
        <div className="mt-4">
          <p className="xl:text-xl lg:text-lg md:text-base sm:text-sm">
            FOLLOW
          </p>
          <p className="flex items-center gap-4 cursor-pointer xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-lg mt-4 pb-5">
            <FaFacebook />
            <RiInstagramFill />
            <FaTwitter />
            <BsYoutube />
          </p>
        </div>
      </div>
      <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full bg-gray-100 pt-10 px-8 pb-10">
        <p>Name *</p>
        <div className="Flex mt-2">
          <input
            type="text"
            className="xl:w-[48%] lg:w-[48%]  w-full p-2 mt-2 bg-white rounded-lg"
            placeholder="Enter Your Fist Name"
          />
          <input
            type="text"
            className="xl:w-[48%] lg:w-[48%]  w-full p-2 mt-2 xl:ml-5 lg:ml-5 bg-white rounded-lg"
            placeholder="Enter Your second Name"
          />
        </div>
        <p className="mt-10">Email *</p>
        <input
          type="text"
          className="w-full p-2 mt-2 bg-white rounded-lg"
          placeholder="Enter Your Email"
        />
        <p className="mt-10">Comment or Message</p>
        <textarea
          type="text"
          rows={6}
          className="w-full p-2 mt-2 bg-white rounded-lg"
          placeholder="Enter Your Message"
        />
        <input
          type="submit"
          className="inline-block bg-[#59a099] px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg md:text-xl rounded border border-white font-bold text-white hover:bg-[#537470] duration-500 cursor-pointer mt-5"
        />
      </div>
    </div>
    <div className="xl:flex siteTColor gap-3 lg:flex md:flex mt-20 px-6 sm:px-12 md:px-20 pb-20 bg-gradient-to-b from-gray-50 to-gray-300 bg-gray-500">
      <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full pt-30">
        <p className="text-2xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl font-extrabold">
          FAQ's
        </p>
        <p className="mt-4 xl:text-xl lg:text-lg md:text-base sm:text-sm">Find answers to common questions about our ceramic products, ordering, shipping, care, and more. If you need further information, feel free to contact our support team.</p>
      </div>
      <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full pt-20">
        <div className="w-full max-w-2xl mx-auto space-y-4 ">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-lg font-medium text-left text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500/75">
                  <span>Ordering and Shipping</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } w-5 h-5 text-emerald-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-2 pb-4 text-gray-600 bg-white rounded-b-lg">
                  Find answers to questions about the ordering process, shipping
                  options, delivery times, and tracking your ceramic product
                  shipments.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="w-full max-w-2xl mx-auto space-y-4 mt-1">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-lg font-medium text-left text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500/75">
                  <span>Product Care and Maintenance</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } w-5 h-5 text-emerald-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-2 pb-4 text-gray-600 bg-white rounded-b-lg">
                  Learn how to care for and maintain your ceramic products to ensure their longevity and beauty. Get tips on cleaning, handling, and preserving your pieces.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="w-full max-w-2xl mx-auto space-y-4 mt-1">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-lg font-medium text-left text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500/75">
                  <span>Returns and Refunds</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } w-5 h-5 text-emerald-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-2 pb-4 text-gray-600 bg-white rounded-b-lg">
                  Discover our policies on returns and refunds. This section explains how to initiate a return, the eligibility criteria, and the refund process for your ceramic purchases.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="w-full max-w-2xl mx-auto space-y-4 mt-1">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-lg font-medium text-left text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500/75">
                  <span>Custom Orders and Personalization</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } w-5 h-5 text-emerald-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-2 pb-4 text-gray-600 bg-white rounded-b-lg">
                  Interested in custom or personalized ceramic products? Here, you’ll find information on how to place custom orders and personalize your items to make them uniquely yours.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="w-full max-w-2xl mx-auto space-y-4 mt-1">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-lg font-medium text-left text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500/75">
                  <span>Contact and Customer Support</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } w-5 h-5 text-emerald-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-2 pb-4 text-gray-600 bg-white rounded-b-lg">
                  Have questions or need assistance? Find details on how to get in touch with our customer support team, including contact information and response times. We’re here to help with any inquiries you may have.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
    <MostUseComponent />
  </div>
);

export default ContactUs;
