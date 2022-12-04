import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function FnInfoOutlined({ width = 20, height = 20, ...other }: Props) {
  return (
    <Box {...other} width={width} height={height}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99984 16.6665C13.6817 16.6665 16.6665 13.6817 16.6665 9.99984C16.6665 6.31794 13.6817 3.33317 9.99984 3.33317C6.31794 3.33317 3.33317 6.31794 3.33317 9.99984C3.33317 13.6817 6.31794 16.6665 9.99984 16.6665ZM9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8332 5.8335V10.8335H9.1665V5.8335H10.8332Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8332 12.0835V13.9168H9.1665V12.0835H10.8332Z"
            fill="white"
          />
        </g>
      </svg>
    </Box>
  );
}
