import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function RateUpIcon({ width = 24, height = 24, ...other }: Props) {
  return (
    <Box width={width} height={height} {...other}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 9L17.1962 16.5H6.80385L12 9Z" fill="#FF5247" />
      </svg>
    </Box>
  );
}
