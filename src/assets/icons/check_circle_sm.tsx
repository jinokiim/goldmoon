import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------
interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function CheckCircleSm({ width = 20, height = 20, ...other }: Props) {
  return (
    <Box {...other}>
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
          d="M9.99935 18.3333C14.6017 18.3333 18.3327 14.6023 18.3327 9.99996C18.3327 5.39759 14.6017 1.66663 9.99935 1.66663C5.39698 1.66663 1.66602 5.39759 1.66602 9.99996C1.66602 14.6023 5.39698 18.3333 9.99935 18.3333ZM9.17614 13.2045L14.7317 7.64898L13.6003 6.51761L8.61046 11.5075L6.39837 9.29538L5.267 10.4268L8.04477 13.2045L8.61046 13.7702L9.17614 13.2045Z"
          fill="#2E9BFF"
        />
      </svg>
    </Box>
  );
}
