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
        // background: "#F8F8F8",
        // background: "#f0f2f5",
        background: "#F7F7F8",
        // background: "#FFFFF9",
        backgroundDark: "#2D2D2D",
        backgroundLight: "#FFFFFF", // Hover over this color to see the preview
        secondary: "#1A1A1D", // Hover over this color to see the preview
        accent1: "#9AEA49",
        accent1Dark: "#8cd641",
        accent1Darker: "#6fb22c",
        accent1Light: "#F5FF20", // Hover over this color to see the preview
        accent2: "#F4F4F4", // Hover over this color to see the preview
        accent3: "#2D2D2D",
        text1: "#FFFFFF", // Hover over this color to see the preview
        text2: "#C5C5C5", // Hover over this color to see the preview
        secondaryLight: "#32343B", // Hover over this color to see the preview
        secondaryDark: "#0E0E0F",
        bgDark: "#0D0B0E",
      },
      screens: {
        "3xl": "1900px",
      },
    },
  },
  plugins: [],
};
