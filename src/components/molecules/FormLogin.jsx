import React from "react";
import { useRef, useEffect, useState } from "react";
import { login } from "../../services/auth.service";
import InputForm from "../atoms/Input/InputForm";
import Button from "../atoms/Button/Button";

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

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
          <p className="text-sm font-medium text-center text-red-700">
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
        <Button className="mt-2" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
