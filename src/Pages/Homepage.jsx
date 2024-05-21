import React from "react";
import Counter from "../components/Fragments/Counter";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Homepage() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      setClicked(alert("Halo guys!"));
    }
  }, [clicked]);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl mb-4 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Welcome To Teras Depan
        </h1>
        <Counter></Counter>
        <div className="mt-5 flex flex-row items-center justify-center gap-4">
          <input
            type="text"
            className="border rounded-full py-2 px-5"
            ref={inputRef}
          />
          <button
            onClick={handleClick}
            className="bg-green-800 py-2 px-6 text-white rounded-full shadow-sm"
          >
            Fokuskan Input
          </button>
        </div>
        <button
          onClick={() => setClicked(true)}
          className="bg-orange-800 py-2 px-6 mt-5 font-bold text-white rounded-full shadow-sm"
        >
          Sapa Dia!
        </button>
      </div>
    </>
  );
}
