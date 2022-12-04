import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function StocksPlusIcon({ ...other }: BoxProps) {
  return (
    <Box {...other}>
      <svg
        width="24"
        height="26"
        viewBox="0 0 24 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="20" rx="3" fill="url(#paint0_linear_11071_73678)" />
        <path
          d="M3 17.9785L6.82143 10.2877C7.10574 9.71549 7.84636 9.55303 8.34405 9.95368L10.8535 11.9738C11.3269 12.355 12.0281 12.2291 12.3394 11.707L17 3.89062"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 12.9473C21.3114 12.9473 24 15.6527 24 18.9849C24 22.3171 21.3114 25.0226 18 25.0226C14.6886 25.0226 12 22.3171 12 18.9849C12 15.6527 14.6886 12.9473 18 12.9473Z"
          fill="#FFA723"
        />
        <path
          d="M18.5776 16.4426V21.5275C18.5776 21.8321 18.3318 22.0795 18.029 22.0795C17.7263 22.0795 17.4805 21.8321 17.4805 21.5275V16.4426C17.4805 16.138 17.7263 15.8906 18.029 15.8906C18.3318 15.8906 18.5776 16.138 18.5776 16.4426Z"
          fill="white"
        />
        <path
          d="M21.2395 19.0115C21.2395 19.3165 20.9935 19.5641 20.6904 19.5641H15.3069C15.0039 19.5641 14.7578 19.3165 14.7578 19.0115C14.7578 18.7066 15.0039 18.459 15.3069 18.459H20.6904C20.9935 18.459 21.2395 18.7066 21.2395 19.0115Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_11071_73678"
            x1="10"
            y1="0"
            x2="10"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CBCBCB" />
            <stop offset="1" stopColor="#858794" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
}
