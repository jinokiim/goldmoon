import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function CardHomeIcon({ ...other }: BoxProps) {
  return (
    <Box sx={{ fontSize: '0' }} {...other}>
      <svg
        width="49"
        height="47"
        viewBox="0 0 49 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 18L24 2L42 18V42H6V18Z" fill="#F6C64C" />
        <path d="M6 18L24 2L42 18V42H6V18Z" fill="white" fillOpacity="0.1" />
        <path
          d="M2 22L24 2L46 22"
          stroke="#D37C3A"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="19" y="30" width="10" height="12" fill="#E89F58" />
        <path d="M43 38V46.5" stroke="#703D29" strokeWidth="2" />
        <ellipse cx="43" cy="33" rx="6" ry="7" fill="#6ED177" />
      </svg>
    </Box>
  );
}
