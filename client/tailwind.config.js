// File: client/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
 content: [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
]
,
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      siteColor:{
        green : '#025048',
      },
      
    },
  },
  plugins: [],
};
