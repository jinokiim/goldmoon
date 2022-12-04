import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function SmallArrowRight({
  width = 24,
  height = 24,
  color = '#858794',
  ...other
}: Props) {
  return (
    <Box {...other}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.484 17l4.243-4.243-4.243-4.242"
        ></path>
      </svg>
    </Box>
  );
}
