import { Button } from "@mui/material";
import React from "react";

export const GiftSection = () => {
    return (
        <>
            <div className="mx-auto bg-white py-20">
                <div className="container px-5 mx-auto flex flex-col justify-center items-center gap-5">
                    <div className="flex flex-col gap-2 justify-center items-center sm:w-2/5">
                        <h1 className="text-2xl font-playfair font-semibold text-amber-800">
                            Hadiah Pernikahan
                        </h1>
                        <p className="text-sm text-center font-raleway text-slate-600 tracking-widest">
                            Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin
                            memberikan tanda kasih kepada kami, dapat melalu rekening di bawah
                            ini.
                        </p>
                    </div>
                    <div class="w-86 sm:w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
                        <img
                            class="object-cover w-full h-full rounded-xl"
                            src="https://i.imgur.com/kGkSg1v.png"
                            alt="Card Image"
                        />
                        <div class="absolute flex flex-col justify-start items-start top-8 left-8 w-10/12 ">
                            <div class="flex flex-row w-full justify-between ">
                                <div>
                                    <p class="font-light">Nama</p>
                                    <p class="font-medium tracking-widest">Ary Sulistyo</p>
                                </div>
                                <img
                                    class="w-fit h-5 sm:h-8"
                                    src="https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/bpdiy.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9icGRpeS5wbmciLCJpYXQiOjE3MTc2NTMzNjAsImV4cCI6MTc0OTE4OTM2MH0.jZ2OwcEc-CIgd-XTqGNy7XaEkxoLXqVlF-_DblGzbbw&t=2024-06-06T05%3A56%3A00.006Z"
                                    alt="Card Logo"
                                />
                            </div>
                            <div class="pt-1 w-full">
                                <p class="font-light">Nomor Rekening</p>
                                <p class="font-medium tracking-wider">4642 3489 9867 7632</p>
                            </div>
                            <div class="pt-6 w-full">
                                <div class="flex justify-between">
                                    <div>
                                        <p class="font-light text-xs">Valid</p>
                                        <p class="font-medium tracking-wider text-sm">11/15</p>
                                    </div>
                                    <div>
                                        <p class="font-light text-xs">Expiry</p>
                                        <p class="font-medium tracking-wider text-sm">03/25</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Button>Konfirmasikan</Button> */}
                </div>
            </div>
        </>
    );
};