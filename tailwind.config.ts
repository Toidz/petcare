import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      screens :{
        sm:"576px",
        md:"768px",
        lg:"992px",
        xl:"1200px",
      }
    },
  },
  plugins: [],
} satisfies Config;
