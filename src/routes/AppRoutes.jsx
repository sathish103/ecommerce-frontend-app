// src/routes/AppRoutes.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import ProductList from "../pages/Products/ProductList";
import ProductDetail from "../pages/Products/ProductDetail";
import CartPage from "../pages/Cart/CartPage";
import OrdersPage from "../pages/Orders/OrdersPage";
import CheckoutPage from "../pages/Payments/CheckoutPage";
import Profile from "../pages/Profile/Profile";
import AddReview from "../pages/Reviews/AddReview";
import SearchResults from "../pages/Search/SearchResults";
import DiscountsPage from "../pages/Discounts/DiscountsPage";
import NotificationBar from "../pages/Notifications/NotificationBar";

import PrivateRoute from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/discounts" element={<DiscountsPage />} />
        <Route path="/notifications" element={<NotificationBar />} />

        {/* Private Routes */}
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <OrdersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/products/:id/review"
          element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
