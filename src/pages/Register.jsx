// src/pages/Register.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/apiService';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await api.post('/users/register', {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      if (response.status === 200) {
        alert('Registration successful. Please login.');
        navigate('/login');
      } else {
        setError('Registration failed.');
      }
    } catch (err) {
      if (err.response?.status === 409) {
        setError('Email already exists.');
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '60px auto', textAlign: 'center' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          name="name"
          placeholder="Name"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <div style={{ position: 'relative' }}>
          <input
            name="password"
            type={showPass ? 'text' : 'password'}
            placeholder="Password"
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange}
            required
            style={{ width: '100%', paddingRight: 40 }}
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
          >
            {showPass ? '🙈' : '👁️'}
          </span>
        </div>
        <div style={{ position: 'relative' }}>
          <input
            name="confirmPassword"
            type={showConfirm ? 'text' : 'password'}
            placeholder="Confirm Password"
            autoComplete="new-password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            style={{ width: '100%', paddingRight: 40 }}
          />
          <span
            onClick={() => setShowConfirm(!showConfirm)}
            style={{
              position: 'absolute',
              right: 10,
              top: 8,
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            {showConfirm ? '🙈' : '👁️'}
          </span>
        </div>

        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Register
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
