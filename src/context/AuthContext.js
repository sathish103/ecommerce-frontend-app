// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import {
  signIn,
  signUp,
  signOut,
  getCurrentUser,
} from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await signIn({ username: email, password });
      if (response.isSignedIn) {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const register = async (email, password) => {
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
          },
        },
      });
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const logout = async () => {
    try {
      await signOut();
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};









// This is just a dummy placeholder (login() shows an alert). You won’t get real authentication with this.

// import React, { createContext } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const dummyAuth = {
//     user: null,
//     login: () => alert('Login disabled'),
//     logout: () => alert('Logout disabled'),
//     register: () => alert('Register disabled'),
//   };

//   return (
//     <AuthContext.Provider value={dummyAuth}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
