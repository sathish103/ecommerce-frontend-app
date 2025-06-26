// src/pages/Register.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/apiService';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await api.post('/users/register', form);
      alert('Registration successful. Please login.');
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Registration failed.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '60px auto', textAlign: 'center' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
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
