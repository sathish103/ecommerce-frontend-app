// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';
import CartPage from './pages/CartPage';
import PaymentsPage from './pages/PaymentsPage';
import InventoryPage from './pages/InventoryPage';
import NotificationsPage from './pages/NotificationsPage';
import ReviewsPage from './pages/ReviewsPage';
import DiscountsPage from './pages/DiscountsPage';
import SearchPage from './pages/SearchPage';
import Login from './pages/Login';
import Register from './pages/Register';
import SidebarLayout from './components/SidebarLayout';
import PrivateRoute from './routes/PrivateRoute';
import TopNav from './components/TopNav';
import PublicRoute from './routes/PublicRoute'; // ✅ Only show when NOT logged in

const LayoutWithTopNav = ({ children }) => {
  const location = useLocation();
  const isSidebarPage = [
    '/users', '/products', '/orders', '/cart', '/payments',
    '/inventory', '/notifications', '/reviews', '/discounts', '/search',
  ].some(path => location.pathname.startsWith(path));

  return (
    <>
      {!isSidebarPage && <TopNav />} {/* ✅ Show only when not inside sidebar layout */}
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <LayoutWithTopNav>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

          {/* Private + sidebar layout routes */}
          <Route element={<PrivateRoute><SidebarLayout /></PrivateRoute>}>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payments" element={<PaymentsPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route pat
