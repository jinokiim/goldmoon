import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  isGray?: boolean;
  color?: string;
}

export default function TooltipBottomArrow({ isGray, color = '#D6D7DB', ...other }: Props) {
  return (
    <Box {...other}>
      {isGray ? (
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 6L5.24537e-07 -1.04907e-06L12 0L6 6Z" fill={color} />
        </svg>
      ) : (
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 6L5.24537e-07 -1.04907e-06L12 0L6 6Z" fill="#424242" />
        </svg>
      )}
    </Box>
  );
}
