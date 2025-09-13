/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xlMin": "1536px",
      // => @media (min-width: 1536px) { ... }

      "2xl": { max: "1536px" },
      // => @media (max-width: 1536px) { ... }

      xlMin: "1280px",
      xl: { max: "1280px" },

      lgMin: "1024px",
      lg: { max: "1024px" },

      lgMidMin: "950px",
      lgMid: { max: "950px" },

      mdMin: "900px",
      md: { max: "900px" },

      mdMidMin: "750px",
      mdMid: { max: "750px" },

      smMin: "640px",
      sm: { max: "640px" },

      mobMidMin: "520px",
      mobMid: { max: "520px" },

      xsmMin: "480px",
      xsm: { max: "480px" },

      mobMin: "420px",
      mob: { max: "420px" },

      xmobMin: "360px",
      xmob: { max: "360px" },
    },
    extend: {
      colors: {
        primary: {
          dark: "#020612",
          light: "#fcfcfc",
        },
        secondary: {
          dark: "#b374f2",
          light: "#9346e0",
        },
        body: {
          dark: "#050c21",
          light: "#ffffff",
        },
        card: {
          dark: "#010512",
          light: "#fafafa",
        },
        text: {
          dark: "#ebeced",
          light: "#111724",
        },
        hover: {
          dark: "#061133",
          light: "#f1f1f1",
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
      },
    },
  },
  plugins: [],
};
