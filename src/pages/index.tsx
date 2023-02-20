import { NextPage } from 'next';

import LayoutMain from '@/src/layouts/main';
import { Box } from '@mui/material';
import useSettings from '@/src/hooks/useSettings';
import GoldmoonLogo from '../assets/icons/goldmoon_logo';
import GolfMainIcon from '../assets/icons/golf_main_icon';
import { StyledButton } from '../components/common/Styled';
import { useRouter } from 'next/router';

const IndexPage: NextPage = function () {
  const { headerHeight } = useSettings();
  const router = useRouter();

  return (
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
  );
};

export default IndexPage;
