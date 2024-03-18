/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-color':'#5C3EF5',
        'lavender':'#F7F7FD',
        'black-blue':'#1E2548',
      },
      fontFamily: {
        poppins: ['Poppins', "sans-serif"]
      }
    },
  },
  plugins: [],
}

