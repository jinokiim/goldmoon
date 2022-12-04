import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function CSSIconRight({
  marginLeft = -1,
  width = 18,
  height = 18,
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
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8791 3.27244C11.1134 3.03812 11.4933 3.03812 11.7276 3.27244L17.0309 8.57574C17.2652 8.81005 17.2652 9.18995 17.0309 9.42426L11.7276 14.7276C11.4933 14.9619 11.1134 14.9619 10.8791 14.7276C10.6447 14.4932 10.6447 14.1134 10.8791 13.879L15.7581 9L10.8791 4.12096C10.6447 3.88665 10.6447 3.50675 10.8791 3.27244Z"
          fill="#2E9BFF"
        />
      </svg>
    </Box>
  );
}
