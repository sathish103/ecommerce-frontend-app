// src/pages/Home.jsx

import React from 'react';
import MicroserviceButton from '../components/MicroserviceButton';

const services = [
  { label: 'User Service', endpoint: '/users' },
  { label: 'Product Service', endpoint: '/products' },
  { label: 'Order Service', endpoint: '/orders' },
  { label: 'Cart Service', endpoint: '/cart' },
  { label: 'Payment Service', endpoint: '/payments' },
  { label: 'Inventory Service', endpoint: '/inventory' },
  { label: 'Notification Service', endpoint: '/notifications' },
  { label: 'Review Service', endpoint: '/reviews' },
  { label: 'Discount Service', endpoint: '/discounts' },
  { label: 'Search Service', endpoint: '/search' }, // Adjust if needed
];

const Home = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        padding: '40px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>
        eCommerce Microservices Dashboard
      </h1>

      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {services.map((svc, idx) => (
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
