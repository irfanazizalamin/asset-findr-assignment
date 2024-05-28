/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primay: "2065da",
        "primay-lighten": "#e3f0f7",
        tertiary: "#f5f5f5",
        "tertiary-lighten": "#fcfcfc",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
