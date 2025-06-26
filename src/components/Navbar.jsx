// src/components/Navbar.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white px-8 py-4 shadow-md flex justify-between items-center">
      {/* Logo / App Name */}
      <div className="text-2xl font-bold">
        <Link to="/" className="hover:text-gray-200">
          🛒 eCommerce App
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 text-lg">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="hover:text-gray-200">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-200">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>

            {user?.role === 'admin' && (
              <Link to="/admin" className="hover:text-gray-200">
                Admin
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded text-white"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
