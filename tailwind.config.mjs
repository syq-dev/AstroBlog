import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        brand: {
          navy:    "#293241",
          steel:   "#3d5a80",
          sky:     "#98c1d9",
          mist:    "#e0fbfc",
          coral:   "#ee6c4d",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
