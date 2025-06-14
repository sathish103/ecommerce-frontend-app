// Reviews.jsx placeholder
import React from 'react';
import useFetch from '../hooks/useFetch';

const Reviews = () => {
  const { data: reviews } = useFetch('/reviews');

  return (
    <div>
      <h2>My Reviews</h2>
      {reviews?.map(r => (
        <div key={r.id}>
          <p>Product: {r.productName}</p>
          <p>Rating: {r.rating} ⭐</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
