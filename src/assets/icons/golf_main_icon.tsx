// material
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
// import { COLORS } from '../../theme/palette';
// ----------------------------------------------------------------------

export default function GolfMainIcon() {
  return (
    <Box>
      <svg
        width="150"
        height="120"
        viewBox="0 0 150 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="75" cy="103.759" rx="75" ry="16.2406" fill="#3AD1A9" />
        <ellipse cx="55.7432" cy="103.91" rx="11.5541" ry="5.86466" fill="#D9D9D9" />
        <path
          d="M100.259 16.7103C105.628 17.7418 105.683 25.4082 100.329 26.5167L61.5542 34.5444C58.451 35.1869 55.5405 32.8173 55.5405 29.6483V14.1722C55.5405 11.0325 58.4004 8.66966 61.4837 9.26195L100.259 16.7103Z"
          fill="#FF8F6D"
        />
        <path
          d="M51.4865 4.05405C51.4865 1.81506 53.3015 0 55.5405 0C57.7795 0 59.5946 1.81506 59.5946 4.05405V105.263H51.4865V4.05405Z"
          fill="#FCB11F"
        />
      </svg>
    </Box>
  );
}
