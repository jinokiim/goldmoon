import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function UMIconLeft({ marginLeft = -1, width = 20, height = 20, ...other }: Props) {
  return (
    <Box
      {...other}
      marginLeft={marginLeft}
      width={width}
      height={height}
      display={'flex'}
      justifyContent={'flex-end'}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9045 4.04822L7.01192 9.94077L12.9045 15.8333"
          stroke="#33374D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
