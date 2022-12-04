import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function NaverIcon({ width = 32, height = 32, ...other }: Props) {
  return (
    <Box {...other} width={width} height={height}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="16" fill="#03CF5D" />
        <path
          d="M18.4109 16.4765L13.3911 9.23071H9.23077V22.7692H13.5891V15.5234L18.6089 22.7692H22.7692V9.23071H18.4109V16.4765Z"
          fill="white"
        />
      </svg>
    </Box>
  );
}
