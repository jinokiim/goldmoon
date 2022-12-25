// material
// import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
// import { COLORS } from '../../theme/palette';
// ----------------------------------------------------------------------

export default function Inv_history_icon3({ ...other }: BoxProps) {
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
        <path d="M8.5 6V18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M15.5 6V18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8.5" cy="10" r="2" fill="#2E9BFF" stroke="white" strokeWidth="2" />
        <circle cx="15.5" cy="14" r="2" fill="#2E9BFF" stroke="white" strokeWidth="2" />
      </svg>
    </Box>
  );
}
