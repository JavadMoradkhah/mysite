/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#4338ca',
        secondary: '#db2777',
        dark: '#0F1729',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
