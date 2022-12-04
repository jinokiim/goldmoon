import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function NotificationHeaderIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 18V9.26866C3 7.1791 5.16418 3 10 3C14.8358 3 17 7.1791 17 9.26866V18"
          stroke="#33374D"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M1 18H19"
          stroke="#33374D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 3L9 4L11 4L11 3L9 3ZM11 1C11 0.447715 10.5523 -4.82823e-08 10 0C9.44771 4.82823e-08 9 0.447715 9 1L11 1ZM11 3L11 1L9 1L9 3L11 3Z"
          fill="#33374D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 18C8 19.1046 8.89543 20 10 20C11.1046 20 12 19.1046 12 18H14C14 20.2091 12.2091 22 10 22C7.79086 22 6 20.2091 6 18H8Z"
          fill="#33374D"
        />
      </svg>
    </Box>
  );
}
