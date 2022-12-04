// material
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
// import { COLORS } from 'theme/palette';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function ThreeIcon({ width = 24, height = 24, ...other }: Props) {
  const theme = useTheme();
  return (
    <Box {...other}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 24 24`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 11c0 6.075-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0s11 4.925 11 11z"
          fill={theme.palette.info.dark}
        />
        <path
          d="M11.02 15.837c2.051 0 3.576-1.21 3.569-2.857.007-1.252-.78-2.16-2.133-2.352v-.068c1.067-.267 1.764-1.074 1.75-2.202.014-1.462-1.21-2.693-3.158-2.693-1.846 0-3.336 1.094-3.377 2.707h1.45c.033-.895.922-1.45 1.913-1.45 1.046 0 1.723.616 1.723 1.518 0 .95-.786 1.58-1.914 1.573h-.848v1.23h.848c1.415.007 2.228.704 2.228 1.682 0 .964-.868 1.613-2.064 1.613-1.108 0-1.969-.554-2.024-1.422h-1.53c.06 1.62 1.517 2.72 3.567 2.72z"
          fill={theme.palette.common.white}
        />
      </svg>
    </Box>
  );
}
