import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">🛒 eShop</Link>
      <nav className="space-x-4">
        <Link to="/products">Products</Link>
        <Link to="/search?q=mobile">Search</Link>
        <Link to="/discounts">Discounts</Link>
        <Link to="/cart">Cart</Link>
        {isAuthenticated ? (
          <>
            <Link to="/orders">Orders</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={logout} className="ml-2">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
