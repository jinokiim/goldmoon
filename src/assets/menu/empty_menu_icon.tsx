import { Box, BoxProps } from '@mui/material';

export default function EmptyMenu({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25.5" cy="25.5" r="25.5" fill="#BBBBC2" />
      </svg>
    </Box>
  );
}
