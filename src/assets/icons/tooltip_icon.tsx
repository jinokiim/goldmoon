// material
// import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function ToolTipIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" fill="#D6D7DB" />
        <ellipse cx="12" cy="7.2" rx="1.2" ry="1.2" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2001 9.6001V18.4001H10.8V9.6001H13.2001Z"
          fill="white"
        />
      </svg>
    </Box>
  );
}
