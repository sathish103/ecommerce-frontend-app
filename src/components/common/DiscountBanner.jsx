// src/components/common/DiscountBanner.jsx

import React from "react";
import banner from "../../assets/images/banner.jpg";

const DiscountBanner = ({ title, description }) => {
  return (
    <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden rounded-xl shadow-md mb-6">
      <img
        src={banner}
        alt="Discount Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-2">{title || "Get 20% OFF!"}</h2>
        <p className="text-md">{description || "Use code SAVE20 at checkout."}</p>
      </div>
    </div>
  );
};

export default DiscountBanner;
