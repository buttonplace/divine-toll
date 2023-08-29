const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        new: {
          colors: {
            background: "#140c02",
            primary: {
              DEFAULT: "#7a726c",
              50: "#f9f1e9",
              100: "#dfd7d4",
              200: "#c4bfba",
              300: "#aca5a0",
              400: "#938b85",
              500: "#7a726c",
              600: "#5f5853",
              700: "#453f3b",
              800: "#2a2621",
              900: "#140c02",
            },
            success: {
              50: "#defff0",
              100: "#b1fcd9",
              200: "#83f9c0",
              300: "#55f7a9",
              400: "#2af491",
              500: "#15db77",
              600: "#08aa5c",
              700: "#007a41",
              800: "#004a25",
              900: "#001a09",
            },
            info: {
              50: "#e2ecff",
              100: "#b2c7ff",
              200: "#80a2fe",
              300: "#4f7dfc",
              400: "#2058fb",
              500: "#093fe1",
              600: "#0331b0",
              700: "#00237f",
              800: "#00154e",
              900: "#00071f",
            },
            warning: {
              50: "#fff2db",
              100: "#ffd9ae",
              200: "#fec17e",
              300: "#fea94e",
              400: "#fc901c",
              500: "#e37703",
              600: "#b05c00",
              700: "#7f4100",
              800: "#4e2700",
              900: "#1f0b00",
            },
            error: {
              50: "#ffe3e3",
              100: "#ffb3b4",
              200: "#fc8283",
              300: "#f95252",
              400: "#f72322",
              500: "#dd0c08",
              600: "#ad0606",
              700: "#7d0203",
              800: "#4c0000",
              900: "#1f0000",
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
  ],
};
