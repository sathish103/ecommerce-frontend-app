import React, { createContext, useContext, useState, useEffect } from 'react';
import config from '../config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem(config.JWT_STORAGE_KEY);
    if (storedToken) {
      setToken(storedToken);
      // Optionally decode and set user info
    }
    setAuthLoading(false);
  }, []);

  const login = (jwt, userData) => {
    localStorage.setItem(config.JWT_STORAGE_KEY, jwt);
    setToken(jwt);
    setUser(userData || null);
  };

  const logout = () => {
    localStorage.removeItem(config.JWT_STORAGE_KEY);
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
