/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px"
      },
      variants: {
        textColor: ['group-hover'],
      },
      colors: {
        blue: "hsl(223, 87%, 63%)",
        "pale-blue": "hsl(223, 100%, 88%)",
        "light-red": "hsl(354, 100%, 66%)",
        gray: "hsl(0, 0%, 59%)",
        "very-dark-blue": "hsl(209, 33%, 12%)"
      },
    },
  },
  plugins: [],
}
