import { createTheme } from "@mui/material";


const rootElement = document.getElementById('root');

// All `Portal`-related components need to have the the main app wrapper element as a container
// so that the are in the subtree under the element used in the `important` option of the Tailwind's config.
export const appTheme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#40c4ff',
      contrastText: '#000',
    },
    secondary: {
      main: '#ffab40',
      contrastText: '#000',
    },
    error: {
      main: '#f44336',
      contrastText: '#fff',
    },
    warning: {
      main: '#ff9800',
      contrastText: '#000',
    },
    info: {
      main: '#2196f3',
      contrastText: '#fff',
    },
    success: {
      main: '#4caf50',
      contrastText: '#fff',
    },
    background: {
      paper: '#1e1e1e',
      default: '#121212',
    },
    text: {
      primary: '#fff',
      secondary: '#bdbdbd',
    },
  },
});
