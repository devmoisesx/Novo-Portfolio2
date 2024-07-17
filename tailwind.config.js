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
        txtBlack: "#333",
        txtH1: "#1098F7",

        bgButton: "#25272A",
        bgButtonHover: "rgba(0, 142, 210, .5)",
        bgButtonActive: "#25272A",

        bgBtnLinkedin: "#FFFFFF",
        bgBtnLinkedinHover: "rgba(255, 255, 255, .5)",
        bgBtnLinkedinActive: "#FFFFFF",

        // bgBtnGithub: "#1c1d21",
        bgBtnGithub: "#484848",
        bgBtnGithubHover: "rgba(72, 72, 72, .5)",
        bgBtnGithubActive: "#484848",

        bgBtnCurrriculum: "#0077B6",
        bgBtnCurrriculumHover: "#043565",
        bgBtnCurrriculumActive: "#0077B6",

        bgColor: "#1F2025",
        bgCardColor: "#181D21",
      },
      boxShadow: {
        "2lg": "0 8px 15px 2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
