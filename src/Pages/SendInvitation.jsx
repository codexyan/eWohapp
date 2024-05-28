import React from "react";
import { Button } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function SendInvitationPage() {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to");

  return (
    <>
      <div className="min-w-screen">
        {/* Hero Section */}
        <div id="hero" className="min-h-screen flex flex-col bg-hero-pattern2 bg-cover bg-no-repeat bg-center justify-around">
            <div className="text-white text-center flex flex-col justify-center border basis-3/4">
              <p className="text-sm font-normal">YTH Bapak/Ibu/Saudara/i :</p>
              <p className="member font-righteous">{guestName}</p>
            </div>
            <div className="wrap-content text-center flex flex-col gap-10 py-8 justify-end items-center basis-1/ border">
              <div className="content">
                <h1 className="text-white font-righteous">
                  We Invite You To Our Wedding
                </h1>
                <div className="couple font-playfair text-5xl">
                  <h1 className="text-white">Putra & Putri</h1>
                </div>
              </div>
              <Button variant="contained" type="button">
                Buka Undangan
              </Button>
            </div>
        </div>
      </div>
    </>
  );
}
