/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"], 
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#B4B4B4",
        lightWhite: "#E1E1E1",
        secondary: "#4769E3",
      },

      backgroundColor: {
        bgPrimary: "#13141f",
        bgSecondary: "#1A1B26",
        bgBlue: "#4769E3",
        
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montagu: ["Montagu Slab", "serif"]
      },

      screens: {
        xx: "350px",
        xs: "390px",
        ss: "620px",
        sm: "770px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}

