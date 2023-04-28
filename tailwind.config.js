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
      "lg-body": [
        "1.6rem",
        {
          fontWeight: "400",
          lineHeight: "2.3rem",
        },
      ],
      "sm-header": [
        "1.4rem",
        {
          fontWeight: "700",
          letterSpacing: "-0.2px",
          lineHeight: "2rem",
        },
      ],
      "md-header": [
        "1.8rem",
        {
          fontWeight: "700",
          letterSpacing: "-0.25px",
          lineHeight: "2.6rem",
        },
      ],
      "lg-header": [
        "2rem",
        {
          fontWeight: "700",
          letterSpacing: "-0.25px",
          lineHeight: "2.9rem",
        },
      ],
      "xlg-header": [
        "2.4rem",
        {
          fontWeight: "700",
          letterSpacing: "-0.33px",
          lineHeight: "3.5rem",
        },
      ],
    },
    screens: {
      s: "375px",
      m: "768px",
      l: "1440px",
    },
    extend: {
      fontFamily: {
        main: ["Jost, sans-serif"],
      },
    },
  },
  plugins: [],
};
