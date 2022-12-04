import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function CLDIconRight({
  marginLeft = '-3.5px',
  width = 25,
  height = 24,
  ...other
}: Props) {
  return (
    <Box {...other} width={width} height={height} marginLeft={marginLeft}>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.0054 4.36325C15.3178 4.05083 15.8244 4.05083 16.1368 4.36325L23.2078 11.4343C23.5203 11.7467 23.5203 12.2533 23.2078 12.5657L16.1368 19.6368C15.8244 19.9492 15.3178 19.9492 15.0054 19.6368C14.693 19.3243 14.693 18.8178 15.0054 18.5054L21.5108 12L15.0054 5.49462C14.693 5.1822 14.693 4.67567 15.0054 4.36325Z"
          fill="#33374D"
          fillOpacity="0.26"
        />
      </svg>
    </Box>
  );
}
