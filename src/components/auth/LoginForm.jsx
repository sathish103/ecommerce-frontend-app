// src/components/auth/LoginForm.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminService from "../../services/adminService";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await adminService.login(formData);
      setUser(data.user); // Assuming response returns user object
      localStorage.setItem("token", data.token); // optional
      navigate("/"); // Redirect after login
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
