/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/awan.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9hd2FuLnBuZyIsImlhdCI6MTcxNjQzMDU2NywiZXhwIjoxNzQ3OTY2NTY3fQ.pHp1-UzXSTyXVAQEt2xsMHOiYExhIQDQqF_Xc3nUquk&t=2024-05-23T02%3A16%3A07.749Z')",
      },
    },
  },
  plugins: [],
};
