/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'staat': ['Staatliches'],
        'neuton': ['Neuton'],
        'montserrat': ['Montserrat'],
        'urbanist': ['Urbanist'],
      },
    },
  },
  plugins: [],
}

