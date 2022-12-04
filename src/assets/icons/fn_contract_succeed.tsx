import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function CompletedGreenIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="30" cy="30" r="30" fill="#40E6BA" />
        <path
          d="M14.8106 30.9735L24.3566 42.6408L45.0614 20.9192"
          stroke="white"
          strokeOpacity="0.95"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
