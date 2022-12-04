import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function RateDownIcon({ width = 24, height = 24, ...other }: Props) {
  return (
    <Box width={width} height={height} {...other}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 17L6.80388 9.5L17.1962 9.5L12 17Z" fill="#2E9BFF" />
      </svg>
    </Box>
  );
}
