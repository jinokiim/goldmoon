import { Box, BoxProps } from '@mui/material';

export default function MakeTeam({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25.5" cy="25.5" r="25.5" fill="#EFFBF8" />
        <rect x="38" y="10" width="3" height="32" fill="#D9D9D9" />
        <rect x="10" y="10" width="3" height="32" fill="#D9D9D9" />
        <rect x="24" y="10" width="3" height="32" fill="#D9D9D9" />
        <rect x="13" y="20" width="11" height="2" fill="#D9D9D9" />
        <rect x="13" y="30" width="11" height="2" fill="#D9D9D9" />
        <rect x="27" y="25" width="11" height="2" fill="#D9D9D9" />
      </svg>
    </Box>
  );
}
