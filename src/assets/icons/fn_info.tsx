import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function InfoGreenIcon({ ...other }: BoxProps) {
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
        <circle cx="30" cy="43" r="3" fill="white" fillOpacity="0.95" />
        <path
          d="M30 17.5V33.5"
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
