import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function BinanceIcon({ width = 52, height = 52, ...other }: Props) {
  return (
    <Box sx={{ height: `${height}px`, width: `${width}px` }} {...other}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 52 52`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="26" cy="26" r="25.5" fill="white" stroke="#DDE4EE" />
        <path
          d="M21.0675 24.2644L25.9984 19.0608L30.9294 24.2672L33.7981 21.2382L25.9984 13.0029L18.2014 21.2355L21.0675 24.2644Z"
          fill="#F3BA2F"
        />
        <path
          d="M15.9405 23.0614L13.0029 25.999L15.9405 28.9366L18.8781 25.999L15.9405 23.0614Z"
          fill="#F3BA2F"
        />
        <path
          d="M21.0718 27.7334L26.0011 32.941L30.9303 27.7334L33.7981 30.7603L26.0011 38.9977L18.2067 30.7631L18.2014 30.7603L21.0718 27.7334Z"
          fill="#F3BA2F"
        />
        <path
          d="M36.0623 23.0634L33.1248 26.001L36.0623 28.9386L38.9999 26.001L36.0623 23.0634Z"
          fill="#F3BA2F"
        />
        <path
          d="M28.5969 25.9987L26.001 23.4004L24.0804 25.321L23.86 25.5414L23.4051 25.9963L23.4004 25.9987L23.4051 26.0034L26.001 28.5993L28.5969 26.001L28.5993 25.9987H28.5969Z"
          fill="#F3BA2F"
        />
      </svg>
    </Box>
  );
}
