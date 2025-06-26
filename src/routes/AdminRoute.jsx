import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  // Simple admin check — assumes backend adds role as `user.role`
  const isAdmin = isAuthenticated && user?.role === 'admin';

  return isAdmin ? children : <Navigate to="/" />;
};

export default AdminRoute;
