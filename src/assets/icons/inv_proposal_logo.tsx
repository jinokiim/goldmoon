// material
// import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';
// import { COLORS } from '@/palette';
// ----------------------------------------------------------------------

export default function InvPropsalLogo({ ...other }: BoxProps) {
  // const theme = useTheme();
  return (
    <Box {...other}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="22" cy="22" r="22" fill="#D5EBFF" />
        <mask
          id="mask0_8561_47596"
          // style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="44"
          height="44"
        >
          <circle cx="22" cy="22" r="22" fill="#EBF5FF" />
        </mask>
        <g mask="url(#mask0_8561_47596)">
          <circle cx="28" cy="30" r="16" fill="#3AD1A9" />
          <path
            d="M22.2859 26.5715L25.1431 35.7144L28.0002 26.5715L30.8574 35.7144L33.7145 26.5715M21.1431 30.0001H34.8574"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M8 16C8 12.6863 10.6863 10 14 10H23C26.3137 10 29 12.6863 29 16V22H14C10.6863 22 8 19.3137 8 16Z"
          fill="#1E66A7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5 16C15.5 16.6213 14.9963 17.125 14.375 17.125C13.7537 17.125 13.25 16.6213 13.25 16C13.25 15.3787 13.7537 14.875 14.375 14.875C14.9963 14.875 15.5 15.3787 15.5 16ZM19.25 16C19.25 16.6213 18.7463 17.125 18.125 17.125C17.5037 17.125 17 16.6213 17 16C17 15.3787 17.5037 14.875 18.125 14.875C18.7463 14.875 19.25 15.3787 19.25 16ZM21.875 17.125C22.4963 17.125 23 16.6213 23 16C23 15.3787 22.4963 14.875 21.875 14.875C21.2537 14.875 20.75 15.3787 20.75 16C20.75 16.6213 21.2537 17.125 21.875 17.125Z"
          fill="white"
          fillOpacity="0.95"
        />
      </svg>
    </Box>
  );
}
