const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      body: ['Inter'],
      mono: ['"JetBrains Mono"'],
    },
    extend: {
      colors: {
        brew: {
          light: colors.gray[100],
          dark: colors.gray[900],
        },
      },
    },
  },
  plugins: [],
}
