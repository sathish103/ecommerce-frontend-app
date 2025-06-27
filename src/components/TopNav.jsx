// src/components/TopNav.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TopNav = () => {
  const location = useLocation();
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Login', path: '/login' },
    { label: 'Register', path: '/register' },
  ];

  return (
    <header
      style={{
        backgroundColor: '#1e1e2f',
        color: '#fff',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* App Name */}
      <Link to="/" style={{ color: '#61dafb', fontSize: '22px', textDecoration: 'none' }}>
        🛒 eCommerce App
      </Link>

      {/* Navigation Buttons */}
      <nav style={{ display: 'flex', gap: '20px' }}>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            style={{
              color: location.pathname === item.path ? '#61dafb' : '#fff',
              textDecoration: 'none',
              fontWeight: location.pathname === item.path ? 'bold' : 'normal',
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default TopNav;
