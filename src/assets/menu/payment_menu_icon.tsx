import { Box, BoxProps } from '@mui/material';

export default function PaymentMenu({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25.5" cy="25.5" r="25.5" fill="#FAFBD0" />
        <path
          d="M11 21C11 19.1144 11 18.1716 11.5858 17.5858C12.1716 17 13.1144 17 15 17H37C38.8856 17 39.8284 17 40.4142 17.5858C41 18.1716 41 19.1144 41 21V33C41 34.8856 41 35.8284 40.4142 36.4142C39.8284 37 38.8856 37 37 37H15C13.1144 37 12.1716 37 11.5858 36.4142C11 35.8284 11 34.8856 11 33V21Z"
          fill="#3462E6"
          fill-opacity="0.25"
        />
        <circle cx="16" cy="32" r="1.66667" fill="#222222" />
        <rect x="11" y="22" width="30" height="3.33333" fill="#222222" />
      </svg>
    </Box>
  );
}
