/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        figmaOrange: "#FF6B35",
        figmaBlack: "#000000",
        figmaGrey: "#E5E5E5",
        figmaLightGrey: "#F5F5F5",
        figmaDarkGrey: "#666666",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'dotted-grid': 'radial-gradient(circle, #999 1px, transparent 1px)',
      },
      backgroundSize: {
        'dotted-grid': '20px 20px',
      },
    },
  },
  plugins: [],
}
