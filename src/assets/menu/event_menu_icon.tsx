import { Box, BoxProps } from '@mui/material';

export default function EventMenu({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25.5" cy="25.5" r="25.5" fill="#E6E6FA" />
        <rect x="10" y="17" width="31" height="23" rx="3" fill="#D9D9D9" />
        <path
          d="M12 22H39V35C39 36.6569 37.6569 38 36 38H15C13.3431 38 12 36.6569 12 35V22Z"
          fill="white"
        />
        <path
          d="M26 24L27.3471 28.1459H31.7063L28.1796 30.7082L29.5267 34.8541L26 32.2918L22.4733 34.8541L23.8204 30.7082L20.2937 28.1459H24.6529L26 24Z"
          fill="#FFD700"
        />
        <rect x="14" y="12" width="4" height="8" rx="2" fill="#999999" />
        <rect x="24" y="12" width="4" height="8" rx="2" fill="#999999" />
        <rect x="34" y="12" width="4" height="8" rx="2" fill="#999999" />
      </svg>
    </Box>
  );
}
