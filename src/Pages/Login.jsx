import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

export default function LoginPage() {
  return (
    <AuthLayouts
      title="Welcome Back"
      sub="Hi 😁, Please enter your details to login"
      type="login"
    >
      <FormLogin />
    </AuthLayouts>
  );
}
