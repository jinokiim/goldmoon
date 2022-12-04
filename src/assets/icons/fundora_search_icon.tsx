import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function FundoraSearchIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="9.16667" cy="9.16667" r="6.66667" stroke="#858794" strokeWidth="2" />
        <path
          d="M17.5001 17.5001L14.1667 14.1667"
          stroke="#858794"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
