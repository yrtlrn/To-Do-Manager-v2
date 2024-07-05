/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#120d07",
        background: "#fefdfb",
        primary: "#c89741",
        secondary: "#e6c894",
        accent: "#e4b55e",
        dark_text: "#f8f3ed",
        dark_background: "#040301",
        dark_primary: "#be8c37",
        dark_secondary: "#6b4d19",
        dark_accent: "#a1721b",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
    },
  },
  plugins: [],
};
