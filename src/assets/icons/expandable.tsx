import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

function ExpandableIcon({ ...other }: BoxProps) {
  return (
    <Box sx={{ fontSize: '0' }} {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#33374D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
          d="M9 19H5v-4"
        ></path>
        <path stroke="#33374D" strokeLinecap="round" strokeWidth="1.4" d="M5 19l5-5"></path>
        <path
          stroke="#33374D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
          d="M15 5h4v4"
        ></path>
        <path stroke="#33374D" strokeLinecap="round" strokeWidth="1.4" d="M14 10l5-5"></path>
      </svg>
    </Box>
  );
}

export default ExpandableIcon;
