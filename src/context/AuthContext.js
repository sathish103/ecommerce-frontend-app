import React, { createContext, useState, useEffect } from 'react';
import Auth from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const checkUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const login = async (email, password) => {
    const user = await Auth.signIn(email, password);
    setUser(user);
    navigate('/');
  };

  const register = async (email, password) => {
    await Auth.signUp({
      username: email,
      password,
      attributes: { email }
    });
  };

  const logout = async () => {
    await Auth.signOut();
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
