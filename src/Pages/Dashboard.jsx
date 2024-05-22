import React, { useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { createClient } from "@supabase/supabase-js";
import NavbarDashboard from "../components/Layouts/NavbarDashboard";
import { Link } from "react-router-dom";

const supabaseUrl = "https://qmpirqfxudgdyiqlcqvj.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtcGlycWZ4dWRnZHlpcWxjcXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxNjkyMDIsImV4cCI6MjAzMTc0NTIwMn0.XfjDzex5jOY4bjd7sCuLPWhJsJyUfsWJUu9Xm68xv88";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const DashboardPage = () => {
  const username = useLogin();

  // State untuk menampilkan daftar tamu
  const [visitors, setVisitors] = useState([]);

  // State untuk menampilkan popup form tambah tamu
  const [showAddGuest, setShowAddGuest] = useState(false);
  const [newGuestName, setNewGuestName] = useState("");
  const [newGuestAddress, setNewGuestAddress] = useState("");
  const [newGuestPhone, setNewGuestPhone] = useState("");

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    const { data, error } = await supabase.from("visitors").select("*");
    if (error) {
      console.error(error);
      return;
    }
    setVisitors(data);
  };

  const handleAddGuest = async () => {
    // Menyimpan tamu ke database
    const { data, error } = await supabase.from("visitors").insert([
      {
        name: newGuestName,
        address: newGuestAddress,
        phonenumber: newGuestPhone,
      },
    ]);
    if (error) {
      console.error(error);
      return;
    }
    console.log("Tamu berhasil ditambahkan:", data);

    // Menutup popup dan mereset form
    setShowAddGuest(false);
    setNewGuestName("");
    setNewGuestAddress("");
    setNewGuestPhone("");

    // Memuat ulang data tamu
    fetchVisitors();
  };

  const handleDeleteGuest = async (id) => {
    // Menghapus tamu dari database
    const { error } = await supabase.from("visitors").delete().eq("id", id);
    if (error) {
      console.error(error);
      return;
    }
    console.log("Tamu berhasil dihapus");

    // Memuat ulang data tamu
    fetchVisitors();
  };

  return (
    <>
      <NavbarDashboard />
      <div className="container mx-auto p-4">
        <div className="mt-8">
          <h1 className="text-2xl font-bold mb-4">Daftar Tamu Undangan</h1>
          <div className="flex justify-start mb-4 gap-3">
            <button
              onClick={() => setShowAddGuest(true)}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Tambahkan Tamu
            </button>
            <Link
              to="/"
              className="border rounded px-4 bg-white hover:bg-slate-100 flex justify-center items-center"
            >
              Lihat Undangan
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200 text-center">
                  <th className="py-2 px-4">No.</th>
                  <th className="py-2 px-4">Nama</th>
                  <th className="py-2 px-4">Alamat</th>
                  <th className="py-2 px-4">Nomor Telepon</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map((visitor, index) => (
                  <tr
                    key={visitor.id}
                    className="border-b border-gray-200 text-center"
                  >
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{visitor.name}</td>
                    <td className="py-2 px-4">{visitor.address}</td>
                    <td className="py-2 px-4">{visitor.phonenumber}</td>
                    <td className="py-2 px-4 flex flex-wrap gap-2">
                      {/* Tombol Aksi */}
                      <button
                        onClick={() => handleDeleteGuest(visitor.id)}
                        className="mr-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                      >
                        Hapus
                      </button>
                      <button className="mr-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-800">
                        Kirim Undangan
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Popup Tambah Tamu */}
        {showAddGuest && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white rounded p-8 max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Tambahkan Tamu</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nama
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={newGuestName}
                  onChange={(e) => setNewGuestName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Alamat
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={newGuestAddress}
                  onChange={(e) => setNewGuestAddress(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={newGuestPhone}
                  onChange={(e) => setNewGuestPhone(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowAddGuest(false)}
                  className="mr-2 bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
                >
                  Batal
                </button>
                <button
                  onClick={handleAddGuest}
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardPage;
