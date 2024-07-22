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
      },
    },
  },
  plugins: [],
};
