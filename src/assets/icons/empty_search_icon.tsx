import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function EmptySearchIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_31936_43895)">
          <circle cx="10" cy="10" r="10" fill="#F4F6F8"></circle>
          <circle cx="10" cy="10" r="10" fill="#000" fillOpacity="0.1"></circle>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.95"
            strokeWidth="2"
            d="M13.334 6.667l-6.527 6.527M6.667 6.667l6.527 6.527"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_31936_43895">
            <path fill="#fff" d="M0 0H20V20H0z"></path>
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
}
