/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "working-img":
          "url('https://images.unsplash.com/photo-1721332155567-55d1b12aa271?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Syne", "sans-serif"],
      },
      colors: {
        // heroBg: "#0e1122",
        heroBg: "white",
        para: "rgb(0 0 0 / 80%)",
        primary: "#06a055",
      },
    },
  },
  plugins: [],
};
