import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import useCart from '../hooks/useCart';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, loading } = useFetch(`/products/${id}`);
  const { addToCart } = useCart();

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
