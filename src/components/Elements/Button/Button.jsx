import React from "react";

export default function Button(props) {
  const {
    classname = "bg-black",
    children = "Button",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`text-white ${classname} font-bold py-2 px-5 rounded-md shadow-md hover:bg-blue-900 transition-colors duration-150 ease-in-out`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
