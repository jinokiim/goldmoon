// material
import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function PortfolioCardDown({ width = 10, height = 8, ...other }: Props) {
  return (
    <Box width={width} height={height} {...other}>
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 7.16675L0.669872 0.916748H9.33013L5 7.16675Z" fill="#2E9BFF" />
      </svg>
    </Box>
  );
}
