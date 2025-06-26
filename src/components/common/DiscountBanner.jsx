import React from "react";
import banner from "../../assets/images/banner.jpg"; // ✅ import banner image

const DiscountBanner = ({ message }) => {
  return (
    <div className="relative w-full">
      <img src={banner} alt="Discount Banner" className="w-full h-auto" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-lg font-semibold">
        {message || "Get 20% OFF on your first order!"}
      </div>
    </div>
  );
};

export default DiscountBanner;
