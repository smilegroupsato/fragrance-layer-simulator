import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2f2428",
        paper: "#fff7f8",
        moss: "#4e6f62",
        clay: "#a76d70",
        mist: "#f7e8ec"
      }
    }
  },
  plugins: []
};

export default config;
