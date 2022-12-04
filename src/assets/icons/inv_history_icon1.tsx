// material
// import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
// import { COLORS } from 'theme/palette';
// ----------------------------------------------------------------------

export default function Inv_history_icon1({ ...other }: BoxProps) {
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
        <path d="M9 6V18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M10 6.5H16.5C16.7761 6.5 17 6.72386 17 7V12C17 12.2761 16.7761 12.5 16.5 12.5H10V6.5Z"
          fill="white"
          stroke="white"
        />
      </svg>
    </Box>
  );
}
