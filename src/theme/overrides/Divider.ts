import { COLORS } from '@/src/theme/palette';

// ----------------------------------------------------------------------

export default function Divider() {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: COLORS.divider
        }
      }
    }
  };
}
