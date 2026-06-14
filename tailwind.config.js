/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6B00",
          black: "#050505",
          darkGray: "#0f0f0f",
          cardGray: "rgba(20, 20, 20, 0.6)",
          lightGray: "#a3a3a3",
        }
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 107, 0, 0.15)',
        'glow-strong': '0 0 30px rgba(255, 107, 0, 0.4)',
        'glow-soft': '0 0 15px rgba(255, 107, 0, 0.08)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
