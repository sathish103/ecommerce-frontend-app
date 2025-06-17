// src/hooks/useAuth.js

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import adminService from "../services/adminService";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const data = await adminService.login({ email, password });
      localStorage.setItem("token", data.token); // Assuming backend returns JWT
      setUser(data.user); // Set user in context
      navigate("/");
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return {
    user,
    login,
    logout,
  };
};

export default useAuth;
