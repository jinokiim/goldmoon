// material
// import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
// import { COLORS } from 'theme/palette';
// ----------------------------------------------------------------------

export default function Inv_history_icon2({ ...other }: BoxProps) {
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
        <circle cx="12" cy="12" r="12" fill="#33AAFF" />
        <path
          d="M6.27409 8.88867L9.19075 16.8887L12.1074 8.88867L15.0241 16.8887L17.9408 8.88867M5.10742 11.8887H19.1074"
          stroke="white"
          strokeOpacity="0.95"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
