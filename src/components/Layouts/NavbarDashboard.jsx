import React from "react";
import Button from "../Elements/Button/Button";

export default function NavbarDashboard() {
  return (
    <>
      <div
        id="navbar-dashboard"
        className="w-full p-5 shadow bg-slate-100 flex flex-row items-center justify-between"
      >
        <div className="logo">
          <h1 className="font-bold text-xl">Super e-Woh</h1>
        </div>
        <div className="list-featured flex flex-row items-center justify-center gap-3">
          <div className="say-name gap-1">
            <p className="text-sm italic">Sugeng Rawuh</p>
            <h1 className="text-sm font-semibold">Muhammad Fakhrian</h1>
          </div>
          <Button>Keluar</Button>
        </div>
      </div>
    </>
  );
}
