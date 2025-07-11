import api from "./api"; // this uses axios instance

// SIGNUP FUNCTION
export const signup = async (userData) => {
  try {
    const res = await api.post("/auth/signup", userData);
    return res.data;
  } catch (err) {
    return { error: err.response?.data?.message || "Signup failed" };
  }
};

// LOGIN FUNCTION
export const login = async (userData) => {
  try {
    const res = await api.post("/auth/login", userData);
    return res.data;
  } catch (err) {
    return { error: err.response?.data?.message || "Login failed" };
  }
};
