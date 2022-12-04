// material
import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

export default function InfoIconMedium({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 45 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="22.5" cy="22" r="21" stroke="#F4F6F8" strokeWidth="2" />
        <circle cx="22.5" cy="22" r="21" stroke="black" strokeOpacity="0.1" strokeWidth="2" />
        <circle cx="22.4998" cy="31.5333" r="2.2" fill="#F4F6F8" />
        <circle cx="22.4998" cy="31.5333" r="2.2" fill="black" fillOpacity="0.1" />
        <path
          d="M22.5 12.8333V24.5666"
          stroke="#F4F6F8"
          strokeWidth="4"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M22.5 12.8333V24.5666"
          stroke="black"
          strokeOpacity="0.1"
          strokeWidth="4"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
