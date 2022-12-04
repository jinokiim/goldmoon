// material
// import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
// import { COLORS } from 'theme/palette';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function RecentIcon({ ...other }: Props) {
  // const theme = useTheme();
  return (
    <Box {...other}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C17.795 2 22.5 6.70505 22.5 12.5C22.5 18.295 17.795 23 12 23C6.20505 23 1.5 18.295 1.5 12.5C1.5 6.70505 6.20505 2 12 2Z"
          fill="#EBEBEB"
        />
        <path d="M17.5 14H12.5" stroke="#FE6D4D" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 8L12 14" stroke="#858794" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </Box>
  );
}
