// material
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
// import { COLORS } from '../../theme/palette';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
}

export default function GoldmoonLogo({ width = 105, height = 20, ...other }: Props) {
  return (
    <Box {...other}>
      <svg
        width="201"
        height="60"
        viewBox="0 0 201 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 12C0 5.37258 5.37258 0 12 0H60V18H0V12Z" fill="#FFD700" />
        <path d="M70.2 12C70.2 5.37258 75.5726 0 82.2 0H88.2V60H70.2V12Z" fill="#FFD700" />
        <path d="M42 0H60V48C60 54.6274 54.6274 60 48 60H42V0Z" fill="#FFD700" />
        <path d="M183 0H201V48C201 54.6274 195.627 60 189 60H183V0Z" fill="#FFD700" />
        <path d="M140.4 12C140.4 5.37258 145.773 0 152.4 0H158.4V60H140.4V12Z" fill="#FFD700" />
        <path d="M141 12C141 5.37258 146.373 0 153 0H201V18H141V12Z" fill="#FFD700" />
        <path d="M70.2 12C70.2 5.37258 75.5726 0 82.2 0H130.2V18H70.2V12Z" fill="#FFD700" />
        <path d="M141 42H201V48C201 54.6274 195.627 60 189 60H141V42Z" fill="#FFD700" />
        <path d="M70.2 42H130.2V48C130.2 54.6274 124.827 60 118.2 60H70.2V42Z" fill="#FFD700" />
      </svg>
    </Box>
  );
}
