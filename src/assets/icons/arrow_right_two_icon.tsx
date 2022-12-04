import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

function ArrowRightTwoIcon(props: BoxProps) {
  return (
    <Box {...props}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 3L7.9425 4.0575L12.1275 8.25H3V9.75H12.1275L7.9425 13.9425L9 15L15 9L9 3Z"
          fill="#EB4D3D"
        />
      </svg>
    </Box>
  );
}

export default ArrowRightTwoIcon;
