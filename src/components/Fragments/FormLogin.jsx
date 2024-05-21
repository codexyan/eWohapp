import React from "react";
import { useRef, useEffect, useState } from "react";

import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/Button";
import { login } from "../../services/auth.service";

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault(); // mencegah refresh otomatis

    // Menyimpan data login ke localStorage
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";

    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    // console.log("login successfully!");

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  });

  return (
    <div>
      <form onSubmit={handleLogin}>
        {loginFailed && (
          <p className="text-red-700 text-sm text-center font-medium">
            {loginFailed}
          </p>
        )}
        {/* Email */}
        <InputForm
          label="Username"
          name="username"
          type="text"
          placeholder="iyans brown"
          ref={usernameRef}
        />
        {/* Password */}
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="***"
        />
        <Button classname="w-full bg-blue-600" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
