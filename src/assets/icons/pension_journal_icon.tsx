import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function PensionJournalIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="3.5" width="26" height="29" rx="2.00001" fill="#3AD1A9" />
        <rect x="9.5" y="10" width="18" height="5" rx="1" fill="#289276" />
        <rect x="2.5" y="9.80005" width="5" height="2.4" rx="1.2" fill="#289276" />
        <rect x="2.5" y="14.6001" width="5" height="2.4" rx="1.2" fill="#289276" />
        <rect x="2.5" y="19.4" width="5" height="2.4" rx="1.2" fill="#289276" />
        <rect x="2.5" y="24.2001" width="5" height="2.4" rx="1.2" fill="#289276" />
        <rect x="9.5" y="10" width="18" height="5" rx="1" fill="#289276" />
      </svg>
    </Box>
  );
}
