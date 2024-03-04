/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        avec: ["Times New Roman", "sans-serif"],
        roboto: ["Roboto"],
      },
      colors: {
        vblue: "#001af5",
        darkblue: "#03139D",
        darkgray: "#0C0C0C",
        white0: "rgba(255, 255, 255, 0)",
        white30: "rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
