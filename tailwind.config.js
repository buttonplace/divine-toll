const {nextui} = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
  darkMode: "class",
  plugins: [require("tailwindcss-animate"),nextui({
    themes: {
      "divine": {
        
        colors: {
          divider: "#C79931",
          content1: "#C79931",
          content2: "#C79931",
          content3: "#C79931",
          content4: "#C79931",
          default: "#C79931",
          primary: "#C79931",
          secondary: "#C79931",
          success: "#C79931",
          warning: "#C79931",
          danger: "#C79931",
          background: "#C79931",
          foreground:{
            100: "#C79931",
            200: "#C79931",
            300: "#C79931",
            400: "#C79931",
            500: "#C79931",
            600: "#C79931",
            700: "#C79931",
            800: "#C79931",
            900: "#C79931",
            950:"#C79931", 
          },
          focus: "#C79931",
          default: {
            100: "#C79931",
            200: "#C79931",
            300: "#C79931",
            400: "#C79931",
            500: "#C79931",
            600: "#C79931",
            700: "#C79931",
            800: "#C79931",
            900: "#C79931",
            950:"#C79931",
            divider: "#C79931",
          content1: "#C79931",
          content2: "#C79931",
          content3: "#C79931",
          content4: "#C79931",
          default: "#C79931",
          primary: "#C79931",
          secondary: "#C79931",
          success: "#C79931",
          warning: "#C79931",
          danger: "#C79931",
          background: "#C79931",
          foreground: "#C79931",
          focus: "#C79931",
          },
        
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
    },
  }),
]
}
