import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login  = async (data, callback) => {
  try {
    const res = await axios.post("https://fakestoreapi.com/auth/login", data);
    callback(true, res.data.token);
  } catch (error) {
    callback(false, error)
  }
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  console.log(decoded);
  return decoded.user;
};
