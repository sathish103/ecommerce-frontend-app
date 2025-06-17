// src/context/AuthContext.js

import React, { createContext, useEffect, useState } from "react";
import { getToken, removeToken, setToken } from "../utils/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(getToken());
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());

  useEffect(() => {
    setIsAuthenticated(!!authToken);
  }, [authToken]);

  const login = (token) => {
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
