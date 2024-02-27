/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        avec: ["Times New Roman", "sans-serif"],
        roboto: ["Roboto"],
      },
      colors: {
        vblue: "#001af5",
        darkblue: "#03139D",
      },
    },
  },
  plugins: [],
};
