// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2d2022', // Cocoa Brown (Primary color)
    },
    secondary: {
      main: '#7e90a8', // Bali Hai (Secondary color)
    },
    error: {
      main: '#d03b3e', // Persian Red (Error color)
    },
    background: {
      default: '#2d2022', // Quill Gray (Background color)
      paper: '#f5f5f5 ', // Light background for paper elements like cards
    },
    text: {
      primary: '#1f1f20', // Black
      secondary: '#00000099', // Edward (Secondary text color)
      disabled: '#8d8783', // Schooner (Disabled text color)
    },
  },
  // typography: {
  //   fontFamily: 'Roboto, sans-serif', // Default font family
  //   h1: {
  //     fontSize: '3rem',
  //     fontWeight: 700,
  //     color: '#2d2022', // Cocoa Brown (Heading 1 color)
  //   },
  //   h2: {
  //     fontSize: '2.5rem',
  //     fontWeight: 700,
  //     color: '#2d2022', // Cocoa Brown (Heading 2 color)
  //   },
  //   h3: {
  //     fontSize: '2rem',
  //     fontWeight: 700,
  //     color: '#2d2022', // Cocoa Brown (Heading 3 color)
  //   },
  //   h4: {
  //     fontSize: '1.5rem',
  //     fontWeight: 600,
  //     color: '#2d2022', // Cocoa Brown (Heading 4 color)
  //   },
  //   h5: {
  //     fontSize: '1.25rem',
  //     fontWeight: 600,
  //     color: '#2d2022', // Cocoa Brown (Heading 5 color)
  //   },
  //   h6: {
  //     fontSize: '1rem',
  //     fontWeight: 600,
  //     color: '#2d2022', // Cocoa Brown (Heading 6 color)
  //   },
  //   body1: {
  //     fontSize: '1rem',
  //     color: '#2d2022', // Cocoa Brown (Body text color)
  //   },
  //   body2: {
  //     fontSize: '0.875rem',
  //     color: '#71706f', // Tapa (Secondary body text color)
  //   },
  //   caption: {
  //     fontSize: '0.75rem',
  //     color: '#8d8783', // Schooner (Caption text color)
  //   },
  //   button: {
  //     fontSize: '0.875rem',
  //     fontWeight: 600,
  //     color: '#ffffff', // White color for button text
  //   },
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#2d2022', // Cocoa Brown (Button background)
          color: '#ffffff', // White (Button text color)
          '&:hover': {
            backgroundColor: '#4d4a49', // Tundora (Hover color)
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5', // Light background for paper components
        },
      },
    },
  },
});

export default theme;
