// import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function IconButton() {
  // export default function IconButton(theme: Theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          lineHeight: 0
        }
      }
    }
  };
}
