/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        headerbg: "url('/src/assets/images/headerbg.webp')",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
      roboto: ["Roboto"],
    },
  },
  plugins: [],
};
