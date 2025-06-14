import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside>
    <ul>
      <li><Link to="/admin/dashboard">Dashboard</Link></li>
      <li><Link to="/admin/products">Products</Link></li>
      <li><Link to="/admin/orders">Orders</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
