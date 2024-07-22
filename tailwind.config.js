/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "var(--bg-color)",
        "sidebar-bg": "var(--sidebar-bg)",
        "text-color": "var(--text-color)",
        "hover-color": "var(--hover-color)",
        "text-main-color": "var(--text-main-color)",
      },
      boxShadow: {
        "custom-shadow":
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      },
    },
  },
  plugins: [],
};
