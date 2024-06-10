import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { WishesMessages } from "../components/organisms/WishesMessages";
import { GiftSection } from "../components/organisms/Gift";
import { CountDown } from "../components/organisms/CountDown";
import { Venue } from "../components/organisms/Venue";
import { Greetings } from "../components/organisms/Greetings";
import { Galleries } from "../components/organisms/Galleries";
import { CoupleHero } from "../components/organisms/CoupleHero";
import { Closing } from "../components/organisms/Closing";
import { BannerHero } from "../components/organisms/BannerHero";
import { AudioPlay } from "../components/molecules/AudioPlay";

import lottieAnimations from "../lottieAnimation";
import LottieComponent from "../components/LottieComponent";

export default function SendInvitationPage() {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to");
  const [currentState, setCurrentState] = useState("split");

  const handleOpenInvitation = () => {
    setCurrentState("loading");
    setTimeout(() => {
      setCurrentState("main");
    }, 3000); // 2 detik jeda loading
  };

  // Lottie Animations
  const animationData = lottieAnimations.loading;
  const width = 50;
  const height = 50;

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
            ....
          </div>
        )}

        {/* Main Invitation */}
        {currentState === "main" && (
          <div id="main-invitation" className="min-h-screen overflow-hidden">
            <BannerHero />

            <div className="bg-hero-pattern4 bg-cover bg-no-repeat bg-top h-full min-h-[1900px]">
              <CoupleHero />
              <Greetings />
              <Venue />
              <CountDown />
              <GiftSection />
              <WishesMessages />
              <Galleries />
              <Closing />
            </div>

            {/* <Footer /> */}
            <div className="py-5 text-center bg-black footer">
              <p className="text-xs font-semibold text-white">
                Copyright ©2024 Created with ❤️ by ewohku
              </p>
            </div>

            {/* Audio Button AutoPlay */}
            <AudioPlay />
          </div>
        )}
      </div>
    </>
  );
}
