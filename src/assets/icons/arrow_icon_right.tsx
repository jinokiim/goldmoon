import { Box, BoxProps } from '@mui/system';

function ArrowIconRight({ ...other }: BoxProps) {
  return (
    <Box sx={{ fontSize: '0' }} {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#33374D"
          strokeLinecap="round"
          strokeWidth="2.4"
          d="M4.5 11.768l5.657 5.656 9.192-9.192"
        ></path>
      </svg>
    </Box>
  );
}

export default ArrowIconRight;
