import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function RadioCirThin(props: BoxProps) {
  return (
    <Box {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9.5" stroke="#33374D" strokeOpacity="0.54" />
      </svg>
    </Box>
  );
}
