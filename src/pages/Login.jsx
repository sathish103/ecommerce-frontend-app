// src/pages/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://api.devopscicd.xyz/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      login(data.token, data.user);
      alert('Login successful');
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, backgroundColor: 'white', padding: 30, borderRadius: 10, boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Login</h2>

        <div style={{ marginBottom: 20 }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <label>Password:</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPass ? 'text' : 'password'}
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: 8, paddingRight: 40 }}
            />
            <span
              onClick={() => setShowPass(!showPass)}
              style={{
                position: 'absolute',
                right: 10,
                top: 8,
                cursor: 'pointer',
                userSelect: 'none',
              }}
              title={showPass ? "Hide Password" : "Show Password"}
            >
              {showPass ? '🙈' : '👁️'}
            </span>
          </div>
        </div>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        <button type="submit" style={{ padding: 10, width: '100%', marginTop: 10, backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: 4 }}>
          Login
        </button>

        <p style={{ marginTop: 12, fontSize: 14, textAlign: 'center' }}>
          <a href="#" style={{ color: '#007bff' }}>Forgot password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
