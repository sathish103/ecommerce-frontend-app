import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../services/adminService";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const data = await loginUser({ email, password });
      localStorage.setItem("token", data.token); // Store JWT token
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
