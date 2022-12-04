import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function InfoIconSmall({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99935 16.9998C13.8653 16.9998 16.9993 13.8658 16.9993 9.99984C16.9993 6.13384 13.8653 2.99984 9.99935 2.99984C6.13336 2.99984 2.99935 6.13384 2.99935 9.99984C2.99935 13.8658 6.13336 16.9998 9.99935 16.9998ZM9.99935 18.3332C14.6017 18.3332 18.3327 14.6022 18.3327 9.99984C18.3327 5.39746 14.6017 1.6665 9.99935 1.6665C5.39698 1.6665 1.66602 5.39746 1.66602 9.99984C1.66602 14.6022 5.39698 18.3332 9.99935 18.3332Z"
          fill="#33374D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8327 5.8335V10.8335H9.16602V5.8335H10.8327Z"
          fill="#33374D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8327 12.0835V13.9168H9.16602V12.0835H10.8327Z"
          fill="#33374D"
        />
      </svg>
    </Box>
  );
}
