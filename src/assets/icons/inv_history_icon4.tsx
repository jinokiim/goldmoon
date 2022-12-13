// material
// import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
// import { COLORS } from '@/palette';
// ----------------------------------------------------------------------

export default function Inv_history_icon4({ ...other }: BoxProps) {
  // const theme = useTheme();
  return (
    <Box {...other}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#33AAFF" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 12C17 14.7614 14.7614 17 12 17C11.4415 17 10.9043 16.9084 10.4028 16.7395L8.87617 18.266C9.81652 18.7357 10.8774 19 12 19C15.866 19 19 15.866 19 12C19 10.8774 18.7357 9.81652 18.266 8.87617L16.7395 10.4028C16.9084 10.9043 17 11.4415 17 12ZM5.95445 15.5309L7.43733 14.048C7.15633 13.423 7 12.7297 7 12C7 9.23858 9.23858 7 12 7C12.7297 7 13.423 7.15633 14.048 7.43733L15.5309 5.95445C14.4943 5.34774 13.2878 5 12 5C8.13401 5 5 8.13401 5 12C5 13.2878 5.34774 14.4943 5.95445 15.5309Z"
          fill="white"
        />
        <path d="M17 6L13.25 9.4641L13.25 2.5359L17 6Z" fill="white" />
        <path d="M7 18L10.75 14.5359L10.75 21.4641L7 18Z" fill="white" />
      </svg>
    </Box>
  );
}
