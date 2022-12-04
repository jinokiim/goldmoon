import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function DateIcon({ width = 16, height = 16, ...other }: Props) {
  return (
    <Box {...other} height={height} width={width}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00004 1.3335C11.6667 1.3335 14.6667 4.3335 14.6667 8.00016C14.6667 11.6668 11.6667 14.6668 8.00004 14.6668C4.33337 14.6668 1.33337 11.6668 1.33337 8.00016C1.33337 4.3335 4.33337 1.3335 8.00004 1.3335Z"
          fill="#E6E8EC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.66663 4H8.99996V7H12V8.33333H7.66663V4Z"
          fill="white"
        />
      </svg>
    </Box>
  );
}
