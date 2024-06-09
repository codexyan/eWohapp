import React from "react";

export const Closing = () => {
  return (
    <div
      className="mx-auto bg-closing bg-bottom bg-no-repeat bg-cover sm:h-[1024px]"
      data-aos="zoom-in-down"
      data-aos-duration="3000"
    >
      <div className="container flex flex-col items-center justify-between h-full mx-auto">
        <div className="flex flex-col items-center justify-center pt-32 sm:pt-32">
          <p className="text-2xl text-center text-white sm:text-5xl font-italianno">
            Matur Nuwun
          </p>
          <p className="text-xl font-bold text-center text-transparent sm:text-3xl bg-gradient-to-r from-yellow-200 via-amber-100 to-red-300 bg-clip-text font-playfair">
            #tresNandAry
          </p>
        </div>
        <div className="flex flex-col items-center w-3/4 gap-5 pt-5 pb-12 text-center text-white sm:pb-72 sm:w-4/12">
          <p className="text-xs sm:text-sm">
            Kami yang berbahagia <br /> Keluarga Besar
          </p>
          <p className="text-3xl font-semibold font-playfair">Ary & Nanda</p>
        </div>
      </div>
    </div>
  );
};
