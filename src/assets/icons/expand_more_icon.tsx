import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  dark?: boolean;
  width?: number;
  height?: number;
}

export default function ExpandMoreIcon({ dark, width = 24, height = 24, ...other }: Props) {
  return (
    <Box {...other}>
      {dark ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 10L12 16L6 10"
            stroke="#33374D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
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
            d="M6.80503 9.50503C7.0784 9.23166 7.52162 9.23166 7.79498 9.50503L12.0141 13.7241L16.2331 9.50503C16.5065 9.23166 16.9497 9.23166 17.2231 9.50502C17.4964 9.77839 17.4964 10.2216 17.2231 10.495L12.509 15.209C12.2357 15.4824 11.7924 15.4824 11.5191 15.209L6.80503 10.495C6.53167 10.2216 6.53167 9.77839 6.80503 9.50503Z"
            fill="#858794"
          />
        </svg>
      )}
    </Box>
  );
}
