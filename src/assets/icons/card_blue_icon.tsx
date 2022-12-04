import { Box, BoxProps } from '@mui/material';

export default function CardBlueIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="22"
        height="15"
        viewBox="0 0 22 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" width="21" height="15" rx="1.3" fill="#46B1FF" />
        <rect x="2.33789" y="5" width="3.15" height="3.44842" rx="0.8" fill="#2E8BE0" />
        <rect x="2.33789" y="12.5" width="3.675" height="1" rx="0.5" fill="#2E8BE0" />
        <rect x="6.7998" y="12.5" width="3.675" height="1" rx="0.5" fill="#2E8BE0" />
        <rect x="11.2627" y="12.5" width="3.675" height="1" rx="0.5" fill="#2E8BE0" />
        <rect x="15.7246" y="12.5" width="3.675" height="1" rx="0.5" fill="#2E8BE0" />
      </svg>
    </Box>
  );
}
