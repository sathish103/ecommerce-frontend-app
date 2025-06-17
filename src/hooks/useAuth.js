// src/hooks/useAuth.js

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Custom hook to use auth context in any component
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
