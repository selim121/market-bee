/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#a8b0ed",

          "secondary": "#c39bdd",

          "accent": "#ffb3af",

          "neutral": "#1E262E",

          "base-100": "#F0F0F5",

          "info": "#648BD3",

          "success": "#5AE79A",

          "warning": "#F6C865",

          "error": "#F02850",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}
