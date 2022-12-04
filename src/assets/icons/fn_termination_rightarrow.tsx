import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function FnTerminationRightArrow({ width = 16, height = 16, ...other }: Props) {
  return (
    <Box {...other} width={width} height={height}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 11.5L10.5355 7.96447L7 4.42893"
          stroke="#F4F6F8"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 11.5L10.5355 7.96447L7 4.42893"
          stroke="#858794"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
