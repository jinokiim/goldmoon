import { Box, BoxProps } from '@mui/material';

export default function DoneIconSmall({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="24"
        height="58"
        viewBox="0 0 24 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="29" r="10" fill="#FBFBFB" />
        <path
          d="M7.40381 28.5605L10.9393 32.0961L16.5962 26.4392"
          stroke="#33374D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
