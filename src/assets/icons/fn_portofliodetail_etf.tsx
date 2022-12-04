import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function PorfolioDetailETF({ width = 37, height = 36, ...other }: Props) {
  return (
    <Box {...other} height={height} width={width}>
      <svg
        width="37"
        height="36"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.8443 16.752C18.8443 17.6053 18.519 18.3573 17.8683 19.008C17.2283 19.648 16.375 20.0107 15.3083 20.096V21.392H14.3803V20.096C13.2923 20.0213 12.4176 19.7013 11.7563 19.136C11.1056 18.5707 10.7803 17.808 10.7803 16.848H13.1803C13.2443 17.6587 13.6443 18.1333 14.3803 18.272V15.216C13.2923 14.928 12.5563 14.6773 12.1723 14.464C11.2443 13.952 10.7803 13.136 10.7803 12.016C10.7803 11.088 11.1163 10.3253 11.7883 9.728C12.471 9.12 13.335 8.77333 14.3803 8.688V7.392H15.3083V8.688C16.343 8.752 17.1643 9.05067 17.7723 9.584C18.391 10.1067 18.727 10.8693 18.7803 11.872H16.4283C16.3963 11.552 16.279 11.2747 16.0763 11.04C15.8843 10.8053 15.6283 10.64 15.3083 10.544V13.568C16.3963 13.8453 17.143 14.1013 17.5483 14.336C18.4123 14.848 18.8443 15.6533 18.8443 16.752ZM13.1163 11.872C13.1163 12.5333 13.5376 13.008 14.3803 13.296V10.512C13.5376 10.64 13.1163 11.0933 13.1163 11.872ZM16.5243 16.88C16.5243 16.2613 16.119 15.7973 15.3083 15.488V18.272C15.6923 18.1973 15.991 18.0373 16.2043 17.792C16.4176 17.536 16.5243 17.232 16.5243 16.88Z"
          fill="#FFA723"
        />
        <circle cx="14.5" cy="15" r="13" stroke="#2271BA" strokeWidth="2" />
        <rect
          x="21.5"
          y="16"
          width="14"
          height="18"
          rx="3"
          fill="#F9F9FA"
          stroke="#2271BA"
          strokeWidth="2"
        />
        <rect x="21.5" y="22" width="14" height="6" stroke="#2271BA" strokeWidth="2" />
      </svg>
    </Box>
  );
}
