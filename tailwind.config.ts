import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './lib/static.tsx'
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

    },
  },
  plugins: [],
};
export default config;
