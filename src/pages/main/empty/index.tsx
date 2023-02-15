// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';

import { useEffect, useState } from 'react';

import _ from 'lodash';

import { useRouter } from 'next/router';
import { StyledButton } from '@/src/components/common/Styled';
import AppHeader from '@/src/components/Header';
import PreparingPage from '@/src/assets/menu/preparing_page';

// ----------------------------------------------------------------------

const IndexPage = function () {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Layout
        header={
          <>
            <AppHeader onPrev={() => router.push('/main')} onPrevText={'준비중'} />
          </>
        }
        content={
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Box sx={{ px: 2.5, mb: 10 }}>
              <StyledButton sx={{ fontWeight: 600 }} onClick={() => router.push('/main')}>
                메인으로 이동
              </StyledButton>
            </Box>
            <PreparingPage />
          </Box>
        }
      />
    )
  );
};

export default IndexPage;
