// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { label: 'User Service', path: '/users' },
  { label: 'Product Service', path: '/products' },
  { label: 'Order Service', path: '/orders' },
  { label: 'Cart Service', path: '/cart' },
  { label: 'Payment Service', path: '/payments' },
  { label: 'Inventory Service', path: '/inventory' },
  { label: 'Notification Service', path: '/notifications' },
  { label: 'Review Service', path: '/reviews' },
  { label: 'Discount Service', path: '/discounts' },
  { label: 'Search Service', path: '/search' },
];

const Home = () => (
  <div
    style={{
      padding: '60px 20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      background: '#f4f6f8',
    }}
  >
    <h1 style={{ fontSize: '48px', color: '#333', marginBottom: '10px' }}>
      🛍️ Welcome to eCommerce
    </h1>
    <p style={{ fontSize: '20px', color: '#555' }}>
      Your microservices-powered admin dashboard
    </p>

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginTop: '50px',
        alignItems: 'center',
      }}
    >
      {services.map((svc, idx) => (
        <Link
          key={idx}
          to={svc.path}
          style={{
            padding: '12px 30px',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '16px',
            minWidth: '220px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}
        >
          {svc.label}
        </Link>
      ))}
    </div>
  </div>
);

export default Home;
