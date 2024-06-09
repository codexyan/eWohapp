import React, { useEffect, useRef, useState } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";

export const AudioPlay = () => {
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

  return (
    <div
      id="audio-tag"
      className="fixed left-0 right-0 flex items-center justify-end p-2 mx-2 text-white rounded bottom-5"
    >
      <audio
        ref={audioRef}
        src="https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/CINTANYA_AKU__ENG__-_JUNGKOOK__EMMA_HEESTERS_AI_COVER.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9DSU5UQU5ZQV9BS1VfX0VOR19fLV9KVU5HS09PS19fRU1NQV9IRUVTVEVSU19BSV9DT1ZFUi5tcDMiLCJpYXQiOjE3MTc4MzUxMjEsImV4cCI6MTc0OTM3MTEyMX0.-PoqFvMObA-ACC8sskR4EAf63LG4zx2BiGRLIU-e-zQ&t=2024-06-08T08%3A25%3A20.071Z"
        autoPlay
        loop
      ></audio>
      <button
        onClick={toggleAudio}
        className={`flex items-center justify-center w-12 h-12 text-2xl font-bold rounded-full shadow-lg bg-amber-900/80 ${
          isPlaying ? "animate-blink" : ""
        }`}
      >
        {isPlaying ? <CiPause1 /> : <CiPlay1 />}
      </button>
    </div>
  );
};
