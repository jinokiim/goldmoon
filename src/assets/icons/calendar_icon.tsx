import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function CalendarIcon({ ...other }: BoxProps) {
  return (
    <Box sx={{ fontSize: '0' }} {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <rect
          width="14.667"
          height="13"
          x="2.668"
          y="4.333"
          stroke="#33374D"
          strokeWidth="2"
          rx="1"
        ></rect>
        <path
          stroke="#33374D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6.668 2.5v3.333M13.336 2.5v3.333M2.5 8.333h15"
        ></path>
      </svg>
    </Box>
  );
}
