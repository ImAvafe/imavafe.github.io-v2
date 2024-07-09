import daisyui from "daisyui"
import themes from "daisyui/src/theming/themes"
import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'serif'],
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#9F84FF',
      }
    },
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
          secondary: "white",
          neutral: "#2d2d2d",
          "base-100": "#0E0E0E",
        },
        light: {
          ...themes["light"],
          primary: "#9F84FF",
          secondary: "white",
          neutral: "#2d2d2d",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}

