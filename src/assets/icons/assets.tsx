// material
import { Box, BoxProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
  isActive?: boolean;
}

export default function NavInvestmentIcon({
  isActive = false,
  width = 21,
  height = 20,
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
        <circle cx="10.875" cy="10" r="10" fill={color} />
        <path
          d="M5.95001 7L8.35001 14L10.75 7.65625L13.15 14L15.55 7"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M16.75 9.9165H14.95"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.55 9.9165H4.75"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
