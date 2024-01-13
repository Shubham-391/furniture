/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerbg: "url('/src/assets/images/headerbg.webp')",
        chair1: "url('/src/assets/images/section1chair.webp')",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
      roboto: ["Roboto"],
    },
  },
  plugins: [],
};
