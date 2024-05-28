import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase  from "../supabaseClient";

import { IoMdAdd } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import NavbarDashboard from "../components/organisms/NavbarDashboard";

const DashboardPage = () => {

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
      <div className="container p-4 mx-auto">
        <div className="mt-8">
          <h1 className="mb-4 text-2xl font-bold max-sm:text-xl">
            Daftar Tamu Undangan
          </h1>
          <div className="flex justify-start gap-3 mb-4">
            <button
              onClick={() => setShowAddGuest(true)}
              className="flex items-center gap-2 px-4 py-2 text-xs text-white bg-green-600 rounded hover:bg-green-700"
            >
              <IoMdAdd />
              Tambahkan Tamu
            </button>
            <Link
              to="/"
              className="flex items-center gap-2 px-4 bg-white border rounded text-sm hover:bg-slate-100"
            >
              <LuSend />
              Lihat Undangan
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="text-center bg-gray-100 border-b border-gray-200 max-sm:text-sm">
                  <th className="px-4 py-2">No.</th>
                  <th className="px-4 py-2">Nama</th>
                  <th className="px-4 py-2">Alamat</th>
                  <th className="px-4 py-2">Nomor Telepon</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map((visitor, index) => (
                  <tr
                    key={visitor.id}
                    className="text-center border-b border-gray-200 max-sm:text-xs"
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{visitor.name}</td>
                    <td className="px-4 py-2">{visitor.address}</td>
                    <td className="px-4 py-2">{visitor.phonenumber}</td>
                    <td className="flex flex-wrap justify-center gap-2 px-4 py-2">
                      {/* Tombol Aksi */}
                      <button
                        onClick={() => handleDeleteGuest(visitor.id)}
                        className="px-3 py-1 mr-2 text-white bg-red-500 rounded hover:bg-red-600"
                      >
                        Hapus
                      </button>
                      <button className="px-3 py-1 mr-2 text-white bg-blue-500 rounded hover:bg-blue-800">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="w-full max-w-xs p-8 bg-white rounded">
              <h2 className="mb-4 text-xl font-bold">Tambahkan Tamu</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nama
                </label>
                <input
                  type="text"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={newGuestPhone}
                  onChange={(e) => setNewGuestPhone(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowAddGuest(false)}
                  className="px-4 py-2 mr-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Batal
                </button>
                <button
                  onClick={handleAddGuest}
                  className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
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
