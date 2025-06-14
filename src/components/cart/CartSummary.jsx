import React from 'react';

const CartSummary = ({ total }) => (
  <div className="cart-summary">
    <h3>Total: ${total.toFixed(2)}</h3>
  </div>
);

export default CartSummary;
