import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function ThreeDots({ width = 49, height = 4, ...other }: Props) {
  return (
    <Box {...other} width={width} height={height}>
      <svg width="49" height="4" viewBox="0 0 49 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14.4" cy="2" r="2" fill="#C4C4C4" />
        <circle cx="24.4" cy="2" r="2" fill="#C4C4C4" />
        <circle cx="34.4" cy="2" r="2" fill="#C4C4C4" />
      </svg>
    </Box>
  );
}
