import { Box, BoxProps } from '@mui/material';

export default function GoldMoonMemberIcon({ ...other }: BoxProps) {
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
        <circle cx="15.5652" cy="24.7826" r="4.56522" fill="#9FD1FF" />
        <path
          d="M11 33.4058C11 30.8845 13.0439 28.8406 15.5652 28.8406V28.8406C18.0865 28.8406 20.1304 30.8845 20.1304 33.4058V38.4783H11V33.4058Z"
          fill="#9FD1FF"
        />
        <circle cx="36.4348" cy="24.7826" r="4.56522" fill="#9FD1FF" />
        <path
          d="M31.8696 33.4058C31.8696 30.8845 33.9135 28.8406 36.4348 28.8406V28.8406C38.9561 28.8406 41 30.8845 41 33.4058V38.4783H31.8696V33.4058Z"
          fill="#9FD1FF"
        />
        <circle cx="26" cy="20.8696" r="5.86957" fill="#2E9BFF" />
        <path
          d="M20.1304 31.9565C20.1304 28.7148 22.7583 26.0869 26 26.0869V26.0869C29.2417 26.0869 31.8696 28.7148 31.8696 31.9565V38.4782H20.1304V31.9565Z"
          fill="#2E9BFF"
        />
      </svg>
    </Box>
  );
}
