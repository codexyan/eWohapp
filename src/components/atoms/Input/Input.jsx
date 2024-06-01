import React from "react";
import { forwardRef } from "react";

const Input = forwardRef(
  ({ type, name, placeholder, className = "" }, ref) => {
    return (
      <div>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          ref={ref}
          className={`block w-full p-3 text-sm text-gray-700 placeholder-slate-400 placeholder:text-gray-400 bg-white border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 ${className}`}
        />
      </div>
    );
  }
);

export default Input;
