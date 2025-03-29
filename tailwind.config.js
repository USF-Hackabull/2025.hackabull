/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./src/*.{html,js}"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      home_bg1: "#000000",
      home_bg2: "#1f1d6a",
      secondary: "#9DD6FB",
      background: "#193D91",
      white: "#FFF",
      black: "#170738",
      navbar: "#010104",
      about_ticket_text: "#D2CCFC",
      forest: "#1D4B38",
      emerald: "#1A5653",
      deepPurple: "#2A2550",
      darkBrown: "#3B2A1D",
      richBrown: "#4A312C",
      midnight: "#141E46",
      slate: "#2C3333",
    },
    extend: {
      keyframes: {
        /* only way to apply allow animation on hover */
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
      },
      boxShadow: {
        "text-glow": "0 0 10px #c1413e",
      },
    },
    fontFamily: {
      sans: ["Urbanist", "ui-sans-serif", "system-ui"],
      mono: [
        "Aldrich",
        "source-code-pro",
        "Menlo",
        "Monaco",
        "Consolas",
        "Courier New",
      ],
      quicksand: ["Quicksand", "ui-sans-serif", "system-ui"],
      montalt: ["Montserrat Alternates", "ui-sans-serif", "system-ui"],
      nunito: ["Nunito", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [
    require("tailwindcss-motion"),
    require("taos/plugin"),
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-glow": {
            textShadow: "0 0 10px #c1413e",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
