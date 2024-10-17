/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      "animation": {
        "text-gradient": "text-gradient 1.5s linear infinite"
      },
      "keyframes": {
        "text-gradient": {
          "to": {
            "backgroundPosition": "200% center"
          }
        }
      }
    
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

