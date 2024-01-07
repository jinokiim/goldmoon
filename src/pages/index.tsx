import { NextPage } from 'next';

import LayoutMain from '@/src/layouts/main';
import { Box } from '@mui/material';
import useSettings from '@/src/hooks/useSettings';
import GoldmoonLogo from '../assets/icons/goldmoon_logo';
import GolfMainIcon from '../assets/icons/golf_main_icon';
import { StyledButton } from '../components/common/Styled';
import { useRouter } from 'next/router';
// import Lottie from 'react-lottie';
import animationData from '../assets/lotties/loading.json';
import { useEffect, useState } from 'react';

export const defaultLoadingOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const IndexPage: NextPage = function () {
  const { headerHeight } = useSettings();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted === true ? (
    <LayoutMain
      hasNav
      styles={{
        header: {
          height: 56,
          justifyContent: 'center'
        }
      }}
      header={<></>}
      content={
        <>
          <Box sx={{ px: 2.5, pb: 3, pt: headerHeight === 0 ? 7 : 2.5 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ py: 4 }}>
                <GolfMainIcon />
              </Box>
              <GoldmoonLogo width={201} height={60} />
            </Box>
            <Box sx={{ position: 'fixed', left: 20, right: 20, bottom: 20, zIndex: 2 }}>
              <StyledButton sx={{ fontWeight: 600 }} onClick={() => router.push('/pin')}>
                입 장 하 기
              </StyledButton>
            </Box>
          </Box>
        </>
      }
    />
  ) : (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* <Lottie options={defaultLoadingOptions} height={200} width={200} /> */}
      </Box>
    </>
  );
};

export default IndexPage;
