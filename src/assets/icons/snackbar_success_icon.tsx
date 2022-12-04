import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function SnackbarSuccessIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="24"
        height="37"
        viewBox="0 0 24 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="18.5" r="10" fill="#FBFBFB" />
        <path
          d="M7.4038 18.0607L10.9393 21.5962L16.5962 15.9393"
          stroke="#33374D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
