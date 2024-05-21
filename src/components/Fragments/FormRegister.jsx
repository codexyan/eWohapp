import React from "react";
import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/Button";

export default function FormRegister(props) {
  
  return (
    <div>
      <form action="">
        <InputForm
          label="Full Name"
          name="fullname"
          type="text"
          placeholder="Your Full Name"
        />
        <InputForm
          label="Email"
          name="email"
          type="email"
          placeholder="elon@gmail.com"
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="***"
        />
        <InputForm
          label="Confirm Password"
          name="password"
          type="password"
          placeholder="***"
        />
        <Button classname="w-full bg-blue-600">Login</Button>
      </form>
    </div>
  );
}
