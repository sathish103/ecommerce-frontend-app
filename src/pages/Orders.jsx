// Orders.jsx placeholder
import React from 'react';
import useFetch from '../hooks/useFetch';

const Orders = () => {
  const { data: orders, loading } = useFetch('/orders');

  return (
    <div>
      <h2>Your Orders</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {orders.map(order => (
            <li key={order.id}>Order #{order.id} - ${order.total}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
