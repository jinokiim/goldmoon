import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function TSDIconRight({
  marginLeft = -1,
  width = 16,
  height = 16,
  ...other
}: Props) {
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
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 11.5L10.5355 7.96447L7 4.42893"
          stroke="#33374D"
          strokeOpacity="0.26"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}
