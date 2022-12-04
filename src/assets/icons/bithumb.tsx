// material
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function BithumbIcon({ width = 30, height = 30, ...other }: Props) {
  return (
    <Box sx={{ height: `${height}px`, width: `${width}px` }} {...other}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 52 52`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="26" cy="26" r="25.5" fill="white" stroke="#DDE4EE" />
        <path
          d="M19.4823 26.0007H19.1415C17.5727 26.0007 16.6655 24.7287 17.1152 23.1598L18.2557 19.1826H21.4375L19.4826 26.001L19.4823 26.0007Z"
          fill="#D1350F"
        />
        <path
          d="M29.278 19.1819H27.3464L25.3915 26.0003H27.3234C28.5733 26.0003 28.9836 26.9472 28.4406 28.8411C27.8975 30.7353 26.9442 31.6822 25.6942 31.6822C24.4443 31.6822 24.034 30.7353 24.5771 28.8411L28.1608 16.3408C28.6108 14.7719 27.7036 13.5 26.1348 13.5H22.1577L17.7586 28.8408C15.9123 35.2803 18.3981 38.5 23.7387 38.5C29.0794 38.5 33.4118 35.2803 35.2581 28.8408C37.1045 22.4014 34.6187 19.1817 29.278 19.1817V19.1819Z"
          fill="#FF8200"
        />
        <path
          d="M35.2583 28.8408C37.1046 22.4014 34.6188 19.1816 29.2782 19.1816H27.3465L25.3916 26H27.3235C28.5735 26 28.9837 26.9469 28.4407 28.8408"
          fill="url(#paint0_linear_17064_236811)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_17064_236811"
            x1="32.1292"
            y1="27.1061"
            x2="28.998"
            y2="21.7906"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF8200" />
            <stop offset="1" stopColor="#D1350F" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
}
