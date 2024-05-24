import React from "react";
import PropTypes from "prop-types";

export default function Button({
  className = "",
  children = null,
  onClick = () => {},
  type = "button",
}) {
  return (
    <button
      className={`text-white ${className} w-full font-bold py-3 rounded-md shadow-md bg-amber-800 hover:bg-amber-900 transition-colors duration-150 ease-in-out`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};