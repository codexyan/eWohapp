import React, { useState, useEffect } from "react";
import logo from "/public/images/logos.png";
import { useNavigate } from "react-router-dom";
import { firebaseAuthentication, firebaseDatabase } from "../../config/firebase";
import { get, ref } from "firebase/database";

export default function NavbarDashboard() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const unsubscribe = firebaseAuthentication.onAuthStateChanged((user) => {
      if (user) {
        // Mengambil data pengguna dari Firebase Realtime Database
        const userRef = ref(firebaseDatabase, `users/${user.uid}`);
        get(userRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const userData = snapshot.val();
              setFullName(userData.fullName);
              setPhoneNumber(userData.phoneNumber);
            }
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      } else {
        navigate("/masuk");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    firebaseAuthentication
      .signOut()
      .then(() => {
        // Logout berhasil, arahkan kembali ke halaman login
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div
      id="navbar-dashboard"
      className="flex items-center justify-between w-full p-5 shadow bg-slate-100"
    >
      <div className="logo">
        <img className="w-12 h-12" src={logo} alt="logos" />
      </div>
      <div className="flex items-center gap-3 px-5 py-3 bg-white border rounded-md shadow-sm list-featured">
        <div className="gap-1 say-name">
          <p className="text-xs">😁 Sugeng Rawuh</p>
          <h1 className="text-sm font-semibold">{fullName}</h1>
        </div>
        <div className="relative ml-3">
          <button
            type="button"
            className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User Avatar"
            />
          </button>

          {dropdownOpen && (
            <div
              className="absolute right-0 z-10 w-48 py-1 mt-6 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
            >
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                role="menuitem"
                id="user-menu-item-2"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
