/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajuste conforme necessário para incluir todos os seus arquivos source
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        gray: {
          900: '#1c1c1c',
          800: '#282828',
          700: '#333',
        },
        yellow: {
          500: '#f1c40f',
          600: '#d4ac0d',
        },
      },
    },
  },
  plugins: [],
};