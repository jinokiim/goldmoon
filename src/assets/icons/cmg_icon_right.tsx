import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function CMGIconRight({
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
          d="M8.5286 15.5286C8.26825 15.2682 8.26825 14.8461 8.5286 14.5858L12.7712 10.3431L8.5286 6.1005C8.26825 5.84016 8.26825 5.41805 8.5286 5.1577C8.78895 4.89735 9.21106 4.89735 9.4714 5.1577L14.1854 9.87174C14.4458 10.1321 14.4458 10.5542 14.1854 10.8146L9.4714 15.5286C9.21105 15.7889 8.78895 15.7889 8.5286 15.5286Z"
          fill="#646881"
        />
      </svg>
    </Box>
  );
}
