import React from 'react';
import MicroserviceButton from '../components/MicroserviceButton';

const adminServices = [
  { label: 'Manage Products', endpoint: '/products' },
  { label: 'Manage Discounts', endpoint: '/discounts' },
  { label: 'Manage Reviews', endpoint: '/reviews' },
  { label: 'Admin Controls', endpoint: '/admin' },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Admin Microservices Panel
      </h1>
      <div className="max-w-xl mx-auto space-y-4">
        {adminServices.map((svc, idx) => (
          <MicroserviceButton key={idx} label={svc.label} endpoint={svc.endpoint} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
