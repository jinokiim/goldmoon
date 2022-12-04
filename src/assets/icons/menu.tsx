import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------
interface Props extends BoxProps {
  width?: number;
  height?: number;
  isActive?: boolean;
}

export default function MenuIcon({ isActive = false, width = 19, height = 16, ...other }: Props) {
  const theme = useTheme();

  const color = isActive ? theme.palette.nav.enabled : theme.palette.nav.disabled;
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
          d="M1.125 1H17.125"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.125 8H17.125"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.125 15H17.125"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
