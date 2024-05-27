import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import {
  firebaseAuthentication,
  firebaseDatabase,
} from "../../config/firebase";
import { Button, TextField } from "@mui/material";

// import InputForm from "../atoms/Input/InputForm";
// import Button from "../atoms/Button/Button";

export default function FormRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, password, phoneNumber } = formData;

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

      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        <TextField
          label="Nama Lengkap"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
