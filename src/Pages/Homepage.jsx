import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen mt-10">
        <img src="https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9sb2dvLnBuZyIsImlhdCI6MTcxNjM4NzkzNSwiZXhwIjoxNzQ3OTIzOTM1fQ.n5SAku3xSnxP5zkzChHDy2ZtGS2q6qfci9LbjbMF8kA&t=2024-05-22T14%3A25%3A35.902Z" alt="logos" className="min-xl:w-96 w-32 mb-8" />
        <img src="https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/hero-images.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9oZXJvLWltYWdlcy5wbmciLCJpYXQiOjE3MTYzODcxOTQsImV4cCI6MTc0NzkyMzE5NH0.j4hVeEwqOKmxzr7QqJIZzMYqWqkiGeH92hRC8wG3ZKc&t=2024-05-22T14%3A13%3A15.119Z" alt="hero" className="min-xl:w-96 mb-10" />
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-900 to-amber-600">
          Undangan eWoh Digital
        </h1>
        <div className="mt-2 flex flex-col items-center justify-center gap-2">
          <p className="text-md text-center text-slate-700">
            Pembuatan undangan digital berbasis website. Digitalisasikan undanganmu dan saatnya kamu bergabung bersama yang lainnya.
          </p>
          <p className="text-lg text-slate-400 italic">#pakaieWohAja</p>
        </div>
        <Link
        to="/"
          className="bg-orange-800 py-3 px-8 mt-5 font-bold text-white rounded-full shadow-sm flex flex-row gap-3 items-center justify-center"
        >
          <FaWhatsapp className="text-3xl" />
          <p>Hubungi Kami</p>
        </Link>
        <p className="text-sm text-slate-400 my-10 text-center">Copyright © 2024 | eWohapp All Rights Reserved</p>
      </div>
    </>
  );
}
