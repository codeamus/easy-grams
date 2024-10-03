/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#1f2937',
        },
        dark: {
          background: '#1f2937',
          text: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
