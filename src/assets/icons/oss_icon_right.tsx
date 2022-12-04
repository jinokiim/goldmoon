import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function OSSIconRight({
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.67027 2.90883C9.87855 2.70055 10.2162 2.70055 10.4245 2.90883L15.1386 7.62288C15.3468 7.83116 15.3468 8.16884 15.1386 8.37712L10.4245 13.0912C10.2162 13.2994 9.87855 13.2994 9.67027 13.0912C9.46199 12.8829 9.46199 12.5452 9.67027 12.3369L14.0072 8L9.67027 3.66308C9.46199 3.4548 9.46199 3.11711 9.67027 2.90883Z"
          fill="#3AD1A9"
        />
      </svg>
    </Box>
  );
}
