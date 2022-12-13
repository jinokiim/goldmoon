// material
// import { useTheme } from '@mui/material/styles';
import { BoxProps } from '@mui/material';
// import { logger } from 'utils';
import { COLORS } from '@/palette';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
  checkedColor?: string;
  circleColor?: string;
}

export default function CheckInactiveIcon({
  width = 22,
  height = 22,
  checkedColor = COLORS.white,
  circleColor = COLORS.neutral4,
  ...other
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        fill={circleColor}
        d="M22 11c0 6.075-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0s11 4.925 11 11z"
      ></path>
      <path
        fill={checkedColor}
        fillRule="evenodd"
        d="M9.412 14.82c.221.243.56.343.856.343.354 0 .693-.142.87-.385l4.56-6.068c.148-.2.222-.414.222-.6 0-.57-.502-1.013-1.077-1.013-.37 0-.68.171-.886.442l-3.763 5.04-1.948-2.07a1.07 1.07 0 00-.797-.328c-.575 0-1.062.4-1.062 1.028 0 .242.103.528.25.685l2.775 2.927z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
