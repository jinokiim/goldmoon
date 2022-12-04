// material
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------
interface Props extends BoxProps {
  width?: number;
  height?: number;
  isActive?: boolean;
}
export default function NavAssetIcon({
  isActive = false,
  width = 24,
  height = 24,
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
        <circle cx="12.5" cy="12" r="10" fill={color} />
        <path
          d="M7.57501 9L9.97501 16L12.375 9.65625L14.775 16L17.175 9"
          stroke={theme.palette.common.white}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.375 11.9165H16.575"
          stroke={theme.palette.common.white}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.175 11.9165H6.375"
          stroke={theme.palette.common.white}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
