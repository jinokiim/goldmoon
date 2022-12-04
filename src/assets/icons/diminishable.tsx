import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

function DiminishableIcon({ ...other }: BoxProps) {
  return (
    <Box sx={{ fontSize: '0' }} {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 28 28"
      >
        <path
          stroke="#33374D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
          d="M21 11.667h-4.667V7"
        ></path>
        <path
          stroke="#33374D"
          strokeLinecap="round"
          strokeWidth="1.4"
          d="M16.334 11.667l5.833-5.834"
        ></path>
        <path
          stroke="#33374D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
          d="M7 16.333h4.667V21"
        ></path>
        <path
          stroke="#33374D"
          strokeLinecap="round"
          strokeWidth="1.4"
          d="M5.833 22.167l5.834-5.834"
        ></path>
      </svg>
    </Box>
  );
}

export default DiminishableIcon;
