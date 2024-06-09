import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-06-30T09:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;
      let timeLeft = {};
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      setTimeLeft(timeLeft);
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const googleCalenderLink = () => {
    const title = encodeURIComponent("Ary & Fernanda's Wedding");
    const start = encodeURIComponent("2024-06-30T09:00:00");
    const end = encodeURIComponent("2024-06-30T10:00:00");
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}`;
    return url;
  };

  return (
    <>
      <div
        className="container mx-auto"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="flex flex-col items-center justify-center gap-5 py-10 mx-5 my-16 bg-right bg-no-repeat bg-cover shadow-sm bg-countdown-1 sm:bg-center rounded-3xl sm:mx-12 sm:gap-9">
          <div className="text-[#C08261] font-italianno text-3xl font-normal">
            <h1>Waktu Menuju Akad</h1>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-5"
            data-aos="zoom-in-up"
          >
            <div className="flex flex-col items-center justify-center gap-1 px-5 py-4 shadow date-div sm:gap-3 bg-amber-100/80 rounded-xl sm:rounded-2xl">
              <h1 className="text-2xl font-semibold sm:text-5xl text-amber-700">
                {timeLeft.days}
              </h1>
              <p className="text-sm text-amber-600 sm:text-xl">Hari</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-5 py-4 shadow date-div sm:gap-3 bg-amber-100/80 rounded-xl sm:rounded-2xl">
              <h1 className="text-2xl font-semibold sm:text-5xl text-amber-700">
                {timeLeft.hours}
              </h1>
              <p className="text-sm text-amber-600 sm:text-xl">Jam</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-5 py-4 shadow date-div sm:gap-3 bg-amber-100/80 rounded-xl sm:rounded-2xl">
              <h1 className="text-2xl font-semibold sm:text-5xl text-amber-700">
                {timeLeft.minutes}
              </h1>
              <p className="text-sm text-amber-600 sm:text-xl">Menit</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-5 py-4 shadow date-div sm:gap-3 bg-amber-100/80 rounded-xl sm:rounded-2xl">
              <h1 className="text-2xl font-semibold sm:text-5xl text-amber-700">
                {timeLeft.seconds}
              </h1>
              <p className="text-sm text-amber-600 sm:text-xl">Detik</p>
            </div>
          </div>
          <Link
            to={googleCalenderLink()}
            className="text-amber-100 py-4 font-raleway bg-[#C08261] rounded-full px-10 text-sm shadow-sm font-bold"
          >
            Simpan Tanggal
          </Link>
        </div>
      </div>
    </>
  );
};
