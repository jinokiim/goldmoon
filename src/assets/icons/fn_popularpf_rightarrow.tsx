import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function FnPopularPFRightArrow({ width = 24, height = 24, ...other }: Props) {
  return (
    <Box {...other} width={width} height={height}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.2341 18.6343C9.9217 18.3218 9.9217 17.8153 10.2341 17.5029L15.3253 12.4117L10.2341 7.32056C9.9217 7.00814 9.9217 6.50161 10.2341 6.18919C10.5465 5.87677 11.0531 5.87677 11.3655 6.18919L17.0223 11.846C17.3348 12.1585 17.3348 12.665 17.0223 12.9774L11.3655 18.6343C11.0531 18.9467 10.5465 18.9467 10.2341 18.6343Z"
          fill="#33374D"
        />
      </svg>
    </Box>
  );
}
