import { Box, BoxProps } from '@mui/material';
import { COLORS } from '../../theme/palette';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function NotificationSettingsIcon({
  width = 28,
  height = 24,
  color = COLORS.grey700,
  ...other
}: Props) {
  return (
    <Box {...other}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20.5" cy="16.5" r="6.5" fill="white" />
        <path
          d="M5 19V10.2687C5 8.1791 7.16418 4 12 4C16.8358 4 19 8.1791 19 10.2687V19"
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M3 19H21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 4L11 5L13 5L13 4L11 4ZM13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2L13 2ZM13 4L13 2L11 2L11 4L13 4Z"
          fill={color}
        />
        <path
          d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path d="M23.5 13.5L17.5 14.1L18.9 19.5H24.5L23.5 13.5Z" fill="white" />
        <circle cx="21.5" cy="16.5" r="6.5" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.78 17.502L24.7693 17.4899C24.5289 17.2162 24.3963 16.8643 24.3963 16.5C24.3963 16.1357 24.5289 15.7838 24.7693 15.5101L24.7732 15.5058L25.1747 15.0541L24.5343 13.9462L23.9481 14.0646C23.9472 14.0648 23.9463 14.065 23.9454 14.0652C23.5874 14.1385 23.215 14.0786 22.898 13.8967C22.5803 13.7143 22.3403 13.422 22.2233 13.0748L22.2223 13.0717L22.0319 12.5005H20.735L20.5633 13.0615L20.5588 13.0748C20.4418 13.422 20.2018 13.7143 19.8841 13.8967C19.5681 14.078 19.1969 14.1381 18.8399 14.0658L18.2552 13.9507L17.6127 15.0622L18.0078 15.5101C18.2482 15.7838 18.3808 16.1357 18.3808 16.5C18.3808 16.8643 18.2482 17.2162 18.0078 17.4899L18.0065 17.4913L17.6127 17.9378L18.2578 19.0538L18.8469 18.9348C19.2048 18.8615 19.5772 18.9215 19.8941 19.1033C20.2118 19.2857 20.4518 19.578 20.5688 19.9252L20.5699 19.9283L20.7602 20.4995H22.0669L22.2583 19.9252C22.3753 19.578 22.6153 19.2857 22.933 19.1033C23.25 18.9214 23.6224 18.8615 23.9804 18.9348C23.9813 18.935 23.9822 18.9352 23.9831 18.9354L24.5693 19.0538L25.2045 17.9548L24.78 17.502ZM26.1954 17.5499C26.2659 17.6285 26.3097 17.7275 26.3205 17.8326C26.3313 17.9376 26.3085 18.0434 26.2554 18.1348L25.2555 19.8645C25.203 19.9558 25.123 20.0281 25.0269 20.0712C24.9309 20.1143 24.8237 20.1259 24.7206 20.1045L23.7807 19.9145C23.6611 19.8898 23.5366 19.9097 23.4307 19.9705C23.3248 20.0313 23.2448 20.1288 23.2058 20.2445L22.9009 21.1594C22.8673 21.2587 22.8034 21.3449 22.7182 21.4059C22.633 21.4669 22.5307 21.4996 22.4259 21.4993H20.4262C20.3172 21.505 20.2093 21.4749 20.119 21.4135C20.0287 21.3521 19.961 21.2628 19.9263 21.1594L19.6213 20.2445C19.5823 20.1288 19.5023 20.0313 19.3964 19.9705C19.2905 19.9097 19.166 19.8898 19.0464 19.9145L18.1065 20.1045C18.0034 20.1259 17.8962 20.1143 17.8002 20.0712C17.7041 20.0281 17.6241 19.9558 17.5716 19.8645L16.5717 18.1348C16.5173 18.0445 16.4928 17.9393 16.5018 17.8342C16.5108 17.7292 16.5528 17.6296 16.6217 17.5499L17.2566 16.83C17.3368 16.7387 17.381 16.6214 17.381 16.5C17.381 16.3786 17.3368 16.2613 17.2566 16.17L16.6217 15.4501C16.5528 15.3704 16.5108 15.2708 16.5018 15.1658C16.4928 15.0607 16.5173 14.9555 16.5717 14.8652L17.5716 13.1355C17.6219 13.0506 17.6963 12.9825 17.7852 12.9398C17.8742 12.8971 17.9738 12.8817 18.0715 12.8955L19.0364 13.0855C19.156 13.1102 19.2805 13.0903 19.3864 13.0295C19.4923 12.9687 19.5723 12.8712 19.6113 12.7555L19.8913 11.8406C19.926 11.7372 19.9937 11.6479 20.084 11.5865C20.1743 11.5251 20.2822 11.495 20.3912 11.5007H22.3909C22.4957 11.5004 22.598 11.5331 22.6832 11.5941C22.7684 11.6551 22.8323 11.7413 22.8659 11.8406L23.1708 12.7555C23.2098 12.8712 23.2898 12.9687 23.3957 13.0295C23.5016 13.0903 23.6261 13.1102 23.7457 13.0855L24.6856 12.8955C24.7887 12.8741 24.8959 12.8857 24.9919 12.9288C25.088 12.9719 25.168 13.0442 25.2205 13.1355L26.2204 14.8652C26.2735 14.9566 26.2963 15.0624 26.2855 15.1674C26.2747 15.2725 26.2309 15.3715 26.1604 15.4501L25.5205 16.17C25.4404 16.2613 25.3961 16.3786 25.3961 16.5C25.3961 16.6214 25.4404 16.7387 25.5205 16.83L26.1954 17.5499ZM22.3935 12.5005C22.3926 12.5005 22.3918 12.5005 22.3909 12.5005L22.3935 12.5005ZM24.924 19.1255L24.9187 19.1245C24.9205 19.1248 24.9223 19.1252 24.924 19.1255ZM25.4159 14.7827L25.4131 14.7859C25.414 14.7848 25.415 14.7838 25.4159 14.7827Z"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <circle cx="21.5" cy="16.5" r="1" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.4529 16.9997C21.729 16.9997 21.9529 16.7759 21.9529 16.4998C21.9529 16.2237 21.729 15.9999 21.4529 15.9999C21.1768 15.9999 20.953 16.2237 20.953 16.4998C20.953 16.7759 21.1768 16.9997 21.4529 16.9997ZM21.4529 17.9996C22.2812 17.9996 22.9527 17.3281 22.9527 16.4998C22.9527 15.6715 22.2812 15 21.4529 15C20.6246 15 19.9531 15.6715 19.9531 16.4998C19.9531 17.3281 20.6246 17.9996 21.4529 17.9996Z"
          fill={color}
        />
      </svg>
    </Box>
  );
}

// ----------------------------------------------------------------------
