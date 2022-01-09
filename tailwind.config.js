const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    letterSpacing: {
      tight: '-0.015em',
    },
    fontFamily: {
      head: ['"Readex Pro"'],
      sans: ['Inter'],
      mono: ['"JetBrains Mono"'],
    },
    extend: {
      colors: {
        brew: {
          // light: colors.gray[100],
          light: '#ffffff',
          dark: colors.gray[900],
        },
      },
      maxWidth: {
        '1.5xl': '36em',
      },
    },
  },
  plugins: [],
}
