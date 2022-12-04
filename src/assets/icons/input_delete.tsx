import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function InputDeleteIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_20190_12574)">
          <circle cx="10" cy="10" r="10" fill="#F4F6F8" />
          <circle cx="10" cy="10" r="10" fill="black" fillOpacity="0.1" />
          <path
            d="M13.3333 6.66675L6.80617 13.1939"
            stroke="white"
            strokeOpacity="0.95"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66666 6.66675L13.1938 13.1939"
            stroke="white"
            strokeOpacity="0.95"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_20190_12574">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
}
