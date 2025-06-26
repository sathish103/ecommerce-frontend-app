import React from "react";
import banner from "../../assets/images/banner.jpg"; // Make sure this path is correct

const DiscountBanner = ({ title, description }) => {
  return (
    <div className="relative w-full mb-6">
      {/* Banner Image */}
      <img
        src={banner}
        alt="Discount Banner"
        className="w-full h-64 object-cover"
      />

      {/* Debug/Test Overlay */}
      <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{title || "Hello from Banner"}</h1>
          <p className="text-lg">{description || "Testing banner content..."}</p>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
