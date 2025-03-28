import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = withMT({
  content: [
    "./src/node_modules/pliny/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", ...fontFamily.sans],
        // mono: []
      },
      colors: {
        header: {
          main: "#019444",
          search: { bg: "#f3f8fb", placeholder: "#747579" },
        },
        home: {
          popularCard: "#f3f8fb",
          carouselArrowBg: "#f2f3f5",
          stockText: "#a8acad",
          freshCardBorder: "#efefef",
          discountTimer: "#d02424",
          discountBadge: "#e36362",
          rating: { on: "#ffb949", off: "#d5d5d5", value: "#afafaf" },
          salesProgressBar: "#1287a4",
          freshAddToCardBG: "#cbeada",
          addToCardBg: "#009443",
        },
        footer: {
          bg: "#f7f7f7",
          hl: "#d4d4d4",
          copyright: "#9a9a9a",
          li: "#202020",
          gap: "#029247",
        },
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
      },
    },
  },
  plugins: [],
});

export default config;
