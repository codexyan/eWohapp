import React from "react";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, name, placeholder} = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        ref={ref}
        className="w-full px-3 py-2 text-sm border rounded text-slate-700 placeholder:opacity-50"
      />
    </div>
  );
});

export default Input;