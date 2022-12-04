// material
// import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
import { COLORS } from '@/palette';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  fontSize?: string;
  color?: string;
  bg?: string;
  width?: number;
  height?: number;
}

export default function CloseIcon({
  bg = COLORS.neutral2,
  color = COLORS.neutral6,
  width = 30,
  height = 30,
  fontSize = '0',
  ...other
}: Props) {
  return (
    <Box sx={{ fontSize, ...other }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 30 30"
      >
        <g filter="url(#a)">
          <path
            fill={bg}
            fillRule="evenodd"
            d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15z"
            clipRule="evenodd"
          ></path>
        </g>
        <path
          fill={color}
          fillRule="evenodd"
          d="M20.626 9.626a1.21 1.21 0 00-1.712 0l-3.99 3.99-3.915-3.914a1.21 1.21 0 00-1.711 1.711l3.914 3.915-3.99 3.99a1.21 1.21 0 101.71 1.712l3.991-3.991 3.915 3.914a1.21 1.21 0 001.711-1.71l-3.915-3.915 3.991-3.991a1.21 1.21 0 000-1.711z"
          clipRule="evenodd"
        ></path>
        <defs>
          <filter
            id="a"
            width="138.731"
            height="138.731"
            x="-54.366"
            y="-54.366"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feGaussianBlur in="BackgroundImage" stdDeviation="27.183"></feGaussianBlur>
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_195_1533"
            ></feComposite>
            <feBlend
              in="SourceGraphic"
              in2="effect1_backgroundBlur_195_1533"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </Box>
  );
}
