import React, { useState, useEffect } from "react";
import supabase from "../../supabaseClient";

// Component Import
import { Button } from "@mui/material";
import InputForm from "../atoms/Input/InputForm";
import InputTextArea from "../atoms/Input/InputTextArea";

export const WishesMessages = () => {
  const [wishers, setWishers] = useState([]);

  const [newName, setNewName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetchWishers();
  }, []);

  const fetchWishers = async () => {
    try {
      const { data, error } = await supabase.from("messages").select("*");
      if (error) {
        throw error;
      }
      setWishers(data);
    } catch (error) {
      console.error("Error fetching wishers:", error.message);
    }
  };

  const handleAddMessages = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase.from("messages").insert([
        {
          name_wisher: newName,
          address_wisher: newAddress,
          message: newMessage,
        },
      ]);
      if (error) {
        throw error;
      }
      console.log("Pesan berhasil ditambahkan:", data);

      // Clear input fields after successful submission
      setNewName("");
      setNewAddress("");
      setNewMessage("");

      fetchWishers();
    } catch (error) {
      console.error("Error adding message:", error.message);
    }
  };

  return (
    <>
      {/* Message Features */}
      <div className="mx-auto py-10 bg-[#F2ECBE]/50">
        <div className="flex flex-col items-center justify-center w-11/12 gap-10 mx-auto sm:flex-row sm:items-start sm:w-2/3">
          <div className="bg-[#3F2305] px-9 py-10 rounded-xl shadow-sm flex flex-col gap-5 sm:basis-1/2 max-w-md">
            <div className="title-card text-[#F2ECBE] flex flex-row justify-around gap-7 items-start">
              <h1 className="text-3xl font-playfair">Ucapan Pernikahan</h1>
              <p>___________</p>
            </div>
            <form
              id="wished"
              className="w-full mx-auto"
              onSubmit={handleAddMessages}
            >
              <InputForm
                label="Nama Anda"
                name="name"
                type="text"
                placeholder="Masukkan Nama Anda"
                className="text-slate-600 bg-gray-50/25 outline outline-yellow-900 placeholder:opacity-50"
                value={newName}
                required
                onChange={(e) => setNewName(e.target.value)}
              />
              <InputForm
                label="Alamat Anda"
                name="address"
                type="text"
                placeholder="Masukkan Alamat Anda"
                className="text-slate-600 bg-gray-50/25 outline outline-yellow-900 placeholder:opacity-50"
                value={newAddress}
                required
                onChange={(e) => setNewAddress(e.target.value)}
              />
              <InputTextArea
                label="Ucapan"
                name="message"
                placeholder="Tuliskan Ucapan Anda"
                className="text-slate-600 outline outline-yellow-900 placeholder:opacity-50"
                rows="5"
                value={newMessage}
                required
                onChange={(e) => setNewMessage(e.target.value)}
              ></InputTextArea>
              <Button
                style={{
                  width: "100%",
                  padding: "1rem",
                  marginTop: "1rem",
                  backgroundColor: "#F2ECBE",
                  color: "#3F2305",
                  fontWeight: "bold",
                }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Kirim Ucapan
              </Button>
            </form>
          </div>
          <div
            id="list-wishes"
            className=" flex flex-col gap-3 sm:basis-1/2 h-[550px] overflow-y-auto"
          >
            {/* Mapping Messages List */}
            {wishers.map((message) => (
              <div
                key={message.id}
                className="flex flex-row items-start justify-start gap-4 initial-message"
              >
                <div className="px-2 py-1 text-sm font-bold text-center bg-white rounded-full shadow-md initial-name sm:px-4 sm:py-3 font-playfair sm:text-xl">
                  {message.name_wisher[0]}
                </div>
                <div className="flex flex-col gap-3 px-8 py-5 rounded-tr-lg rounded-bl-lg message bg-white/80 rounded-tl-3xl rounded-br-3xl">
                  <p className="text-sm font-bold sm:text-normal font-raleway text-amber-950">
                    {message.name_wisher}
                  </p>
                  <p className="text-xs leading-relaxed sm:text-sm font-raleway text-amber-950">
                    {message.message}
                  </p>
                  <p className="text-xs font-raleway text-slate-300">
                    {message.address_wisher} •
                    {new Date(message.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
            {/* end */}
          </div>
        </div>
      </div>
      {/* Message Features End */}
    </>
  );
};
