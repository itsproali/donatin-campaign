/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "banner-bg": "url('/banner_bg.png')",
      }),
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF444A",
          "primary-focus": "#FF444A",
          "primary-content": "#ffffff",
          secondary: "#f3f4f6",
          "secondary-focus": "#f3f4f6",
          "secondary-content": "#1f2937",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#009444",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
};
