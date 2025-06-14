// AdminContext.js placeholder
import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState(null);

  return (
    <AdminContext.Provider value={{ dashboardData, setDashboardData }}>
      {children}
    </AdminContext.Provider>
  );
};
