// material
import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function ReadyIcon({ ...other }: Props) {
  return (
    <Box sx={{ height: '20px', width: '20px' }} {...other}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99996 16.6666C13.6819 16.6666 16.6666 13.6819 16.6666 9.99996C16.6666 6.31806 13.6819 3.33329 9.99996 3.33329C6.31806 3.33329 3.33329 6.31806 3.33329 9.99996C3.33329 13.6819 6.31806 16.6666 9.99996 16.6666ZM9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6023 1.66663 9.99996 1.66663C5.39759 1.66663 1.66663 5.39759 1.66663 9.99996C1.66663 14.6023 5.39759 18.3333 9.99996 18.3333Z"
          fill="#33374D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8333 5.83337V10.8334H9.16663V5.83337H10.8333Z"
          fill="#33374D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8333 12.0834V13.9167H9.16663V12.0834H10.8333Z"
          fill="#33374D"
        />
      </svg>
    </Box>
  );
}
