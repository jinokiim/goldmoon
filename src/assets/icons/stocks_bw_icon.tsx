import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function StocksBWIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="20" rx="3" fill="url(#paint0_linear_11290_75662)" />
        <path
          d="M3 17L6.8218 9.35639C7.10652 8.78696 7.84379 8.62503 8.34093 9.02274L10.8565 11.0352C11.3293 11.4135 12.0272 11.288 12.3387 10.7688L17 3"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_11290_75662"
            x1="10"
            y1="0"
            x2="10"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CBCBCB" />
            <stop offset="1" stopColor="#858794" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
}
