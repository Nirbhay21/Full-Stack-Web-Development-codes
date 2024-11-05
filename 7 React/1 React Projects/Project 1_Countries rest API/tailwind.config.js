/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{js,jsx}",
    "./components/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      boxShadow: {
        "light-blur": "0px 0px 8px 0px var(--light-box-shadow)",
      }
    },
  },
  plugins: [],
}

