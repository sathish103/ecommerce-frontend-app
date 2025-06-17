import axios from "../axiosInstance";

// Named login function
export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post("/users/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

// Named register function
export const registerUser = async ({ name, email, password }) => {
  try {
    const response = await axios.post("/users/register", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error("Registration failed");
  }
};

// Also keeping default export if needed elsewhere
const adminService = {
  login: loginUser,
  register: registerUser,
};

export default adminService;
