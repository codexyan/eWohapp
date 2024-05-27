import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Grid, TextField } from "@mui/material";
import { firebaseAuthentication, firebaseDatabase } from "../config/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { ref, set } from "firebase/database";

export default function Daftar() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuthentication,
        email,
        password
      );
      const user = userCredential.user;

      // Simpan data pengguna ke database
      await set(ref(firebaseDatabase, `users/${user.uid}`), {
        email: email,
        fullName: fullName,
        phoneNumber: phoneNumber,
      });

      // Kirim email verifikasi
      await sendEmailVerification(user);

      navigate("/masuk");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("Pengguna tidak ditemukan. Silakan daftar terlebih dahulu.");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ mt: 5 }}
        alignItems="center"
        direction="column"
      >
        <h1 className="text-2xl font-bold">Register</h1>
        <Grid item xs={6}>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <TextField
              type="text"
              label="Full Name"
              id="full-name"
              name="full-name"
              variant="filled"
              className="w-full mb-2"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
            <TextField
              type="tel"
              label="Phone Number"
              id="phone-number"
              name="phone-number"
              variant="filled"
              className="w-full mb-2"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
            <TextField
              type="email"
              label="Email"
              id="email"
              name="email"
              variant="filled"
              className="w-full mb-2"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <TextField
              type="password"
              label="Password"
              id="password"
              name="password"
              variant="filled"
              className="w-full mb-2"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </Button>
          </form>
          <p className="mt-4">
            Belum punya akun? <Link to="/masuk" className="text-blue-500">Masuk</Link>
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
