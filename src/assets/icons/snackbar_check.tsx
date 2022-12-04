import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function SnackbarCheck({ width = 24, height = 24, ...other }: Props) {
  return (
    <Box {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
        viewBox="0 0 24 25"
      >
        <circle cx="12" cy="12.5" r="10" fill="#FBFBFB"></circle>
        <path
          stroke="#33374D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7.402 12.06l3.536 3.536 5.657-5.657"
        ></path>
      </svg>
    </Box>
  );
}
