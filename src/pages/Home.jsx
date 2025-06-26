// src/pages/Home.jsx

import React from 'react';
import MicroserviceButton from '../components/MicroserviceButton';
import { useAuth } from '../context/AuthContext';

const services = [
  { label: 'User Service', endpoint: '/users', protected: false },
  { label: 'Product Service', endpoint: '/products', protected: false },
  { label: 'Order Service', endpoint: '/orders', protected: true },
  { label: 'Cart Service', endpoint: '/cart', protected: true },
  { label: 'Payment Service', endpoint: '/payments', protected: true },
  { label: 'Inventory Service', endpoint: '/inventory', protected: false },
  { label: 'Notification Service', endpoint: '/notifications', protected: false },
  { label: 'Review Service', endpoint: '/reviews', protected: false },
  { label: 'Discount Service', endpoint: '/discounts', protected: false },
  { label: 'Search Service', endpoint: '/search', protected: false },
];

const Home = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        padding: '40px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>eCommerce Microservices Dashboard</h1>
        {isAuthenticated && (
          <button
            onClick={logout}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#d9534f',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        )}
      </div>

      <div
        style={{
          maxWidth: '600px',
          margin: '40px auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {services
          .filter((svc) => isAuthenticated || !svc.protected)
          .map((svc, idx) => (
            <MicroserviceButton
              key={idx}
              label={svc.label}
              endpoint={svc.endpoint}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
