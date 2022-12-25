import { Box, BoxProps } from '@mui/material';
import { COLORS } from '../../theme/palette';
// ----------------------------------------------------------------------
interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function CheckIcon({ width = 22, height = 22, ...other }: Props) {
  return (
    <Box {...other}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill={COLORS.secondaryButtonContrast} />
        <path
          d="M9.50013 15.4749L6.02513 11.9999L4.8418 13.1749L9.50013 17.8332L19.5001 7.8332L18.3251 6.6582L9.50013 15.4749Z"
          fill="white"
          fillOpacity="0.95"
        />
      </svg>
    </Box>
  );
}
