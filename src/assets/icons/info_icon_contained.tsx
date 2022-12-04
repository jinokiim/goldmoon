import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function InfoIconContained({ width = 24, height = 24, ...other }: Props) {
  return (
    <Box {...other}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12.0001" cy="11.9998" r="8.33333" fill="white" fillOpacity="0.4" />
        <ellipse cx="12" cy="8" rx="1" ry="1" fill="white" fillOpacity="0.95" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 10V17.3333H11V10H13Z"
          fill="white"
          fillOpacity="0.95"
        />
      </svg>
    </Box>
  );
}
