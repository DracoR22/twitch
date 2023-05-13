/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
     backgroundColor:{
      primary: 'var(--color-bg-primary)',
      secondary: 'var(--color-bg-secondary)',
      button: 'var--(--color-bg-button)',
      hover: 'var--(--color-bg-hover)',
     },
    textColor:{
      accent: 'var(--color-text-accent)',
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      btnText: 'var(--color-text-seconddary)',
    },
    borderColor:{
      primary: 'var(--color-bg-primary)',
      secondary: 'var(--color-bg-secondary)',
      accent: 'var(--color-text-secondary)',
    },
    },
  },
  plugins: [],
}
