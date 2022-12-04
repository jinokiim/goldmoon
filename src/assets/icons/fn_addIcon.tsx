import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function FnAddIcon({ width = 24, height = 24, ...other }: Props) {
  return (
    <Box {...other} width={width} height={height}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 6V18" stroke="#858794" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 12L18 12" stroke="#858794" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </Box>
  );
}
