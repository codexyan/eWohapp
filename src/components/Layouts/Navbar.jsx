import React, { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button/Button";
import { useSelector } from "react-redux";

export default function Navbar() {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [ cart ]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div
        id="navbar"
        className="fixed top-0 flex items-center justify-around w-full gap-4 py-5 shadow bg-slate-100"
      >
        <h1 className="font-bold">😁{username}</h1>
        <Button className="bg-red-600" onClick={handleLogout}>
          Log out
        </Button>
        <div className="flex text-white items-center bg-slate-800 p-2 rounded-md ml-5">
          Jumlah pesanan : {totalCart}
        </div>
      </div>
    </>
  );
}
