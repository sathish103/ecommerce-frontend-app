import React from 'react';

const CartItem = ({ item }) => (
  <div className="cart-item">
    <p>{item.name}</p>
    <p>Qty: {item.quantity}</p>
    <p>${item.price.toFixed(2)}</p>
  </div>
);

export default CartItem;
