/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#00C893",
        subMain: "#069A73",
        deepGray: "#F3F9FF",
        dryGray: "#F3F4F6",
        flash: "#FF1E1E",
        star: "#FFB000",
        deepest: "#E1F3EE",
        text: "#C0C0C0",
        overlay: "#00000010",
      },
    },
  },
  plugins: [],
};
