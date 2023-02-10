/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#edf2f8",
        "brand-secondary": "#313bac",
        "brand-black": "#030303",
        "brand-lightgray": "#e4e4e4",
        "brand-gray": "#6b7688",
        "brand-brown": "#46364a",
      },
    },
  },
  plugins: [],
}
