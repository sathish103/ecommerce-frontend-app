import React, { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div
        style={{
          width: isOpen ? '220px' : '0',
          overflow: 'hidden',
          transition: 'width 0.3s ease',
          background: '#1e1e2f',
          color: '#fff',
          paddingTop: '20px',
          position: 'fixed',
          height: '100%',
          zIndex: 1000,
        }}
      >
        <h2 style={{ color: '#61dafb', marginLeft: '20px' }}>Dashboard</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
          {services.map((svc, index) => {
            const isActive = location.pathname === svc.path;
            return (
              <Link
                key={index}
                to={svc.path}
                onClick={() => setIsOpen(false)} // close after click
                style={{
                  color: isActive ? '#61dafb' : '#ccc',
                  backgroundColor: isActive ? '#2d2d3a' : 'transparent',
                  padding: '10px 14px',
                  textDecoration: 'none',
                  borderRadius: '6px',
                }}
              >
                {svc.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Hamburger toggle (visible on small screens) */}
      <button
        onClick={toggleSidebar}
        style={{
          position: 'fixed',
          top: 10,
          left: 10,
          background: '#1e1e2f',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '10px',
          zIndex: 1100,
          display: 'block',
        }}
      >
        ☰
      </button>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          marginLeft: window.innerWidth >= 768 ? '220px' : '0',
          padding: '30px',
          background: '#f9f9f9',
          width: '100%',
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
