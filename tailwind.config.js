/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // for Vite or CRA React setup
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['"Pacifico"', "cursive"], // fun & playful
        lobster: ['"Lobster Two"', "cursive"], // bold script
        fredoka: ['"Fredoka"', "sans-serif"], // modern & cheerful
        greatvibes: ['"Great Vibes"', "cursive"], // elegant
        dancing: ['"Dancing Script"', "cursive"], // smooth romantic
        caveat: ['"Caveat"', "cursive"], // handwritten
        poppins: ['"Poppins"', "sans-serif"], // clean modern
        baloo: ['"Baloo 2"', "cursive"], // Indian rounded fun
      },
    },
  },
  plugins: [],
};
