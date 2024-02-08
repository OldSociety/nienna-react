/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hoverColor: '#00808b',
        brightColor: '#3f8a85',
        backgroundColor: '#36ae9a',
      },
    },
  },
  plugins: [],
}
