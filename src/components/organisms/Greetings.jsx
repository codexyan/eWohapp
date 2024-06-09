import React from "react";

export const Greetings = () => {
  return (
    <div
      className="py-16 mx-auto bg-center bg-cover bg-hero-pattern2"
      data-aos="zoom-in"
      data-aos-duration="2500"
    >
      <div
        className="container h-full py-5 mx-auto text-center rounded-none shadow-xl w-fit bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 backdrop-saturate-100 backdrop-contrast-100 sm:rounded-xl"
        data-aos="fade-up"
        data-aos-anchor-placement="center-center"
        data-aos-duration="2000"
      >
        <p className="w-10/12 mx-auto text-xs tracking-wide text-center text-white sm:w-3/5 font-playfair sm:text-base">
          Merupakan suatu kebahagiaan bagi kami, apabila Bapak/lbu/Saudara/i
          berkenan hadir & memberikan doa restu kepada kami.
        </p>
      </div>
    </div>
  );
};
