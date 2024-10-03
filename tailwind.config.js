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
      fontFamily: {
        poppinsMedium: ['Poppins_500Medium'],
        poppinsRegular: ['Poppins_400Regular'],
        poppinsSemiBold: ['Poppins_600SemiBold'],
      },
      fontSize: {
        '4xl': ['2.35rem', { lineHeight: '3.75rem' }],
        '5xl': ['3.25rem', { lineHeight: '3.75rem' }],
      },
    },
  },
  plugins: [],
};
