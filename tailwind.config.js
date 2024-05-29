/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/awan.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9hd2FuLnBuZyIsImlhdCI6MTcxNjQzMDU2NywiZXhwIjoxNzQ3OTY2NTY3fQ.pHp1-UzXSTyXVAQEt2xsMHOiYExhIQDQqF_Xc3nUquk&t=2024-05-23T02%3A16%3A07.749Z')",
        "hero-pattern2":
          "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/split-invitation.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9zcGxpdC1pbnZpdGF0aW9uLnBuZyIsImlhdCI6MTcxNjk1NTYyMywiZXhwIjoxNzQ4NDkxNjIzfQ.jKg-At4qcXqzz6fxtfaQmH-2QI-JoHvVkYZxIO49HTs&t=2024-05-29T04%3A07%3A02.874Z')",
      },
      images: {
        logos:
          "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9sb2dvLnBuZyIsImlhdCI6MTcxNjQzMjE5OSwiZXhwIjoxNzQ3OTY4MTk5fQ.vFPWkOjlCOREKmDbB5968l_Hhyia41Hb13EngHwJOYg&t=2024-05-23T02%3A43%3A20.135Z')",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      playfair: ["'Playfair Display'", "serif"],
    },
  },
  plugins: [],
};
