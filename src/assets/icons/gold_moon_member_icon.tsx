import { Box, BoxProps } from '@mui/material';

export default function GoldMoonMemberIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25.5" cy="25.5" r="25.5" fill="#BEEFFF" />
        <circle cx="12.0278" cy="21.9167" r="6.02778" fill="#50C8FF" />
        <path
          d="M6 33.2747C6 29.961 8.71407 27.2747 12.0278 27.2747V27.2747C15.3415 27.2747 18.0556 29.961 18.0556 33.2747V40H6V33.2747Z"
          fill="#50C8FF"
        />
        <circle cx="39.5833" cy="21.9167" r="6.02778" fill="#50C8FF" />
        <path
          d="M33.5555 33.2747C33.5555 29.961 36.2696 27.2747 39.5833 27.2747V27.2747C42.897 27.2747 45.6111 29.961 45.6111 33.2747V40H33.5555V33.2747Z"
          fill="#50C8FF"
        />
        <circle cx="25.8055" cy="16.75" r="7.75" fill="#0078FF" />
        <path
          d="M18.0555 29.6389C18.0555 26.3252 20.7418 23.6389 24.0555 23.6389H27.5555C30.8693 23.6389 33.5555 26.3252 33.5555 29.6389V40H18.0555V29.6389Z"
          fill="#0078FF"
        />
      </svg>
    </Box>
  );
}
