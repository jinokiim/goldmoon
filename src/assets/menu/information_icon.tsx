import { Box, BoxProps } from '@mui/material';

export default function InformationIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25.5" cy="25.5" r="25.5" fill="#FFECE0" />
        <circle cx="26" cy="14" r="4" fill="#D9D9D9" />
        <rect x="24" y="22" width="4" height="20" fill="#D9D9D9" />
      </svg>
    </Box>
  );
}
