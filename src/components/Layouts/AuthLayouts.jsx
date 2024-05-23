import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

export default function AuthLayouts(props) {
  const { title, sub, children, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-5 min-h-screen ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <button
        className="absolute p-2 text-white bg-blue-600 rounded top-5 right-5"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      
      <div className="flex flex-col items-center justify-center gap-2 title mt-9">
        <img src="https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9sb2dvLnBuZyIsImlhdCI6MTcxNjQzMjE5OSwiZXhwIjoxNzQ3OTY4MTk5fQ.vFPWkOjlCOREKmDbB5968l_Hhyia41Hb13EngHwJOYg&t=2024-05-23T02%3A43%3A20.135Z" alt="logos" className="w-32"/>
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
  if (type === "login") {
    return (
      <p className="my-5 text-sm font-medium text-center text-slate-600">
        Don't have an account ?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="my-5 text-sm font-medium text-center text-slate-600">
        Already have an account ?{" "}
        <Link to="/login" className="font-bold text-amber-800">
          Sign In
        </Link>
      </p>
    );
  }
};
