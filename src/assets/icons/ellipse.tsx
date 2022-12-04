import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------
interface Props extends BoxProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function Ellipse({ color = '#33374D', width = 10, height = 10, ...other }: Props) {
  return (
    <Box {...other}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" fill={color} fillOpacity="0.2" />
      </svg>
    </Box>
  );
}
