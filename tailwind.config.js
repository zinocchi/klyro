/** @type {import('tailwind.config.js').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        klyro: {
          blue: "#4f46e5", // Primary Blue
          turquoise: "#10b981", // Vivid Turquoise
          dark: "#0f172a", // Deep Black / Slate
          surface: "#18181b", // Pure Dark Charcoal
          canvas: "#f8fafc", // Clean light background
          mist: "#e2e8f0",
          slate: "#64748b",
        },
      },
      borderRadius: {
        pill: "160px",
        card: "24px",
      },
      boxShadow: {
        "klyro-card": "0 20px 50px -12px rgba(15, 23, 42, 0.08)",
        "klyro-glow": "0 10px 30px -5px rgba(79, 70, 229, 0.25)",
        "klyro-glow-turquoise": "0 10px 30px -5px rgba(16, 185, 129, 0.25)",
      },
    },
  },
  plugins: [],
};
