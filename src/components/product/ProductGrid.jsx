import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => (
  <div className="product-grid">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductGrid;
