// material
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
// import { COLORS } from 'theme/palette';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function OneIcon({ width = 24, height = 24, ...other }: Props) {
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
          d="M12.497 5.802h-1.476L8.56 7.415v1.436l2.365-1.545h.054V15.7h1.518V5.802z"
          fill={theme.palette.common.white}
        />
      </svg>
    </Box>
  );
}
