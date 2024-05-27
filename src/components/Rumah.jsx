import { Button, Container, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { firebaseAuthentication, firebaseDatabase } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { get, ref } from "firebase/database";

export default function Rumah() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const unsubscribe = firebaseAuthentication.onAuthStateChanged((user) => {
      if (user) {
        // Mengambil data pengguna dari Firebase Realtime Database
        const userRef = ref(firebaseDatabase, `users/${user.uid}`);
        get(userRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const userData = snapshot.val();
              setFullName(userData.fullName);
              setPhoneNumber(userData.phoneNumber);
            }
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = () => {
    firebaseAuthentication.signOut();
  };

  return (
    <>
      <Container>
        <Paper>
          <h1>Welcome to my Pages</h1>
          <p>Full Name: {fullName}</p>
          <p>Phone Number: {phoneNumber}</p>
          <Button variant="contained" color="error" onClick={handleLogout}>
            Keluar
          </Button>
        </Paper>
      </Container>
    </>
  );
}
