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
      boxShadow: {
        "card-light": "0px 0px 10px 1px #1a202c",
        "card-dark": "0px 0px 10px 1px #f7fafc",
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
