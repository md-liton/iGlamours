/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
            xl: '1240px',
            '2xl': '1400px'
        }
    },
    screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
    },
    fontFamily: {
      'heading': ["Open Sans", "sans-serif"],
      'paragraph': ["Playwrite DE Grund", "cursive"]
    },
    colors: {
      'primary_color': '#EC018B',
      'secondry_color': '#192038',
    },
    },
  },
  plugins: [],
}
