import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function PensionIcon({ ...other }: BoxProps) {
  return (
    <Box {...other} lineHeight={0}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
        viewBox="0 0 24 25"
      >
        <path fill="#F1F5F9" d="M2 7.5h20v13a2 2 0 01-2 2H4a2 2 0 01-2-2v-13z"></path>
        <path
          stroke="#FFA723"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
          d="M7.981 11.5l.982 3m6.87-3l-.981 3m0 0l-.982 3-1.963-5.438L9.944 17.5l-.981-3m5.889 0h1.963m-7.852 0H7"
        ></path>
        <path fill="#3AF" d="M2 5.5a2 2 0 012-2h16a2 2 0 012 2v2H2v-2z"></path>
        <rect width="2" height="4" x="6" y="1.5" fill="#9FD1FF" rx="1"></rect>
        <rect width="2" height="4" x="16" y="1.5" fill="#9FD1FF" rx="1"></rect>
      </svg>
    </Box>
  );
}
