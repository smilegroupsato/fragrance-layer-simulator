import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#24302f",
        paper: "#fbfaf7",
        moss: "#4e6f62",
        clay: "#a76d57",
        mist: "#e7ece8"
      }
    }
  },
  plugins: []
};

export default config;
