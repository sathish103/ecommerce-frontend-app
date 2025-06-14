import React from 'react';
import useCart from '../hooks/useCart';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

const Cart = () => {
  const { cartItems } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        <>
          {cartItems.map(item => <CartItem key={item.id} item={item} />)}
          <CartSummary total={total} />
        </>
      )}
    </div>
  );
};

export default Cart;
