/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        ink: '#1C1C1C',
        gold: '#B8942E',
        'gold-light': '#E8D5A3',
        muted: '#7A7A7A',
        'green-wa': '#25D366',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '16/7': '16 / 7',
      },
      transitionDuration: {
        500: '500ms',
        700: '700ms',
      },
    },
  },
  plugins: [],
}
