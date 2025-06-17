import React, { useState } from "react";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await authService.register({ email, password, name });
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Try a different email.");
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full"
      />
      {error && <p className="text-red-600">{error}</p>}
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
