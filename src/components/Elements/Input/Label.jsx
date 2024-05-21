import React from "react";

export default function Label(props) {
  const { htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-600 text-sm font-bold mb-2"
    >
      {children}
    </label>
  );
}
