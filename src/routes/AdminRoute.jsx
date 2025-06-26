// src/routes/AdminRoute.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
  const { isAuthenticated, user, authLoading } = useAuth();

  if (authLoading) {
    return <div className="text-center p-4 text-gray-600">Checking admin access...</div>;
  }

  const isAdmin = isAuthenticated && user?.role === 'admin';

  return isAdmin ? children : <Navigate to="/" replace />;
};

export default AdminRoute;
