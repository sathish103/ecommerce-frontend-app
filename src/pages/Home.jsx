import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to Our eCommerce Store</h1>
    <Link to="/products">Browse Products</Link>
  </div>
);

export default Home;
