/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        monday: {
          violet: "#6161ff",
          ink: "#333333",
          slate: "#535768",
          iron: "#808080",
          fog: "#cacbcd",
          mist: "#d0d4e4",
          pebble: "#dddfeb",
          cloud: "#f5f6f8",
          snow: "#ffffff",
          mint: "#bcfe90",
          sky: "#abf0ff",
          apricot: "#ff8940",
          lavender: "#eddff7",
          periwinkle: "#e7ecff",
          cornflower: "#93beff",
          aqua: "#d1faff",
          "cotton-candy": "#e98dfe",
          "ultra-violet": "#9450fd",
          "electric-cyan": "#3ac9ff",
          forest: "#2a5c4e",
          peony: "#fcd0f8",
        },
      },
      borderRadius: {
        pill: "160px",
        card: "24px",
      },
      boxShadow: {
        "monday-xl": "0px 2px 48px 0px rgba(205, 208, 223, 0.4)",
        "monday-glow": "0px 8px 30px rgba(97, 97, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
