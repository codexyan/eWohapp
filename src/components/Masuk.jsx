import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuthentication } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Masuk() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

  return (
    <Container>
      <Grid
        container
        spacing={2}
        style={{ justifyContent: "center" }}
        sx={{ mt: 5 }}
        alignItems="center"
        direction="column"
        justifyContent="center"
      >
        <h1>Login</h1>
        <Grid item xs={6}>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TextField
              type="email"
              label="Email"
              variant="filled"
              sx={{ mb: 2 }}
              value={email}
              onChange={handleEmailChange}
              required
            />
            <TextField
              type="password"
              label="Password"
              variant="filled"
              sx={{ mb: 2 }}
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </form>
          <p>
            Belum punya akun? <Link to="/register">Register</Link>
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
