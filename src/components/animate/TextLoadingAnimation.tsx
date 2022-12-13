import { keyframes } from '@emotion/react';
import { Box, BoxProps, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';

// ---------------------------------------------------------------
interface Props extends BoxProps {
  refreshing?: boolean;
}

export default function TextLoadingAnimation(props: Props) {
  const { refreshing = false, children, sx, ...rest } = props;
  const [animating, setAnimating] = useState(refreshing);
  useEffect(() => {
    if (refreshing) setAnimating(true);
  }, [refreshing]);

  const animationSx = animating ? {} : { animation: 'none', background: 'none' };

  return (
    <AnimateTextContainer component="span" sx={{ ...sx }} {...rest}>
      {children}
      <AnimateTextLoader
        sx={{ ...animationSx }}
        onAnimationIteration={() => {
          setAnimating(refreshing);
        }}
      />
    </AnimateTextContainer>
  );
}

const shimmerAnimaion = keyframes`
    0% {
        background-position: 150% 0;
    }
    100% {
        background-position: -150% 0;
    }
`;
const AnimateTextContainer = styled(Box)`
  position: relative;
`;
const AnimateTextLoader = styled(Box)`
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: inline-block;
  animation: ${shimmerAnimaion} 1.2s infinite linear;
  background-repeat: no-repeat;
  background-position: 0 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 150% 100%;
`;
