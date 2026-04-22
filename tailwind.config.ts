import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        nunitoSans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary: "#571244",
        mainText: "#151515",
        subdued: "#696969",
        purpleSelection: "#8F6182", // 40% variant
        white: "#FFFFFF",
        pending: "#1671D9",
        secondary: "#EF4353",
        overlay: "#000000B2", // Hero section overlay
      },
    },
  },
  plugins: [],
};
export default config;
