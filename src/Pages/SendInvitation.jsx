import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Icons
import { FaEnvelopeOpenText } from "react-icons/fa";
import { Link } from "react-router-dom";

// Icons
import { SlLocationPin } from "react-icons/sl";
import { WishesMessages } from "../components/organisms/WishesMessages";
import { GiftSection } from "../components/organisms/Gift";
import { useRef } from "react";

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

  // music
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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
            data-aos="fade-zoom-in"
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
                data-aos="fade-up"
                data-aos-duration="2000"
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
          <div id="main-invitation" className="min-h-screen overflow-hidden">
            {/* Header */}
            <div className="bg-hero-pattern3 bg-cover bg-no-repeat bg-center sm:min-h-[960px] pb-20">
              {/* Checking */}
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="flex flex-col items-center justify-center gap-5 mx-auto h-svh bg-header bg-cover bg-bottom"
              >
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-amber-600 font-righteous font-bold">
                    30.06.2024
                  </h1>
                  <div className="sm:text-5xl text-3xl text-amber-700 flex flex-row items-center justify-center gap-2">
                    <h1 className="font-italianno">Ary</h1>
                    <h1 className="font-playfair">&</h1>
                    <h1 className="font-italianno">Nanda</h1>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-2/3 sm:w-1/4 gap-2 text-center description pb-10">
                  <div className="text-xs flex flex-col gap-3 leading-5 w-11/12">
                    <p className="font-semibold">
                      بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ
                    </p>
                    <p className="tracking-widest">
                      وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ
                      اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ
                      مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ
                      لِّقَوْمٍ يَّتَفَكَّرُوْنَ
                    </p>
                  </div>
                  <p className="text-[9px] w-11/12 sm:text-sm text-slate-500">
                    "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia
                    menciptakan pasangan-pasangan untukmu dari (jenis) dirimu
                    sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan
                    di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada
                    yang demikian itu benar-benar terdapat tanda-tanda
                    (kebesaran Allah) bagi kaum yang berpikir."
                  </p>
                  <p className="text-[10px] text-slate-500">
                    ( QS: Ar-Rum:21 )
                  </p>
                </div>
              </div>
            </div>

            {/* Couple */}
            <div className="bg-hero-pattern4 bg-cover bg-no-repeat bg-top h-full min-h-[1900px]">
              {/* couple */}
              <div
                className="container flex flex-col items-center justify-center gap-6 mx-auto py-12"
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

              {/* Greeting */}
              <div
                className="mx-auto py-16 bg-hero-pattern2 bg-cover bg-center"
                data-aos="zoom-in" data-aos-duration="2500"
              >
                <div
                  className="container mx-auto text-center h-full w-fit bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 backdrop-saturate-100 backdrop-contrast-100 py-5 rounded-none sm:rounded-xl shadow-xl"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  data-aos-duration="2000"
                >
                  <p className="w-10/12 sm:w-3/5 text-center font-playfair mx-auto text-white text-xs tracking-wide sm:text-base">
                    Merupakan suatu kebahagiaan bagi kami, apabila
                    Bapak/lbu/Saudara/i berkenan hadir & memberikan doa restu
                    kepada kami.
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div
                className="container mx-auto py-16 flex flex-col gap-8"
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
                  className="flex flex-col px-5 sm:flex-row gap-8 sm:w-4/6 mx-auto"
                >
                  {/* Event 1 */}
                  <div className="card-section bg-white/50 py-10 px-5 sm:w-full mx-auto flex justify-center items-center flex-col gap-3 rounded-t-full rounded-b-[2000px] shadow-xl">
                    <SlLocationPin className="text-3xl text-amber-800" />
                    <h1 className="text-xl sm:text-2xl font-playfair font-semibold text-amber-700">
                      Wedding Ceremony
                    </h1>
                    <div className="divider flex w-full items-center justify-center gap-2">
                      <hr className="my-5 h-0.5 bg-slate-300 w-1/5" />
                      💍
                      <hr className="my-5 h-0.5 bg-slate-300 w-1/5" />
                    </div>
                    <h1 className="font-poppins font-semibold text-lg text-slate-600">
                      Minggu
                    </h1>
                    <p className="sm:text-7xl text-6xl font-medium font-italianno">
                      30
                    </p>
                    <div className="date flex flex-col items-center justify-center gap-0">
                      <h1 className="font-poppins text-lg text-slate-600">
                        Juni 2024
                      </h1>
                      <h1 className="font-poppins text-sm sm:text-md text-slate-600">
                        09:00 - 10.30 WIB
                      </h1>
                    </div>
                    <hr className=" h-0.3 bg-slate-300 w-1/3" />
                    <p className="text-xl font-bold text-amber-900">
                      Prosesi Akad Nikah
                    </p>
                    <p className="text-sm w-10/12 text-center text-slate-400 tracking-wide">
                      Garjoyo RT03/00, Dukuh, Imogiri, Kec. Imogiri, Kabupaten
                      Bantul, Daerah Istimewa Yogyakarta
                    </p>
                    <Link
                      to="#"
                      className="bg-amber-900 text-white font-bold py-4 rounded-full mt-5 w-2/3 sm:w-1/3 text-center transition-transform hover:bg-amber-950 transform-gpu hover:-translate-y-1 hover:shadow-lg"
                    >
                      Lokasi
                    </Link>
                  </div>
                  {/* Event 2 */}
                  <div className="card-section bg-white/50 py-10 px-5 sm:w-full mx-auto flex justify-center items-center flex-col gap-3 rounded-t-full rounded-b-[2000px] shadow-xl">
                    <SlLocationPin className="text-3xl text-amber-800" />
                    <h1 className="text-xl sm:text-2xl font-playfair font-semibold text-amber-700">
                      Wedding Reception
                    </h1>
                    <div className="divider flex w-full items-center justify-center gap-2">
                      <hr className="my-5 h-0.5 bg-slate-300 w-1/5" />
                      💍
                      <hr className="my-5 h-0.5 bg-slate-300 w-1/5" />
                    </div>
                    <h1 className="font-poppins font-semibold text-lg text-slate-600">
                      Minggu
                    </h1>
                    <p className="sm:text-7xl text-6xl font-medium font-italianno">
                      30
                    </p>
                    <div className="date flex flex-col items-center justify-center gap-0">
                      <h1 className="font-poppins text-lg text-slate-600">
                        Juni 2024
                      </h1>
                      <h1 className="font-poppins text-sm sm:text-md text-slate-600">
                        13:00 - 14.00 WIB
                      </h1>
                    </div>
                    <hr className=" h-0.3 bg-slate-300 w-1/3" />
                    <p className="text-xl font-bold text-amber-900">
                      Resepsi Pernikahan
                    </p>
                    <p className="text-sm w-10/12 text-center text-slate-400 tracking-wide">
                      Garjoyo RT03/00, Dukuh, Imogiri, Kec. Imogiri, Kabupaten
                      Bantul, Daerah Istimewa Yogyakarta
                    </p>
                    <Link
                      to="#"
                      className="bg-amber-900 text-white font-bold py-4 rounded-full mt-5 w-2/3 sm:w-1/3 text-center transition-transform hover:bg-amber-950 transform-gpu hover:-translate-y-1 hover:shadow-lg"
                    >
                      Lokasi
                    </Link>
                  </div>
                </div>
              </div>

              {/* Time Count Down */}
              <div className="container mx-auto" data-aos="zoom-in" data-aos-duration="2000">
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

              <GiftSection />
              <WishesMessages />

              {/* Photo Gallery */}
              <div
                className="mx-auto bg-gradient-to-b from-[#fff8c8] to-[#fcf5ec]/90 h-fit w-full shadow-md"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div
                  className="text-center py-10 w-8/12 mx-auto flex gap-3 flex-col justify-center items-center"
                  data-aos-duration="1000"
                >
                  <h1 className="text-center text-sm" data-aos="fade-up">
                    It is He Allah who created you from one soul and created
                    from it its mate, that he may find comfort in her.
                  </h1>
                  <p className="text-xs">- QS Al A'raf: 189 -</p>
                </div>
                <div className="sm:container sm:mx-auto grid gap-2 sm:gap-5 grid-cols-2 sm:grid-cols-3 mx-2">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/projectewoh.appspot.com/o/collection-12.png?alt=media&token=946caf75-1fe7-45bd-bab5-2ab52a4cdd30"
                    alt="Collection Image 12 "
                    data-aos="zoom-out-up"
                    data-aos-duration="2000"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/projectewoh.appspot.com/o/collection-11.png?alt=media&token=793d2d83-d803-476b-b2ad-327c4fed4cc2"
                    alt="Collection Image 11 "
                    data-aos="zoom-out-up"
                    data-aos-duration="2000"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/projectewoh.appspot.com/o/collection-10.png?alt=media&token=cc62c086-b1e5-4893-a774-b99f233cb908"
                    alt="Collection Image 10 "
                    data-aos="zoom-out-up"
                    data-aos-duration="2000"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/projectewoh.appspot.com/o/collection-8.png?alt=media&token=fc406e39-9cd9-4dc8-8bfa-c700c1c3e1ea"
                    alt="Collection Image 8"
                    data-aos="zoom-out-up"
                    data-aos-duration="2000"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/projectewoh.appspot.com/o/collection-9.png?alt=media&token=bf6f42cb-86c6-48b3-9e12-1bb68e4aaea7"
                    alt="Collection Image 9"
                    data-aos="zoom-out-up"
                    data-aos-duration="2000"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/projectewoh.appspot.com/o/collection-7.png?alt=media&token=88e6f6eb-17c0-42e0-8867-e6dea1a827a0"
                    alt="Collection Image 7"
                    data-aos="zoom-out-up"
                    data-aos-duration="2000"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/projectewoh.appspot.com/o/collection-6.png?alt=media&token=a27cf0ba-9090-474f-bb28-ff7545456ff5"
                    alt="Collection Image 6"
                    data-aos="zoom-out-up"
                    data-aos-duration="2000"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/projectewoh.appspot.com/o/collection-5.png?alt=media&token=9b800592-411c-4fd6-9766-eca6265f1fe1"
                    alt="Collection Image 5"
                    data-aos="zoom-out-up"
                    data-aos-duration="2000"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/projectewoh.appspot.com/o/collection-4.png?alt=media&token=8c913c2d-eee2-400d-9120-2fd521fd3c98"
                    alt="Collection Image 4"
                    data-aos="zoom-out-up"
                    data-aos-duration="2000"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/projectewoh.appspot.com/o/collection-3.png?alt=media&token=234c275a-def2-4db7-8dd0-ae654c7a1220"
                    alt="Collection Image 3"
                    data-aos="zoom-out-up"
                    data-aos-duration="2000"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/projectewoh.appspot.com/o/collection-2.png?alt=media&token=0562462f-1e18-41ba-b427-fc22ed1e0b34"
                    alt="Collection Image 2"
                    data-aos="zoom-out-up"
                    data-aos-duration="2000"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/projectewoh.appspot.com/o/collection-1.png?alt=media&token=f515f74e-97de-4eaf-904a-f8b47649eecf"
                    alt="Collection Image 1"
                    data-aos="zoom-out-up"
                    data-aos-duration="2000"
                  />
                </div>
              </div>

              {/* Closing */}
              <div
                className="mx-auto bg-closing bg-bottom bg-no-repeat bg-cover sm:h-[1024px]"
                data-aos="zoom-in-down"
                data-aos-duration="3000"
              >
                <div className="container mx-auto h-full flex flex-col justify-between items-center">
                  <div className="pt-32 sm:pt-32 flex flex-col items-center justify-center">
                    <p className="text-2xl sm:text-5xl font-italianno text-center text-white">
                      Matur Nuwun
                    </p>
                    <p className="text-xl sm:text-3xl bg-gradient-to-r from-yellow-200 via-amber-100 to-red-300 bg-clip-text text-transparent font-bold font-playfair text-center">
                      #tresNandAry
                    </p>
                  </div>
                  <div className="text-white text-center pt-5 pb-12 sm:pb-72 w-3/4 sm:w-4/12 flex flex-col items-center gap-5">
                    <p className="text-xs sm:text-sm">
                      Kami yang berbahagia <br /> Keluarga Besar
                    </p>
                    <p className="text-3xl font-semibold font-playfair">
                      Ary & Nanda
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <Footer /> */}
            <div className="footer text-center py-5 bg-black">
              <p className="text-xs font-semibold text-white">
                Copyright ©2024 Created with ❤️ by ewohku
              </p>
            </div>

            <div
              id="audio-tag"
              className="fixed mx-2 bottom-5 right-0 left-0 text-white p-2 rounded flex justify-end items-center"
            >
              <audio
                ref={audioRef}
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                autoPlay
                loop
              ></audio>
              <button
                onClick={toggleAudio}
                className="text-2xl font-bold bg-amber-900 w-10 h-10 rounded-full flex justify-center items-center shadow-lg shadow-yellow-300"
              >
                {isPlaying ? "II" : "I>"}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
