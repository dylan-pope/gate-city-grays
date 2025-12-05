/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        graysRed: "#c8102e",
        graysBlue: "#0038a8",
        graysWhite: "#f7f7f7",
        graysDark: "#0f172a",
        graysMuted: "#e2e8f0",
      },
      fontFamily: {
        heading: ['"Oswald"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
