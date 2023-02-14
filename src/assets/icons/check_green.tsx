import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function CheckGreenIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="none"
        viewBox="0 0 60 60"
      >
        <circle cx="30" cy="30" r="30" fill="#40E6BA"></circle>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.95"
          strokeWidth="4"
          d="M14.81 30.974l9.547 11.668L45.06 20.92"
        ></path>
      </svg>
    </Box>
  );
}
