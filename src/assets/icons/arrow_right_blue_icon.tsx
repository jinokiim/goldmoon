// material
// import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
import { COLORS } from '@/palette';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function ArrowRightBlueIcon({
  width = 24,
  height = 24,
  color = COLORS.secondaryButtonContrast,
  ...other
}: Props) {
  // const theme = useTheme();
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.22 7.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.94 12l-3.72-3.72a.75.75 0 0 1 0-1.06z"
          fill={color}
        />
      </svg>
    </Box>
  );
}
