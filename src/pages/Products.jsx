import React from 'react';
import useFetch from '../hooks/useFetch';
import ProductGrid from '../components/product/ProductGrid';

const Products = () => {
  const { data: products, loading, error } = useFetch('/products');

  return (
    <div>
      <h2>All Products</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {products && <ProductGrid products={products} />}
    </div>
  );
};

export default Products;
