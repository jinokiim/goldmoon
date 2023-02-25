// material
import { Box } from '@mui/material';
// import { COLORS } from '../../theme/palette';
// ----------------------------------------------------------------------

export default function InjuryIcon() {
  return (
    <Box>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#FFAC33" />
        <ellipse cx="24.5" cy="16.2353" rx="8.36364" ry="8.23529" fill="white" />
        <path
          d="M13 29.4412C13 26.1275 15.6863 23.4412 19 23.4412H30C33.3137 23.4412 36 26.1275 36 29.4412V43H13V29.4412Z"
          fill="white"
        />
        <path
          d="M18 33.75C18 32.0931 19.3431 30.75 21 30.75H29V36.75H21C19.3431 36.75 18 35.4069 18 33.75V33.75Z"
          fill="#D9D9D9"
        />
        <path
          d="M18.5 33.8C18.5 32.4193 19.6193 31.3 21 31.3H27.5V36.3H21C19.6193 36.3 18.5 35.1807 18.5 33.8V33.8Z"
          fill="white"
        />
        <path
          d="M28.5583 23.6347C28.8745 22.7501 30.1255 22.7501 30.4417 23.6347L34.6515 35.4134C34.8842 36.0647 34.4014 36.75 33.7098 36.75H25.2902C24.5986 36.75 24.1158 36.0647 24.3485 35.4134L28.5583 23.6347Z"
          fill="#D9D9D9"
        />
        <rect x="29" y="30" width="1" height="5" fill="#3AD1A9" />
        <rect x="27" y="32" width="5" height="1" fill="#3AD1A9" />
      </svg>
    </Box>
  );
}
