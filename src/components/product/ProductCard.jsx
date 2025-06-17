// src/components/product/ProductCard.jsx

import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={product.imageUrl || "/placeholder.jpg"}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-2"
      />

      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 text-sm">{product.description}</p>

      <div className="mt-auto flex justify-between items-center">
        <span className="text-blue-600 font-bold">₹{product.price}</span>
        <Link
          to={`/products/${product.id}`}
          className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
