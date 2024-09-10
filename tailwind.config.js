/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 10px rgba(255, 183, 0, 0.7)',
      },
      textShadow: {
        'glow': '0 0 10px rgba(255, 183, 0, 0.7)',
      },
    },
  },
  plugins: [],
}