import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SidebarLayout from './components/SidebarLayout';
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

const App = () => (
  <Router>
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/discounts" element={<DiscountsPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default App;
