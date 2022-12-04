import { Box } from '@mui/material';

export default function ArrowDownIcon({ width = 24, height = 24, ...other }) {
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
          stroke="#858794"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 11l4.243 4.243L16.485 11"
        ></path>
      </svg>
    </Box>
  );
}
