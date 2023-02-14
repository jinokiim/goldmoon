import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function XIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 51 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25.929" cy="25" r="25" fill="#FF8F6D" />
        <rect
          x="12"
          y="37.5165"
          width="37.5"
          height="3.33333"
          rx="1.66667"
          transform="rotate(-45 12 37.5165)"
          fill="white"
        />
        <rect
          x="12"
          y="13.357"
          width="3.33333"
          height="37.5"
          rx="1.66667"
          transform="rotate(-45 12 13.357)"
          fill="white"
        />
      </svg>
    </Box>
  );
}
