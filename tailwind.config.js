/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'geo': ["Geo", 'sans-serif'],
        'agdasima': ["Agdasima", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

