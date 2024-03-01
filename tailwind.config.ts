import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["var(--font-inter)"],
        LibreCaslonText: ["var(--font-librecaslontext)"],
        CalistoMT: ["var(--font-CalistoMT)"],
        Tobias: ["Tobias", "sans-serif"],
        Gupter: ["Gupter", "serif"],
      },
      colors: {
        primary: "#6A57E3",
        sea: "#C3F2EF",
        lightBg: "#C3F2EF",
        darkBg: "#14171F",
      },
    },
  },
  plugins: [nextui()],
};
export default config
