import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function CardCarIcon({ ...other }: BoxProps) {
  return (
    <Box sx={{ fontSize: '0' }} {...other}>
      <svg
        width="64"
        height="33"
        viewBox="0 0 64 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.521 2.94C12.8865 2.35524 13.5274 2 14.217 2H38.1849C38.7617 2 39.3103 2.24896 39.6901 2.68299L49.5925 14H5.60849L12.521 2.94Z"
          fill="white"
          stroke="#40E6BA"
          strokeWidth="4"
        />
        <path
          d="M0 16.2C0 15.4614 0.407097 14.7829 1.05882 14.4353L7.05882 11.2353C7.34848 11.0808 7.67172 11 8 11H49.1025C49.3649 11 49.6248 11.0516 49.8673 11.152L62.7647 16.4888C63.5124 16.7982 64 17.5277 64 18.3369V24.1332C64 25.1843 63.1863 26.0561 62.1376 26.1284L49.5 27H7.5H2C0.89543 27 0 26.1046 0 25V16.2Z"
          fill="#40E6BA"
        />
        <path d="M26 1V14" stroke="#40E6BA" strokeWidth="2" />
        <circle cx="13" cy="27" r="4.5" fill="white" stroke="#333333" strokeWidth="3" />
        <circle cx="48" cy="27" r="4.5" fill="white" stroke="#333333" strokeWidth="3" />
      </svg>
    </Box>
  );
}
