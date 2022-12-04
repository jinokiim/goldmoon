import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function CheckedCirThinSm(props: BoxProps) {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.99996 17.3337C13.6023 17.3337 17.3333 13.6027 17.3333 9.00033C17.3333 4.39795 13.6023 0.666992 8.99996 0.666992C4.39759 0.666992 0.666626 4.39795 0.666626 9.00033C0.666626 13.6027 4.39759 17.3337 8.99996 17.3337ZM8.17676 12.2049L13.7323 6.64934L12.6009 5.51797L7.61107 10.5078L5.39898 8.29575L4.26761 9.42712L7.04539 12.2049L7.61107 12.7706L8.17676 12.2049Z"
          fill="#2E9BFF"
        />
      </svg>
    </Box>
  );
}
