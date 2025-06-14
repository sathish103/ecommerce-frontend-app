// AdminRoutes.jsx placeholder
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminRoutes = () => {
  const { user } = useAuth();

  // Example: check if user belongs to "admin" group
  const isAdmin = user?.signInUserSession?.idToken?.payload['cognito:groups']?.includes('admin');

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoutes;
