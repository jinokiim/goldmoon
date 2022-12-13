// material
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
// import { COLORS } from @/palette;
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function TwoIcon({ width = 24, height = 24, ...other }: Props) {
  const theme = useTheme();
  return (
    <Box {...other}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 11c0 6.075-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0s11 4.925 11 11z"
          fill={theme.palette.info.dark}
        />
        <path
          d="M7.712 15.7h6.658v-1.285H9.804v-.082l2.01-2.037c1.859-1.825 2.378-2.707 2.392-3.815-.014-1.606-1.333-2.816-3.24-2.816-1.887 0-3.268 1.196-3.254 3.008h1.422c.007-1.053.704-1.75 1.804-1.75 1.04 0 1.832.622 1.832 1.6 0 .868-.54 1.497-1.626 2.625l-3.432 3.458V15.7z"
          fill={theme.palette.common.white}
        />
      </svg>
    </Box>
  );
}
