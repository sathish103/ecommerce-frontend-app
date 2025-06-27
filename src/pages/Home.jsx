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
  <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
    <h1 style={{ textAlign: 'center' }}>eCommerce Microservices Dashboard</h1>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
      {services.map((svc, idx) => (
        <Link
          key={idx}
          to={svc.path}
          style={{
            padding: '12px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none',
            textAlign: 'center',
            fontSize: '16px',
            width: 'fit-content',
            margin: '0 auto'
          }}
        >
          {svc.label}
        </Link>
      ))}
    </div>
  </div>
);

export default Home;