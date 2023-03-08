/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        closed: "#16161d",
        open: "#eeeeee",
        scarlet: "#8D021F",
        crimson: "#FF2400",
        lava: "#CA0123",
        imperial: "#ED2939",
        persimmon: "#FFA836",
        bittersweet: "#FFA52C",
        tangelo: "#FEBA4F",
        orangeFruit: "#E34A27",
        orangeRed: "#F06105",
        international: "#EE5921",
        neon: "#39FF14",
        neon2: "#3FFF00",
        spring: "#00F0A8",
        richGray: "#1F2022",
        platinum: "#E5E4E2",
      },
      fontFamily: {
        nunito: ["Nunito", "serif"],
        ptSans: ["PT Sans", "serif"],
      },
      animation: {
        blob: "blob 8s infinite",
        tilt: "tilt 10s infinite",
        "spin-slow": "spin 5s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(30px, -50px) scale(1.2)" },
          "45%": { transform: "translate(-20px, 20px) scale(1.4)" },
          "65%": { transform: "translate(40px, -40px) scale(1.3)" },
          "85%": { transform: "translate(30px, -50px) scale(1.1)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(1deg) translate(1px, -1px)" },
          "85%": { transform: "rotate(-1deg) translate(-1px, 1px)" },
        },
      },
    },
  },
  plugins: [],
};
