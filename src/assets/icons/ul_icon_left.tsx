import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function ULIconLeft({
  marginLeft = '-3.5px',
  width = 24,
  height = 24,
  ...other
}: Props) {
  return (
    <Box
      {...other}
      width={width}
      height={height}
      marginLeft={marginLeft}
      display={'flex'}
      justifyContent={'flex-end'}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.4854 4.85785L8.41428 11.9289L15.4854 19"
          stroke="#33374D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
