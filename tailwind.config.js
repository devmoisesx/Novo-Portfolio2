/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoM: ["Roboto Mono", "monospace"],
      },
      colors: {
        // gBlack: "#181D21",
        // gGray: "rgba(164,164,164,.4)",
        // gGray2: "#AAAAAA",
        // bgColor: "#171922",
        txtWhite: "#edf2f4",
        txtH1: "#008ED2",
        bgButton: "#242127",
        bgButtonHover: "rgba(0, 142, 210, .5)",
        bgButtonActive: "#242127",
        bgColor: "#1c1d21",
        bgCardColor: "#181D21",
      },
      boxShadow: {
        "2lg": "0 8px 15px 2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
