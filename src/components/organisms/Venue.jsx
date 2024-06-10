import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import LottieComponent from "../LottieComponent";
import lottieAnimations from "../../lottieAnimation";

export const Venue = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  }, []);

  // Lottie Animations
  const animationData = lottieAnimations.location;
  const width = 50;
  const height = 50;

  return (
    <>
      <div
        className="container flex flex-col gap-8 py-16 mx-auto"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="3000"
      >
        <div className="text-center">
          <h1 className="text-xl font-semibold text-amber-900 sm:text-3xl font-base font-playfair">
            Tempat Acara
          </h1>
        </div>
        <div
          id="section"
          className="flex flex-col gap-8 px-5 mx-auto sm:flex-row sm:w-4/6"
        >
          {/* Event 1 */}
          <div className="card-section bg-white/50 py-10 px-5 sm:w-full mx-auto flex justify-center items-center flex-col gap-3 rounded-t-full rounded-b-[2000px] shadow-xl">
            <LottieComponent
              animationData={animationData}
              width={width}
              height={height}
            />
            <h1 className="text-xl font-semibold sm:text-2xl font-playfair text-amber-700">
              Wedding Ceremony
            </h1>
            <div className="flex items-center justify-center w-full gap-2 divider">
              <hr className="my-5 h-0.5 bg-slate-300 w-1/5" />
              💍
              <hr className="my-5 h-0.5 bg-slate-300 w-1/5" />
            </div>
            <h1 className="text-lg font-semibold font-poppins text-slate-600">
              Minggu
            </h1>
            <p className="text-6xl font-medium sm:text-7xl font-italianno">
              30
            </p>
            <div className="flex flex-col items-center justify-center gap-0 date">
              <h1 className="text-lg font-poppins text-slate-600">Juni 2024</h1>
              <h1 className="text-sm font-poppins sm:text-md text-slate-600">
                09:00 - 10.30 WIB
              </h1>
            </div>
            <hr className=" h-0.3 bg-slate-300 w-1/3" />
            <p className="text-xl font-bold text-amber-900">
              Prosesi Akad Nikah
            </p>
            <p className="w-10/12 text-sm tracking-wide text-center text-slate-400">
              Garjoyo RT03/00, Dukuh, Imogiri, Kec. Imogiri, Kabupaten Bantul,
              Daerah Istimewa Yogyakarta
            </p>
            <Link
              to="https://maps.app.goo.gl/3xtmwxBfWmRbgKKSA"
              className="w-2/3 py-4 mt-5 font-bold text-center text-white transition-transform rounded-full bg-amber-900 sm:w-1/3 hover:bg-amber-950 transform-gpu hover:-translate-y-1 hover:shadow-lg"
            >
              <CiLocationArrow1 className="inline mr-2 text-2xl font-bold" />
              Lokasi
            </Link>
          </div>
          {/* Event 2 */}
          <div className="card-section bg-white/50 py-10 px-5 sm:w-full mx-auto flex justify-center items-center flex-col gap-3 rounded-t-full rounded-b-[2000px] shadow-xl">
            <LottieComponent
              animationData={animationData}
              width={width}
              height={height}
            />
            <h1 className="text-xl font-semibold sm:text-2xl font-playfair text-amber-700">
              Wedding Reception
            </h1>
            <div className="flex items-center justify-center w-full gap-2 divider">
              <hr className="my-5 h-0.5 bg-slate-300 w-1/5" />
              💍
              <hr className="my-5 h-0.5 bg-slate-300 w-1/5" />
            </div>
            <h1 className="text-lg font-semibold font-poppins text-slate-600">
              Minggu
            </h1>
            <p className="text-6xl font-medium sm:text-7xl font-italianno">
              30
            </p>
            <div className="flex flex-col items-center justify-center gap-0 date">
              <h1 className="text-lg font-poppins text-slate-600">Juni 2024</h1>
              <h1 className="text-sm font-poppins sm:text-md text-slate-600">
                13:00 - 14.00 WIB
              </h1>
            </div>
            <hr className=" h-0.3 bg-slate-300 w-1/3" />
            <p className="text-xl font-bold text-amber-900">
              Resepsi Pernikahan
            </p>
            <p className="w-10/12 text-sm tracking-wide text-center text-slate-400">
              Garjoyo RT03/00, Dukuh, Imogiri, Kec. Imogiri, Kabupaten Bantul,
              Daerah Istimewa Yogyakarta
            </p>
            <Link
              to="https://maps.app.goo.gl/3xtmwxBfWmRbgKKSA"
              className="w-2/3 py-4 mt-5 font-bold text-center text-white transition-transform rounded-full bg-amber-900 sm:w-1/3 hover:bg-amber-950 transform-gpu hover:-translate-y-1 hover:shadow-lg"
            >
              <CiLocationArrow1 className="inline mr-2 text-2xl font-bold" />
              Lokasi
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
