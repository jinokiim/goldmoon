import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function InfoGreenIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        fill="none"
        viewBox="0 0 60 60"
      >
        <circle cx="30" cy="30" r="30" fill="#40E6BA"></circle>
        <circle cx="30" cy="43" r="3" fill="#fff" fillOpacity="0.95"></circle>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.95"
          strokeWidth="4"
          d="M30 17.5v16"
        ></path>
      </svg>
    </Box>
  );
}
