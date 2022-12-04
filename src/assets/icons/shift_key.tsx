// material
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  isActive?: boolean;
}

export default function ShiftKeyIcon({ isActive = false, ...other }: Props) {
  const theme = useTheme();
  const bgFillColor = isActive ? theme.palette.info.light : theme.palette.common.white;
  return (
    <Box {...other}>
      <svg
        width="34"
        height="62"
        viewBox="0 0 34 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill={bgFillColor} d="M0 0h34v62H0z" />
        <path
          d="M14.68 40h4.633c1.083 0 1.669-.659 1.669-1.726v-8.992h2.876c.652 0 1.142-.4 1.142-1.03 0-.385-.176-.65-.49-.984l-6.551-6.791c-.3-.31-.615-.477-.959-.477s-.666.167-.959.477l-6.55 6.791c-.33.341-.491.599-.491.985 0 .628.49 1.03 1.134 1.03h2.884v8.99c0 1.068.586 1.727 1.662 1.727z"
          fill="#44576B"
        />
      </svg>
    </Box>
  );
}
