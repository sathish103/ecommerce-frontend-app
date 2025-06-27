import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const services = [
  { label: 'Home', path: '/' },
  { label: 'Users', path: '/users' },
  { label: 'Products', path: '/products' },
  { label: 'Orders', path: '/orders' },
  { label: 'Cart', path: '/cart' },
  { label: 'Payments', path: '/payments' },
  { label: 'Inventory', path: '/inventory' },
  { label: 'Notifications', path: '/notifications' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Discounts', path: '/discounts' },
  { label: 'Search', path: '/search' },
];

const SidebarLayout = () => {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '220px',
          background: '#1e1e2f',
          color: '#fff',
          padding: '20px',
          position: 'sticky',
          top: 0,
          height: '100vh',
        }}
      >
        <h2 style={{ color: '#61dafb', marginBottom: '30px' }}>Dashboard</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {services.map((svc, index) => {
            const isActive = location.pathname === svc.path;
            return (
              <Link
                key={index}
                to={svc.path}
                style={{
                  color: isActive ? '#61dafb' : '#ccc',
                  backgroundColor: isActive ? '#2d2d3a' : 'transparent',
                  padding: '10px 14px',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'all 0.2s ease',
                }}
              >
                {svc.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          background: '#f9f9f9',
          padding: '30px',
          overflowY: 'auto',
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
