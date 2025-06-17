// src/context/AuthContext.js

import React, { createContext, useEffect, useState } from "react";
import { getToken, removeToken, setToken } from "../utils/auth";
import { loginUser } from "../services/adminService"; // ✅ using adminService now

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(getToken());
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());

  useEffect(() => {
    setIsAuthenticated(!!authToken);
  }, [authToken]);

  const login = async (email, password) => {
    const { token } = await loginUser(email, password);
    setToken(token);
    setAuthToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    removeToken();
    setAuthToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
