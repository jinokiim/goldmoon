import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function EditIcon({ width = 24, height = 24, ...other }: Props) {
  return (
    <Box {...other}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 4L4 17L4 21L8 21L21 8"
          stroke="#33374D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 4L21 8"
          stroke="#33374D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 7L18 11" stroke="#33374D" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </Box>
  );
}
