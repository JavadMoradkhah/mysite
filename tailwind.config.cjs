/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0C7DB9', darker: '#066598' },
        secondary: { DEFAULT: '#00B4D8', darker: '#039BB9' },
        dark: { DEFAULT: '#0F1729', lighter: '#111A2E' },
      },
      screens: {
        sm: '320px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
