// material
// import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
import { COLORS } from '../../theme/palette';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function NotificationIcon({ width = 24, height = 24, ...other }: Props) {
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
          d="M20.78 13.65v4.94H3.22v-4.94c0-4.82 3.9-8.72 8.72-8.72h.12c4.82 0 8.72 3.9 8.72 8.72zM12 2v2.93M15.65 18.59A3.661 3.661 0 0 1 12 22c-1.93 0-3.52-1.5-3.65-3.41h7.3z"
          stroke={COLORS.neutral8}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
