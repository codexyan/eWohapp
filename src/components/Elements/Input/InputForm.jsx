import React from "react";
import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { label, name, type, placeholder } = props;

  return (
    <div className="mb-3">
      <Label
        htmlFor={name}
        className="block mb-2 text-sm font-bold text-slate-600"
      >
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

export default InputForm;
