/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      babyBlue: "#62BCFA",
      blue: "#4661E6",
      lightBlue: "#7C91F9",
      gradient: {
        100: "#28A7ED",
        200: "#A337F6",
        300: "#E84D70",
      },
      grey: "#F2F4FF",
      lightGrey: "#F7F8FD",
      navy: "#3A4374",
      navySecondary: "#373F68",
      lightNavy: "#656EA3",
      lightNavySecondary: "#647196",
      orange: "#F49F85",
      purple: "#AD1FEA",
      lightPurple: "#C75AF6",
      red: "#D73737",
      lightRed: "#E98888",
      white: "#FFFFFF",
    },
    fontSize: {
      "s-body": [
        "1.3rem",
        {
          fontWeight: "600",
          lineHeight: "1.9rem",
        },
      ],
      "m-body": [
        "1.5rem",
        {
          fontWeight: "400",
          lineHeight: "2.2rem",
        },
      ],
      "l-body": [
        "1.6rem",
        {
          fontWeight: "400",
          lineHeight: "2.3rem",
        },
      ],
      "s-header": [
        "1.4rem",
        {
          fontWeight: "700",
          letterSpacing: "-0.2px",
          lineHeight: "2rem",
        },
      ],
      "m-header": [
        "1.8rem",
        {
          fontWeight: "700",
          letterSpacing: "-0.25px",
          lineHeight: "2.6rem",
        },
      ],
      "l-header": [
        "2rem",
        {
          fontWeight: "700",
          letterSpacing: "-0.25px",
          lineHeight: "2.9rem",
        },
      ],
      "xl-header": [
        "2.4rem",
        {
          fontWeight: "700",
          letterSpacing: "-0.33px",
          lineHeight: "3.5rem",
        },
      ],
    },
    rotate: {
      0: "0deg",
      180: "180deg",
    },
    screens: {
      s: "375px",
      m: "768px",
      l: "1440px",
    },
    spacing: {
      0.5: "0.2rem",
      1: "0.4rem",
      1.5: "0.6rem",
      2: "0.8rem",
      2.5: "1rem",
      3: "1.2rem",
      3.5: "1.4rem",
      4: "1.6rem",
      4.5: "1.8rem",
      5: "2rem",
      5.5: "2.2rem",
      6: "2.4rem",
      6.5: "2.6rem",
      7: "2.8rem",
      7.5: "3rem",
      8: "3.2rem",
      8.5: "3.6rem",
      9: "3.6rem",
      9.5: "3.8rem",
      10: "4rem",
    },
    extend: {
      fontFamily: {
        main: ["Jost, sans-serif"],
      },
    },
  },
  plugins: [],
};
