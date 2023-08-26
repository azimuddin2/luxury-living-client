/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        luxurylivingtheme: {
          primary: "#251D58",
          secondary: "#1F1632",
          accent: "#606268",
          neutral: "#16322E",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

