/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: {
        content: [
            './components/**/*.{js,ts,jsx,tsx}',
            './pages/**/*.{js,ts,jsx,tsx}'
        ],
        options: {
            safelist: {
                standard: ['outline-none']
            }
        }
    },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
