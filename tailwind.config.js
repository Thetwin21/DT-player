/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bb: "#020202", // bg
        skyb: {
          500: "#00f4ff", //play btn on the page 
          400:"#00001a",
          300:"#defefe" //play btn on the song
        },
        ash: {
          400: "#484848",
          300:"#484848",
          200: "#7a7a7a", //when img is not showing
          100: "#e2e2e2", //text color
          50:"#f1f1f1", //line

        },
        rd: "#e00000"
      },
      fontFamily: {

      }
    },
  },
  plugins: [],
}

