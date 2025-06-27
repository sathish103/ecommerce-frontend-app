// src/pages/Login.jsx

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../services/apiService';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || '/'; // <- redirect path

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/users/login', { email, password });
      const { token, user } = res;
      login(token, user);
      navigate(from, { replace: true }); // ✅ redirect to original page
    } catch (err) {
      setError('Invalid credentials or server error');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff' }}>
          Login
        </button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
};

export default Login;
