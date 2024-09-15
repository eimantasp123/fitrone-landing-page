/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "0 2px 4px rgba(0, 0, 0, 0.1)",
        "custom-light2": "0 6px 8px rgba(0, 0, 0, 0.04)",
        "custom-light3": "0 6px 8px rgba(0, 0, 0, 0.03)",
        "custom-light4": "0 4px 6px rgba(0, 0, 0, 0.03)",
        "custom-dark": "0 4px 8px rgba(0, 0, 0, 0.2)",
        "custom-dark2": "rgba(50, 50, 105, 0.03) 0px 2px 5px 0px, rgba(0, 0, 0, 0.01) 0px 1px 1px 0px",
      },
      colors: {
        accent: "#9AEA49",
        accentDark: "#6fb22c",
        backgroundDark: "#101010",
        textLight: "#D6D3D1", // Hover over this color to see the preview
        textDark: "#0D0D0D",
        backgroundDarkLight: "#141414",
      },
      screens: {
        "3xl": "1900px",
      },
    },
  },
  plugins: [],
};
