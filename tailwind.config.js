/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerbg: "url('/src/assets/images/headerbg.webp')",
        chair1: "url('/src/assets/images/section1chair.webp')",
        section5bg1: "url('/src/assets/images/section5bg1.webp')",
        section5bg2: "url('/src/assets/images/section5bg2.webp')",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
      roboto: ["Roboto"],
    },
  },
  plugins: [],
};
