/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // textColor
    extend: {
      textColor: {
        bitWhite: '#FAFAF9'
      },
      listStyleImage: {
        checkmark: 'url("../public/icons/checkmark.png")',
      },
      backgroundColor: {
        custom: '#272727',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      animation: {
        fadeIn: 'fadeIn 1s ease'
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
}

