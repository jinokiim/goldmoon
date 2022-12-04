import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function ArrowRightBtn({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.48535 9.5L5.72799 5.25736L1.48535 1.01472"
          stroke="#858794"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
