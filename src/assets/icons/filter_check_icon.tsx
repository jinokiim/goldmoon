import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

function FilterCheckIcon({ ...other }: BoxProps) {
  return (
    <Box sx={{ fontSize: '0' }} {...other}>
      <svg
        width="19"
        height="13"
        viewBox="0 0 19 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 5.76776L7.15685 11.4246L17.0563 1.52512"
          stroke="#33374D"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
}

export default FilterCheckIcon;
