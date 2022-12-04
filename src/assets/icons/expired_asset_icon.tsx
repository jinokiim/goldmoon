import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function ExpiredAssetIcon({ width = 20, height = 20, ...other }: Props) {
  return (
    <Box {...other} width={width} height={height}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0001 16.9998C13.8661 16.9998 17.0001 13.8658 17.0001 9.99984C17.0001 6.13384 13.8661 2.99984 10.0001 2.99984C6.13409 2.99984 3.00008 6.13384 3.00008 9.99984C3.00008 13.8658 6.13409 16.9998 10.0001 16.9998ZM10.0001 18.3332C14.6025 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6025 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z"
          fill="#33374D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8334 5.8335V10.8335H9.16675V5.8335H10.8334Z"
          fill="#33374D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8334 12.0835V13.9168H9.16675V12.0835H10.8334Z"
          fill="#33374D"
        />
      </svg>
    </Box>
  );
}
