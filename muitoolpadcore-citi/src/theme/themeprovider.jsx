import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif', // Set your desired font family
    h1: {
      fontFamily: '"Roboto Slab", serif', // Custom font for specific header elements
    },
    h2: {
      fontFamily: '"Roboto Slab", serif', // Custom font for h2
    },
    // You can define fonts for other elements (h3, h4, etc.) as needed
  },
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          //   main: "#FF0000", // Red color for light mode
          main: "#e31d1b",
        },
        secondary: {
          main: "#FF5733", // Optional secondary color
        },
        background: {
          // default: "#630000", // Soft warm beige
          default: "#f4f5f5", // Soft warm beige
          // default: "#E9E9E9", // Soft warm beige
          paper: "#FFFFFF", // Clean white for contrast
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#FF0000", // Red color for dark mode
        },
        secondary: {
          main: "#FF5733", // Optional secondary color
        },
        background: {
          default: "#121212", // Dark mode background
          paper: "#1E1E1E", // Optional darker background for components
        },
        text: {
          primary: "#FFFFFF", // Text color for dark mode
          secondary: "#BBBBBB", // Secondary text color
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});
