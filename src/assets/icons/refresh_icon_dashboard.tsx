import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, BoxProps } from '@mui/material';
import useTimeoutFn from 'hooks/useTimeout';
import { useEffect, useState } from 'react';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  isRefreshing?: boolean;
  width?: number;
  height?: number;
}
const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
const RotateWrapper = styled.div`
  ${(props: Props) =>
    props.isRefreshing &&
    css`
      animation: ${rotate} 2s infinite linear;
    `}
`;

export default function RefreshIcon({
  width = 24,
  height = 24,
  isRefreshing = false,
  ...other
}: Props) {
  const [refresh, setRefresh] = useState(isRefreshing);
  const [, , set] = useTimeoutFn(() => {
    setRefresh(false);
  }, 1500);

  useEffect(() => {
    isRefreshing && setRefresh(isRefreshing);
    !isRefreshing && set();
  }, [isRefreshing]);

  return (
    <RotateWrapper isRefreshing={refresh}>
      <Box {...other}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7101 14C17.8496 16.8915 15.171 19 12 19C8.13399 19 4.99998 15.866 4.99998 12C4.99998 8.13401 8.13399 5 12 5C14.7924 5 17.2029 6.63505 18.3264 9H20.4879C19.2524 5.50442 15.9186 3 12 3C7.02942 3 2.99998 7.02944 2.99998 12C2.99998 16.9706 7.02942 21 12 21C16.2832 21 19.8675 18.008 20.777 14H18.7101Z"
            fill="#33374D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 3C20.5523 3 21 3.44772 21 4V10H15C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8H19V4C19 3.44772 19.4477 3 20 3Z"
            fill="#33374D"
          />
        </svg>
      </Box>
    </RotateWrapper>
  );
}
