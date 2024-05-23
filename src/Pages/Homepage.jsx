import React from "react";
import { Link } from "react-router-dom";

// icons
import { FaWhatsapp } from "react-icons/fa";
import { RiAccountPinCircleLine } from "react-icons/ri";

export default function Homepage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
        <div className="flex flex-col items-center justify-center images">
          <img
            src="https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9sb2dvLnBuZyIsImlhdCI6MTcxNjM4NzkzNSwiZXhwIjoxNzQ3OTIzOTM1fQ.n5SAku3xSnxP5zkzChHDy2ZtGS2q6qfci9LbjbMF8kA&t=2024-05-22T14%3A25%3A35.902Z"
            alt="logos"
            className="w-32 mb-8 min-xl:w-96"
          />
          <img
            src="https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/hero-images.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9oZXJvLWltYWdlcy5wbmciLCJpYXQiOjE3MTYzODcxOTQsImV4cCI6MTc0NzkyMzE5NH0.j4hVeEwqOKmxzr7QqJIZzMYqWqkiGeH92hRC8wG3ZKc&t=2024-05-22T14%3A13%3A15.119Z"
            alt="hero"
            className="mb-10 max-sm:w-96"
          />
        </div>
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-amber-600">
          Undangan eWoh Digital
        </h1>
        <div className="flex flex-col items-center justify-center gap-2 mt-2">
          <p className="text-center text-md text-slate-700">
            Pembuatan undangan digital berbasis website. Digitalisasikan
            undanganmu dan saatnya kamu bergabung bersama yang lainnya.
          </p>
          <p className="text-lg italic text-slate-400">#pakaieWohAja</p>
        </div>
        <Link
          to="/"
          className="flex flex-row items-center justify-center gap-3 px-8 py-3 mt-5 font-bold text-white bg-orange-800 rounded-full shadow-sm"
        >
          <FaWhatsapp className="text-3xl" />
          <p>Hubungi Kami</p>
        </Link>
        <div className="flex flex-row items-center gap-2 mt-3 other-cta">
          <Link to="/comingsoon" className="text-xs font-semibold text-amber-700">Lihat Undangan</Link>
          <p className="text-sm text-slate-200">|</p>
          <Link to="/login" className="flex flex-row items-center gap-1 text-xs font-semibold hover:font-bold text-amber-700">
            <RiAccountPinCircleLine />
            Login e-Wohku
          </Link>
        </div>
        <p className="bottom-0 my-10 text-sm text-center text-slate-400">
          Copyright © 2024 | eWohapp All Rights Reserved
        </p>
      </div>
    </>
  );
}
