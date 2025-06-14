import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page components
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Payment from './pages/Payment';
import Notifications from './pages/Notifications';
import Reviews from './pages/Reviews';
import Profile from './pages/Profile';
import Search from './pages/Search';

import Dashboard from './pages/Admin/Dashboard';
import Users from './pages/Admin/Users';
import AdminOrders from './pages/Admin/Orders';
import AdminProducts from './pages/Admin/Products';
import Inventory from './pages/Admin/Inventory';
import Discounts from './pages/Admin/Discounts';

// Route protection
import PrivateRoutes from './routes/PrivateRoutes';
import AdminRoutes from './routes/AdminRoutes';

const App = () => {
  return (
    <Router>
      <Header />

      <main style={{ minHeight: '80vh' }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Private Routes for authenticated users */}
          <Route element={<PrivateRoutes />}>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
          </Route>

          {/* Admin Routes for admin users */}
          <Route path="/admin" element={<AdminRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="discounts" element={<Discounts />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
