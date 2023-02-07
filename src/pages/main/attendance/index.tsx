// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';

import { useEffect, useState } from 'react';

import _ from 'lodash';
import { useRouter } from 'next/router';
import GoldmoonLogo from '@/src/assets/icons/\bgoldmoon_logo';

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
            <Box sx={{ textAlign: 'center', mt: 2.5 }}>
              <GoldmoonLogo
                width={201}
                height={20}
                onClick={() => {
                  router.push('/main');
                }}
              />
            </Box>
          </>
        }
        content={
          <Box
            sx={{
              pt: 7,
              px: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ height: '100%' }}>
              <h1>출석, 회비납부 페이지</h1>
            </Box>
          </Box>
        }
      />
    )
  );
};

export default IndexPage;
