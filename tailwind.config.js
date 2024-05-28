/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/awan.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9hd2FuLnBuZyIsImlhdCI6MTcxNjQzMDU2NywiZXhwIjoxNzQ3OTY2NTY3fQ.pHp1-UzXSTyXVAQEt2xsMHOiYExhIQDQqF_Xc3nUquk&t=2024-05-23T02%3A16%3A07.749Z')",
        "hero-pattern2":
          "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/bgopen.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9iZ29wZW4ucG5nIiwiaWF0IjoxNzE2ODY4ODYxLCJleHAiOjE3NDg0MDQ4NjF9.W8gs9U_mjnXEjt8ZN8fOfEK7XwbksYvMVUCAXg2-gKE&t=2024-05-28T04%3A01%3A00.986Z')",
      },
      images: {
        logos:
          "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9sb2dvLnBuZyIsImlhdCI6MTcxNjQzMjE5OSwiZXhwIjoxNzQ3OTY4MTk5fQ.vFPWkOjlCOREKmDbB5968l_Hhyia41Hb13EngHwJOYg&t=2024-05-23T02%3A43%3A20.135Z')",
      },
    },
  },
  plugins: [],
};
