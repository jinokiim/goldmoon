import { Box, BoxProps } from '@mui/material';

export default function SortingDownIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4L3 2.14569e-07L0 4L6 4Z" fill="#D6D7DB" />
        <path d="M0 6L3 10L6 6L0 6Z" fill="#858794" />
      </svg>
    </Box>
  );
}
