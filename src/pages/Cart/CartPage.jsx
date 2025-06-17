import React, { useEffect, useState } from "react";
import cartService from "../../services/cartService";
import Loader from "../../components/common/Loader";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await cartService.getCart();
        setCartItems(data.items || []);
      } catch (err) {
        console.error("Failed to load cart:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.productId} className="mb-2">
              {item.productName} — {item.quantity} x ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
