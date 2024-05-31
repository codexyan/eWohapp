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
          <div id="main-invitation" className="min-h-screen">
            <div className="bg-hero-pattern3 bg-cover bg-no-repeat bg-center min-h-[960px] hidden">
              <h1>Ini adalah halaman isi undangan</h1>
            </div>
            <div className="bg-hero-pattern4 bg-cover bg-no-repeat bg-top h-full min-h-[1900px]">
              {/* couple */}
              <div className="container border mx-auto flex justify-center items-center gap-6 flex-col">
                <div className="flex justify-center items-center flex-col gap-3">
                  <img
                    src="https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9sb2dvLnBuZyIsImlhdCI6MTcxNjQzMjE5OSwiZXhwIjoxNzQ3OTY4MTk5fQ.vFPWkOjlCOREKmDbB5968l_Hhyia41Hb13EngHwJOYg&t=2024-05-23T02%3A43%3A20.135Z"
                    alt="logos"
                    className="w-20"
                  />
                  <p className="text-amber-800 font-playfair text-2xl font-bold">
                    The Wedding of
                  </p>
                </div>

                <div className="flex gap-10 justify-center items-center sm:flex-row flex-col">
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-pi bg-cover bg-no-repeat bg-center w-[300px] h-[400px] rounded-t-full ring ring-amber-200"></div>
                    <div>Ary Sulistyo</div>
                  </div>
                  <div>
                    <h1 className="font-playfair text-3xl font-bold">&</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-5">
                    <div className="bg-pi bg-cover bg-no-repeat bg-center w-[300px] h-[400px] rounded-t-full ring ring-amber-200"></div>
                    <div>
                      <h1 className="font-playfair text-xl font-bold">
                        Fernanda Zahra
                      </h1>
                      <p>Putri dari</p>
                      <p>Bapak H. Arif Samsudin</p>
                      <p>&</p>
                      <p>Ibu Ningsih Tinampi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
