import React from "react";
import ProductGrid from "../product/ProductGrid";

const DiscountBanner = ({ title, description, products }) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl shadow-lg p-6 mb-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg mt-2">{description}</p>
      </div>

      <div className="bg-white text-black rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">Featured Products</h3>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default DiscountBanner;
