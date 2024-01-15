/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize:{
        '100%':'100% 100%',
      },
      fontFamily:{
        'roboto':'Roboto, sans-serif',
        'poppins':'Poppins, sans-serif',
      }
    },
  },
  plugins: [],
}