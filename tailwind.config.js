/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{ts,tsx}",
      "./src/components/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1e40af",  // Deep blue
          accent: "#fb923c",   // Warm coral
          background: "#f9fafb",
          textPrimary: "#374151",
        },
      },
    },
   plugins: [require("daisyui")],
  };
  