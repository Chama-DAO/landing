const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Open Sans"'],
        heading: ['"Merriweather Sans"'],
      },
      colors: {
        primary: "#0052cc",
        neutral: "#D3D3D3",
        accent: "#FFD700",
        secondaryAccent: "#28a745",
        secondary: "#dedcff",
        text: "#050315",
        background: "#fbfbfe",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
}
