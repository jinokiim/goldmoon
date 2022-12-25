// material
// import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
import { COLORS } from '../../theme/palette';
// ----------------------------------------------------------------------

export default function InfoIcon({ ...other }: BoxProps) {
  // const theme = useTheme();
  return (
    <Box {...other}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.213 18a6.786 6.786 0 1 0 0-13.572 6.786 6.786 0 0 0 0 13.572zM18.714 18.714l-1.429-1.428"
          stroke={COLORS.commonBlack}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
