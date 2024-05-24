import React from "react";
import AuthLayouts from "../components/organisms/AuthLayouts";
import FormRegister from "../components/molecules/FormRegister";


export default function RegisterPage() {
  return (
    <AuthLayouts
      title="Register"
      sub="Please enter your details to create new account"
      type="register"
    >
      <FormRegister />
    </AuthLayouts>
  );
}
