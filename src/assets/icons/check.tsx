import { Box, BoxProps } from '@mui/material';
import { COLORS } from '@/palette';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function CheckIcon({
  width = 24,
  height = 24,
  color = COLORS.text900,
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
          d="M4.5 11.7676L10.1569 17.4244L19.3492 8.23204"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
}
