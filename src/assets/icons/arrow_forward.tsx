// material
// import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
import { COLORS } from '@/palette';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
  color: string;
}

export default function ArrowForwardIcon({ width = 24, height = 24, color, ...other }: Props) {
  // const theme = useTheme();
  return (
    <Box {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#858794"
          fillRule="evenodd"
          d="M10.236 18.634a.8.8 0 010-1.13l5.093-5.092-5.093-5.091a.8.8 0 111.132-1.132l5.658 5.657a.8.8 0 010 1.132l-5.658 5.656a.8.8 0 01-1.132 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Box>
  );
}

ArrowForwardIcon.defaultProps = {
  color: COLORS.neutral6
};
