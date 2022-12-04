import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function CustomerServiceAlert({
  marginLeft = '2px',
  width,
  height,
  ...other
}: Props) {
  return (
    <Box
      {...other}
      marginLeft={marginLeft}
      width={width}
      height={height}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="14" rx="7" fill="#FE6D4D" />
        <path
          d="M12.8516 3.46484H11.7969V8.64062H11.7285L8.14453 3.46484H7.14844V10.5352H8.22266V5.36914H8.28125L11.8652 10.5352H12.8516V3.46484Z"
          fill="white"
        />
      </svg>
    </Box>
  );
}
