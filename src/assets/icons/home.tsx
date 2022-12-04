// material
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------
interface Props extends BoxProps {
  width?: number;
  height?: number;
  isActive?: boolean;
}

export default function NavHomeIcon({
  isActive = false,
  width = 20,
  height = 21,
  ...other
}: Props) {
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
        <rect x="0.875" y="13" width="5" height="8" rx="1" fill={color} />
        <rect x="7.875" y="10" width="5" height="11" rx="1" fill={color} />
        <rect x="14.875" y="7" width="5" height="14" rx="1" fill={color} />
        <path d="M15.375 1.5H18.875V5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M1.5 9.5C8.47124 9.5 13.241 7 18.5 2"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
}
