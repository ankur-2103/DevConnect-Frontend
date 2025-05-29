/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/primeng/**/*.{html,ts}"],
  plugins: [require("tailwindcss-primeui")],
  darkMode: ['selector', '[class="dark-theme"]'],
};
