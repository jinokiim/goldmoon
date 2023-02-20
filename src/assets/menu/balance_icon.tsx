import { Box, BoxProps } from '@mui/material';

export default function BalanceIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25.5" cy="25.5" r="25.5" fill="#EBF5FF" />
        <rect x="25" y="17" width="2" height="26" fill="#D9D9D9" />
        <rect x="9" y="15" width="34" height="2" rx="1" fill="#D9D9D9" />
        <path
          d="M21 14C21 12.8954 21.8954 12 23 12H29C30.1046 12 31 12.8954 31 14V15H21V14Z"
          fill="#D9D9D9"
        />
        <path
          d="M23 11C23 9.89543 23.8954 9 25 9H27C28.1046 9 29 9.89543 29 11V12H23V11Z"
          fill="#D9D9D9"
        />
        <path d="M13.5 16L17.3971 27.25H9.60289L13.5 16Z" fill="#D9D9D9" />
        <path d="M13.5 18L16.5311 27.75H10.4689L13.5 18Z" fill="#EBF5FF" />
        <path
          d="M21 28.5C21 30.1569 17.6421 31.5 13.5 31.5C9.35786 31.5 6 30.1569 6 28.5C6 26.8432 9.35786 27 13.5 27C17.6421 27 21 26.8432 21 28.5Z"
          fill="#D9D9D9"
        />
        <path d="M37.5 16L41.3971 27.25H33.6029L37.5 16Z" fill="#D9D9D9" />
        <path d="M37.5 18L40.5311 27.75H34.4689L37.5 18Z" fill="#EBF5FF" />
        <path
          d="M45 28.5C45 30.1569 41.6421 31.5 37.5 31.5C33.3579 31.5 30 30.1569 30 28.5C30 26.8432 33.3579 27 37.5 27C41.6421 27 45 26.8432 45 28.5Z"
          fill="#D9D9D9"
        />
        <rect x="14" y="40" width="24" height="3" fill="#D9D9D9" />
      </svg>
    </Box>
  );
}
