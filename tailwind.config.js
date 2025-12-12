/** @type {import('tailwindcss').Config} */
export default {
  content: ['./frontend-src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"],
  }
}