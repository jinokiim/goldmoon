// material
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
  isActive?: boolean;
}

export default function NavDiagnosisIcon({
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
        <path
          d="M0.625 3C0.625 1.34315 1.96815 0 3.625 0H17.625C19.2819 0 20.625 1.34315 20.625 3V17C20.625 18.6569 19.2819 20 17.625 20H3.625C1.96815 20 0.625 18.6569 0.625 17V3Z"
          fill={color}
        />
        <path d="M10.625 6V14" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M14.625 8V14" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M6.625 10V14" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </Box>
  );
}
