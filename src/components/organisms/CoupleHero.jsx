import React from "react";

export const CoupleHero = () => {
  return (
    <div
      className="container flex flex-col items-center justify-center gap-6 py-12 mx-auto"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <img
          src="https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/icons-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9pY29ucy0yLnBuZyIsImlhdCI6MTcxNzExOTY4NSwiZXhwIjoxNzQ4NjU1Njg1fQ.3UKajZA2ShYN4TapAWXjhFn4VW7_eEl3i_VS4I1lS8o&t=2024-05-31T01%3A41%3A20.792Z"
          alt="logos"
          className="w-20"
        />
        <p className="text-2xl text-amber-800 font-italianno">The Wedding of</p>
      </div>

      <div
        className="flex flex-col items-center justify-center gap-10 sm:flex-row"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="bg-pa bg-cover bg-no-repeat bg-center w-[300px] h-[400px] rounded-full ring ring-amber-200"></div>
          <div>
            <h1 className="text-3xl font-italianno text-amber-600">
              Ary Sulistyo
            </h1>
            <div className="flex flex-col items-center justify-center mt-3 parents font-raleway text-amber-800">
              <p className="text-xs font-bold">Putra dari :</p>
              <div className="text-sm text-center">
                <p>Bapak Rusmanto</p>
                <p>&</p>
                <p>Ibu Sriyanti</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold font-playfair text-amber-700">&</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="bg-pi bg-cover bg-no-repeat bg-center w-[300px] h-[400px] rounded-full ring ring-amber-200"></div>
          <div>
            <h1 className="text-3xl font-italianno text-amber-600">
              Fernanda Destalia Yusuf
            </h1>
            <div className="flex flex-col items-center justify-center mt-3 parents text-amber-800">
              <p className="text-xs font-semibold">Putri dari :</p>
              <div className="text-sm text-center">
                <p>Bapak Yusup</p>
                <p>&</p>
                <p>Ibu Trisni Purwanti</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
