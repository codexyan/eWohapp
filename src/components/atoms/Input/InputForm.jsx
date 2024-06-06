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
      className = "",
      required = false,
      onChange = () => { },
      value = "",
    },
    ref
  ) => (
    <>
      <div className="mb-3 flex flex-col gap-2">
        <Label
          htmlFor={name}
          className={`${className} block mb-2 text-sm font-bold`}
        >
          {label}
        </Label>
        {/* <Input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          required={required}
          className={`${className}`}
        /> */}
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          ref={ref}
          value={value}
          className={`block w-full p-3 text-sm text-gray-700 placeholder-slate-400 placeholder:text-gray-400 bg-white border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 ${className}`}
          required={required}
          onChange={onChange}
        />
      </div>
    </>
  )
);

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ref: PropTypes.any,
};

export default InputForm;
