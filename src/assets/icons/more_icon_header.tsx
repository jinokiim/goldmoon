import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function MoreIconHeader({ width = 24, height = 24, ...other }: Props) {
  return (
    <Box {...other}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="6.5" r="1.5" transform="rotate(-90 12 6.5)" fill="#33374D" />
        <circle cx="12" cy="12.5" r="1.5" transform="rotate(-90 12 12.5)" fill="#33374D" />
        <circle cx="12" cy="18.5" r="1.5" transform="rotate(-90 12 18.5)" fill="#33374D" />
      </svg>
    </Box>
  );
}
