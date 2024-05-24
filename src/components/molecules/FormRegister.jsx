import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/auth.service";
import InputForm from "../atoms/Input/InputForm";
import Button from "../atoms/Button/Button";

export default function FormRegister() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
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

    register(formData, (status, res) => {
      if (status) {
        console.log("Registration successful!", res);
        navigate("/dashboard");
      } else {
        console.error("Registration failed!", res);
        setError(res);
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <InputForm
          label="Full Name"
          name="fullname"
          type="text"
          value={formData.fullname}
          onChange={handleInputChange}
          placeholder="Nama Lengkap"
          required
        />
        <InputForm
          label="Email"
          name="email"
          type="email"
          placeholder="elon@gmail.com"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <InputForm
          label="Phone Number"
          name="phone"
          type="text"
          placeholder="08XXXXXXXXX"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="***"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <Button classname="mt-2" type="submit">
          Register
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
