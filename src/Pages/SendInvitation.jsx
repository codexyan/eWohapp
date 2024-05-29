import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

// Icons
import { FaEnvelopeOpenText } from "react-icons/fa";

export default function SendInvitationPage() {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to");

  const [currentState, setCurrentState] = useState("split"); // 'split', 'loading', 'main'

  const handleOpenInvitation = () => {
    setCurrentState("loading");
    setTimeout(() => {
      setCurrentState("main");
    }, 2000); // 2 detik jeda loading
  };

  return (
    <>
      <div className="min-w-screen">
        {/* Split Invitation */}
        {currentState === "split" && (
          <div
            id="split-invitation"
            className="min-h-screen flex flex-col bg-hero-pattern2 bg-cover bg-no-repeat bg-center justify-around"
          >
            <div className="text-white text-center flex flex-col justify-center basis-3/4">
              <p className="text-sm font-semibold">YTH Bapak/Ibu/Saudara/i :</p>
              <p className="member font-righteous">{guestName}</p>
            </div>
            <div className="wrap-content text-center flex flex-col gap-10 py-8 justify-end items-center basis-1/">
              <div className="content">
                <h1 className="text-white font-righteous">
                  We Invite You To Our Wedding
                </h1>
                <div className="couple font-playfair text-5xl">
                  <h1 className="text-white font-playfair shadow">
                    Ary & Fernanda{" "}
                  </h1>
                </div>
              </div>
              <button
                onClick={handleOpenInvitation}
                className="flex flex-row justify-center items-center gap-2 bg-amber-900 px-8 py-3 text-white rounded-full shadow hover:bg-amber-950 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
              >
                <FaEnvelopeOpenText />
                Buka Undangan
              </button>
            </div>
          </div>
        )}

        {/* Loading Screen */}
        {currentState === "loading" && (
          <div className="min-h-screen flex items-center justify-center">
            <div className="loader">Loading...</div>
          </div>
        )}

        {/* Main Invitation */}
        {currentState === "main" && (
          <div id="main-invitation">
            <div>
              <h1>Ini adalah halaman isi undangan</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
