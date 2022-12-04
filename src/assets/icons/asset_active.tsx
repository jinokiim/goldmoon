// material
// import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function AssetActiveIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#499DEA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M19.3 7.92v5.15c0 3.08-1.76 4.4-4.4 4.4H6.11c-.45 0-.88-.04-1.28-.13-.25-.04-.49-.11-.71-.19-1.5-.56-2.41-1.86-2.41-4.08V7.92c0-3.08 1.76-4.4 4.4-4.4h8.79c2.24 0 3.85.95 4.28 3.12.07.4.12.81.12 1.28z"
        ></path>
        <path
          stroke="#499DEA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M22.302 10.92v5.15c0 3.08-1.76 4.4-4.4 4.4h-8.79c-.74 0-1.41-.1-1.99-.32-1.19-.44-2-1.35-2.29-2.81.4.09.83.13 1.28.13h8.79c2.64 0 4.4-1.32 4.4-4.4V7.92c0-.47-.04-.89-.12-1.28 1.9.4 3.12 1.74 3.12 4.28z"
        ></path>
        <path
          stroke="#499DEA"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M10.5 13.14a2.64 2.64 0 100-5.28 2.64 2.64 0 000 5.28zM4.781 8.3v4.4m11.442-4.4v4.4"
        ></path>
      </svg>
    </Box>
  );
}
