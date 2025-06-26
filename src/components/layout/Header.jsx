import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-blue-800 text-white px-6 py-4 flex flex-col md:flex-row md:justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-extrabold tracking-wide mb-2 md:mb-0">
        🛒 eShop
      </Link>
      <nav className="space-x-4 text-sm md:text-base">
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/search?q=mobile" className="hover:underline">Search</Link>
        <Link to="/discounts" className="hover:underline">Discounts</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
        {isAuthenticated ? (
          <>
            <Link to="/orders" className="hover:underline">Orders</Link>
            <Link to="/profile" className="hover:underline">Profile</Link>
            <button onClick={logout} className="ml-2 hover:underline">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
