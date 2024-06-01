import React from "react";

export default function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-100 font-poppins text-xs"
    >
      {children}
    </label>
  );
}
