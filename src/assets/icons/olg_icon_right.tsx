import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function OLGIconRight({
  marginLeft = '-3.5px',
  width = 24,
  height = 24,
  ...other
}: Props) {
  return (
    <Box {...other} width={width} height={height} marginLeft={marginLeft}>
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
          d="M14.5054 4.36325C14.8178 4.05083 15.3244 4.05083 15.6368 4.36325L22.7078 11.4343C23.0203 11.7467 23.0203 12.2533 22.7078 12.5657L15.6368 19.6368C15.3244 19.9492 14.8178 19.9492 14.5054 19.6368C14.193 19.3243 14.193 18.8178 14.5054 18.5054L21.0108 12L14.5054 5.49462C14.193 5.1822 14.193 4.67567 14.5054 4.36325Z"
          fill="#858794"
        />
      </svg>
    </Box>
  );
}
