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
        className="absolute top-5 right-5 bg-blue-600 p-2 text-white rounded"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      <div className="flex flex-col items-center justify-center gap-2 title mt-9">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-amber-900 to-orange-600">
          POS Balok
        </h1>
        <p className="italic text-slate-500">Point of Sales</p>
      </div>

      <div className="w-full max-w-sm border-2 rounded-lg border-slate-200/60 p-9">
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
        <Link to="/login" className="font-bold text-blue-600">
          Sign In
        </Link>
      </p>
    );
  }
};
