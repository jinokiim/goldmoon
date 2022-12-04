import { Box, BoxProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
  isActive?: boolean;
}

export default function NavSearchIcon({
  isActive = false,
  width = 20,
  height = 20,
  ...other
}: Props) {
  const theme = useTheme();
  const color = isActive ? theme.palette.nav.enabled : theme.palette.nav.disabled;

  return (
    <Box {...other}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L14.2929 15.7071C13.9024 15.3166 13.9024 14.6834 14.2929 14.2929Z"
          fill={color}
        />
      </svg>
    </Box>
  );
}
