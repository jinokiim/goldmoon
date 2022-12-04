import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function InfoIconTermination({ width = 24, height = 24, ...other }: Props) {
  return (
    <Box {...other}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 20.4C16.6392 20.4 20.4 16.6392 20.4 12C20.4 7.36081 16.6392 3.6 12 3.6C7.36081 3.6 3.6 7.36081 3.6 12C3.6 16.6392 7.36081 20.4 12 20.4ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="#33374D"
        />
        <path fillRule="evenodd" clipRule="evenodd" d="M13 7V13H11V7H13Z" fill="#33374D" />
        <path fillRule="evenodd" clipRule="evenodd" d="M13 14.5V16.7H11V14.5H13Z" fill="#33374D" />
      </svg>
    </Box>
  );
}
