// import { NextPage } from 'next';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';

import { useEffect, useState } from 'react';

import _ from 'lodash';

import { useRouter } from 'next/router';
import AppHeader from '@/src/components/Header';
import { FirstStep } from '@/src/components/organize/FirstStep';

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
            <AppHeader onPrev={() => router.push('/main')} onPrevText={'팀짜기'} />
          </>
        }
        content={
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            {/*  */}
            <FirstStep />
            {/*  */}
          </Box>
        }
      />
    )
  );
};

export default IndexPage;
