import React from "react";

const DiscountBanner = ({ message }) => {
  return (
    <div className="bg-red-200 text-red-900 p-2 text-center font-semibold">
      {message || "Get 20% OFF on your first order!"}
    </div>
  );
};

export default DiscountBanner;
