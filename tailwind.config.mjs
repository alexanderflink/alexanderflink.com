/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["DM Serif Display"],
        sans: ["DM Sans"],
      },
      colors: {
        black: "#2A2A2A",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
