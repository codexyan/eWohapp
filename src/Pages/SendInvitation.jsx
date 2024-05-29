import React from "react";
import { useSearchParams } from "react-router-dom";

// Icons
import { FaEnvelopeOpenText } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SendInvitationPage() {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to");

  return (
    <>
      <div className="min-w-screen">
        {/* Hero Section */}
        <div
          id="hero"
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
            <Link
              to="/invitation"
              className="flex flex-row justify-center items-center gap-2 bg-amber-900 px-8 py-3 text-white rounded-full shadow hover:bg-amber-950 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
            >
              <FaEnvelopeOpenText />
              Buka Undangan
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
