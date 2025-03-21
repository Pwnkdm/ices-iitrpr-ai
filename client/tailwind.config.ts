export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      animation: {
        'slide-in': 'slideIn 3s ease-in-out forwards', // Tailwind custom animation
      },
      keyframes: {
        slideIn: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};
