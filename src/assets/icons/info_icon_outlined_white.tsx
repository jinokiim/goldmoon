// material
import { BoxProps, Box } from '@mui/material';
// ----------------------------------------------------------------------

export default function InfoIconOutlinedWhite({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.6">
          <circle
            cx="10.0001"
            cy="10.0003"
            r="7.53333"
            stroke="white"
            strokeOpacity="0.95"
            strokeWidth="1.6"
          />
          <path
            d="M10 6.66699V10.0003"
            stroke="white"
            strokeOpacity="0.95"
            strokeWidth="2"
            strokeLinecap="square"
          />
          <path
            d="M10 12.917V13.0837"
            stroke="white"
            strokeOpacity="0.95"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </g>
      </svg>
    </Box>
  );
}
