/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#2b77e7",
        },
        yellow: "#fffa67",
        borderOrange: "#e99745",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        glow: "0px 0px 45px 55px rgba(233,151, 69, 0.75)",
        innerGlow: "inset 0px 0px 25px 25px rgb(233,151, 69, 1)",
      },
      dropShadow: {
        glow: [
          "65px 65px 65px rgba(233,151, 69, 0.35)",
          "65px 20px 65px rgba(233, 151,69, 0.2)",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
