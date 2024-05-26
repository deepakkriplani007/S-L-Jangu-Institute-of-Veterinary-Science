/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          "overflow-x": "hidden",
          "scrollbar-width": "none" /* Firefox */,
          "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none" /* Safari and Chrome */,
        },
      });
    },
  ],
};
