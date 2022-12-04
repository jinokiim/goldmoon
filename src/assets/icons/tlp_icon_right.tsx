import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function TLPIconRight({
  marginLeft = '-3.5px',
  width = 21,
  height = 20,
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
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5878 3.63604C12.8482 3.37569 13.2703 3.37569 13.5306 3.63604L19.4232 9.5286C19.6836 9.78895 19.6836 10.2111 19.4232 10.4714L13.5306 16.364C13.2703 16.6243 12.8482 16.6243 12.5878 16.364C12.3275 16.1036 12.3275 15.6815 12.5878 15.4212L18.009 10L12.5878 4.57885C12.3275 4.3185 12.3275 3.89639 12.5878 3.63604Z"
          fill="#2E9BFF"
        />
      </svg>
    </Box>
  );
}
