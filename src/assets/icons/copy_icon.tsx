import { Box, BoxProps } from '@mui/material';
import { COLORS } from 'theme/palette';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
  color?: string;
}
// grey700
export default function CopyIcon({
  width = 24,
  height = 24,
  color = COLORS.grey700,
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
          d="M16 4L6 4C4.89543 4 4 4.89543 4 6L4 16"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 8H9C8.44772 8 8 8.44772 8 9V19C8 19.5523 8.44771 20 9 20H19C19.5523 20 20 19.5523 20 19V9C20 8.44772 19.5523 8 19 8Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
