import React, { useRef, useEffect } from "react";
import LottieComponent from "../LottieComponent";
import lottieAnimations from "../../lottieAnimation";

export const BannerHero = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  }, []);

  // Lottie Animations
  const animationData = lottieAnimations.heart;
  const width = 100;
  const height = 100;

  return (
    <div className="bg-hero-pattern3 bg-cover bg-no-repeat bg-center sm:min-h-[960px] pb-20 relative">
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex flex-col items-center justify-center gap-5 mx-auto bg-bottom bg-cover h-svh bg-header"
      >
        <div className="absolute top-16">
          <LottieComponent animationData={animationData} width={width} height={height} />
        </div>
        <div className="flex flex-col items-center justify-center h-fit">
          <h1 className="font-bold text-amber-600 font-righteous">
            30.06.2024
          </h1>
          <div className="flex flex-row items-center justify-center gap-2 text-3xl sm:text-5xl text-amber-700">
            <h1 className="font-italianno">Ary</h1>
            <h1 className="font-playfair">&</h1>
            <h1 className="font-italianno">Nanda</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-2/3 gap-2 pb-10 text-center sm:w-1/4 description">
          <div className="flex flex-col w-11/12 gap-3 text-xs leading-5">
            <p className="font-semibold">
              بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ
            </p>
            <p className="tracking-widest">
              وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
              لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً
              وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            </p>
          </div>
          <p className="text-[9px] w-11/12 sm:text-sm text-slate-500">
            "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
          </p>
          <p className="text-[10px] text-slate-500">( QS: Ar-Rum:21 )</p>
        </div>
      </div>
    </div>
  );
};
