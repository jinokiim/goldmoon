import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function ThinArrowDownIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.5 11L12.7426 15.2426L16.9853 11"
          stroke="#858794"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
