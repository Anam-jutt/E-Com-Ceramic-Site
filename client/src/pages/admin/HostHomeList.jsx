import React from "react";
import MyListingSection from "../../components/MyListing";

const HostHomeList = () => {
  return (
    <div className="bg-gradient-to-br from-gray-500 via-gray-400 to-gray-500">
      <div>
        <h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl font-bold text-gray-200 mb-8 text-center pt-10">
          My Listings
        </h2>
      </div>
      <MyListingSection />
    </div>
  );
};

export default HostHomeList;
