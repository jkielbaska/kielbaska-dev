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
        turquoise: "#4DFFDA",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        glow: "0px 0px 205px 55px rgba(233,151, 69, 0.35)",
        innerGlow: "inset 0px 0px 215px 1px rgba(233,151, 69, 0.35)",
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
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        text: "text 3s ease infinite",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar")],
};
