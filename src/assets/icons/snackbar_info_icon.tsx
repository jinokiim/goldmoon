import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function SnackbarInfoIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="24"
        height="37"
        viewBox="0 0 24 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="18.5" r="10" fill="white" />
        <ellipse
          cx="12"
          cy="23.1"
          rx="1.2"
          ry="1.2"
          transform="rotate(-180 12 23.1)"
          fill="#33374D"
        />
        <line
          x1="12"
          y1="14"
          x2="12"
          y2="19.8"
          stroke="#33374D"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
}
