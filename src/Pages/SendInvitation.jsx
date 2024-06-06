import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import supabase from "../supabaseClient";

// Icons
import { FaEnvelopeOpenText } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Icons
import { SlLocationPin } from "react-icons/sl";
import { WishesMessages }  from "../components/organisms/WishesMessages";

export default function SendInvitationPage() {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to");
  const [currentState, setCurrentState] = useState("split");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown
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

  const handleOpenInvitation = () => {
    setCurrentState("loading");
    setTimeout(() => {
      setCurrentState("main");
    }, 2000); // 2 detik jeda loading
  };

  // Handle Input Wishes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Simpan Kalender
  const googleCalenderLink = () => {
    const title = encodeURIComponent("Ary & Fernanda's Wedding");
    const start = encodeURIComponent("2024-06-30T09:00:00");
    const end = encodeURIComponent("2024-06-30T10:00:00");
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}`;
    return url;
  };

  return (
    <>
      <div className="min-w-screen">
        {/* Split Invitation */}
        {currentState === "split" && (
          <div
            id="split-invitation"
            className="flex flex-col justify-around min-h-screen bg-center bg-no-repeat bg-cover bg-hero-pattern2"
          >
            <div className="flex flex-col justify-center text-center text-white basis-3/4">
              <p className="text-sm font-semibold">YTH Bapak/Ibu/Saudara/i :</p>
              <p className="member font-righteous">{guestName}</p>
            </div>
            <div className="flex flex-col items-center justify-end gap-10 py-8 text-center wrap-content basis-1/">
              <div className="content">
                <h1 className="text-white font-righteous">
                  We Invite You To Our Wedding
                </h1>
                <div className="text-4xl couple font-playfair">
                  <h1 className="text-white font-playfair">Ary & Fernanda </h1>
                </div>
              </div>
              <button
                onClick={handleOpenInvitation}
                className="flex flex-row items-center justify-center gap-2 px-8 py-3 text-white transition-transform rounded-full shadow bg-amber-900 hover:bg-amber-950 transform-gpu hover:-translate-y-1 hover:shadow-lg"
              >
                <FaEnvelopeOpenText />
                Buka Undangan
              </button>
            </div>
          </div>
        )}

        {/* Loading Screen */}
        {currentState === "loading" && (
          <div className="flex items-center justify-center min-h-screen">
            <div className="loader">Loading...</div>
          </div>
        )}

        {/* Main Invitation */}
        {currentState === "main" && (
          <div id="main-invitation" className="min-h-screen">
            {/* Header */}
            <div className="bg-hero-pattern3 bg-cover bg-no-repeat bg-center sm:min-h-[960px]">
              {/* Checking */}
              <div className="container flex flex-col items-center justify-center gap-10 mx-auto border h-svh bg-white/80">
                <div className="text-3xl font-bold text-[#E2C799]">
                  <h1>30.06.2024</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4 text-4xl">
                  <h1 className="text-5xl font-italianno text-amber-700">
                    Ary
                  </h1>
                  <h1 className="text-5xl font-playfair text-amber-700">&</h1>
                  <h1 className="text-5xl font-italianno text-amber-700">
                    Nanda
                  </h1>
                </div>
                <div className="flex flex-col items-center justify-center w-3/4 gap-5 text-center border description">
                  <p>بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ</p>
                  <p>
                    وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ
                    اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ
                    مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ
                    يَّتَفَكَّرُوْنَ
                  </p>
                  <p className="text-xs tracking-wide sm:text-sm font-playfair">
                    " Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia
                    menciptakan pasangan-pasangan untukmu dari (jenis) dirimu
                    sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan
                    di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada
                    yang demikian itu benar-benar terdapat tanda-tanda
                    (kebesaran Allah) bagi kaum yang berpikir. "
                  </p>
                  <p className="text-xs">( QS: Ar-Rum:21 )</p>
                </div>
              </div>
            </div>

            {/* Couple */}
            <div className="bg-hero-pattern4 bg-cover bg-no-repeat bg-top h-full min-h-[1900px]">
              {/* couple */}
              <div
                className="container flex flex-col items-center justify-center gap-6 mx-auto border sm:pt-12"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <img
                    src="https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/icons-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9pY29ucy0yLnBuZyIsImlhdCI6MTcxNzExOTY4NSwiZXhwIjoxNzQ4NjU1Njg1fQ.3UKajZA2ShYN4TapAWXjhFn4VW7_eEl3i_VS4I1lS8o&t=2024-05-31T01%3A41%3A20.792Z"
                    alt="logos"
                    className="w-20"
                  />
                  <p className="text-2xl text-amber-800 font-italianno">
                    The Wedding of
                  </p>
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
                    <h1 className="text-3xl font-bold font-playfair text-amber-700">
                      &
                    </h1>
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

              {/* Venue */}
              <div className="container mx-auto border py-16 flex flex-col gap-5">
                <div className="text-center">
                  <h1 className="text-3xl font-base font-playfair">
                    Tempat Acara
                  </h1>
                </div>
                <div
                  id="section"
                  className="border grid grid-cols-2 gap-8 sm:w-4/6 mx-auto"
                >
                  {/* Event 1 */}
                  <div className="card-section bg-white/50 py-10 px-5 sm:w-full mx-auto flex justify-center items-center flex-col gap-3 rounded-t-full rounded-b-3xl shadow-2xl">
                    <SlLocationPin className="text-3xl text-amber-600" />
                    <h1 className="text-xl sm:text-2xl font-playfair font-semibold text-amber-700">
                      Wedding Ceremony
                    </h1>
                    <div className="divider flex w-full items-center justify-center gap-2">
                      <hr className="my-5 h-0.5 bg-slate-300 w-1/5" />
                      💍
                      <hr className="my-5 h-0.5 bg-slate-300 w-1/5" />
                    </div>
                    <h1 className="font-poppins text-lg text-slate-600">
                      Minggu
                    </h1>
                    <p className="sm:text-7xl font-medium font-italianno">30</p>
                    <div className="date flex flex-col items-center justify-center gap-0">
                      <h1 className="font-poppins text-lg text-slate-600">
                        Juni 2024
                      </h1>
                      <h1 className="font-poppins text-md text-slate-600">
                        09:00 - 10.30 WIB
                      </h1>
                    </div>
                    <hr className=" h-0.3 bg-slate-300 w-1/3" />
                    <p className="text-xl font-semibold">Prosesi Akad Nikah</p>
                    <p className="text-sm w-2/3 text-center text-slate-400 leading-5">
                      Garjoyo RT03/00, Dukuh, Imogiri, Kec. Imogiri, Kabupaten
                      Bantul, Daerah Istimewa Yogyakarta
                    </p>
                    <Link
                      to="#"
                      className="bg-amber-900 text-white font-bold py-4 rounded-full mt-5 w-1/3 text-center transition-transform hover:bg-amber-950 transform-gpu hover:-translate-y-1 hover:shadow-lg"
                    >
                      Lokasi
                    </Link>
                  </div>
                  {/* Event 1 */}
                  <div className="card-section bg-white/50 py-10 px-5 sm:w-full mx-auto flex justify-center items-center flex-col gap-3 rounded-t-full rounded-b-3xl shadow-2xl">
                    <SlLocationPin className="text-3xl text-amber-600" />
                    <h1 className="text-xl sm:text-2xl font-playfair font-semibold text-amber-700">
                      Wedding Ceremony
                    </h1>
                    <div className="divider flex w-full items-center justify-center gap-2">
                      <hr className="my-5 h-0.5 bg-slate-300 w-1/5" />
                      💍
                      <hr className="my-5 h-0.5 bg-slate-300 w-1/5" />
                    </div>
                    <h1 className="font-poppins text-lg text-slate-600">
                      Minggu
                    </h1>
                    <p className="sm:text-7xl font-medium font-italianno">30</p>
                    <div className="date flex flex-col items-center justify-center gap-0">
                      <h1 className="font-poppins text-lg text-slate-600">
                        Juni 2024
                      </h1>
                      <h1 className="font-poppins text-md text-slate-600">
                        09:00 - 10.30 WIB
                      </h1>
                    </div>
                    <hr className=" h-0.3 bg-slate-300 w-1/3" />
                    <p className="text-xl font-semibold">Prosesi Akad Nikah</p>
                    <p className="text-sm w-2/3 text-center text-slate-400 leading-5">
                      Garjoyo RT03/00, Dukuh, Imogiri, Kec. Imogiri, Kabupaten
                      Bantul, Daerah Istimewa Yogyakarta
                    </p>
                    <Link
                      to="#"
                      className="bg-amber-900 text-white font-bold py-4 rounded-full mt-5 w-1/3 text-center transition-transform hover:bg-amber-950 transform-gpu hover:-translate-y-1 hover:shadow-lg"
                    >
                      Lokasi
                    </Link>
                  </div>
                </div>
              </div>

              {/* Time Count Down */}
              <div className="container mx-auto border">
                <div className="flex flex-col items-center justify-center gap-5 py-10 mx-5 my-16 bg-right bg-no-repeat bg-cover shadow-sm bg-countdown sm:bg-center rounded-3xl sm:mx-12 sm:gap-9">
                  <div className="text-[#C08261] font-italianno text-3xl font-semibold">
                    <h1>Menuju Akad</h1>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-5">
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
                    className="text-amber-100 py-4 font-raleway bg-[#C08261] rounded-full px-10 text-sm border-2 border-[#F2ECBE] shadow-sm font-bold"
                  >
                    Simpan Tanggal
                  </Link>
                </div>
              </div>

              {/* Photo Gallery */}

              {/* Message Fitures */}
              <WishesMessages />
              {/* End Message Fitures */}

            </div>

            {/* <Footer /> */}
            <div className="footer text-center py-5 bg-[#F2ECBE]">
              <p className="text-sm font-semibold text-amber-800">
                Copyright ©2024 Created with ❤️ by ewohku
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
