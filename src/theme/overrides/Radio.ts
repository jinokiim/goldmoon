import { Theme } from '@mui/material/styles';
import { COLORS } from '@/src/theme/palette';

// ----------------------------------------------------------------------

export default function Radio(theme: Theme) {
  return {
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
          svg: {
            fontSize: 24,
            '&[font-size=small]': {
              fontSize: 20
            }
          },
          '&.MuiRadio-colorPrimary': {
            color: COLORS.neutral6,
            '&.Mui-checked': {
              color: COLORS.primary500
            }
          }
        }
      }
    }
  };
}
