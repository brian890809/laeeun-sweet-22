/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#4A4A4A',
        gray: '#646464',
        'off-white': '#F4F4F4',
      },
      fontFamily: {
        content: ['var(--font-serif)'], // Adds a new `font-content` class
        scroll: ['var(--font-sans-serif)'], // Adds a new `font-scroll` class
      },
      backgroundColor: {
        'dark-cream': '#D8CEBD',
        'dark-gray': '#646464',
      },
    },
  },
  plugins: [],
};
