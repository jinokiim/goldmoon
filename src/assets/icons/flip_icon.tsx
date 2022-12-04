// material
import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function FlipIcon({ width = 24, height = 24, ...other }: Props) {
  return (
    <Box {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" fill="#fff"></circle>
        <path
          fill="#858794"
          d="M8.995 15.203a4.603 4.603 0 006.51 0l.93.93a5.919 5.919 0 01-10.03-5.12c.088-.555.462-.47.71-.986l.328.658c-.103.289.294.303.25.603a4.596 4.596 0 001.302 3.915z"
        ></path>
        <path
          fill="#858794"
          fillRule="evenodd"
          d="M5.062 12.28a.47.47 0 010-.664l1.993-1.993 1.993 1.993a.47.47 0 11-.665.665l-1.328-1.33-1.329 1.33a.47.47 0 01-.664 0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#858794"
          d="M15.482 8.914a4.603 4.603 0 00-6.51 0l-.93-.93a5.919 5.919 0 0110.03 5.12c-.089.555-.463.47-.71.986l-.328-.658c.102-.289-.295-.302-.251-.603a4.596 4.596 0 00-1.301-3.915z"
        ></path>
        <path
          fill="#858794"
          fillRule="evenodd"
          d="M19.423 11.837a.47.47 0 010 .664l-1.993 1.993-1.993-1.993a.47.47 0 11.664-.664l1.329 1.328 1.328-1.328a.47.47 0 01.665 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Box>
  );
}
