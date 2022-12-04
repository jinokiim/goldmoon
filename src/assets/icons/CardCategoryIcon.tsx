import { Box, BoxProps } from '@mui/material';
import { useMemo } from 'react';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  width?: number;
  height?: number;
  type: number;
}

export default function CardCategoryIcon({ width = 40, height = 40, type, ...other }: Props) {
  const render = useMemo(() => {
    switch (type) {
      case 1:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EBF5FF" />
            <line x1="16" y1="17" x2="16" y2="24" stroke="#46B1FF" strokeWidth="2" />
            <path
              d="M18.5371 10C18.1925 10 17.9219 10.2706 17.9219 10.6152V13.6914H16.6914V10.6152C16.6914 10.2706 16.4208 10 16.0762 10C15.7316 10 15.4609 10.2706 15.4609 10.6152V13.6914H14.2305V10.6152C14.2305 10.2706 13.9598 10 13.6152 10C13.2706 10 13 10.2706 13 10.6152V15.5371C13 17.0261 14.0583 18.2687 15.4609 18.5518V22.9199C15.4609 23.2645 15.7316 23.5352 16.0762 23.5352C16.4208 23.5352 16.6914 23.2645 16.6914 22.9199V18.5518C18.094 18.2687 19.1523 17.0261 19.1523 15.5371V10.6028C19.1399 10.2585 18.8817 10 18.5371 10Z"
              fill="#46B1FF"
            />
            <path
              d="M16.0762 22.3047C15.0548 22.3047 14.2305 23.129 14.2305 24.1504V29.1543C14.2305 30.1756 15.0548 31 16.0762 31C17.0975 31 17.9219 30.1756 17.9219 29.1543V24.1504C17.9219 23.129 17.0975 22.3047 16.0762 22.3047Z"
              fill="#3F94E1"
            />
            <path
              d="M27.8447 14.9219C27.8447 17.1243 26.6882 18.2811 25.3838 18.5518V22.969C25.3838 23.3136 25.1131 23.5843 24.7686 23.5843C24.424 23.5843 24.1533 23.3136 24.1533 22.969V18.5518C22.8489 18.2811 21.6924 17.1243 21.6924 14.9219C21.6924 12.5964 22.9598 10 24.7686 10C26.5773 10 27.8447 12.5964 27.8447 14.9219Z"
              fill="#46B1FF"
            />
            <line x1="24.7998" y1="17" x2="24.7998" y2="24" stroke="#46B1FF" strokeWidth="2" />
            <path
              d="M26.6143 14.9219C26.6143 16.7306 25.6669 17.3828 24.7686 17.3828C23.8703 17.3828 22.9229 16.7306 22.9229 14.9219C22.9229 12.9653 23.9566 11.2305 24.7686 11.2305C25.5806 11.2305 26.6143 12.9653 26.6143 14.9219Z"
              fill="#46B1FF"
            />
            <path
              d="M24.7686 22.3047C23.7472 22.3047 22.9229 23.129 22.9229 24.1504V29.1543C22.9229 30.1756 23.7472 31 24.7686 31C25.7899 31 26.6143 30.1756 26.6143 29.1543V24.1504C26.6143 23.129 25.7899 22.3047 24.7686 22.3047Z"
              fill="#3F94E1"
            />
          </>
        );
      case 2:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EBF5FF" />
            <circle cx="20" cy="20" r="20" fill="#EFFBF8" />
            <path
              d="M27.5398 14.5H25L26.3095 17.3292C26.2877 17.1576 26.3095 22.9225 26.3095 22.7805H27.5398C28.9434 22.7805 30.0812 21.6426 30.0812 20.239V17.0415C30.0812 15.6378 28.9434 14.5 27.5398 14.5ZM27.4355 19.6048C27.4355 19.8975 27.1982 20.1348 26.9055 20.1348H26.3095V17.1457H26.9055C27.1982 17.1457 27.4355 17.383 27.4355 17.6757V19.6048Z"
              fill="#56BEA3"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5 14.5C12.9477 14.5 12.5 14.9477 12.5 15.5V23.1154C12.5 25.4208 14.1802 27.5 16.5 27.5H22.5C23.6002 27.5 24.6315 27.0073 25.3708 26.1733C26.1063 25.3434 26.5 24.2397 26.5 23.1154V15.5C26.5 14.9477 26.0522 14.5 25.5 14.5H13.5Z"
              fill="#61DABA"
            />
          </>
        );
      case 3:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#FFEAE5" />
            <path
              d="M11.5351 20.6316L12.6503 27.7272C12.7217 28.1825 13.1488 28.5514 13.6042 28.5514H26.3959C26.8512 28.5514 27.2783 28.1825 27.3497 27.7272C27.7214 25.362 28.0931 22.9968 28.4648 20.6316H28.8634C30.1332 20.6316 30.339 19.0144 29.481 18.4897H10.5189C9.66108 19.0144 9.86675 20.6316 11.1365 20.6316H11.5351Z"
              fill="#FE957E"
            />
            <path
              d="M16.0705 12.1482L20.9691 18.5515C21.9477 19.8308 20.2012 21.1941 19.2094 19.8976L14.3108 13.4943C13.2789 12.1455 15.0271 10.7842 16.0705 12.1482Z"
              fill="#FE957E"
            />
          </>
        );
      case 4:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#FFF3CD" />
            <path
              d="M23.4817 11.6457C22.8384 11.6505 22.2985 11.2156 22.0472 10.6234C21.61 9.59314 20.5433 8.89491 19.329 9.013C18.4047 9.10288 17.6449 9.68711 17.2427 10.4796C16.8346 11.2839 16.0433 11.8216 15.1426 11.8661C13.9593 11.8661 13 12.8254 13 14.0087V16.0918H16.9317V17.5436H22.2598V16.6797H26.1915V14.3351C26.1915 12.843 24.9764 11.6347 23.4817 11.6457Z"
              fill="white"
            />
            <path
              d="M27.4586 14.2705H23.5826L13 14.2912V27.1073C13 28.0655 13.7768 28.8423 14.735 28.8423H24.4933C25.4515 28.8423 26.2283 28.0655 26.2283 27.1073V23.551H27.4586C28.8622 23.551 30 22.4131 30 21.0095V16.812C30 15.4083 28.8622 14.2705 27.4586 14.2705ZM27.3543 20.3753C27.3543 20.668 27.117 20.9053 26.8243 20.9053H26.2283V16.9162H26.8243C27.117 16.9162 27.3543 17.1535 27.3543 17.4463V20.3753Z"
              fill="#FFC105"
            />
            <path
              d="M27.4587 14.2705L26.2284 14.31V27.5568C26.2066 27.3853 26.2284 27.2493 26.2284 27.1073V23.551H27.4587C28.8623 23.551 30.0002 22.4131 30.0002 21.0095V16.812C30.0002 15.4083 28.8623 14.2705 27.4587 14.2705ZM27.3545 20.3753C27.3545 20.668 27.1172 20.9053 26.8244 20.9053H26.2284V16.9162H26.8244C27.1172 16.9162 27.3545 17.1535 27.3545 17.4463V20.3753Z"
              fill="#FFA621"
            />
            <path
              d="M20.3589 14.2705V15.2075H18.292V18.239C18.292 18.9696 18.8843 19.5619 19.6148 19.5619C20.3454 19.5619 20.9377 18.9696 20.9377 18.239V18.2183H21.2864C22.555 18.2183 23.5833 17.19 23.5833 15.9215V14.2705H20.3589Z"
              fill="#F7931D"
            />
            <path
              d="M20.253 12.9307V14.2106H17.8145V18.3511C17.8145 19.349 18.5132 20.1579 19.3752 20.1579C20.2371 20.1579 20.9358 19.349 20.9358 18.3511V18.3229H21.3473C22.844 18.3229 24.0572 16.9183 24.0572 15.1856V12.9307H20.253Z"
              fill="white"
            />
          </>
        );
      case 5:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EBF5FF" />
            <path
              d="M13.3711 15H26.6289C27.1554 15 27.5917 15.4082 27.6267 15.9335L28.36 26.9335C28.3985 27.5107 27.9407 28 27.3622 28H12.6378C12.0593 28 11.6015 27.5107 11.64 26.9335L12.3733 15.9335C12.4083 15.4082 12.8446 15 13.3711 15Z"
              fill="#46B1FF"
              stroke="#46B1FF"
              strokeWidth="2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 12H21C22.1046 12 23 12.8954 23 14V16H25V14C25 11.7909 23.2091 10 21 10H19C16.7909 10 15 11.7909 15 14V16H17V14C17 12.8954 17.8954 12 19 12Z"
              fill="#46B1FF"
            />
          </>
        );
      case 6:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EFFBF8" />
            <rect
              x="9.5"
              y="27"
              width="14"
              height="21"
              rx="1.4"
              transform="rotate(-90 9.5 27)"
              fill="#3AD1A9"
            />
            <path d="M14.5 20H18.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M16.5 18L16.5 22" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="26" cy="18.5" r="1.5" fill="white" />
            <circle cx="23" cy="21.5" r="1.5" fill="white" />
          </>
        );
      case 7:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#FFEAE5" />
            <rect x="10.5" y="10.5" width="19" height="19" rx="2" fill="#FE957E" />
            <rect x="18.3818" y="13.853" width="3.23529" height="12.2941" rx="0.5" fill="white" />
            <rect
              x="26.1465"
              y="18.3828"
              width="3.23529"
              height="12.2941"
              rx="0.5"
              transform="rotate(90 26.1465 18.3828)"
              fill="white"
            />
          </>
        );
      case 8:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#FFF3CD" />
            <path
              d="M11.8176 19.08C11.8176 18.5088 12.0619 17.9648 12.4889 17.5852L18.6707 12.0903C19.4285 11.4167 20.5704 11.4167 21.3282 12.0903L27.51 17.5852C27.937 17.9648 28.1813 18.5088 28.1813 19.08V27.091C28.1813 28.1956 27.2858 29.091 26.1813 29.091H13.8176C12.7131 29.091 11.8176 28.1956 11.8176 27.091V19.08Z"
              fill="#F6C64C"
            />
            <path
              d="M11.8176 19.08C11.8176 18.5088 12.0619 17.9648 12.4889 17.5852L18.6707 12.0903C19.4285 11.4167 20.5704 11.4167 21.3282 12.0903L27.51 17.5852C27.937 17.9648 28.1813 18.5088 28.1813 19.08V27.091C28.1813 28.1956 27.2858 29.091 26.1813 29.091H13.8176C12.7131 29.091 11.8176 28.1956 11.8176 27.091V19.08Z"
              fill="#FFC105"
            />
            <path
              d="M9.99902 20.0001L19.999 10.9092L29.999 20.0001"
              stroke="#D37C3A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="17.7258" y="23.6367" width="4.54545" height="5.45455" fill="#E89F58" />
          </>
        );
      case 9:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EBF5FF" />
            <circle cx="20" cy="20" r="10" fill="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9167 17.0354C16.2569 16.9187 16.6272 17.1 16.7438 17.4401L18.1115 21.429L19.4258 17.9551C19.5216 17.7018 19.764 17.5343 20.0348 17.5343C20.3055 17.5343 20.548 17.7018 20.6438 17.9551L21.9581 21.429L23.3257 17.4401C23.4423 17.1 23.8127 16.9187 24.1528 17.0354C24.493 17.152 24.6742 17.5223 24.5576 17.8625L24.0394 19.374H24.918C25.2776 19.374 25.5691 19.6656 25.5691 20.0252C25.5691 20.3848 25.2776 20.6763 24.918 20.6763H23.5929L22.6042 23.56C22.5151 23.8197 22.2729 23.9956 21.9984 23.9999C21.724 24.0042 21.4763 23.836 21.3792 23.5793L20.0348 20.0257L18.6904 23.5793C18.5932 23.836 18.3456 24.0042 18.0711 23.9999C17.7967 23.9956 17.5544 23.8197 17.4654 23.56L16.4767 20.6763H15.1512C14.7916 20.6763 14.5 20.3848 14.5 20.0252C14.5 19.6655 14.7916 19.374 15.1512 19.374H16.0302L15.5119 17.8625C15.3953 17.5223 15.5765 17.152 15.9167 17.0354Z"
              fill="#3F94E1"
            />
          </>
        );
      case 10:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EBF5FF" />
            <path
              d="M14.6761 13.627H20.3239C21.2496 13.627 22 14.3268 22 15.1902V23.1609V28.4368C22 29.3001 21.2496 30 20.3239 30H18.6111H14.6761C13.7504 30 13 29.3001 13 28.4368V15.1902C13 14.3268 13.7504 13.627 14.6761 13.627Z"
              fill="#46B1FF"
            />
            <path
              d="M19.4448 11C19.4448 10.4477 18.9971 10 18.4448 10H16.5559C16.0036 10 15.5559 10.4477 15.5559 11V12.6269C15.5559 13.1792 16.0036 13.6269 16.5559 13.6269H18.4448C18.9971 13.6269 19.4448 13.1792 19.4448 12.6269V11Z"
              fill="#46B1FF"
            />
            <path
              d="M28.1768 29.1929C28.1768 29.6347 27.8186 29.9929 27.3768 29.9929H19.8576C19.4158 29.9929 19.0576 29.6347 19.0576 29.1929V23.3317C19.0576 22.8899 19.4158 22.5317 19.8576 22.5317H27.3768C27.8186 22.5317 28.1768 22.8899 28.1768 23.3317V29.1929Z"
              fill="#3F94E1"
            />
            <path
              d="M28.1768 23.597C28.1768 24.0389 27.8186 24.397 27.3768 24.397H19.8576C19.4158 24.397 19.0576 24.0389 19.0576 23.597V23.3317C19.0576 22.8899 19.4158 22.5317 19.8576 22.5317H27.3768C27.8186 22.5317 28.1768 22.8899 28.1768 23.3317V23.597Z"
              fill="#3F94E1"
            />
            <path
              d="M26.207 27.4311C26.207 27.8729 25.8488 28.2311 25.407 28.2311H21.8256C21.3838 28.2311 21.0256 27.8729 21.0256 27.4311V27.0622C21.0256 26.6204 21.3838 26.2622 21.8256 26.2622H25.407C25.8488 26.2622 26.207 26.6204 26.207 27.0622V27.4311Z"
              fill="#3F94E1"
            />
            <rect x="15.5" y="10" width="4" height="6" rx="1" fill="#46B1FF" />
          </>
        );
      case 11:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EFFBF8" />
            <path
              d="M15.3744 12.8H21.3631C22.4335 12.8 23.433 13.3352 24.0264 14.2261L27.3393 19.2H10.3083L12.4848 14.6252C13.0152 13.5103 14.1397 12.8 15.3744 12.8Z"
              fill="white"
              stroke="#61DABA"
              strokeWidth="1.6"
            />
            <path
              d="M8 19.5281C8 19.1977 8.16326 18.8885 8.43618 18.7022L10.6747 17.1741C10.8408 17.0607 11.0373 17 11.2385 17H26.5906C26.7419 17 26.8913 17.0343 27.0274 17.1004L32.4367 19.7265C32.7813 19.8938 33 20.2432 33 20.6261V23.5844C33 24.1026 32.6041 24.5349 32.0879 24.5805L27.3359 25H10.9297H9C8.44772 25 8 24.5523 8 24V19.5281Z"
              fill="#61DABA"
            />
            <path d="M18.4167 12V18" stroke="#61DABA" strokeWidth="2" />
            <mask id="path-5-inside-1_18277_278210" fill="white">
              <ellipse cx="13.0781" cy="25.125" rx="2.34375" ry="2.25" />
            </mask>
            <ellipse cx="13.0781" cy="25.125" rx="2.34375" ry="2.25" fill="#33374D" />
            <path
              d="M12.4219 25.125C12.4219 24.5965 12.8323 24.375 13.0781 24.375V30.375C15.9128 30.375 18.4219 28.1387 18.4219 25.125H12.4219ZM13.0781 24.375C13.324 24.375 13.7344 24.5965 13.7344 25.125H7.73438C7.73438 28.1387 10.2435 30.375 13.0781 30.375V24.375ZM13.7344 25.125C13.7344 25.6535 13.324 25.875 13.0781 25.875V19.875C10.2435 19.875 7.73438 22.1113 7.73438 25.125H13.7344ZM13.0781 25.875C12.8323 25.875 12.4219 25.6535 12.4219 25.125H18.4219C18.4219 22.1113 15.9128 19.875 13.0781 19.875V25.875Z"
              fill="#33374D"
              mask="url(#path-5-inside-1_18277_278210)"
            />
            <mask id="path-7-inside-2_18277_278210" fill="white">
              <ellipse cx="26.75" cy="25.125" rx="2.34375" ry="2.25" />
            </mask>
            <ellipse cx="26.75" cy="25.125" rx="2.34375" ry="2.25" fill="#33374D" />
            <path
              d="M26.0938 25.125C26.0938 24.5965 26.5042 24.375 26.75 24.375V30.375C29.5847 30.375 32.0938 28.1387 32.0938 25.125H26.0938ZM26.75 24.375C26.9958 24.375 27.4062 24.5965 27.4062 25.125H21.4062C21.4062 28.1387 23.9153 30.375 26.75 30.375V24.375ZM27.4062 25.125C27.4062 25.6535 26.9958 25.875 26.75 25.875V19.875C23.9153 19.875 21.4062 22.1113 21.4062 25.125H27.4062ZM26.75 25.875C26.5042 25.875 26.0938 25.6535 26.0938 25.125H32.0938C32.0938 22.1113 29.5847 19.875 26.75 19.875V25.875Z"
              fill="#33374D"
              mask="url(#path-7-inside-2_18277_278210)"
            />
          </>
        );
      case 12:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EBF5FF" />
            <path
              d="M13.1011 16.2041C13.2845 16.2058 13.4522 16.3078 13.5382 16.4698L14.5752 18.4253C14.6642 18.593 14.8404 18.6958 15.0302 18.6908L18.8258 18.5903C19.1518 18.5817 19.3824 18.2683 19.2937 17.9545L17.5085 11.6383C17.4181 11.3185 17.6591 11.0012 17.9914 11.0023L19.9467 11.0091C20.1313 11.0098 20.3006 11.1121 20.3869 11.2753L24.0429 18.1839C24.1317 18.3517 24.3079 18.4547 24.4977 18.4498L28.2209 18.3542C29.0567 18.3117 29.8279 18.8009 30.1456 19.5739C30.3803 20.1606 30.3801 20.8151 30.1483 21.402C30.1421 21.4176 30.1327 21.4317 30.1209 21.4436V21.4436C30.1103 21.4542 30.1017 21.4666 30.0953 21.4801C29.996 21.6912 29.8616 21.8828 29.6954 22.0474C29.2962 22.4313 28.756 22.6318 28.2056 22.6029L24.4886 22.479C24.2991 22.4727 24.1224 22.574 24.0322 22.7408L20.3092 29.6209C20.2215 29.7829 20.0519 29.8836 19.8677 29.883L17.9164 29.8761C17.5836 29.875 17.3448 29.5552 17.4382 29.2358L19.2776 22.9461C19.3692 22.6327 19.1408 22.317 18.8145 22.306L15.0245 22.1784C14.8351 22.172 14.6583 22.2734 14.568 22.4401L13.5122 24.3903C13.4246 24.5523 13.2549 24.6529 13.0707 24.6523L11.6631 24.6472C11.3308 24.646 11.0921 24.3271 11.1847 24.008L12.0448 21.0417L12.2008 20.5835C12.2362 20.4796 12.2365 20.3669 12.2015 20.2629L12.0635 19.8525L11.2207 16.8251C11.1315 16.5045 11.3744 16.1879 11.7071 16.191L13.1011 16.2041Z"
              fill="#46B1FF"
            />
          </>
        );
      case 13:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#FFF3CD" />
            <rect x="12" y="11" width="16" height="18" rx="2" fill="#FFC105" />
            <path
              d="M12 13C12 11.8954 12.8954 11 14 11V11V29V29C12.8954 29 12 28.1046 12 27V13Z"
              fill="#FFA621"
            />
            <rect x="16" y="14" width="9" height="2" fill="white" />
          </>
        );
      case 14:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EBF5FF" />
            <rect x="9" y="21.3809" width="9.52381" height="3.80952" rx="1.90476" fill="#3F94E1" />
            <rect x="9" y="25.1904" width="9.52381" height="3.80952" rx="1.90476" fill="#3F94E1" />
            <path
              d="M15.6667 18.7141C15.6667 15.4004 19.4763 11.8569 22.3334 11.8569C24.7144 11.8569 29.0001 15.4004 29.0001 18.7141V27.2855C29.0001 28.2323 28.1473 28.9998 27.0953 28.9998H17.5715C16.5195 28.9998 15.6667 28.2323 15.6667 27.2855V18.7141Z"
              fill="#46B1FF"
            />
            <path
              d="M24.7143 10C24.7143 9.44772 24.2666 9 23.7143 9H20.9524C20.4001 9 19.9524 9.44772 19.9524 10V13.7143C19.9524 14.2666 20.4001 14.7143 20.9524 14.7143H23.7143C24.2666 14.7143 24.7143 14.2666 24.7143 13.7143V10Z"
              fill="#46B1FF"
            />
            <rect
              x="18.5239"
              y="10.9048"
              width="7.61905"
              height="1.90476"
              rx="0.952381"
              fill="#46B1FF"
            />
          </>
        );
      case 15:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EFF2F7" />
            <rect x="9.5" y="13" width="21" height="14" rx="1.4" fill="#D6D7DB" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0454 15.3874L18.9879 20.789C19.6119 21.1659 20.3914 21.1735 21.0226 20.8088L29.7601 15.7605C30.2176 15.4962 30.4994 15.0079 30.4994 14.4795C30.4994 13.6624 29.837 13 29.0199 13H10.9C10.1268 13 9.5 13.6268 9.5 14.4V14.7358C9.57208 14.9291 9.69541 15.1114 9.87635 15.2655C9.92931 15.3107 9.98585 15.3514 10.0454 15.3874Z"
              fill="#ADAFB8"
            />
          </>
        );
      case 16:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EFF2F7" />
            <circle cx="20" cy="20" r="10" fill="white" />
            <circle cx="24.2779" cy="20.2222" r="1.22222" fill="#ADAFB8" />
            <circle cx="19.9996" cy="20.2222" r="1.22222" fill="#ADAFB8" />
            <ellipse cx="15.7222" cy="20.2222" rx="1.22222" ry="1.22222" fill="#ADAFB8" />
          </>
        );
      case 17:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EFF2F7" />
            <path
              d="M12.3333 21H28.3333L29.3078 25.8725C29.4935 26.8007 28.7835 27.6667 27.837 27.6667H12.8297C11.8831 27.6667 11.1732 26.8007 11.3588 25.8725L12.3333 21Z"
              fill="#D6D7DB"
            />
            <path
              d="M12.333 15C12.333 13.8954 13.2284 13 14.333 13H26.333C27.4376 13 28.333 13.8954 28.333 15V21H12.333V15Z"
              fill="#ADAFB8"
            />
          </>
        );
      case 18:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EBF5FF" />
            <circle cx="20" cy="20" r="10" fill="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9167 17.0354C16.2569 16.9187 16.6272 17.1 16.7438 17.4401L18.1115 21.429L19.4258 17.9551C19.5216 17.7018 19.764 17.5343 20.0348 17.5343C20.3055 17.5343 20.548 17.7018 20.6438 17.9551L21.9581 21.429L23.3257 17.4401C23.4423 17.1 23.8127 16.9187 24.1528 17.0354C24.493 17.152 24.6742 17.5223 24.5576 17.8625L24.0394 19.374H24.918C25.2776 19.374 25.5691 19.6656 25.5691 20.0252C25.5691 20.3848 25.2776 20.6763 24.918 20.6763H23.5929L22.6042 23.56C22.5151 23.8197 22.2729 23.9956 21.9984 23.9999C21.724 24.0042 21.4763 23.836 21.3792 23.5793L20.0348 20.0257L18.6904 23.5793C18.5932 23.836 18.3456 24.0042 18.0711 23.9999C17.7967 23.9956 17.5544 23.8197 17.4654 23.56L16.4767 20.6763H15.1512C14.7916 20.6763 14.5 20.3848 14.5 20.0252C14.5 19.6655 14.7916 19.374 15.1512 19.374H16.0302L15.5119 17.8625C15.3953 17.5223 15.5765 17.152 15.9167 17.0354Z"
              fill="#3F94E1"
            />
          </>
        );
      case 19:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EBF5FF" />
            <rect x="10" y="13" width="21" height="13.2632" rx="1.3" fill="#46B1FF" />
            <rect x="11.8379" y="17.2441" width="3.15" height="3.44842" rx="0.8" fill="#2E8BE0" />
            <rect x="11.8379" y="23.5" width="3.675" height="1" rx="0.5" fill="#2E8BE0" />
            <rect x="16.2998" y="23.5" width="3.675" height="1" rx="0.5" fill="#2E8BE0" />
            <rect x="20.7627" y="23.5" width="3.675" height="1" rx="0.5" fill="#2E8BE0" />
            <rect x="25.2246" y="23.5" width="3.675" height="1" rx="0.5" fill="#2E8BE0" />
          </>
        );
      case 20:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EBF5FF" />
            <path
              d="M22.6196 11.8051L23.392 10.6664C23.9073 9.90674 23.2125 8.91227 22.3219 9.13492L20.4547 9.60172L18.5875 9.13492C17.6969 8.91227 17.0021 9.90674 17.5174 10.6664L18.2898 11.8051H22.6196Z"
              fill="#46B1FF"
            />
            <path
              d="M29.1477 18.8857C27.3608 13.7833 22.618 12.1479 22.618 12.1479H18.2917C18.2917 12.1479 13.5489 13.7833 11.762 18.8857C10.965 21.1615 10.5481 24.6303 11.762 26.7062C13.9403 30.4312 26.9695 30.4312 29.1477 26.7062C30.3616 24.6303 29.9447 21.1615 29.1477 18.8857Z"
              fill="#46B1FF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.4342 18.5591C16.7238 18.4507 17.0464 18.5976 17.1548 18.8871L18.614 22.7841L20.0287 19.3599C20.1152 19.1505 20.3195 19.0138 20.5461 19.0138C20.7727 19.0138 20.977 19.1505 21.0635 19.3599L22.4783 22.7842L23.9374 18.8872C24.0458 18.5976 24.3684 18.4508 24.658 18.5592C24.9475 18.6676 25.0944 18.9903 24.986 19.2798L24.2902 21.1381L25.4406 21.1381C25.7498 21.1381 26.0004 21.3888 26.0004 21.698C26.0004 22.0072 25.7498 22.2578 25.4406 22.2578L23.871 22.2578L23.0283 24.5087C22.9476 24.7241 22.7433 24.8683 22.5133 24.8721C22.2833 24.876 22.0744 24.7387 21.9865 24.5261L20.5461 21.0399L19.1058 24.5261C19.018 24.7387 18.809 24.8759 18.579 24.8721C18.349 24.8682 18.1447 24.7241 18.0641 24.5086L17.2213 22.2577L15.6517 22.2577C15.3425 22.2577 15.0918 22.0071 15.0918 21.6979C15.0918 21.3887 15.3425 21.138 15.6517 21.138L16.802 21.138L16.1062 19.2798C15.9978 18.9902 16.1447 18.6676 16.4342 18.5591Z"
              fill="white"
            />
          </>
        );
      case 21:
        return (
          <>
            <circle cx="20" cy="20" r="20" fill="#EFFBF8" />
            <path d="M21.3046 10.1025V29.9195H18.7092V10.1025H21.3046Z" fill="#61DABA" />
            <path
              d="M20 10C25.519 10 30 14.481 30 20C30 25.519 25.519 30 20 30C14.481 30 10 25.519 10 20C10 14.481 14.481 10 20 10Z"
              fill="#61DABA"
            />
            <path
              d="M20 10C25.519 10 30 14.481 30 20C30 25.519 25.519 30 20 30C14.481 30 10 25.519 10 20C10 14.481 14.481 10 20 10Z"
              fill="#61DABA"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.6499 14.9999C17.2909 14.9999 16.9999 15.2909 16.9999 15.6499V20.6499V25.1499C16.9999 25.5089 17.2909 25.7999 17.6499 25.7999C18.0089 25.7999 18.2999 25.5089 18.2999 25.1499V21.2999H21.1499C22.8896 21.2999 24.2999 19.8896 24.2999 18.1499C24.2999 16.4102 22.8896 14.9999 21.1499 14.9999H17.6499ZM18.2999 16.2999V19.9999H21.1499C22.1716 19.9999 22.9999 19.1716 22.9999 18.1499C22.9999 17.1282 22.1716 16.2999 21.1499 16.2999H18.2999Z"
              fill="white"
            />
          </>
        );
    }
  }, [type]);
  return (
    <Box {...other}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {render}
      </svg>
    </Box>
  );
}
