import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import Input from "./Input";

const InputForm = forwardRef(
  (
    {
      label,
      name,
      type = "text",
      placeholder = "",
      value = "",
      onChange,
      required = false,
    },
    ref
  ) => (
    <div className="mb-3">
      <Label htmlFor={name} className="block mb-2 text-sm font-bold text-slate-600">
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        ref={ref}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
);

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputForm;
