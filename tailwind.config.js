/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        beige: "#f5f5dc",
        "brown-1000": "#0f0500",
        "brown-700": "#0f0500af",
        "brown-500": "#0f05007b",
        transparent: "transparent",
        "primary-200": "#F2F2F2",
        "primary-300": "#E6E6E6",
        "primary-400": "#D9D9D9",
        "secondary-100": "#FAFAF9",
        "secondary-200": "#E8E8E3",
        "secondary-300": "#DDDDD5",
        "secondary-400": "#D1D1C7",
        "secondary-500": "#AEAE9D",
        "secondary-600": "#8C8C73",
        "secondary-700": "#70705C",
        "accent-400": "#0E0E0C",
        "accent-300": "#262626",
        "accent-200": "#4D4D4D",
        "accent-100": "#666666",
      },
      fontSize: {
        title: ["clamp(3rem, 20vw, 9rem)"],
        heading: ["clamp(3rem, 8vw, 12rem)"],

        "heading-1": ["clamp(2.5rem, 6.5vw, 10rem)"],
        "heading-2": ["clamp(2.4rem, 8vw, 10rem)"],
        "heading-3": ["clamp(2rem, 5vw, 2.75rem)"],
        special: ["clamp(2rem, 4vw, 3.25rem)"],
        "works-title": ["clamp(1.25rem, 2vw, 1.5rem)"],
        "body-1": ["clamp(1.1rem, 2vw, 1.3rem)"],
        "body-2": ["clamp(1rem, 1.5vw, 1.5rem)"],
        "body-3": "1.1rem",
        "body-4": ["clamp(0.75rem, 3vw, 1rem)"],
      },
      fontFamily: {
        main: ["Main", "sans-serif"], // Adding your custom font family
      },
      clipPath: {
        "hero-clip": "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      // Adding custom nth-of-type variants
      addVariant('nth-1', '&:nth-of-type(1)');
      addVariant('nth-2', '&:nth-of-type(2)');
      addVariant('nth-3', '&:nth-of-type(3)');
      addVariant('nth-4', '&:nth-of-type(4)');
      // Add more if needed
    },
  ],
};
