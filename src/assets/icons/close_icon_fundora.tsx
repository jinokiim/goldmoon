import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

function CloseIconFundora({ ...other }: BoxProps) {
  return (
    <Box
      sx={{
        fontSize: '0',
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      {...other}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L13 13" stroke="#33374D" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M1 13L13 1" stroke="#33374D" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </Box>
  );
}

export default CloseIconFundora;
