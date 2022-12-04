// material
import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function PortfolioCardUp({ width = 10, height = 7, ...other }: Props) {
  return (
    <Box width={width} height={height} {...other}>
      <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0.5L9.33013 6.75H0.669873L5 0.5Z" fill="#FF5247" />
      </svg>
    </Box>
  );
}
