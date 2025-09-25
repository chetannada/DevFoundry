/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // Desktop Wide
      min2xl: "1536px",
      max2xl: { max: "1536px" },

      // Desktop
      minXl: "1280px",
      maxXl: { max: "1280px" },

      // Laptop
      minLg: "1024px",
      maxLg: { max: "1024px" },

      // Tablet
      minMd: "900px",
      maxMd: { max: "900px" },

      // Phablet
      minSmPlus: "750px",
      maxSmPlus: { max: "750px" },

      // Mobile Wide
      minSm: "640px",
      maxSm: { max: "640px" },

      // Mobile
      minXsPlus: "520px",
      maxXsPlus: { max: "520px" },

      // Mobile Compact
      minXs: "460px",
      maxXs: { max: "460px" },

      // Small Mobile
      min2xs: "400px",
      max2xs: { max: "400px" },

      // Tiny Mobile
      min3xs: "340px",
      max3xs: { max: "340px" },
    },
    extend: {
      colors: {
        primary: {
          dark: "#0d0d0d",
          light: "#fcfcfc",
        },
        secondary: {
          dark: "#b374f2",
          light: "#7535b5",
        },
        body: {
          dark: "#0c0c0c",
          light: "#fdfdfd",
        },
        card: {
          dark: "#0a0a0a",
          light: "#fefefe",
        },
        text: {
          dark: "#ebeced",
          light: "#111724",
        },
        hover: {
          dark: "#061133",
          light: "#f1f1f1",
        },
        border: {
          dark: "#4f4f4f",
          light: "#d4d4d4",
        },
        skeleton: {
          dark: "#374151",
          light: "#d1d5db",
        },
      },
      width: {
        68: "17rem",
        88: "22rem",
        102: "26rem",
        108: "28rem",
        128: "32rem",
        140: "36rem",
        152: "40rem",
        164: "44rem",
        176: "48rem",
        180: "52rem",
      },
      maxWidth: {
        68: "17rem",
        88: "22rem",
        102: "26rem",
        108: "28rem",
        128: "32rem",
        140: "36rem",
        152: "40rem",
        164: "44rem",
        176: "48rem",
        180: "52rem",
      },
      minWidth: {
        68: "17rem",
        88: "22rem",
        102: "26rem",
        108: "28rem",
        128: "32rem",
        140: "36rem",
        152: "40rem",
        164: "44rem",
        176: "48rem",
        180: "52rem",
      },
      margin: {
        13: "52px",
        15: "60px",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "spin-slow-hover": "spin 10s linear infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
