// material
import { useTheme } from '@mui/material/styles';
import { BoxProps } from '@mui/material';
import { COLORS } from '@/palette';
// ----------------------------------------------------------------------

export default function InfoIcon({ ...other }: BoxProps) {
  const theme = useTheme();
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" fill={COLORS.neutral5} />
      <path
        d="M7.282 11.5h1.446V6.197H7.282V11.5zm-.068-6.729c0 .4.356.733.79.733.43 0 .787-.332.782-.733.005-.41-.351-.737-.781-.742-.435.005-.791.332-.791.742z"
        fill={theme.palette.common.white}
      />
    </svg>
  );
}
