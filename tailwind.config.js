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
        "hero-pattern3":
          "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/bg-section-1__1_.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9iZy1zZWN0aW9uLTFfXzFfLnBuZyIsImlhdCI6MTcxNjk1OTcyNCwiZXhwIjoxNzQ4NDk1NzI0fQ.5Jpp96uxr8lqmw6pkTIIMtMCzIT_0_h9vNdOsIYaaK4&t=2024-05-29T05%3A15%3A22.322Z')",
        "hero-pattern4":
          "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/bg-section-2__1_.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9iZy1zZWN0aW9uLTJfXzFfLnBuZyIsImlhdCI6MTcxNjk2MDI4OSwiZXhwIjoxNzQ4NDk2Mjg5fQ.AwVF8jGtYZ2xSRswP-T1l-SQzpNEbLjJ2veqXwAqZPE&t=2024-05-29T05%3A24%3A48.078Z')",
        pi: "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/pi.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9waS5wbmciLCJpYXQiOjE3MTY5NjIyNjcsImV4cCI6MTc0ODQ5ODI2N30.buhgU5nwa4jhdCGn1PJFou9fX2igebbEZ8HCvdblExo&t=2024-05-29T05%3A57%3A45.190Z')",
        pa: "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/pa.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9wYS5wbmciLCJpYXQiOjE3MTcxMjA0NDMsImV4cCI6MTc0ODY1NjQ0M30.NsRqDKOXtVIA2tQ85Bz-op5t2EmqXKiEEnyRjEJYJH8&t=2024-05-31T01%3A53%3A59.178Z')",
        countdown: "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/countdown.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9jb3VudGRvd24ucG5nIiwiaWF0IjoxNzE3MTc0ODgxLCJleHAiOjE3NDg3MTA4ODF9.dYnT6WY3ABEDTmP96zLdLdAXT1OMrAMjdk8nr-QycRM&t=2024-05-31T17%3A01%3A21.875Z')",
        "countdown-1": "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/ctd__1_.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9jdGRfXzFfLnBuZyIsImlhdCI6MTcxNzgyOTczMSwiZXhwIjoxNzQ5MzY1NzMxfQ.deoRJJkM_CQvda9YuYnWTSDSNd-sFOanvx0fumVXSD0&t=2024-06-08T06%3A55%3A30.179Z')",
        closing: "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/footer.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9mb290ZXIucG5nIiwiaWF0IjoxNzE3NjgzMzkzLCJleHAiOjE3NDkyMTkzOTN9.e3wj9quwERN55uxQjRTCeVbP6BG9EvjgV4Qcz1UFvzY&t=2024-06-06T14%3A16%3A33.151Z')",
        frame: "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/frame.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9mcmFtZS5wbmciLCJpYXQiOjE3MTc2Nzk5MzYsImV4cCI6MTc0OTIxNTkzNn0.WElxW7_6rOP6AQsaI70vHY62UBZoBE6JqbAekapzzz8&t=2024-06-06T13%3A18%3A55.565Z')",
        header: "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/header.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9oZWFkZXIucG5nIiwiaWF0IjoxNzE3NjgxODk5LCJleHAiOjE3NDkyMTc4OTl9.-8IIwXYqaeQA1J3pIEbUeNVwLONhOFecrLG0lHD76q0&t=2024-06-06T13%3A51%3A38.561Z')"
      },
      images: {
        logos:
          "url('https://qmpirqfxudgdyiqlcqvj.supabase.co/storage/v1/object/sign/images-ewoh/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMtZXdvaC9sb2dvLnBuZyIsImlhdCI6MTcxNjQzMjE5OSwiZXhwIjoxNzQ3OTY4MTk5fQ.vFPWkOjlCOREKmDbB5968l_Hhyia41Hb13EngHwJOYg&t=2024-05-23T02%3A43%3A20.135Z')",
      },
      keyframes: {
        blink: {
          '0%, 100%': { boxShadow: '0 0 10px 2px rgba(255, 255, 0, 0)' },
          '50%': { boxShadow: '0 0 10px 2px rgba(255, 255, 0, 1)' },
        },
      },
      animation: {
        blink: 'blink 5s infinite',
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      playfair: ["'Playfair Display'", "serif"],
      italianno: ["Italianno", "cursive"],
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
