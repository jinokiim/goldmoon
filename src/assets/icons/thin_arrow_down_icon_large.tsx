import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function ThinArrowDownIconLarge({
  width = 14,
  height = 8,
  color = '#33374D',
  ...other
}: Props) {
  return (
    <Box {...other}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 0.999999L7 7L0.999999 1"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
