import { Box, BoxProps } from '@mui/material';
import { COLORS } from '../../theme/palette';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function InfoIconOutlined({
  width = 16,
  height = 17,
  color = COLORS.text600,
  ...other
}: Props) {
  return (
    <Box {...other}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 13.833C10.9455 13.833 13.3333 11.4452 13.3333 8.49967C13.3333 5.55416 10.9455 3.16634 8 3.16634C5.05448 3.16634 2.66667 5.55416 2.66667 8.49967C2.66667 11.4452 5.05448 13.833 8 13.833ZM8 15.1663C11.6819 15.1663 14.6667 12.1816 14.6667 8.49967C14.6667 4.81778 11.6819 1.83301 8 1.83301C4.3181 1.83301 1.33333 4.81778 1.33333 8.49967C1.33333 12.1816 4.3181 15.1663 8 15.1663Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.66667 5.16699V9.16699H7.33333V5.16699H8.66667Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.66667 10.167V11.6337H7.33333V10.167H8.66667Z"
          fill={color}
        />
      </svg>
    </Box>
  );
}
