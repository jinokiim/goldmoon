import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function OMGIconRight({
  marginLeft = -1,
  width = 20,
  height = 20,
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
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0878 3.63604C12.3482 3.37569 12.7703 3.37569 13.0306 3.63604L18.9232 9.5286C19.1836 9.78895 19.1836 10.2111 18.9232 10.4714L13.0306 16.364C12.7703 16.6243 12.3482 16.6243 12.0878 16.364C11.8275 16.1036 11.8275 15.6815 12.0878 15.4212L17.509 10L12.0878 4.57885C11.8275 4.3185 11.8275 3.89639 12.0878 3.63604Z"
          fill="#858794"
        />
      </svg>
    </Box>
  );
}
