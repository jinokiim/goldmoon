import { Theme } from '@mui/material/styles';
import { COLORS } from '@/src/theme/palette';

// ----------------------------------------------------------------------

export default function Menu(theme: Theme) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
            color: COLORS.primary500
          }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          '&': {
            borderRadius: '4px'
          }
        }
      }
    }
  };
}
