import daisyui from "daisyui"
import themes from "daisyui/src/theming/themes"

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...themes["dark"],
          primary: "#9F84FF",
          secondary: "#212121",
          neutral: "#212121",
          "base-100": "#0E0E0E",
        },
        light: {
          ...themes["light"],
          primary: "#9F84FF",
          secondary: "#212121",
          neutral: "#212121",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}

