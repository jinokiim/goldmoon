import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function FnPendingArrowForward({ width = 15, height = 16, ...other }: Props) {
  return (
    <Box {...other} width={width} height={height}>
      <svg
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.00377 2.90883C7.21205 2.70055 7.54973 2.70055 7.75801 2.90883L12.4721 7.62288C12.6803 7.83116 12.6803 8.16884 12.4721 8.37712L7.75801 13.0912C7.54973 13.2994 7.21205 13.2994 7.00377 13.0912C6.79549 12.8829 6.79549 12.5452 7.00377 12.3369L11.3407 8L7.00377 3.66308C6.79549 3.4548 6.79549 3.11711 7.00377 2.90883Z"
          fill="#3AD1A9"
        />
      </svg>
    </Box>
  );
}
