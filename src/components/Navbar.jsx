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
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/" className="hover:text-gray-200">
          eCommerce App
        </Link>
      </div>
      <div className="space-x-4">
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

            <button onClick={handleLogout} className="hover:text-gray-200">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
