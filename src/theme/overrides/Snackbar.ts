// import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Snackbar() {
  // export default function Snackbar(theme: Theme) {
  return {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          '&': {
            padding: '0'
          }
        }
      }
    }
  };
}
