// material
import { BoxProps, Box } from '@mui/material';
// ----------------------------------------------------------------------
interface Props extends BoxProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function FilledArrowDownIcon({
  width = 16,
  height = 17,
  color = '#409CFF',
  ...other
}: Props) {
  return (
    <Box {...other}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.99999 13.167L3.38119 6.16699L12.6188 6.16699L7.99999 13.167Z" fill="#409CFF" />
      </svg>
    </Box>
  );
}
