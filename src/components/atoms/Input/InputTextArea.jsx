import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Label from "./Label";

const InputTextArea = forwardRef(
  (
    {
      label,
      name,
      placeholder = "",
      onChange = () => {},
      className = "",
      rows,
      cols,
      required = false,
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
        <textarea
          placeholder={placeholder}
          name={name}
          cols={cols}
          rows={rows}
          className={`${className} p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
          onChange={onChange}
          required={required}
        ></textarea>
      </div>
    </>
  )
);

InputTextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputTextArea;
