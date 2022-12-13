import { Box, BoxProps } from '@mui/material';
import { COLORS } from '@/palette';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
  isActive?: boolean;
  color?: string;
}

export default function PlusIcon({
  isActive = false,
  width = 24,
  height = 24,
  color = COLORS.grey700,
  ...other
}: Props) {
  return (
    <Box {...other}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 6V18" stroke="#33374D" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 12L18 12" stroke="#33374D" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </Box>
  );
}
