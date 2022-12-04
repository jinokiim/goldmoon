import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

function CloseIconBetterday({ ...other }: BoxProps) {
  return (
    <Box sx={{ fontSize: '0' }} {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_10565_50693)">
          <circle cx="10" cy="10" r="10" fill="#F4F6F8"></circle>
          <circle cx="10" cy="10" r="10" fill="#000" fillOpacity="0.1"></circle>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.95"
            strokeWidth="2"
            d="M13.336 6.667l-6.527 6.527M6.668 6.667l6.527 6.527"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_10565_50693">
            <path fill="#fff" d="M0 0H20V20H0z"></path>
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
}

export default CloseIconBetterday;
