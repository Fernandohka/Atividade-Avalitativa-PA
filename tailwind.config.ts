import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cor1: "var(--cor1)",
        cor2: "var(--cor2)",
        cor3: "var(--cor3)",
        branco: "var(--branco)",
        azul: "var(--azul)",
        preto: "var(--preto)",
      },
    },
  },
  plugins: [],
};
export default config;
