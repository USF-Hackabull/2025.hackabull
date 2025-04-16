/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFF",
      black: "#170738",
      navbar: "#010104",
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
