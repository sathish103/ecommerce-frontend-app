// src/context/AuthContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserStr = localStorage.getItem('user');

    try {
      const parsedUser = storedUserStr ? JSON.parse(storedUserStr) : null;

      if (storedToken && parsedUser) {
        setToken(storedToken);
        setUser(parsedUser);
      }
    } catch (err) {
      console.error("❌ Invalid JSON in localStorage 'user':", err);
      localStorage.removeItem('user'); // Clean up corrupted value
    }

    setAuthLoading(false); // Mark auth check complete
  }, []);

  const login = (jwtToken, userData) => {
    localStorage.setItem('token', jwtToken);
    localStorage.setItem('user', JSON.stringify(userData));
    setToken(jwtToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ token, user, login, logout, isAuthenticated, authLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
