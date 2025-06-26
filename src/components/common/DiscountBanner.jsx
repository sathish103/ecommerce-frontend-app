import React from "react";
import banner from "../../assets/images/banner.jpg";

const DiscountBanner = ({ title, description }) => {
  return (
    <div className="relative w-full mb-6">
      <img src={banner} alt="Discount Banner" className="w-full h-48 object-cover rounded-lg shadow" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white px-4 text-center">
        <h2 className="text-2xl font-bold">{title || "Special Offer!"}</h2>
        <p className="text-sm mt-1">{description || "Get 20% OFF on your first order!"}</p>
      </div>
    </div>
  );
};

export default DiscountBanner;
