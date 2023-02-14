import { NextPage } from 'next';

import LayoutMain from '@/src/layouts/main';
import { Box } from '@mui/material';
import useSettings from '@/src/hooks/useSettings';
import GoldmoonLogo from '../assets/icons/goldmoon_logo';
import GolfMainIcon from '../assets/icons/golf_main_icon';
import { StyledButton } from '../components/common/Styled';
import { useRouter } from 'next/router';
import Head from 'next/head';

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
      header={<h1></h1>}
      content={
        <>
          <Head>
            <title>골드문</title>
            <meta name="description" content="골프 동호회" />
            <meta name="keywords" lang="ko" content="광교 골프 동호회" />
            <meta name="keywords" lang="en" content="Gwang-gyo golf club" />
            <meta name="author" content="Jinho Kim" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="골드문" />
            <meta property="og:site_name" content="GOLDMOON" />
            <meta
              property="og:image"
              content="https://raw.githubusercontent.com/jinokiim/goldmoon/main/goldmoon_logo.png"
            />
            <meta property="og:url" content="https://gold-moon.vercel.app/" />
            <meta property="og:description" content="골프채를 드는 문제아들" />
            <meta property="og:locale" content="ko_KR" />
          </Head>
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
