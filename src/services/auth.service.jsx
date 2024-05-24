import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qmpirqfxudgdyiqlcqvj.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtcGlycWZ4dWRnZHlpcWxjcXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxNjkyMDIsImV4cCI6MjAzMTc0NTIwMn0.XfjDzex5jOY4bjd7sCuLPWhJsJyUfsWJUu9Xm68xv88";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const register = async (data, callback) => {
  try {
    console.log("Registering user:", data);

    // Register user with email and password
    const { user, session, error } = await supabase.auth.signUp(
      {
        email: data.email,
        password: data.password,
      },
      {
        redirectTo: "http://localhost:5173/dashboard",
      }
    );

    if (error) throw error;

    // Insert additional user details into the client_users table
    const { error: insertError } = await supabase.from("client_users").insert([
      {
        id: user.id,
        full_name: data.fullname,
        email: data.email,
        phone: data.phone,
      },
    ]);

    if (insertError) throw insertError;

    callback(true, user);
  } catch (error) {
    console.error("Registration error:", error);
    callback(false, error.message);
  }
};

export const login = async (data, callback) => {
  try {
    const res = await axios.post("https://fakestoreapi.com/auth/login", data);
    callback(true, res.data.token);
  } catch (error) {
    callback(false, error);
  }
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  console.log(decoded);
  return decoded.user;
};
