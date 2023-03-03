/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0C7DB9', darker: '#066598' },
        secondary: { DEFAULT: '#00B4D8', darker: '#039BB9' },
        dark: '#0F1729',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
