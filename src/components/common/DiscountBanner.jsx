// src/components/common/DiscountBanner.jsx

import React from "react";
import banner from "../../assets/images/banner.jpg";
import ProductGrid from "../product/ProductGrid";

const DiscountBanner = ({ title, description, products }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={banner}
        alt="Discount Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col items-center justify-center px-4">
        <h2 className="text-4xl font-bold mb-2 text-center">{title}</h2>
        <p className="text-lg mb-6 text-center">{description}</p>

        <div className="w-full max-w-6xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Featured Products</h2>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
