import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/cart">Cart</Link>
    </nav>
  </header>
);

export default Header;
