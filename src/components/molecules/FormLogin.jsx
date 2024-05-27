import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuthentication } from "../../config/firebase";
import { Button, TextField } from "@mui/material";

// import Button from "../atoms/Button/Button";
// import InputForm from "../atoms/Input/InputForm";

export default function FormLogin() {
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuthentication,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        if (user.emailVerified) {
          console.log(user);
          navigate("/dashboard");
        } else {
          alert("Please verify your email before logging in.");
        }
      }
    } catch (error) {
      alert(error.message);
    }

    console.log(email, password);
  };

  // const emailRef = useRef(null);
  // useEffect(() => {
  //   emailRef.current.focus();
  // }, []);

  return (
    <div>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        {loginFailed && (
          <p className="text-sm font-medium text-center text-red-700">
            {loginFailed}
          </p>
        )}
        {/* Email */}
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          placeholder="you@example.com"
          onChange={handleEmailChange}
          value={email}
          required
        />
        {/* Password */}
        <TextField
          label="Password"
          type="password"
          placeholder="***"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
