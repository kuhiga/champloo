/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'retro'],
  },
  content: ['**/*.{html,js,ts,tsx, jsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
