/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoM: ["Roboto Mono", "monospace"],
      },
      colors: {
        gBlack: "#1F2025",
        gGray: "rgba(164,164,164,.4)",
        gGray2: "#AAAAAA",
        bgColor: "#171922",
      },
      boxShadow: {
        '2lg': '0 8px 15px 2px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
};
