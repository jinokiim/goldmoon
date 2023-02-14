import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------
interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function CheckCircle({ width = 20, height = 20, ...other }: Props) {
  return (
    <Box {...other} lineHeight={0}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.899 15.7324L17.5657 9.06569L16.4343 7.93431L10.3333 14.0353L7.56569 11.2676L6.43431 12.399L9.76765 15.7324L10.3333 16.298L10.899 15.7324Z"
          fill="#5EA152"
        />
      </svg>
    </Box>
  );
}
