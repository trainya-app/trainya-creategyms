/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Open sans', 'sans-serif'],
    },
    extend: {
      colors: {
        background: '#001029',
      },
      backgroundImage: {
        brushs: "url('/trainya-brushs.png')",
      },
    },
  },
  plugins: [],
};
