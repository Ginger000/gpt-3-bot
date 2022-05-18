module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        typing:{
          '0%, 100%': { transform: 'translateY(0)', transition: 'all 0.5s ease-in-out'},
          '50%': { transform: 'translateY(-5px)',  transition: 'all 0.5s ease-in-out' },
        }
      },
      animation: {
        typing: 'typing 1s infinite',
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
