// material
import { BoxProps, Box } from '@mui/material';
// ----------------------------------------------------------------------
interface Props extends BoxProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function FilledArrowUpIcon({
  width = 16,
  height = 17,
  color = '#FE6D4D',
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
        <path d="M8.00008 5.83301L12.6189 12.833H3.38128L8.00008 5.83301Z" fill={color} />
      </svg>
    </Box>
  );
}
