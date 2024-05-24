import React from "react";
import { Link } from "react-router-dom";

export default function AuthLayouts({ title, sub, children, type }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-5 min-h-screen `}
    >
      <div className="flex flex-col items-center justify-center gap-2 title mt-9">
        <img
          src="https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9sb2dvLnBuZyIsImlhdCI6MTcxNjQzMjE5OSwiZXhwIjoxNzQ3OTY4MTk5fQ.vFPWkOjlCOREKmDbB5968l_Hhyia41Hb13EngHwJOYg&t=2024-05-23T02%3A43%3A20.135Z"
          alt="logos"
          className="w-20"
        />
      </div>

      <div className="w-full max-w-xs px-5 py-8 border-2 rounded-lg shadow-md border-slate-200/20 shadow-slate-200">
        <h1 className="mb-2 text-2xl font-bold text-slate-600">{title}</h1>
        <p className="mb-5 text-sm font-medium text-slate-400">{sub}</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
}

const Navigation = ({ type }) => {
  const linkText = type === "login" ? "Sign Up" : "Sign In";
  const linkTo = type === "login" ? "/register" : "/login";

  return (
    <p className="my-5 text-sm font-medium text-center text-slate-600">
      {type === "login"
        ? "Don't have an account ?"
        : "Already have an account ?"}
      <Link to={linkTo} className="font-bold text-amber-600">
        {" "}
        {linkText}
      </Link>
    </p>
  );
};
