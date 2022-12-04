import { Theme } from '@mui/material/styles';
import { COLORS } from '@/src/theme/palette';

// ----------------------------------------------------------------------

export default function Badge(theme: Theme) {
  return {
    MuiBadge: {
      styleOverrides: {
        root: {
          zIndex: 0,
          p: 1
        },
        badge: {
          position: 'relative',
          transform: 'scale(1)',

          color: COLORS.primary500,
          background: COLORS.primary050,
          padding: '0 9px 0 9px !important'
        },

        dot: {
          width: 10,
          height: 10,
          borderRadius: '50%'
        }
      }
    }
  };
}
