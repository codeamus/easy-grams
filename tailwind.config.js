/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          onBackground: '#b3b3b3',
          onBackgrounVariant: '#656565',
          primary: '#49d199',
          onPrimary: '#242833',
          secondary: '#aa9bd2',
          surfacePrimary: '#242833',
          onSurfacePrimary: '#e6e6e6',
        },
        dark: {
          background: '#0d0d0d',
          onBackground: '#0d1220',
          onBackgrounVariant: '#6e7179',
          primary: '#35cc8c',
          onPrimary: '#ffffff',
          secondary: '#aa9bd2',
          surfacePrimary: '#0d1220',
          onSurfacePrimary: '#0d1220',
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
