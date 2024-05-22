import React, { useState } from "react";
import logo from "/public/images/logos.png";

export default function NavbarDashboard() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      id="navbar-dashboard"
      className="w-full p-5 shadow bg-slate-100 flex items-center justify-between"
    >
      <div className="logo">
        <img className="h-12 w-12" src={logo} alt="logos" />
      </div>
      <div className="list-featured flex items-center gap-3 border rounded-md py-3 px-5 bg-white shadow-sm">
        <div className="say-name gap-1">
          <p className="text-xs">😁 Sugeng Rawuh</p>
          <h1 className="text-sm font-semibold">Muhammad Fakhrian</h1>
        </div>
        <div className="relative ml-3">
          <button
            type="button"
            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User Avatar"
            />
          </button>

          {dropdownOpen && (
            <div
              className="absolute right-0 z-10 mt-6 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-0"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-1"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-2"
              >
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
